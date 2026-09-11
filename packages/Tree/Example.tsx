import React, { useState, useMemo } from 'react';
import Tree from '.';
import { TreeOption } from './props';
import CodeOperationContainer from '../../example/components/CodeOperationContainer';
import ComponentContentLayout from '../../example/components/ComponentContentLayout';
import ComponentPropsTable from '../../example/components/ComponentPropsTable';
import ComponentSectionLayout from '../../example/components/ComponentSectionLayout';
import Link from '../Link';

export default function TreeExample() {
  const [activeTab, setActiveTab] = useState<string>('examples');
  const [singleValue, setSingleValue] = useState<string>();
  const [multiValues, setMultiValues] = useState<string[]>([]);

  const treeData = useMemo<TreeOption[]>(() => [
    {
      key: 'root', label: '全部', children: [
        {
          key: 'shenzhen', label: '深圳市', children: [
            { key: 'nanshan', label: '南山区' },
            { key: 'futian', label: '福田区' },
            { key: 'baoan', label: '宝安区' },
          ]
        },
        {
          key: 'chongqing', label: '重庆市', children: [
            { key: 'yubei', label: '渝北区' },
            { key: 'jiangbei', label: '江北区' },
          ]
        },
      ]
    },
  ], []);

  const treeDataWithDisabled = useMemo<TreeOption[]>(() => [
    {
      key: 'root', label: '全部', children: [
        {
          key: 'shenzhen', label: '深圳市', children: [
            { key: 'nanshan', label: '南山区' },
            { key: 'futian', label: '福田区（禁用）', disabled: true },
            { key: 'baoan', label: '宝安区' },
          ]
        },
      ]
    },
  ], []);

  const treeProps = [
    { name: "treeData", type: <><Link anchor="TreeOption-API">TreeOption</Link>[]</>, desc: "树形数据" },
    { name: "multiple", type: "boolean", desc: "是否多选", default: "false" },
    { name: "value", type: "string", desc: "当前选中值（单选，受控）" },
    { name: "values", type: "string[]", desc: "当前选中值数组（多选，受控）" },
    { name: "expandedKeys", type: "string[]", desc: "展开的节点 key（受控）" },
    { name: "defaultExpandedKeys", type: "string[]", desc: "默认展开的节点 key" },
    { name: "checkable", type: "boolean", desc: "是否显示复选框（多选时默认显示）" },
    { name: "selectable", type: "boolean", desc: "是否允许点击节点选中", default: "true" },
    { name: "expandAction", type: "false | 'click' | 'doubleClick'", desc: "节点展开触发方式：false 仅箭头 / click 点整行 / doubleClick 双击", default: "false" },
    { name: "indent", type: "number", desc: "缩进像素值", default: "16" },
    { name: "disabled", type: "boolean", desc: "整体禁用", default: "false" },
    { name: "renderNode", type: "function", desc: "自定义节点渲染" },
    { name: "onExpand", type: "(keys: string[]) => void", desc: "展开/收起回调" },
    { name: "onChange", type: "(value, option, selectedOptions?) => void", desc: "选中变化回调" },
  ];

  const TreeTypes = [
    {
      name: "TreeOption",
      data: [
        { name: "key", type: "string", desc: "唯一标识" },
        { name: "label", type: "ReactNode", desc: "节点显示内容" },
        { name: "disabled", type: "boolean", desc: "是否禁用", default: "false" },
        { name: "children", type: "TreeOption[]", desc: "子节点" },
      ],
    },
  ];

  return (
    <ComponentContentLayout
      zh='树'
      en='Tree'
      desc='LandDesign 的内联缩进树组件，常驻展示层级数据，支持单选、多选（复选框）与父子联动。'
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >
      {activeTab === 'examples' && (
        <>
          <ComponentSectionLayout
            title='单选树'
            id='tree-single'
            description='点击节点即可选中，常用于内联层级导航。'
          >
            <CodeOperationContainer>
              <Tree
                treeData={treeData}
                defaultExpandedKeys={['root', 'shenzhen']}
                value={singleValue}
                onChange={(v) => setSingleValue(v as string)}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          <ComponentSectionLayout
            title='多选树'
            id='tree-multiple'
            description='开启 multiple 后显示复选框，支持父子节点联动。'
          >
            <CodeOperationContainer>
              <Tree
                treeData={treeData}
                multiple
                defaultExpandedKeys={['root']}
                values={multiValues}
                onChange={(v) => setMultiValues(v as string[])}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          <ComponentSectionLayout
            title='点击节点展开'
            id='tree-expand-action'
            description='expandAction="click" 时点击节点任意区域即可展开/收起，无需精确点击箭头；默认 false 仅箭头可展开。'
          >
            <CodeOperationContainer>
              <Tree
                treeData={treeData}
                defaultExpandedKeys={['root']}
                expandAction="click"
                value={singleValue}
                onChange={(v) => setSingleValue(v as string)}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          <ComponentSectionLayout
            title='选项禁用'
            id='tree-disabled'
            description='禁用节点不可选择，但仍可展开查看其子节点。'
          >
            <CodeOperationContainer>
              <Tree
                treeData={treeDataWithDisabled}
                multiple
                defaultExpandedKeys={['root']}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          <ComponentSectionLayout
            title='自定义节点渲染'
            id='tree-custom'
            description='通过 renderNode 自定义每个节点的展示。'
          >
            <CodeOperationContainer>
              <Tree
                treeData={treeData}
                defaultExpandedKeys={['root']}
                renderNode={(item) => <span>📁 {item.label}</span>}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>
        </>
      )}

      {activeTab === 'props' && (
        <div className='flex flex-col gap-3'>
          <ComponentPropsTable props={treeProps} />
          {TreeTypes?.map(i => (
            <div key={i.name} className='flex flex-col gap-3' id={`${i.name}-API`}>
              <h3 className='text-sm font-bold'>{i.name}</h3>
              <ComponentPropsTable props={i.data as any} />
            </div>
          ))}
        </div>
      )}
    </ComponentContentLayout>
  );
}
