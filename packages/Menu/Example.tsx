import { useState } from 'react';
import Menu from '.';
import { ClickType } from './props';
import Icon from '../Icon';
import Button from '../Button';
import ComponentContentLayout from '../../example/components/ComponentContentLayout';
import ComponentSectionLayout from '../../example/components/ComponentSectionLayout';
import CodeOperationContainer from '../../example/components/CodeOperationContainer';
import ComponentPropsTable from '../../example/components/ComponentPropsTable';
import Link from '../Link';

const MenuItemLink = (
  <Link anchor="MenuItem-API">MenuItem</Link>
);

const menuProps = [
  { name: 'items', type: <>{MenuItemLink}[]</>, desc: '菜单数据' },
  { name: 'active', type: 'string', desc: '当前选中项的 key' },
  { name: 'direction', type: '"row" | "column"', default: '"row"', desc: '排列方向' },
  { name: 'titleDirection', type: '"row" | "column"', default: '"row"', desc: '标题排列方向' },
  { name: 'border', type: 'boolean', default: 'true', desc: '是否显示边框' },
  { name: 'titleDeputy', type: 'boolean', desc: '所有标题作为副级显示' },
  { name: 'scrollToView', type: 'boolean', default: 'false', desc: '选中项切换时滚动到视区' },
  { name: 'onChange', type: <>(item: {MenuItemLink}){' =>'} void</>, desc: '菜单项点击回调' },
  { name: 'onDropChange', type: <>(item: {MenuItemLink}, parentItem: {MenuItemLink}){' =>'} void</>, desc: '下拉菜单项点击回调' },
  { name: 'dropProps', type: 'MenuProps', desc: '子菜单透传属性' },
  { name: 'itemStyle', type: 'CSSProperties', desc: '菜单项自定义样式' },
  { name: 'itemClassName', type: 'string', desc: '菜单项自定义类名' },
  { name: 'style', type: 'CSSProperties', desc: '自定义样式' },
  { name: 'className', type: 'string', desc: '自定义类名' },
];

const menuItemTypes = [
  {
    name: 'MenuItem',
    data: [
      { name: 'key', type: 'string', desc: '唯一标识' },
      { name: 'label', type: 'string', desc: '标题文本' },
      { name: 'path', type: 'string', desc: '路由路径' },
      { name: 'subText', type: 'string', desc: '副标题' },
      { name: 'icon', type: 'string | ReactNode', desc: '前置图标' },
      { name: 'isNew', type: 'string | ReactNode | boolean', desc: '角标内容' },
      { name: 'href', type: 'string', desc: '外部链接地址' },
      { name: 'clickType', type: 'ClickType', desc: '点击行为类型' },
      { name: 'children', type: 'MenuItem[]', desc: '子菜单数据' },
      { name: 'disabled', type: 'boolean', desc: '是否禁用' },
    ],
  },
];

