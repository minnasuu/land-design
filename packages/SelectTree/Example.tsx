import React, { useState, useMemo } from 'react';
import SelectTree from '.';
import { SelectTreeItemType } from './props';
import Tag from '../Tag';
import CodeOperationContainer from '../../example/components/CodeOperationContainer';
import ComponentContentLayout from '../../example/components/ComponentContentLayout';
import ComponentPropsTable from '../../example/components/ComponentPropsTable';
import ComponentSectionLayout from '../../example/components/ComponentSectionLayout';
import Link from '../Link';

export default function SelectTreeExample() {
  const [activeTab, setActiveTab] = useState<string>('examples');
  const [selected, setSelected] = useState<SelectTreeItemType>();
  const [selectedValues, setSelectedValues] = useState<SelectTreeItemType[]>([]);
  const [customDisplaySelectedValues, setCustomDisplaySelectedValues] = useState<SelectTreeItemType[]>([]);
  const [singleCustomDisplayValue, setSingleCustomDisplayValue] = useState<SelectTreeItemType>();

  const treeData = useMemo(() => [
    { key: 'all', label: '全部' },
    {
      key: 'shenzhen',
      label: '深圳市',
      children: [
        {
          key: 'nanshan', label: '南山区', children: [
            { key: 'nanshan1', label: '桃源' },
            { key: 'nanshan2', label: '四海' },
            { key: 'nanshan3', label: '蛇口' },
            { key: 'nanshan4', label: '后海' },
            { key: 'nanshan5', label: '前海' },
          ]
        },
        { key: 'futian', label: '福田区' },
        { key: 'baoan', label: '宝安区' },
        { key: 'longgang', label: '龙岗区' },
        { key: 'luohu', label: '罗湖区' },
      ]
    },
    {
      key: 'chongqing',
      label: '重庆市',
      children: [
        { key: 'yubei', label: '渝北区' },
        { key: 'jiangbei', label: '江北区' },
        { key: 'nanan', label: '南岸区' },
        { key: 'shapingba', label: '沙坪坝区' },
        { key: 'yuzhong', label: '渝中区' },
      ]
    },
    {
      key: 'beijing',
      label: '北京市',
      children: [
        { key: 'chaoyang', label: '朝阳区' },
        { key: 'haidian', label: '海淀区' },
        { key: 'dongcheng', label: '东城区' },
        { key: 'xicheng', label: '西城区' },
        { key: 'fengtai', label: '丰台区' },
      ]
    }
  ], []);

  const treeDataWithTips = useMemo(() => [
    { key: 'all', label: '全部' },
    {
      key: 'shenzhen',
      label: '深圳市',
      tip: '广东省省会城市',
      children: [
        {
          key: 'nanshan', label: '南山区', tip: '科技园区集中地', children: [
            { key: 'nanshan1', label: '桃源', tip: '居住区' },
            { key: 'nanshan2', label: '四海', tip: '商业区' },
            { key: 'nanshan3', label: '蛇口', tip: '港口区' },
            { key: 'nanshan4', label: '后海', tip: '金融区' },
            { key: 'nanshan5', label: '前海', tip: '自贸区' },
          ]
        },
        { key: 'futian', label: '福田区', tip: '行政中心' },
        { key: 'baoan', label: '宝安区', tip: '工业区' },
        { key: 'longgang', label: '龙岗区', tip: '制造业基地' },
        { key: 'luohu', label: '罗湖区', tip: '老城区' },
      ]
    },
    {
      key: 'chongqing',
      label: '重庆市',
      tip: '直辖市',
      children: [
        { key: 'yubei', label: '渝北区', tip: '新区' },
        { key: 'jiangbei', label: '江北区', tip: '商业区' },
        { key: 'nanan', label: '南岸区', tip: '居住区' },
        { key: 'shapingba', label: '沙坪坝区', tip: '教育区' },
        { key: 'yuzhong', label: '渝中区', tip: '市中心' },
      ]
    }
  ], []);

  const treeDataWithDisabled = useMemo(() => [
    { key: 'all', label: '全部' },
    {
      key: 'shenzhen',
      label: '深圳市',
      children: [
        {
          key: 'nanshan', label: '南山区', children: [
            { key: 'nanshan1', label: '桃源' },
            { key: 'nanshan2', label: '四海' },
            { key: 'nanshan3', label: '蛇口', disabled: true, tip: '此区域暂不可选择' },
            { key: 'nanshan4', label: '后海' },
            { key: 'nanshan5', label: '前海' },
          ]
        },
        { key: 'futian', label: '福田区' },
        { key: 'baoan', label: '宝安区' },
        { key: 'longgang', label: '龙岗区', disabled: true, tip: '此区域暂不可选择' },
        { key: 'luohu', label: '罗湖区' },
      ]
    },
    {
      key: 'chongqing',
      label: '重庆市',
      children: [
        { key: 'yubei', label: '渝北区' },
        { key: 'jiangbei', label: '江北区' },
        { key: 'nanan', label: '南岸区' },
        { key: 'shapingba', label: '沙坪坝区' },
        { key: 'yuzhong', label: '渝中区' },
      ]
    }
  ], []);

  const handleSingleChange = (selected: SelectTreeItemType) => {
    console.log('单选变化:', selected);
    setSelected(selected);
  };

  const handleMultipleChange = (selected: SelectTreeItemType[], item: SelectTreeItemType) => {
    console.log('多选变化:', selected, item);
    setSelectedValues(selected);
  };

  const handleCustomDisplayChange = (selected: SelectTreeItemType[], item: SelectTreeItemType) => {
    console.log('自定义显示多选变化:', selected, item);
    setCustomDisplaySelectedValues(selected);
  };

  const handleSingleCustomDisplayChange = (selected: SelectTreeItemType) => {
    console.log('自定义显示单选变化:', selected);
    setSingleCustomDisplayValue(selected);
  };

  const selectTreeProps = [
    {
      name: "data",
      type: <><Link anchor="SelectTreeItemType-API">SelectTreeItemType</Link>[]</>,
      desc: "数据",
    },
    {
      name: "placeholder",
      type: "string",
      desc: "占位符",
      default: "请选择",
    },
    {
      name: "selected",
      type: "SelectTreeItemType",
      desc: "当前选中项（单选模式）",
    },
    {
      name: "selectedValues",
      type: "SelectTreeItemType[]",
      desc: "当前选中的多个值（多选模式）",
    },
    {
      name: "multiple",
      type: "boolean",
      desc: "是否支持多选",
      default: "false",
    },
    {
      name: "separator",
      type: "string",
      desc: "多选模式下显示选中项时使用的分隔符",
      default: "逗号",
    },
    {
      name: "maxDisplayCount",
      type: "number",
      desc: "多选模式下最多显示的选中项个数",
      default: "无限制",
    },
    {
      name: "customValueDisplay",
      type: "function",
      desc: "自定义选择结果的展示内容",
    },
    {
      name: "type",
      type: "SelectTreeType (border | background | transparent | text)",
      desc: "选择器样式",
      default: "border",
    },
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
      type: <>(selectedValue: <Link anchor="SelectTreeItemType-API">SelectTreeItemType</Link> | <Link anchor="SelectTreeItemType-API">SelectTreeItemType</Link>[], item: <Link anchor="SelectTreeItemType-API">SelectTreeItemType</Link>){' =>'} void</>,
      desc: "选择事件",
    },
  ];
  const SelectTreeTypes = [
    {
      name: "SelectTreeItemType",
      data: [
        { name: "key", type: "string", desc: "唯一标识" },
        { name: "label", type: "string", desc: "选项值" },
        { name: "tip", type: "Element", desc: "选项提示内容" },
        { name: "iconTip", type: "Element", desc: "选项图标类型提示" },
        {
          name: "disabled",
          type: "boolean",
          desc: "是否禁用该选项",
          default: "false",
        },
        { name: "children", type: "SelectTreeItemType[]", desc: "子选项" },
      ],
    },
  ]

  return (
    <ComponentContentLayout
      zh='树形选择器'
      en='SelectTree'
      desc='LandDesign 的树形选择器组件，支持单选和多选模式，提供层级结构展示和父子节点联动功能。'
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >

      {/* 标签页内容 */}
      {activeTab === 'examples' && (
        <>
          {/* 基础用法 */}
          <ComponentSectionLayout
            title='基础用法'
            id='select-tree-normal'
            description='SelectTree 组件的基础用法，支持单选模式。'
          >
            <CodeOperationContainer>
              <SelectTree
                data={treeData}
                selected={selected}
                onChange={handleSingleChange}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 多选树形选择器 */}
          <ComponentSectionLayout
            title='多选树形选择器'
            id='select-tree-multiple'
            description='通过 multiple 属性可以启用多选模式，支持父子节点联动。'
          >
            <CodeOperationContainer>
              <SelectTree
                data={treeData}
                multiple
                selectedValues={selectedValues}
                onChange={handleMultipleChange}
                separator="、"
                maxDisplayCount={5}
              />
              <SelectTree
                data={treeData}
                multiple
                selectedValues={selectedValues}
                onChange={handleMultipleChange}
                separator=" | "
                maxDisplayCount={2}
              />
            </CodeOperationContainer>
            <div className="flex justify-center">
              <p style={{ fontSize: '12px', color: '#666' }}>
                提示：点击父节点的checkbox可以选中/取消选中该节点及其所有子节点
              </p>
            </div>
          </ComponentSectionLayout>

          {/* 自定义显示内容 */}
          <ComponentSectionLayout
            title='自定义显示内容'
            id='select-tree-custom-display'
            description='通过 customValueDisplay 属性可以自定义选择结果的显示方式。'
          >
            <CodeOperationContainer>
              <SelectTree
                data={treeData}
                selected={singleCustomDisplayValue}
                onChange={handleSingleCustomDisplayChange}
                customValueDisplay={({ items, placeholder }) => {
                  if (items.length === 0) {
                    return <span style={{ color: '#999' }}>{placeholder}</span>;
                  }
                  return (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <span className='fs-12 color-gray-4'>地区：</span>
                      <span>{items[0]?.label}</span>
                    </div>
                  );
                }}
              />
              <SelectTree
                data={treeData}
                multiple
                selectedValues={customDisplaySelectedValues}
                onChange={handleCustomDisplayChange}
                customValueDisplay={({ items, placeholder }) => {
                  if (items.length === 0) {
                    return <span style={{ color: '#999' }}>{placeholder}</span>;
                  }

                  return (
                    <div className='flex items-center gap-4'>
                      {items.slice(0, 3).map((item) => (
                        <Tag key={item.key} style={{ background: '#e6f7ff', border: '1px solid var(--color-primary-3)', borderRadius: '4px', padding: '2px 8px', fontSize: '12px', color: 'var(--color-primary-6)' }}>{item.label}</Tag>
                      ))}
                      {items.length > 3 && (
                        <span style={{ color: '#999', fontSize: '12px' }}>
                          +{items.length - 3}个
                        </span>
                      )}
                    </div>
                  );
                }}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 包含提示内容 */}
          <ComponentSectionLayout
            title='包含提示内容'
            id='select-tree-tip'
            description='通过 tip 属性可以为树形选择器添加提示内容。'
          >
            <CodeOperationContainer>
              <SelectTree
                data={treeDataWithTips}
                tip='树形选择器提示内容'
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 选项包含提示内容 */}
          <ComponentSectionLayout
            title='选项包含提示内容'
            id='select-tree-item-tip'
            description='选项可以包含提示内容，支持整个选项和选项后置图标两种展示形式。'
          >
            <CodeOperationContainer>
              <SelectTree data={treeDataWithTips} />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 树形选择器整体禁用 */}
          <ComponentSectionLayout
            title='树形选择器整体禁用'
            id='select-tree-disabled'
            description='通过 disabled 属性可以禁用整个树形选择器。'
          >
            <CodeOperationContainer>
              <SelectTree
                data={treeData}
                disabled
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 选项禁用 */}
          <ComponentSectionLayout
            title='选项禁用'
            id='select-tree-item-disabled'
            description='可以单独禁用某些选项，禁用后该选项不可选择。'
          >
            <CodeOperationContainer>
              <SelectTree data={treeDataWithDisabled} />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 设置不同样式 */}
          <ComponentSectionLayout
            title='设置不同样式'
            id='select-tree-type'
            description='SelectTree 支持 4 种不同的样式类型，适应不同的使用场景。'
          >
            <CodeOperationContainer>
              {['border', 'background', 'text', 'transparent'].map(type => (
                <SelectTree
                  key={type}
                  data={treeData}
                  selected={selected}
                  onChange={handleSingleChange}
                  type={type as any}
                />
              ))}
            </CodeOperationContainer>
          </ComponentSectionLayout>
        </>
      )}

      {activeTab === 'props' && (
        <div className='flex flex-col gap-12'>
          <ComponentPropsTable props={selectTreeProps} />
            {SelectTreeTypes?.map(i => <div key={i.name} className='flex flex-col gap-12' id={`${i.name}-API`}>
            <h3 className='text-sm font-bold'>{i.name}</h3>
            <ComponentPropsTable props={i.data as any} />
          </div>)}
        </div>
      )}
    </ComponentContentLayout>
  );
}
