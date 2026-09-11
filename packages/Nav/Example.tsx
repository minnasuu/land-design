import { useState } from 'react';
import Nav from '.';
import { ClickType } from './props';
import Icon from '../Icon';
import Button from '../Button';
import ComponentContentLayout from '../../example/components/ComponentContentLayout';
import ComponentSectionLayout from '../../example/components/ComponentSectionLayout';
import CodeOperationContainer from '../../example/components/CodeOperationContainer';
import ComponentPropsTable from '../../example/components/ComponentPropsTable';
import Link from '../Link';

const NavItemLink = (
  <Link anchor="NavItem-API">NavItem</Link>
);

const navProps = [
  { name: 'items', type: <>{NavItemLink}[]</>, desc: '导航数据' },
  { name: 'active', type: 'string', desc: '当前选中项的 key' },
  { name: 'direction', type: '"row" | "column"', default: '"row"', desc: '排列方向' },
  { name: 'titleDirection', type: '"row" | "column"', default: '"row"', desc: '标题排列方向' },
  { name: 'border', type: 'boolean', default: 'true', desc: '是否显示边框' },
  { name: 'titleDeputy', type: 'boolean', desc: '所有标题作为副级显示' },
  { name: 'scrollToView', type: 'boolean', default: 'false', desc: '选中项切换时滚动到视区' },
  { name: 'expandType', type: '"dropdown" | "inline"', default: '"dropdown"', desc: '子导航展开方式：dropdown 浮层 / inline 平铺占据实际位置' },
  { name: 'onChange', type: <>(item: {NavItemLink}){' =>'} void</>, desc: '导航项点击回调' },
  { name: 'onDropChange', type: <>(item: {NavItemLink}, parentItem: {NavItemLink}){' =>'} void</>, desc: '下拉导航项点击回调' },
  { name: 'dropProps', type: 'NavProps', desc: '子导航透传属性' },
  { name: 'itemStyle', type: 'CSSProperties', desc: '导航项自定义样式' },
  { name: 'itemClassName', type: 'string', desc: '导航项自定义类名' },
  { name: 'style', type: 'CSSProperties', desc: '自定义样式' },
  { name: 'className', type: 'string', desc: '自定义类名' },
];

const navItemTypes = [
  {
    name: 'NavItem',
    data: [
      { name: 'key', type: 'string', desc: '唯一标识' },
      { name: 'label', type: 'string', desc: '标题文本' },
      { name: 'path', type: 'string', desc: '路由路径' },
      { name: 'subText', type: 'string', desc: '副标题' },
      { name: 'icon', type: 'string | ReactNode', desc: '前置图标' },
      { name: 'href', type: 'string', desc: '外部链接地址' },
      { name: 'clickType', type: 'ClickType', desc: '点击行为类型' },
      { name: 'children', type: 'NavItem[]', desc: '子导航数据' },
      { name: 'disabled', type: 'boolean', desc: '是否禁用' },
    ],
  },
];

// 多级导航示例数据（供浮层 / 平铺多种模式复用）
const multiLevelItems = [
  {
    key: '1',
    label: '产品',
    clickType: ClickType.SELF,
    children: [
      {
        key: '1-1',
        label: '设计工具',
        clickType: ClickType.SELF,
        children: [
          { key: '1-1-1', label: '原型设计', clickType: ClickType.SELF },
          { key: '1-1-2', label: '界面设计', clickType: ClickType.SELF },
          { key: '1-1-3', label: '设计系统', clickType: ClickType.SELF },
        ],
      },
      {
        key: '1-2',
        label: '开发工具',
        clickType: ClickType.SELF,
        children: [
          { key: '1-2-1', label: '前端框架', clickType: ClickType.SELF },
          { key: '1-2-2', label: '后端服务', clickType: ClickType.SELF },
        ],
      },
      { key: '1-3', label: '运营工具', clickType: ClickType.SELF },
    ],
  },
  {
    key: '2',
    label: '解决方案',
    clickType: ClickType.SELF,
    children: [
      {
        key: '2-1',
        label: '按行业',
        clickType: ClickType.SELF,
        children: [
          { key: '2-1-1', label: '金融', clickType: ClickType.SELF },
          { key: '2-1-2', label: '教育', clickType: ClickType.SELF },
        ],
      },
      { key: '2-2', label: '企业版', clickType: ClickType.SELF },
      { key: '2-3', label: '团队版', clickType: ClickType.SELF },
    ],
  },
  { key: '3', label: '关于我们', clickType: ClickType.SELF },
];

