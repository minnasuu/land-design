import React, { useEffect, useRef, useState } from "react";
import Icon from "../Icon";
import { UploaderProps } from "./props";
import './index.scss';

const Uploader: React.FC<UploaderProps> = ({
  desc,
  fileType,
  onUpload,
  children,
  width = "100%",
  height = "100px",
  style,
  className = "",
  innerClassName = "",
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [url, setUrl] = useState<string | ArrayBuffer | null>();
  const [file, setFile] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: any, file: any) => {
    e.preventDefault();
    setLoading(true);
    if (file) {
      setFile(file);
      let reader = new FileReader();
      reader.readAsDataURL(file);
      setUrl(URL.createObjectURL(file));
      setLoading(false);
    }
  };
  useEffect(() => {
    onUpload?.(url, file);
  }, [url]);
  const [drag, setDrag] = useState<boolean>(false);
  return (
    <label
      className={`land-uploader ${drag ? "drag" : ""} ${className}`}
      style={{
        width,
        height,
        ...style,
      }}
      onDragOver={(e: any) => {
        setDrag(true);
        e.preventDefault();
      }}
      onDrop={(e: any) => {
        setDrag(false);
        handleChange(e, e.dataTransfer.files[0]);
      }}
      onDragLeave={() => setDrag(false)}
    >
      <input
        ref={fileInputRef}
        type="file"
        accept={fileType}
        className={`land-uploader-input ${innerClassName}`}
        onChange={(e: any) => {
          handleChange(e, e.target.files[0]);
        }}
      />
      {children ? (
        children
      ) : loading ? (
        <>上传中</>
      ) : (
        drag ? <div className="land-uploader-desc">释放即可上传</div> : <>
          <div className="land-uploader-icon">
            <Icon name="upload" />
          </div>
          {desc && (<div className="land-uploader-desc">{desc}</div>
          )}
        </>
      )}
    </label>
  );
};

export default Uploader;
