import React, { useState } from 'react';
import Uploader from ".";
import CodeOperationContainer from '../../example/components/CodeOperationContainer';
import ComponentContentLayout from '../../example/components/ComponentContentLayout';
import ComponentPropsTable from '../../example/components/ComponentPropsTable';
import ComponentSectionLayout from '../../example/components/ComponentSectionLayout';

export default function UploaderExample() {
  const [activeTab, setActiveTab] = useState<string>('examples');
  const [url, setUrl] = useState<string | null>(null);
  const [url2, setUrl2] = useState<string | null>(null);

  const uploaderProps = [
    { name: "desc", type: "string", desc: "上传描述文字" },
    { name: "fileType", type: "string", desc: "文件类型", default: "image" },
    { name: "width", type: "number | string", desc: "宽度", default: "100%" },
    {
      name: "height",
      type: "number | string",
      desc: "高度",
      default: "100px",
    },
    {
      name: "onUpload",
      type: "(url: any, file: string) => void",
      desc: "上传事件",
    },
    { name: "innerClassName", type: "string", desc: "内部类名" },
    { name: "className", type: "string", desc: "自定义类名" },
    { name: "style", type: "CSSProperties", desc: "自定义样式" },
  ];

  return (
    <ComponentContentLayout
      zh='上传器'
      en='Uploader'
      desc='LandDesign 的上传组件，支持文件上传、拖拽上传、自定义描述等功能。'
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >

      {/* 标签页内容 */}
      {activeTab === 'examples' && (
        <>
          {/* 基础用法 */}
          <ComponentSectionLayout
            title='基础用法'
            id='uploader-normal'
            description='Uploader 组件的基础用法，支持点击和拖拽上传。'
          >
            <CodeOperationContainer>
              <Uploader
                onUpload={(url, file) => {
                  setUrl(url as string);
                }}
              >
                {url && (
                  <img
                    src={url}
                    alt="upload"
                    className='width-100 height-100 radius-8'
                    style={{ objectFit: 'scale-down' }}
                  />
                )}
              </Uploader>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 设置描述信息 */}
          <ComponentSectionLayout
            title='设置描述信息'
            id='uploader-desc'
            description='通过 desc 属性可以设置上传区域的描述文本。'
          >
            <CodeOperationContainer>
              <Uploader
                desc="点击或拖拽上传图片"
                onUpload={(url, file) => {
                  setUrl2(url as string);
                }}
              >
                {url2 && (
                  <img
                    src={url2}
                    alt="upload"
                    className='width-100 height-100 radius-8'
                    style={{ objectFit: 'scale-down' }}
                  />
                )}
              </Uploader>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 文件类型限制 */}
          <ComponentSectionLayout
            title='文件类型限制'
            id='uploader-file-type'
            description='通过 fileType 属性可以限制上传文件的类型。'
          >
            <CodeOperationContainer column>
              <Uploader
                desc="上传图片文件"
                fileType="image/*"
                onUpload={(url, file) => {
                  console.log('图片上传成功:', url);
                }}
              />
              <Uploader
                desc="上传PDF文件"
                fileType="application/pdf"
                onUpload={(url, file) => {
                  console.log('PDF上传成功:', url);
                }}
              />
              <Uploader
                desc="上传任意文件"
                onUpload={(url, file) => {
                  console.log('文件上传成功:', url);
                }}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 不同尺寸 */}
          <ComponentSectionLayout
            title='不同尺寸'
            id='uploader-size'
            description='通过 width 和 height 属性可以设置不同的尺寸。'
          >
            <CodeOperationContainer column>
              <Uploader
                desc="小尺寸上传器"
                width="120px"
                height="80px"
                onUpload={(url, file) => {
                  console.log('小尺寸上传成功:', url);
                }}
              />
              <Uploader
                desc="中等尺寸上传器"
                width="200px"
                height="120px"
                onUpload={(url, file) => {
                  console.log('中等尺寸上传成功:', url);
                }}
              />
              <Uploader
                desc="大尺寸上传器"
                width="300px"
                height="180px"
                onUpload={(url, file) => {
                  console.log('大尺寸上传成功:', url);
                }}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 自定义样式 */}
          <ComponentSectionLayout
            title='自定义样式'
            id='uploader-custom'
            description='通过 style 和 className 属性可以自定义上传器的样式。'
          >
            <CodeOperationContainer column>
              <Uploader
                desc="自定义边框样式"
                style={{
                  border: '2px dashed var(--color-primary)',
                  borderRadius: '8px',
                  backgroundColor: 'var(--color-primary-lighter)'
                }}
                onUpload={(url, file) => {
                  console.log('自定义样式上传成功:', url);
                }}
              />
              <Uploader
                desc="自定义背景样式"
                style={{
                  border: '1px solid var(--color-border-secondary)',
                  borderRadius: '12px',
                  backgroundColor: 'var(--color-bg-secondary)'
                }}
                onUpload={(url, file) => {
                  console.log('自定义背景上传成功:', url);
                }}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>
        </>
      )}

      {activeTab === 'props' && (
        <div className='flex flex-col gap-12'>
          <ComponentPropsTable props={uploaderProps} />
        </div>
      )}
    </ComponentContentLayout>
  );
}