export default function NavExample() {
  const [activeTab, setActiveTab] = useState<string>('examples');
  const [activeKey, setActiveKey] = useState('1');

  return (
    <ComponentContentLayout
      zh='导航'
      en='Nav'
      desc='LandDesign 的导航组件，用于导航和页面切换。支持水平、垂直布局，下拉导航，图标等功能。'
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >
      {activeTab === 'examples' && (
        <div className='flex flex-col gap-6'>
          {/* 基本用法 */}
          <ComponentSectionLayout
            title='基本用法'
            id='nav-normal'
            description='Nav 组件的基础用法，支持水平布局和边框。'
          >
            <CodeOperationContainer>
              <Nav
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

          {/* 不可点击 & 禁用 */}
          <ComponentSectionLayout
            title='不可点击 & 禁用'
            id='nav-disabled'
            description='通过 clickType 属性可以控制导航项的点击行为，不可点击通常用于一级导航用于聚合等特殊情况。'
          >
            <CodeOperationContainer>
              <Nav
                items={[
                  { key: '1', label: '首页（可点击）', clickType: ClickType.SELF },
                  { key: '2', label: '产品中心（默认样式）', clickType: ClickType.SIMPLE },
                  { key: '3', label: '关于我们（禁用）', clickType: ClickType.DISABLED },
                ]}
                active="1"
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 多级导航 */}
          <ComponentSectionLayout
            title='多级导航'
            id='nav-multi-level'
            description='通过多级 children 嵌套可实现多级导航：子级在宽面板中按分组分列展示，横向导航的面板向下展开。'
          >
            <CodeOperationContainer>
              <div className='min-h-[220px] pt-2'>
                <Nav
                  items={multiLevelItems}
                  active="1"
                />
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 多级导航（列向） */}
          <ComponentSectionLayout
            title='多级导航（列向）'
            id='nav-multi-level-column'
            description='纵向导航同样使用分组宽面板，浮层定位在右侧，适合侧边栏场景。'
          >
            <CodeOperationContainer>
              <div className='min-w-[400px] min-h-[220px] py-2'>
                <Nav
                  direction="column"
                  style={{ width: 132 }}
                  items={multiLevelItems}
                  active="1"
                />
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 平铺导航（纵向） */}
          <ComponentSectionLayout
            title='平铺导航（纵向）'
            id='nav-inline-column'
            description='expandType="inline" 时子导航平铺展开、占据实际位置，点击父项展开/收起，适合侧边栏树形导航。'
          >
            <CodeOperationContainer>
              <div className='py-2'>
                <Nav
                  direction="column"
                  expandType="inline"
                  items={multiLevelItems}
                  active="2"
                  style={{ width: 200 }}
                />
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 平铺导航（横向） */}
          <ComponentSectionLayout
            title='平铺导航（横向）'
            id='nav-inline-row'
            description='横向导航也可使用平铺模式，子导航在下方以普通流展开，不遮挡其他内容。'
          >
            <CodeOperationContainer>
              <Nav
                expandType="inline"
                items={multiLevelItems}
                active="1"
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 列向导航 */}
          <ComponentSectionLayout
            title='列向导航'
            id='nav-column'
            description='通过 direction="column" 可以创建垂直布局的导航。'
          >
            <CodeOperationContainer>
              <Nav
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
            id='nav-theme'
            description='可以通过 style 属性自定义导航的样式。'
          >
            <CodeOperationContainer>
              <div className='flex column items-center gap-6'>
                <Nav
                  items={[
                    { key: '1', label: '导航1', clickType: ClickType.SELF },
                    { key: '2', label: '导航2', clickType: ClickType.SELF },
                    { key: '3', label: '导航3', clickType: ClickType.SELF },
                  ]}
                  active="1"
                />
                <Nav
                  items={[
                    { key: '1', label: '导航1', clickType: ClickType.SELF },
                    { key: '2', label: '导航2', clickType: ClickType.SELF },
                    { key: '3', label: '导航3', clickType: ClickType.SELF },
                  ]}
                  active="1"
                  style={{
                    '--land-nav-item-hover-bg': 'var(--color-bg-1)',
                    '--land-nav-link-active-bg': 'var(--color-bg-1)',
                  } as React.CSSProperties}
                />
                <Nav
                  items={[
                    { key: '1', label: '导航1', clickType: ClickType.SELF },
                    { key: '2', label: '导航2', clickType: ClickType.SELF },
                    { key: '3', label: '导航3', clickType: ClickType.SELF },
                  ]}
                  active="1"
                  style={{
                    '--land-nav-link-active-color': 'var(--color-primary-6)',
                    '--land-nav-link-indicator-color': 'var(--color-primary-6)',
                  } as React.CSSProperties}
                />
                <Nav
                  items={[
                    { key: '1', label: '导航1', clickType: ClickType.SELF },
                    { key: '2', label: '导航2', clickType: ClickType.SELF },
                    { key: '3', label: '导航3', clickType: ClickType.SELF },
                  ]}
                  active="1"
                  style={{
                    '--land-nav-link-active-color': 'var(--color-primary-6)',
                    '--land-nav-link-active-bg': 'var(--color-primary-1)',
                    '--land-nav-link-indicator-color': 'var(--color-primary-6)',
                  } as React.CSSProperties}
                />
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 垂直样式定制 */}
          <ComponentSectionLayout
            title='垂直样式定制'
            id='nav-vertical-theme'
            description='垂直布局的导航也可以自定义样式。'
          >
            <CodeOperationContainer>
              <div className='flex justify-center gap-8'>
                <Nav
                  items={[
                    { key: '1', label: '导航1', clickType: ClickType.SELF },
                    { key: '2', label: '导航2', clickType: ClickType.SELF },
                    { key: '3', label: '导航3', clickType: ClickType.SELF },
                  ]}
                  active="1"
                  direction="column"
                />
                <Nav
                  items={[
                    { key: '1', label: '导航1', clickType: ClickType.SELF },
                    { key: '2', label: '导航2', clickType: ClickType.SELF },
                    { key: '3', label: '导航3', clickType: ClickType.SELF },
                  ]}
                  active="2"
                  direction="column"
                  style={{
                    '--land-nav-item-hover-bg': 'var(--color-bg-1)',
                    '--land-nav-link-active-bg': 'var(--color-bg-1)',
                  } as React.CSSProperties}
                />
                <Nav
                  items={[
                    { key: '1', label: '导航1', clickType: ClickType.SELF },
                    { key: '2', label: '导航2', clickType: ClickType.SELF },
                    { key: '3', label: '导航3', clickType: ClickType.SELF },
                  ]}
                  active="3"
                  direction="column"
                  style={{
                    '--land-nav-link-active-color': 'var(--color-primary-6)',
                    '--land-nav-link-indicator-color': 'var(--color-primary-6)',
                  } as React.CSSProperties}
                />
                <Nav
                  items={[
                    { key: '1', label: '导航1', clickType: ClickType.SELF },
                    { key: '2', label: '导航2', clickType: ClickType.SELF },
                    { key: '3', label: '导航3', clickType: ClickType.SELF },
                  ]}
                  active="3"
                  direction="column"
                  style={{
                    '--land-nav-link-active-color': 'var(--color-primary-6)',
                    '--land-nav-link-active-bg': 'var(--color-primary-1)',
                    '--land-nav-link-indicator-color': 'var(--color-primary-6)',
                  } as React.CSSProperties}
                />
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 带图标导航 */}
          <ComponentSectionLayout
            title='带图标导航'
            id='nav-icon'
            description='通过 icon 属性可以为导航项添加图标。'
          >
            <CodeOperationContainer>
              <Nav
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
          <div className='flex gap-2 justify-center'>
            <Button onClick={() => setActiveKey('1')} variant="fill">选中第1项</Button>
            <Button onClick={() => setActiveKey('4')} variant="fill">选中第4项</Button>
            <Button onClick={() => setActiveKey('8')} variant="fill">选中第8项</Button>
          </div>
          <ComponentSectionLayout
            title='滚动到视区功能'
            id='nav-scrollToView'
            description='通过 scrollToView 属性可以在选中项切换时自动滚动到可见区域。'
          >
            <CodeOperationContainer>
              <div className="w-[300px] overflow-auto scrollbar-none">
                <Nav
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
            id='nav-scrollToView-column'
            description='垂直布局的导航也支持滚动到视区功能。'
          >
            <CodeOperationContainer>
              <div className="h-[200px] overflow-auto scrollbar-none">
                <Nav
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
        <div className='flex flex-col gap-3'>
          <ComponentPropsTable props={navProps} />
          {navItemTypes.map(i => (
            <div key={i.name} className='flex flex-col gap-3' id={`${i.name}-API`}>
              <h3 className='text-sm font-bold'>{i.name}</h3>
              <ComponentPropsTable props={i.data} />
            </div>
          ))}
        </div>
      )}
    </ComponentContentLayout>
  );
}
