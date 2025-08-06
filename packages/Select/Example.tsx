import React, { useState } from 'react';
import Select from '.';
import Tag from '../Tag';
import CodeOperationContainer from '../../example/components/CodeOperationContainer';
import ComponentContentLayout from '../../example/components/ComponentContentLayout';
import ComponentPropsTable from '../../example/components/ComponentPropsTable';
import ComponentSectionLayout from '../../example/components/ComponentSectionLayout';
import Link from '../Link';

export default function SelectExample() {
  const [activeTab, setActiveTab] = useState<string>('examples');
  const [selectedValues, setSelectedValues] = useState<(string | number)[]>([]);
  const [customSelectedValues, setCustomSelectedValues] = useState<(string | number)[]>([]);
  const [checkboxSelectedValues, setCheckboxSelectedValues] = useState<(string | number)[]>([]);
  const [customDisplaySelectedValues, setCustomDisplaySelectedValues] = useState<(string | number)[]>([]);
  const [singleCustomDisplayValue, setSingleCustomDisplayValue] = useState<string | number>('');
  const [selectValue, setSelectValue] = useState<string>("");

  const handleMultipleChange = (item: any, items?: any[]) => {
    console.log('多选变化:', item, items);
    if (items) {
      setSelectedValues(items.map(item => item.key));
    }
  };

  const handleCustomMultipleChange = (item: any, items?: any[]) => {
    console.log('自定义多选变化:', item, items);
    if (items) {
      setCustomSelectedValues(items.map(item => item.key));
    }
  };

  const handleCheckboxMultipleChange = (item: any, items?: any[]) => {
    console.log('带checkbox多选变化:', item, items);
    if (items) {
      setCheckboxSelectedValues(items.map(item => item.key));
    }
  };

  const handleCustomDisplayChange = (item: any, items?: any[]) => {
    console.log('自定义显示多选变化:', item, items);
    if (items) {
      setCustomDisplaySelectedValues(items.map(item => item.key));
    }
  };

  const handleSingleCustomDisplayChange = (item: any) => {
    console.log('自定义显示单选变化:', item);
    setSingleCustomDisplayValue(item.key);
  };

  const selectProps = [
    {
      name: "data",
      type: <><Link anchor="SelectItemType-API">SelectItemType</Link>[]</>,
      desc: "数据",
    },
    {
      name: "placeholder",
      type: "string",
      desc: "占位符",
      default: "请选择",
    },
    { name: "selected", type: "string | number", desc: "当前选中项" },
    {
      name: "type",
      type: "SelectType (border | background | transparent | text)",
      desc: "选择器样式",
      default: "border",
    },
    { name: "width", type: "number | string", desc: "宽度" },
    { name: "tip", type: "Element", desc: "选框提示内容" },
    { name: "tipProps", type: "PopOverProps", desc: "选框提示内容配置" },
    {
      name: "disabled",
      type: "boolean",
      desc: "是否整体禁用",
      default: "false",
    },
    {
      name: "onChange",
      type: <>(item: <Link anchor="SelectItemType-API">SelectItemType</Link>){' =>'} void</>,
      desc: "选择事件",
    },
  ];

  const selectTypes = [
    {
      name: "SelectItemType",
      data: [
        { name: "key", type: "string", desc: "选项唯一标识" },
        { name: "label", type: "string", desc: "选项标签" },
      ],
    },
  ];

  const selectData = [
    { key: "1", label: "选项1" },
    { key: "2", label: "选项2" },
    { key: "3", label: "选项3" },
    { key: "4", label: "选项4" },
    { key: "5", label: "选项5" },
  ];

  const industryData = [
    { key: "1", label: "电商" },
    { key: "2", label: "游戏" },
    { key: "3", label: "教育" },
    { key: "4", label: "金融" },
    { key: "5", label: "医疗" },
    { key: "6", label: "其他" },
  ];

  return (
    <ComponentContentLayout
      zh='选择器'
      en='Select'
      desc='LandDesign 的选择器组件，支持单选和多选模式，提供丰富的自定义显示和交互功能。'
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >

      {/* 标签页内容 */}
      {activeTab === 'examples' && (
        <>
          {/* 基础用法 */}
          <ComponentSectionLayout
            title='基础用法'
            id='select-normal'
            description='Select 组件的基础用法，支持单选模式。'
          >
            <CodeOperationContainer>
              <Select
                data={selectData}
                selected={selectValue}
                onChange={(item) => {
                  console.log("item", item);
                  setSelectValue(item.key);
                }}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 多选框 */}
          <ComponentSectionLayout
            title='多选框'
            id='select-multiple'
            description='通过 multiple 属性可以启用多选模式。'
          >
            <CodeOperationContainer>
              <Select
                data={selectData}
                multiple
                selectedValues={selectedValues}
                onChange={handleMultipleChange}
              />
              <Select
                data={selectData}
                multiple
                selectedValues={customSelectedValues}
                separator=" | "
                maxDisplayCount={2}
                onChange={handleCustomMultipleChange}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 自定义显示内容 */}
          <ComponentSectionLayout
            title='自定义显示内容'
            id='select-multiple-custom-display'
            description='通过 customValueDisplay 属性可以自定义选择结果的显示方式。'
          >
            <CodeOperationContainer>
              <Select
                data={industryData}
                selected={singleCustomDisplayValue}
                onChange={handleSingleCustomDisplayChange}
                customValueDisplay={({ items, placeholder }) => {
                  if (items.length === 0) {
                    return <div className='flex items-center gap-4'>
                      <span className="fs-12 color-gray-4">行业：</span>
                      <span style={{ color: "#999" }}>{placeholder}</span>
                    </div>;
                  }
                  return (
                    <div
                      style={{ display: "flex", alignItems: "center", gap: "4px" }}
                    >
                      <span className="fs-12 color-gray-4">行业：</span>
                      <span>{items?.length > 0 ? items[0]?.label : placeholder}</span>
                    </div>
                  );
                }}
              />
              <Select
                data={selectData}
                multiple
                selectedValues={customDisplaySelectedValues}
                onChange={handleCustomDisplayChange}
                customValueDisplay={({ items, placeholder }) => {
                  if (items.length === 0) {
                    return <span style={{ color: "#999" }}>{placeholder}</span>;
                  }

                  return (
                    <div className="flex items-center gap-4">
                      {items.slice(0, 3).map((item) => (
                        <Tag
                          key={item.key}
                          style={{
                            background: "#e6f7ff",
                            border: "1px solid var(--color-primary-3)",
                            borderRadius: "4px",
                            padding: "2px 8px",
                            fontSize: "12px",
                            color: "var(--color-primary-6)",
                          }}
                        >
                          {item.label}
                        </Tag>
                      ))}
                      {items.length > 3 && (
                        <span style={{ color: "#999", fontSize: "12px" }}>
                          +{items.length - 3}个
                        </span>
                      )}
                    </div>
                  );
                }}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 带checkbox的多选框 */}
          <ComponentSectionLayout
            title='带checkbox的多选框'
            id='select-multiple-checkbox'
            description='通过 showCheckbox 属性可以在多选模式下显示复选框。'
          >
            <CodeOperationContainer>
              <Select
                data={selectData}
                multiple
                showCheckbox
                selectedValues={checkboxSelectedValues}
                onChange={handleCheckboxMultipleChange}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 包含提示内容 */}
          <ComponentSectionLayout
            title='包含提示内容'
            id='select-tip'
            description='通过 tip 属性可以为选择器添加提示内容。'
          >
            <CodeOperationContainer>
              <Select
                data={[
                  { key: "1", label: "1" },
                  { key: "2", label: "5" },
                  { key: "3", label: "10", disabled: true, tip: "此选项暂无法选择" },
                ]}
                tip="选框提示内容"
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 选项包含提示内容 */}
          <ComponentSectionLayout
            title='选项包含提示内容'
            id='select-item-tip'
            description='选项可以包含提示内容，支持整个选项和选项后置图标两种展示形式。'
          >
            <CodeOperationContainer>
              <Select
                data={[
                  { key: "1", label: "选项1", tip: "提示1" },
                  { key: "2", label: "选项2", tip: "提示2" },
                  { key: "3", label: "选项3" },
                ]}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 选框整体禁用 */}
          <ComponentSectionLayout
            title='选框整体禁用'
            id='select-disabled'
            description='通过 disabled 属性可以禁用整个选择器。'
          >
            <CodeOperationContainer>
              {['border', 'background', 'text', 'transparent'].map(type => (
                <Select
                  key={type}
                  data={selectData}
                  type={type as any}
                  disabled
                />
              ))}
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 选项禁用 */}
          <ComponentSectionLayout
            title='选项禁用'
            id='select-item-disabled'
            description='可以单独禁用某些选项，禁用后该选项不可选择。'
          >
            <CodeOperationContainer>
              <Select
                data={[
                  { key: "1", label: "选项1" },
                  { key: "2", label: "选项2" },
                  {
                    key: "3",
                    label: "选项3",
                    disabled: true,
                    tip: "此选项暂无法选择",
                  },
                ]}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 设置不同样式 */}
          <ComponentSectionLayout
            title='设置不同样式'
            id='select-type'
            description='Select 支持 4 种不同的样式类型，适应不同的使用场景。'
          >
            <CodeOperationContainer>
              {['border', 'background', 'text', 'transparent'].map(type => (
                <Select
                  key={type}
                  data={selectData}
                  type={type as any}
                />
              ))}
            </CodeOperationContainer>
          </ComponentSectionLayout>
        </>
      )}

      {activeTab === 'props' && (
        <div className='flex flex-col gap-12'>
          <ComponentPropsTable props={selectProps} />
          {selectTypes?.map(i => <div key={i.name} className='flex flex-col gap-12' id={`${i.name}-API`}>
            <h3 className='text-sm font-bold'>{i.name}</h3>
            <ComponentPropsTable props={i.data as any} />
          </div>)}
        </div>
      )}
    </ComponentContentLayout>
  );
}
