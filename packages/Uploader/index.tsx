import React, { useCallback, useMemo, useRef, useState } from "react";
import Icon from "../Icon";
import {
  UploaderProps,
  UploadFile,
  defaultUploaderProps,
  fileToUploadFile,
  isAcceptFile,
  isImageFile,
  formatFileSize,
} from "./props";
import "./index.scss";

// ==================== Uploader 组件 ====================

const Uploader: React.FC<UploaderProps> = (props) => {
  const {
    children,
    variant = defaultUploaderProps.variant,
    disabled = defaultUploaderProps.disabled,
    readOnly = defaultUploaderProps.readOnly,
    name,
    accept,
    multiple = defaultUploaderProps.multiple,
    directory = defaultUploaderProps.directory,
    maxCount,
    maxSize,
    action,
    method = defaultUploaderProps.method,
    headers,
    data,
    withCredentials = defaultUploaderProps.withCredentials,
    draggable = defaultUploaderProps.draggable,
    title,
    hint,
    dropHint = defaultUploaderProps.dropHint,
    uploadingHint = defaultUploaderProps.uploadingHint,
    icon,
    showFileList = defaultUploaderProps.showFileList,
    listType = defaultUploaderProps.listType,
    showProgress = defaultUploaderProps.showProgress,
    showRemoveButton = defaultUploaderProps.showRemoveButton,
    showPreviewButton = defaultUploaderProps.showPreviewButton,
    style,
    className,
    width,
    height,
    dropzoneStyle,
    dropzoneClassName,
    fileListStyle,
    fileListClassName,
    fileList: controlledFileList,
    defaultFileList = [],
    onChange,
    beforeUpload,
    onProgress,
    onSuccess,
    onError,
    onRemove,
    onPreview,
    onDragEnter,
    onDragLeave,
    onDrop,
    onExceed,
  } = props;

  // ─── 状态管理 ───
  const [internalFileList, setInternalFileList] = useState<UploadFile[]>(defaultFileList);
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const dragCounter = useRef(0);

  // 受控/非受控模式
  const isControlled = controlledFileList !== undefined;
  const fileList = isControlled ? controlledFileList : internalFileList;

  // ─── 更新文件列表 ───
  const updateFileList = useCallback(
    (newFile: UploadFile, newList: UploadFile[]) => {
      if (!isControlled) {
        setInternalFileList(newList);
      }
      onChange?.(newFile, newList);
    },
    [isControlled, onChange]
  );

  // ─── 生成文件预览 URL ───
  const generatePreviewUrl = useCallback((file: File): Promise<string> => {
    return new Promise((resolve) => {
      if (isImageFile({ name: file.name, type: file.type } as UploadFile)) {
        const url = URL.createObjectURL(file);
        resolve(url);
      } else {
        resolve("");
      }
    });
  }, []);

  // ─── 上传单个文件 ───
  const uploadFile = useCallback(
    async (file: File, uploadFile: UploadFile) => {
      // 本地预览模式（无 action）
      if (!action) {
        const previewUrl = await generatePreviewUrl(file);
        const doneFile: UploadFile = {
          ...uploadFile,
          status: "done",
          percent: 100,
          url: previewUrl,
          thumbUrl: previewUrl,
        };

        const newList = fileList.map((f) => (f.uid === uploadFile.uid ? doneFile : f));
        updateFileList(doneFile, newList);
        onSuccess?.(null, doneFile);
        return;
      }

      // 实际上传模式
      const formData = new FormData();
      formData.append(name || "file", file);

      // 添加额外参数
      if (data) {
        const extraData = typeof data === "function" ? data(uploadFile) : data;
        Object.entries(extraData).forEach(([key, value]) => {
          if (value instanceof Blob) {
            formData.append(key, value);
          } else if (value !== null && value !== undefined) {
            formData.append(key, String(value));
          }
        });
      }

      const xhr = new XMLHttpRequest();
      xhr.open(method, action, true);

      // 设置 headers
      if (headers) {
        Object.entries(headers).forEach(([key, value]) => {
          xhr.setRequestHeader(key, value);
        });
      }

      xhr.withCredentials = withCredentials;

      // 上传进度
      xhr.upload.onprogress = (e) => {
        if (e.lengthComputable) {
          const percent = Math.round((e.loaded / e.total) * 100);
          const progressFile: UploadFile = { ...uploadFile, percent };
          const newList = fileList.map((f) => (f.uid === uploadFile.uid ? progressFile : f));
          updateFileList(progressFile, newList);
          onProgress?.(percent, progressFile);
        }
      };

      // 上传完成
      xhr.onload = async () => {
        const previewUrl = await generatePreviewUrl(file);
        if (xhr.status >= 200 && xhr.status < 300) {
          let response;
          try {
            response = JSON.parse(xhr.responseText);
          } catch {
            response = xhr.responseText;
          }

          const doneFile: UploadFile = {
            ...uploadFile,
            status: "done",
            percent: 100,
            url: previewUrl,
            thumbUrl: previewUrl,
            response,
          };

          const newList = fileList.map((f) => (f.uid === uploadFile.uid ? doneFile : f));
          updateFileList(doneFile, newList);
          onSuccess?.(response, doneFile);
        } else {
          const error = new Error(`Upload failed with status ${xhr.status}`);
          const errorFile: UploadFile = {
            ...uploadFile,
            status: "error",
            error: error.message,
            url: previewUrl,
            thumbUrl: previewUrl,
          };

          const newList = fileList.map((f) => (f.uid === uploadFile.uid ? errorFile : f));
          updateFileList(errorFile, newList);
          onError?.(error, errorFile);
        }
      };

      // 上传错误
      xhr.onerror = async () => {
        const previewUrl = await generatePreviewUrl(file);
        const error = new Error("Network error");
        const errorFile: UploadFile = {
          ...uploadFile,
          status: "error",
          error: error.message,
          url: previewUrl,
          thumbUrl: previewUrl,
        };

        const newList = fileList.map((f) => (f.uid === uploadFile.uid ? errorFile : f));
        updateFileList(errorFile, newList);
        onError?.(error, errorFile);
      };

      xhr.send(formData);
    },
    [
      action,
      name,
      method,
      headers,
      data,
      withCredentials,
      fileList,
      generatePreviewUrl,
      updateFileList,
      onProgress,
      onSuccess,
      onError,
    ]
  );

  // ─── 处理文件选择 ───
  const handleFiles = useCallback(
    async (files: FileList | File[]) => {
      if (disabled || readOnly) return;

      let fileArray = Array.from(files);

      // 检查文件数量限制
      if (maxCount) {
        const remainingSlots = maxCount - fileList.length;
        if (remainingSlots <= 0) {
          onExceed?.(fileArray);
          return;
        }
        if (fileArray.length > remainingSlots) {
          onExceed?.(fileArray.slice(remainingSlots));
          fileArray = fileArray.slice(0, remainingSlots);
        }
      }

      // 处理每个文件
      for (const file of fileArray) {
        // 检查文件类型
        if (!isAcceptFile(file, accept)) {
          continue;
        }

        // 检查文件大小
        if (maxSize && file.size > maxSize) {
          continue;
        }

        // beforeUpload 钩子
        if (beforeUpload) {
          try {
            const result = await beforeUpload(file, fileArray);
            if (result === false) {
              continue;
            }
            // 如果返回新文件，使用新文件
            if (result instanceof File) {
              const uploadFileObj = fileToUploadFile(result);
              const newList = [...fileList, uploadFileObj];
              updateFileList(uploadFileObj, newList);
              uploadFile(result, uploadFileObj);
              continue;
            }
          } catch {
            continue;
          }
        }

        // 创建上传文件对象
        const uploadFileObj = fileToUploadFile(file);
        const newList = [...fileList, uploadFileObj];
        updateFileList(uploadFileObj, newList);

        // 开始上传
        uploadFile(file, uploadFileObj);
      }
    },
    [
      disabled,
      readOnly,
      maxCount,
      fileList,
      accept,
      maxSize,
      beforeUpload,
      updateFileList,
      uploadFile,
      onExceed,
    ]
  );

  // ─── 点击上传 ───
  const handleClick = useCallback(() => {
    if (disabled || readOnly) return;
    inputRef.current?.click();
  }, [disabled, readOnly]);

  // ─── 文件输入变化 ───
  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files;
      if (files && files.length > 0) {
        handleFiles(files);
      }
      // 重置 input 以支持选择相同文件
      e.target.value = "";
    },
    [handleFiles]
  );

  // ─── 拖拽处理 ───
  const handleDragEnter = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();
      if (disabled || readOnly || !draggable) return;

      dragCounter.current++;
      if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
        setIsDragging(true);
        onDragEnter?.(e);
      }
    },
    [disabled, readOnly, draggable, onDragEnter]
  );

  const handleDragLeave = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();
      if (disabled || readOnly || !draggable) return;

      dragCounter.current--;
      if (dragCounter.current === 0) {
        setIsDragging(false);
        onDragLeave?.(e);
      }
    },
    [disabled, readOnly, draggable, onDragLeave]
  );

  const handleDragOver = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();
    },
    []
  );

  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();
      if (disabled || readOnly || !draggable) return;

      dragCounter.current = 0;
      setIsDragging(false);

      const files = e.dataTransfer.files;
      if (files && files.length > 0) {
        handleFiles(files);
        onDrop?.(e);
      }
    },
    [disabled, readOnly, draggable, handleFiles, onDrop]
  );

  // ─── 删除文件 ───
  const handleRemove = useCallback(
    async (file: UploadFile) => {
      if (disabled || readOnly) return;

      // onRemove 钩子
      if (onRemove) {
        const result = await onRemove(file);
        if (result === false) return;
      }

      // 释放 URL 对象
      if (file.url && file.url.startsWith("blob:")) {
        URL.revokeObjectURL(file.url);
      }

      const removedFile: UploadFile = { ...file, status: "removed" };
      const newList = fileList.filter((f) => f.uid !== file.uid);
      updateFileList(removedFile, newList);
    },
    [disabled, readOnly, fileList, updateFileList, onRemove]
  );

  // ─── 预览文件 ───
  const handlePreview = useCallback(
    (file: UploadFile) => {
      onPreview?.(file);
    },
    [onPreview]
  );

  // ─── 类名计算 ───
  const rootClassName = useMemo(() => {
    const classes = ["land-uploader"];
    if (variant) classes.push(`land-uploader--${variant}`);
    if (disabled) classes.push("land-uploader--disabled");
    if (readOnly) classes.push("land-uploader--readonly");
    if (className) classes.push(className);
    return classes.join(" ");
  }, [variant, disabled, readOnly, className]);

  const dropzoneClasses = useMemo(() => {
    const classes = ["land-uploader__dropzone"];
    if (isDragging) classes.push("land-uploader__dropzone--dragging");
    if (dropzoneClassName) classes.push(dropzoneClassName);
    return classes.join(" ");
  }, [isDragging, dropzoneClassName]);

  // ─── 样式计算 ───
  const rootStyle = useMemo(
    () => ({
      width: typeof width === "number" ? `${width}px` : width,
      ...style,
    }),
    [width, style]
  );

  const dropzoneStyles = useMemo(
    () => ({
      height: typeof height === "number" ? `${height}px` : height,
      ...dropzoneStyle,
    }),
    [height, dropzoneStyle]
  );

  // ─── 渲染上传图标 ───
  const renderIcon = useCallback(() => {
    if (icon) return icon;

    const iconName = variant === "avatar" ? "user" : "upload";
    return <Icon name={iconName} />;
  }, [icon, variant]);

  // ─── 渲染上传区域内容 ───
  const renderDropzoneContent = useCallback(() => {
    // 有 children 直接渲染
    if (children) return children;

    // 拖拽中
    if (isDragging) {
      return <div className="land-uploader__hint">{dropHint}</div>;
    }

    // 默认内容
    return (
      <>
        <div className="land-uploader__icon">{renderIcon()}</div>
        {title && <div className="land-uploader__title">{title}</div>}
        {hint && <div className="land-uploader__hint">{hint}</div>}
      </>
    );
  }, [children, isDragging, dropHint, title, hint, renderIcon]);

  // ─── 渲染文件项 ───
  const renderFileItem = useCallback(
    (file: UploadFile) => {
      const isImage = isImageFile(file);
      const showThumb = listType !== "text" && isImage && file.thumbUrl;

      return (
        <div
          key={file.uid}
          className={`land-uploader__file-item land-uploader__file-item--${file.status}`}
        >
          {/* 缩略图 */}
          {showThumb && (
            <div className="land-uploader__file-thumb">
              <img src={file.thumbUrl} alt={file.name} />
            </div>
          )}

          {/* 文件图标（非图片或无缩略图时显示） */}
          {!showThumb && (
            <div className="land-uploader__file-icon">
              <Icon name={isImage ? "image" : "file"} />
            </div>
          )}

          {/* 文件信息 */}
          <div className="land-uploader__file-info">
            <div className="land-uploader__file-name" title={file.name}>
              {file.name}
            </div>
            {file.status === "uploading" && showProgress && (
              <div className="land-uploader__file-progress">
                <div
                  className="land-uploader__file-progress-bar"
                  style={{ width: `${file.percent || 0}%` }}
                />
              </div>
            )}
            {file.status === "done" && (
              <div className="land-uploader__file-size">{formatFileSize(file.size)}</div>
            )}
            {file.status === "error" && (
              <div className="land-uploader__file-error">{file.error || "上传失败"}</div>
            )}
          </div>

          {/* 操作按钮 */}
          <div className="land-uploader__file-actions">
            {showPreviewButton && isImage && file.url && (
              <button
                type="button"
                className="land-uploader__file-action"
                onClick={() => handlePreview(file)}
                title="预览"
              >
                <Icon name="visible" size={14} />
              </button>
            )}
            {showRemoveButton && !readOnly && (
              <button
                type="button"
                className="land-uploader__file-action land-uploader__file-action--remove"
                onClick={() => handleRemove(file)}
                title="删除"
              >
                <Icon name="close" size={14} />
              </button>
            )}
          </div>
        </div>
      );
    },
    [listType, showProgress, showPreviewButton, showRemoveButton, readOnly, handlePreview, handleRemove]
  );

  // ─── 渲染文件列表 ───
  const renderFileList = useCallback(() => {
    if (!showFileList || fileList.length === 0) return null;

    return (
      <div
        className={`land-uploader__file-list land-uploader__file-list--${listType} ${
          fileListClassName || ""
        }`}
        style={fileListStyle}
      >
        {fileList.map(renderFileItem)}
      </div>
    );
  }, [showFileList, fileList, listType, fileListClassName, fileListStyle, renderFileItem]);

  // ─── 主渲染 ───
  return (
    <div className={rootClassName} style={rootStyle}>
      {/* 隐藏的文件输入 */}
      <input
        ref={inputRef}
        type="file"
        className="land-uploader__input"
        accept={accept}
        multiple={multiple}
        // @ts-ignore - directory 属性
        webkitdirectory={directory ? "" : undefined}
        onChange={handleInputChange}
        disabled={disabled}
      />

      {/* 上传区域 */}
      <div
        className={dropzoneClasses}
        style={dropzoneStyles}
        onClick={handleClick}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        role="button"
        tabIndex={disabled ? -1 : 0}
        aria-disabled={disabled}
      >
        {renderDropzoneContent()}
      </div>

      {/* 文件列表 */}
      {renderFileList()}
    </div>
  );
};

export default Uploader;
