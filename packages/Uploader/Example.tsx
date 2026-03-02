import React, { useState } from "react";
import Uploader from ".";
import { UploadFile } from "./props";
import Icon from "../Icon";
import CodeOperationContainer from "../../example/components/CodeOperationContainer";
import ComponentContentLayout from "../../example/components/ComponentContentLayout";
import ComponentPropsTable from "../../example/components/ComponentPropsTable";
import ComponentSectionLayout from "../../example/components/ComponentSectionLayout";

export default function UploaderExample() {
  const [activeTab, setActiveTab] = useState<string>("examples");
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [avatarUrl, setAvatarUrl] = useState<string | undefined>();

  const uploaderProps = [
    { name: "variant", type: '"dragger" | "button" | "picture" | "avatar"', desc: "上传区域变体", default: '"dragger"' },
    { name: "disabled", type: "boolean", desc: "是否禁用", default: "false" },
    { name: "readOnly", type: "boolean", desc: "是否只读", default: "false" },
    { name: "accept", type: "string", desc: "接受的文件类型", default: "-" },
    { name: "multiple", type: "boolean", desc: "是否支持多文件", default: "false" },
    { name: "directory", type: "boolean", desc: "是否支持目录上传", default: "false" },
    { name: "maxCount", type: "number", desc: "最大文件数量", default: "-" },
    { name: "maxSize", type: "number", desc: "单文件最大大小（字节）", default: "-" },
    { name: "action", type: "string", desc: "上传地址（不传则本地预览）", default: "-" },
    { name: "draggable", type: "boolean", desc: "是否支持拖拽上传", default: "true" },
    { name: "title", type: "ReactNode", desc: "上传区域标题", default: "-" },
    { name: "hint", type: "ReactNode", desc: "上传提示文案", default: "-" },
    { name: "showFileList", type: "boolean", desc: "是否显示文件列表", default: "true" },
    { name: "listType", type: '"text" | "picture" | "picture-card"', desc: "文件列表类型", default: '"text"' },
    { name: "fileList", type: "UploadFile[]", desc: "文件列表（受控）", default: "-" },
    { name: "defaultFileList", type: "UploadFile[]", desc: "默认文件列表", default: "[]" },
    { name: "onChange", type: "(file, fileList) => void", desc: "文件状态变化回调", default: "-" },
    { name: "beforeUpload", type: "(file, fileList) => boolean | Promise", desc: "上传前回调", default: "-" },
    { name: "onRemove", type: "(file) => void | boolean", desc: "文件删除回调", default: "-" },
    { name: "onPreview", type: "(file) => void", desc: "文件预览回调", default: "-" },
  ];

  const handleChange = (file: UploadFile, newFileList: UploadFile[]) => {
    setFileList(newFileList);
    console.log("File changed:", file, newFileList);
  };

  const handlePreview = (file: UploadFile) => {
    if (file.url) {
      window.open(file.url, "_blank");
    }
  };

  return (
    <ComponentContentLayout
      zh="上传"
      en="Uploader"
      desc="LandDesign 的上传组件，支持拖拽上传、文件列表、多种变体、上传进度等功能。"
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >
      {activeTab === "examples" && (
        <>
          {/* 基础用法 */}
          <ComponentSectionLayout
            title="基础用法"
            id="uploader-basic"
            description="默认的拖拽上传区域，支持点击和拖拽上传文件。"
          >
            <CodeOperationContainer>
              <Uploader
                title="点击或拖拽文件到此区域上传"
                hint="支持单个文件上传"
                onChange={handleChange}
                onPreview={handlePreview}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 受控模式 */}
          <ComponentSectionLayout
            title="受控模式"
            id="uploader-controlled"
            description="通过 fileList 和 onChange 实现受控模式。"
          >
            <CodeOperationContainer column>
              <Uploader
                title="受控上传"
                hint="文件列表由外部状态管理"
                fileList={fileList}
                onChange={handleChange}
                onPreview={handlePreview}
              />
              <div className="text-sm text-secondary">
                已上传 {fileList.length} 个文件
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 多文件上传 */}
          <ComponentSectionLayout
            title="多文件上传"
            id="uploader-multiple"
            description="设置 multiple 支持同时选择多个文件。"
          >
            <CodeOperationContainer>
              <Uploader
                title="多文件上传"
                hint="可同时选择多个文件，最多上传 5 个"
                multiple
                maxCount={5}
                onChange={(file, list) => console.log("多文件:", list)}
                onExceed={(files) => console.log("超出限制:", files)}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 文件类型限制 */}
          <ComponentSectionLayout
            title="文件类型限制"
            id="uploader-accept"
            description="通过 accept 属性限制上传文件类型。"
          >
            <CodeOperationContainer column>
              <Uploader
                title="上传图片"
                hint="只支持 JPG、PNG、GIF 格式"
                accept="image/*"
                listType="picture"
              />
              <Uploader
                title="上传文档"
                hint="只支持 PDF、Word、Excel 格式"
                accept=".pdf,.doc,.docx,.xls,.xlsx"
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 文件大小限制 */}
          <ComponentSectionLayout
            title="文件大小限制"
            id="uploader-maxsize"
            description="通过 maxSize 限制单个文件大小。"
          >
            <CodeOperationContainer>
              <Uploader
                title="上传文件"
                hint="单个文件大小不超过 2MB"
                maxSize={2 * 1024 * 1024}
                beforeUpload={(file) => {
                  if (file.size > 2 * 1024 * 1024) {
                    alert("文件大小不能超过 2MB");
                    return false;
                  }
                  return true;
                }}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 按钮变体 */}
          <ComponentSectionLayout
            title="按钮变体"
            id="uploader-button"
            description="使用 variant='button' 显示为按钮样式。"
          >
            <CodeOperationContainer>
              <Uploader
                variant="button"
                title="选择文件"
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 图片墙变体 */}
          <ComponentSectionLayout
            title="图片墙变体"
            id="uploader-picture"
            description="使用 variant='picture' 和 listType='picture-card' 展示图片墙。"
          >
            <CodeOperationContainer>
              <Uploader
                variant="picture"
                accept="image/*"
                listType="picture-card"
                multiple
                maxCount={9}
                onPreview={handlePreview}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 头像上传 */}
          <ComponentSectionLayout
            title="头像上传"
            id="uploader-avatar"
            description="使用 variant='avatar' 实现头像上传。"
          >
            <CodeOperationContainer>
              <Uploader
                variant="avatar"
                accept="image/*"
                showFileList={false}
                onChange={(file) => {
                  if (file.status === "done" && file.url) {
                    setAvatarUrl(file.url);
                  }
                }}
              >
                {avatarUrl ? (
                  <img
                    src={avatarUrl}
                    alt="avatar"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                ) : (
                  <div className="flex flex-col items-center gap-2">
                    <Icon name="avatar" size={32} />
                    <span className="text-xs text-secondary">上传头像</span>
                  </div>
                )}
              </Uploader>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 自定义上传内容 */}
          <ComponentSectionLayout
            title="自定义上传内容"
            id="uploader-custom"
            description="通过 children 自定义上传区域内容。"
          >
            <CodeOperationContainer>
              <Uploader
                accept="image/*"
                height="180px"
              >
                <div className="flex flex-col items-center gap-3">
                  <Icon name="image" size={32} />
                  <div className="text-lg font-medium">拖拽图片到这里</div>
                  <div className="text-sm text-secondary">或点击选择图片文件</div>
                </div>
              </Uploader>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 不同列表类型 */}
          <ComponentSectionLayout
            title="文件列表类型"
            id="uploader-listtype"
            description="listType 支持 text、picture、picture-card 三种类型。"
          >
            <CodeOperationContainer column>
              <div>
                <div className="text-sm font-medium mb-2">text 类型</div>
                <Uploader
                  title="文本列表"
                  hint="默认的文件列表样式"
                  listType="text"
                  multiple
                />
              </div>
              <div>
                <div className="text-sm font-medium mb-2">picture 类型</div>
                <Uploader
                  title="图片列表"
                  hint="带缩略图的文件列表"
                  listType="picture"
                  accept="image/*"
                  multiple
                />
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 禁用状态 */}
          <ComponentSectionLayout
            title="禁用和只读"
            id="uploader-disabled"
            description="disabled 完全禁用，readOnly 仅展示文件列表。"
          >
            <CodeOperationContainer column>
              <Uploader
                title="禁用状态"
                hint="无法上传文件"
                disabled
              />
              <Uploader
                title="只读状态"
                hint="仅展示文件列表"
                readOnly
                defaultFileList={[
                  {
                    uid: "1",
                    name: "example.png",
                    size: 1024 * 100,
                    type: "image/png",
                    status: "done",
                    url: "https://via.placeholder.com/100",
                  },
                ]}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>
        </>
      )}

      {activeTab === "props" && (
        <div className="flex flex-col gap-12">
          <ComponentPropsTable props={uploaderProps} />
        </div>
      )}
    </ComponentContentLayout>
  );
}