export default function MenuExample() {
  const [activeTab, setActiveTab] = useState<string>('examples');
  const [activeKey, setActiveKey] = useState('1');

  return (
    <ComponentContentLayout
      zh='菜单'
      en='Menu'
      desc='LandDesign 的菜单组件，用于导航和页面切换。支持水平、垂直布局，下拉菜单，图标等功能。'
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >
      {activeTab === 'examples' && (
        <div className='flex flex-col gap-24'>
          {/* 基本用法 */}
          <ComponentSectionLayout
            title='基本用法'
            id='menu-normal'
            description='Menu 组件的基础用法，支持水平布局和边框。'
          >
            <CodeOperationContainer>
              <Menu
                items={[
                  { key: '1', label: '首页', clickType: ClickType.SELF },
                  { key: '2', label: '产品中心', clickType: ClickType.SELF },
                  { key: '3', label: '关于我们', clickType: ClickType.SELF },
                  { key: '4', label: '联系我们', clickType: ClickType.SELF },
                  { key: '5', label: '产品中心', clickType: ClickType.SELF },
                ]}
                active="1"
                border
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 角标 */}
          <ComponentSectionLayout
            title='角标'
            id='menu-tag'
            description='通过 isNew 属性可以为菜单项添加角标标识。'
          >
            <CodeOperationContainer>
              <Menu
                items={[
                  { key: '1', label: '首页', clickType: ClickType.SELF },
                  { key: '2', label: '产品中心', clickType: ClickType.SELF, isNew: true },
                  { key: '3', label: '关于我们', clickType: ClickType.SELF, isNew: 'Hot' },
                  { key: '4', label: '联系我们', clickType: ClickType.SELF },
                  { key: '5', label: '产品中心', clickType: ClickType.SELF },
                ]}
                active="1"
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 不可点击 & 禁用 */}
          <ComponentSectionLayout
            title='不可点击 & 禁用'
            id='menu-disabled'
            description='通过 clickType 属性可以控制菜单项的点击行为。'
          >
            <CodeOperationContainer>
              <Menu
                items={[
                  { key: '1', label: '首页（可点击）', clickType: ClickType.SELF },
                  { key: '2', label: '产品中心（默认样式）', clickType: ClickType.SIMPLE },
                  { key: '3', label: '关于我们（禁用）', clickType: ClickType.DISABLED },
                ]}
                active="1"
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 包含下拉框 */}
          <ComponentSectionLayout
            title='包含下拉框'
            id='menu-drop'
            description='通过 children 属性可以为菜单项添加下拉选项。'
          >
            <CodeOperationContainer>
              <Menu
                items={[
                  {
                    key: '1',
                    label: '导航（导航项可点击，下拉项可点击）',
                    clickType: ClickType.SELF,
                    children: [
                      { key: '1', label: '选项1', clickType: ClickType.SELF },
                      { key: '2', label: '选项2', clickType: ClickType.SELF },
                      { key: '3', label: '选项3', clickType: ClickType.SELF },
                    ],
                  },
                  {
                    key: '2',
                    label: '导航（导航项不可点击，下拉项可点击）',
                    clickType: ClickType.SIMPLE,
                    children: [
                      { key: '1', label: '选项1', clickType: ClickType.SELF },
                      { key: '2', label: '选项2', clickType: ClickType.SELF },
                      { key: '3', label: '选项3', clickType: ClickType.SELF },
                    ],
                  },
                ]}
                active="1"
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 列向导航 */}
          <ComponentSectionLayout
            title='列向导航'
            id='menu-column'
            description='通过 direction="column" 可以创建垂直布局的菜单。'
          >
            <CodeOperationContainer>
              <Menu
                items={[
                  { key: '1', label: '导航1', clickType: ClickType.SELF },
                  { key: '2', label: '导航2', clickType: ClickType.SELF },
                  { key: '3', label: '导航3', clickType: ClickType.SELF },
                  { key: '4', label: '导航4', clickType: ClickType.SELF },
                  { key: '5', label: '导航5', clickType: ClickType.SELF },
                ]}
                active="3"
                direction="column"
                style={{ width: 132 }}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 定制导航样式 */}
          <ComponentSectionLayout
            title='定制导航样式'
            id='menu-theme'
            description='可以通过 style 属性自定义菜单的样式。'
          >
            <CodeOperationContainer>
              <div className='flex column items-center gap-24'>
                <Menu
                  items={[
                    { key: '1', label: '导航1', clickType: ClickType.SELF },
                    { key: '2', label: '导航2', clickType: ClickType.SELF },
                    { key: '3', label: '导航3', clickType: ClickType.SELF },
                  ]}
                  active="1"
                />
                <Menu
                  items={[
                    { key: '1', label: '导航1', clickType: ClickType.SELF },
                    { key: '2', label: '导航2', clickType: ClickType.SELF },
                    { key: '3', label: '导航3', clickType: ClickType.SELF },
                  ]}
                  active="1"
                  style={{
                    '--land-menu-item-hover-bg': 'var(--color-bg-1)',
                    '--land-menu-link-active-bg': 'var(--color-bg-1)',
                  } as React.CSSProperties}
                />
                <Menu
                  items={[
                    { key: '1', label: '导航1', clickType: ClickType.SELF },
                    { key: '2', label: '导航2', clickType: ClickType.SELF },
                    { key: '3', label: '导航3', clickType: ClickType.SELF },
                  ]}
                  active="1"
                  style={{
                    '--land-menu-link-active-color': 'var(--color-primary-6)',
                    '--land-menu-link-indicator-color': 'var(--color-primary-6)',
                  } as React.CSSProperties}
                />
                <Menu
                  items={[
                    { key: '1', label: '导航1', clickType: ClickType.SELF },
                    { key: '2', label: '导航2', clickType: ClickType.SELF },
                    { key: '3', label: '导航3', clickType: ClickType.SELF },
                  ]}
                  active="1"
                  style={{
                    '--land-menu-link-active-color': 'var(--color-primary-6)',
                    '--land-menu-link-active-bg': 'var(--color-primary-1)',
                    '--land-menu-link-indicator-color': 'var(--color-primary-6)',
                  } as React.CSSProperties}
                />
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 垂直样式定制 */}
          <ComponentSectionLayout
            title='垂直样式定制'
            id='menu-vertical-theme'
            description='垂直布局的菜单也可以自定义样式。'
          >
            <CodeOperationContainer>
              <div className='flex justify-center gap-32'>
                <Menu
                  items={[
                    { key: '1', label: '导航1', clickType: ClickType.SELF },
                    { key: '2', label: '导航2', clickType: ClickType.SELF },
                    { key: '3', label: '导航3', clickType: ClickType.SELF },
                  ]}
                  active="1"
                  direction="column"
                />
                <Menu
                  items={[
                    { key: '1', label: '导航1', clickType: ClickType.SELF },
                    { key: '2', label: '导航2', clickType: ClickType.SELF },
                    { key: '3', label: '导航3', clickType: ClickType.SELF },
                  ]}
                  active="2"
                  direction="column"
                  style={{
                    '--land-menu-item-hover-bg': 'var(--color-bg-1)',
                    '--land-menu-link-active-bg': 'var(--color-bg-1)',
                  } as React.CSSProperties}
                />
                <Menu
                  items={[
                    { key: '1', label: '导航1', clickType: ClickType.SELF },
                    { key: '2', label: '导航2', clickType: ClickType.SELF },
                    { key: '3', label: '导航3', clickType: ClickType.SELF },
                  ]}
                  active="3"
                  direction="column"
                  style={{
                    '--land-menu-link-active-color': 'var(--color-primary-6)',
                    '--land-menu-link-indicator-color': 'var(--color-primary-6)',
                  } as React.CSSProperties}
                />
                <Menu
                  items={[
                    { key: '1', label: '导航1', clickType: ClickType.SELF },
                    { key: '2', label: '导航2', clickType: ClickType.SELF },
                    { key: '3', label: '导航3', clickType: ClickType.SELF },
                  ]}
                  active="3"
                  direction="column"
                  style={{
                    '--land-menu-link-active-color': 'var(--color-primary-6)',
                    '--land-menu-link-active-bg': 'var(--color-primary-1)',
                    '--land-menu-link-indicator-color': 'var(--color-primary-6)',
                  } as React.CSSProperties}
                />
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 带图标导航 */}
          <ComponentSectionLayout
            title='带图标导航'
            id='menu-icon'
            description='通过 icon 属性可以为菜单项添加图标。'
          >
            <CodeOperationContainer>
              <Menu
                items={[
                  {
                    key: '1',
                    label: '首页',
                    icon: <Icon name='home' />,
                    clickType: ClickType.SELF,
                  },
                ]}
                active="1"
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 滚动到视区功能 */}
          <div className='flex gap-8 justify-center'>
            <Button onClick={() => setActiveKey('1')} variant="fill">选中第1项</Button>
            <Button onClick={() => setActiveKey('4')} variant="fill">选中第4项</Button>
            <Button onClick={() => setActiveKey('8')} variant="fill">选中第8项</Button>
          </div>
          <ComponentSectionLayout
            title='滚动到视区功能'
            id='menu-scrollToView'
            description='通过 scrollToView 属性可以在选中项切换时自动滚动到可见区域。'
          >
            <CodeOperationContainer>
              <div className="w-[300px] overflow-auto scrollbar-none">
                <Menu
                  items={[
                    { key: '1', label: '导航1', clickType: ClickType.SELF },
                    { key: '2', label: '导航2', clickType: ClickType.SELF },
                    { key: '3', label: '导航3', clickType: ClickType.SELF },
                    { key: '4', label: '导航4', clickType: ClickType.SELF },
                    { key: '5', label: '导航5', clickType: ClickType.SELF },
                    { key: '6', label: '导航6', clickType: ClickType.SELF },
                    { key: '7', label: '导航7', clickType: ClickType.SELF },
                    { key: '8', label: '导航8', clickType: ClickType.SELF },
                  ]}
                  active={activeKey}
                  onChange={(item) => setActiveKey(item.key)}
                  scrollToView
                />
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 垂直滚动到视区 */}
          <ComponentSectionLayout
            title='垂直滚动到视区'
            id='menu-scrollToView-column'
            description='垂直布局的菜单也支持滚动到视区功能。'
          >
            <CodeOperationContainer>
              <div className="h-[200px] overflow-auto scrollbar-none">
                <Menu
                  items={[
                    { key: '1', label: '导航1', clickType: ClickType.SELF },
                    { key: '2', label: '导航2', clickType: ClickType.SELF },
                    { key: '3', label: '导航3', clickType: ClickType.SELF },
                    { key: '4', label: '导航4', clickType: ClickType.SELF },
                    { key: '5', label: '导航5', clickType: ClickType.SELF },
                    { key: '6', label: '导航6', clickType: ClickType.SELF },
                    { key: '7', label: '导航7', clickType: ClickType.SELF },
                    { key: '8', label: '导航8', clickType: ClickType.SELF },
                  ]}
                  active={activeKey}
                  onChange={(item) => setActiveKey(item.key)}
                  direction="column"
                  scrollToView
                />
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>
        </div>
      )}

      {activeTab === 'props' && (
        <div className='flex flex-col gap-12'>
          <ComponentPropsTable props={menuProps} />
          {menuItemTypes.map(i => (
            <div key={i.name} className='flex flex-col gap-12' id={`${i.name}-API`}>
              <h3 className='text-sm font-bold'>{i.name}</h3>
              <ComponentPropsTable props={i.data} />
            </div>
          ))}
        </div>
      )}
    </ComponentContentLayout>
  );
}
