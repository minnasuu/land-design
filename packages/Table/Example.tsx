import React, { useState } from 'react';
import Table from '.';
import { TableColumn } from './props';
import CodeOperationContainer from '../../example/components/CodeOperationContainer';
import ComponentContentLayout from '../../example/components/ComponentContentLayout';
import ComponentPropsTable from '../../example/components/ComponentPropsTable';
import ComponentSectionLayout from '../../example/components/ComponentSectionLayout';
import Link from '../Link';

// 示例数据类型
interface DataItem {
  key: string;
  date: string;
  location: string;
  cost: string;
  status?: string;
  manager?: string;
  remark?: string;
  createTime?: string;
  updateTime?: string;
}

export default function TableExample() {
  const [activeTab, setActiveTab] = useState<string>('examples');

  // 基础列配置
  const basicColumns: TableColumn<DataItem>[] = [
    { title: '时间', dataIndex: 'date' },
    { title: '地点', dataIndex: 'location' },
    { title: '花费', dataIndex: 'cost', align: 'right' },
  ];

  // 带排序的列配置
  const sortableColumns: TableColumn<DataItem>[] = [
    { title: '时间', dataIndex: 'date', sorter: true },
    { title: '地点', dataIndex: 'location' },
    {
      title: '花费',
      dataIndex: 'cost',
      align: 'right',
      sorter: {
        compare: (a, b) => {
          const aNum = parseInt(a.cost.replace(/[^\d]/g, ''));
          const bNum = parseInt(b.cost.replace(/[^\d]/g, ''));
          return aNum - bNum;
        },
      },
    },
    { title: '状态', dataIndex: 'status' },
  ];

  // 完整列配置 (用于固定列示例)
  const fullColumns: TableColumn<DataItem>[] = [
    { title: '时间', dataIndex: 'date', fixed: 'left', width: 100 },
    { title: '地点', dataIndex: 'location', fixed: 'left', width: 100 },
    { title: '花费', dataIndex: 'cost', align: 'right', width: 100 },
    { title: '状态', dataIndex: 'status', width: 100 },
    { title: '负责人', dataIndex: 'manager', width: 100 },
    { title: '备注', dataIndex: 'remark', width: 150 },
    { title: '创建时间', dataIndex: 'createTime', width: 120 },
    { title: '更新时间', dataIndex: 'updateTime', width: 120 },
  ];

  // 自定义渲染列配置
  const customRenderColumns: TableColumn<DataItem>[] = [
    { title: '时间', dataIndex: 'date' },
    { title: '地点', dataIndex: 'location' },
    {
      title: '花费',
      dataIndex: 'cost',
      align: 'right',
      render: (value) => <span style={{ color: 'var(--color-success-6)', fontWeight: 500 }}>{value}</span>,
    },
    {
      title: '状态',
      dataIndex: 'status',
      render: (value) => {
        const colorMap: Record<string, string> = {
          '已完成': 'var(--color-success-6)',
          '进行中': 'var(--color-primary-6)',
          '待开始': 'var(--color-warning-6)',
        };
        return (
          <span
            style={{
              padding: '2px 8px',
              borderRadius: 'var(--radius-s)',
              backgroundColor: colorMap[value] || 'var(--color-fill-2)',
              color: 'white',
              fontSize: 'var(--font-content-s)',
            }}
          >
            {value}
          </span>
        );
      },
    },
  ];

  // 基础数据
  const basicData: DataItem[] = [
    { key: '1', date: '8.2', location: '北京', cost: '122元' },
    { key: '2', date: '8.3', location: '深圳', cost: '88元' },
  ];

  // 扩展数据
  const extendedData: DataItem[] = [
    { key: '1', date: '8.2', location: '北京', cost: '122元', status: '已完成' },
    { key: '2', date: '8.3', location: '深圳', cost: '88元', status: '进行中' },
    { key: '3', date: '8.4', location: '上海', cost: '156元', status: '已完成' },
    { key: '4', date: '8.5', location: '广州', cost: '98元', status: '待开始' },
    { key: '5', date: '8.6', location: '杭州', cost: '134元', status: '已完成' },
    { key: '6', date: '8.7', location: '南京', cost: '112元', status: '进行中' },
    { key: '7', date: '8.8', location: '武汉', cost: '145元', status: '待开始' },
    { key: '8', date: '8.9', location: '成都', cost: '167元', status: '已完成' },
    { key: '9', date: '8.10', location: '西安', cost: '123元', status: '进行中' },
    { key: '10', date: '8.11', location: '重庆', cost: '189元', status: '待开始' },
  ];

  // 宽表数据
  const wideData: DataItem[] = [
    { key: '1', date: '8.2', location: '北京', cost: '122元', status: '已完成', manager: '张三', remark: '项目顺利', createTime: '2024-01-01', updateTime: '2024-01-02' },
    { key: '2', date: '8.3', location: '深圳', cost: '88元', status: '进行中', manager: '李四', remark: '需要跟进', createTime: '2024-01-03', updateTime: '2024-01-04' },
    { key: '3', date: '8.4', location: '上海', cost: '156元', status: '已完成', manager: '王五', remark: '按时完成', createTime: '2024-01-05', updateTime: '2024-01-06' },
    { key: '4', date: '8.5', location: '广州', cost: '98元', status: '待开始', manager: '赵六', remark: '等待开始', createTime: '2024-01-07', updateTime: '2024-01-08' },
    { key: '5', date: '8.6', location: '杭州', cost: '134元', status: '已完成', manager: '钱七', remark: '质量优秀', createTime: '2024-01-09', updateTime: '2024-01-10' },
  ];

  // 属性文档
  const tableProps = [
    { name: 'columns', type: <Link anchor="TableColumn-API">TableColumn[]</Link>, desc: '列配置，定义表格的列结构和渲染方式', required: true },
    { name: 'dataSource', type: 'T[]', desc: '数据源，表格要展示的数据数组' },
    { name: 'rowKey', type: 'string | ((record, index) => Key)', desc: '行唯一标识的取值方式', default: "'key'" },
    { name: 'title', type: 'ReactNode | (() => ReactNode)', desc: '表格标题' },
    { name: 'footer', type: 'ReactNode | ((data) => ReactNode)', desc: '表格脚注' },
    { name: 'summary', type: '(data) => ReactNode', desc: '总结行渲染函数' },
    { name: 'empty', type: 'ReactNode', desc: '空数据时显示的内容', default: "'暂无数据'" },
    { name: 'showHeader', type: 'boolean', desc: '是否显示表头', default: 'true' },
    { name: 'size', type: "'small' | 'medium' | 'large'", desc: '表格尺寸', default: "'medium'" },
    { name: 'bordered', type: 'boolean', desc: '是否显示边框', default: 'true' },
    { name: 'striped', type: 'boolean', desc: '是否隔行变色', default: 'false' },
    { name: 'crossHighlight', type: 'boolean', desc: '是否启用十字高亮', default: 'false' },
    { name: 'crossHighlightColor', type: 'string', desc: '十字高亮颜色' },
    { name: 'rowHover', type: 'boolean', desc: '行悬停高亮', default: 'true' },
    { name: 'stickyHeader', type: 'boolean', desc: '是否固定表头', default: 'false' },
    { name: 'stickyHeaderOffset', type: 'number', desc: '固定表头时的顶部偏移量' },
    { name: 'scroll', type: <Link anchor="TableScroll-API">TableScroll</Link>, desc: '滚动配置' },
    { name: 'loading', type: 'boolean', desc: '是否显示加载状态', default: 'false' },
    { name: 'loadingText', type: 'ReactNode', desc: '加载提示内容' },
    { name: 'onRow', type: '(record, index) => events', desc: '行事件配置' },
    { name: 'onCell', type: '(record, rowIndex, column, colIndex) => events', desc: '单元格事件配置' },
    { name: 'onSortChange', type: '(sorter) => void', desc: '排序变化回调' },
    { name: 'onChange', type: '(eventData) => void', desc: '表格数据变化回调' },
    { name: 'style', type: 'CSSProperties', desc: '自定义样式' },
    { name: 'className', type: 'string', desc: '自定义类名' },
  ];

  const tableTypes = [
    {
      name: 'TableColumn',
      data: [
        { name: 'key', type: 'string', desc: '列唯一标识' },
        { name: 'title', type: 'ReactNode', desc: '列标题', required: true },
        { name: 'dataIndex', type: 'string', desc: '数据字段名', required: true },
        { name: 'width', type: 'number | string', desc: '列宽度' },
        { name: 'minWidth', type: 'number', desc: '最小宽度' },
        { name: 'maxWidth', type: 'number', desc: '最大宽度' },
        { name: 'align', type: "'left' | 'center' | 'right'", desc: '对齐方式' },
        { name: 'fixed', type: "'left' | 'right' | boolean", desc: '是否固定列' },
        { name: 'sorter', type: 'boolean | TableSorter', desc: '排序配置' },
        { name: 'defaultSortOrder', type: "'ascend' | 'descend' | null", desc: '默认排序顺序' },
        { name: 'render', type: '(value, record, index) => ReactNode', desc: '自定义渲染函数' },
        { name: 'renderHeader', type: '(column) => ReactNode', desc: '自定义表头渲染' },
        { name: 'ellipsis', type: 'boolean', desc: '是否省略显示' },
        { name: 'className', type: 'string', desc: '列样式类名' },
        { name: 'headerClassName', type: 'string', desc: '表头样式类名' },
        { name: 'cellStyle', type: 'CSSProperties', desc: '单元格样式' },
        { name: 'headerStyle', type: 'CSSProperties', desc: '表头样式' },
        { name: 'hidden', type: 'boolean', desc: '是否隐藏列' },
      ],
    },
    {
      name: 'TableScroll',
      data: [
        { name: 'x', type: "number | string | true", desc: '横向滚动宽度' },
        { name: 'y', type: 'number | string', desc: '纵向滚动高度' },
        { name: 'scrollToFirstRowOnChange', type: 'boolean', desc: '数据变化时滚动到顶部' },
      ],
    },
    {
      name: 'TableSorter',
      data: [
        { name: 'compare', type: '(a, b) => number', desc: '比较函数' },
        { name: 'multiple', type: 'number', desc: '多列排序优先级' },
      ],
    },
  ];

  return (
    <ComponentContentLayout
      zh="表格"
      en="Table"
      desc="用于展示结构化数据。支持排序、固定表头、固定列、十字高亮、自定义渲染等功能。"
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >
      {activeTab === 'examples' && (
        <div className="flex flex-col gap-24">
          {/* 基础用法 */}
          <ComponentSectionLayout
            title="基础用法"
            id="basic-usage"
            description="最简单的表格用法，通过 columns 定义列配置，dataSource 传入数据。"
          >
            <CodeOperationContainer>
              <Table columns={basicColumns} dataSource={basicData} />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 尺寸 */}
          <ComponentSectionLayout
            title="尺寸"
            id="table-size"
            description="通过 size 属性设置表格尺寸，支持 small、medium、large 三种尺寸。"
          >
            <CodeOperationContainer>
              <div className="flex flex-col gap-16">
                <Table columns={basicColumns} dataSource={basicData} size="small" />
                <Table columns={basicColumns} dataSource={basicData} size="medium" />
                <Table columns={basicColumns} dataSource={basicData} size="large" />
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 隔行变色 */}
          <ComponentSectionLayout
            title="隔行变色"
            id="table-striped"
            description="通过 striped 属性启用隔行变色效果。"
          >
            <CodeOperationContainer>
              <Table columns={basicColumns} dataSource={extendedData.slice(0, 4)} striped />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 十字高亮 */}
          <ComponentSectionLayout
            title="十字高亮"
            id="table-cross-highlight"
            description="通过 crossHighlight 属性启用十字高亮效果，鼠标悬停时高亮当前行和列。"
          >
            <CodeOperationContainer>
              <Table columns={basicColumns} dataSource={extendedData.slice(0, 4)} crossHighlight />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 排序 */}
          <ComponentSectionLayout
            title="排序"
            id="table-sort"
            description="在列配置中设置 sorter 属性启用排序功能。可以传入 boolean 使用默认排序，或传入自定义比较函数。"
          >
            <CodeOperationContainer>
              <Table
                columns={sortableColumns}
                dataSource={extendedData}
                onSortChange={(sorter) => console.log('排序变化:', sorter)}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 固定表头 */}
          <ComponentSectionLayout
            title="固定表头"
            id="table-sticky-header"
            description="通过 stickyHeader 属性固定表头，适合数据较多需要滚动的场景。"
          >
            <CodeOperationContainer>
              <Table
                columns={sortableColumns}
                dataSource={extendedData}
                stickyHeader
                scroll={{ y: 300 }}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 固定列 */}
          <ComponentSectionLayout
            title="固定列"
            id="table-fixed-columns"
            description="在列配置中设置 fixed 属性固定列，支持固定在左侧或右侧。"
          >
            <CodeOperationContainer>
              <Table
                columns={fullColumns}
                dataSource={wideData}
                scroll={{ x: 600 }}
                style={{ width: '600px' }}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 自定义渲染 */}
          <ComponentSectionLayout
            title="自定义渲染"
            id="table-custom-render"
            description="通过列配置的 render 函数自定义单元格内容的渲染。"
          >
            <CodeOperationContainer>
              <Table columns={customRenderColumns} dataSource={extendedData.slice(0, 4)} />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 标题和脚注 */}
          <ComponentSectionLayout
            title="标题和脚注"
            id="table-title-footer"
            description="通过 title 和 footer 属性添加表格标题和脚注。"
          >
            <CodeOperationContainer>
              <Table
                columns={basicColumns}
                dataSource={basicData}
                title="行程记录"
                footer={(data) => `共 ${data.length} 条记录`}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 加载状态 */}
          <ComponentSectionLayout
            title="加载状态"
            id="table-loading"
            description="通过 loading 属性显示加载状态。"
          >
            <CodeOperationContainer>
              <Table
                columns={basicColumns}
                dataSource={basicData}
                loading
                loadingText="数据加载中..."
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 空状态 */}
          <ComponentSectionLayout
            title="空状态"
            id="table-empty"
            description="当 dataSource 为空时显示空状态，可通过 empty 属性自定义空状态内容。"
          >
            <CodeOperationContainer>
              <Table columns={basicColumns} dataSource={[]} empty="暂无行程记录" />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 组合功能 */}
          <ComponentSectionLayout
            title="组合功能"
            id="table-combined"
            description="可以组合使用多种功能。"
          >
            <CodeOperationContainer>
              <Table
                columns={sortableColumns}
                dataSource={extendedData}
                striped
                crossHighlight
                stickyHeader
                scroll={{ y: 300 }}
                title="行程统计表"
                footer={(data) => `总计 ${data.length} 条记录`}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>
        </div>
      )}

      {activeTab === 'props' && (
        <div className="flex flex-col gap-12">
          <ComponentPropsTable props={tableProps} />
          {tableTypes.map((type) => (
            <div key={type.name} className="flex flex-col gap-12" id={`${type.name}-API`}>
              <h3 className="text-sm font-bold">{type.name}</h3>
              <ComponentPropsTable props={type.data as any} />
            </div>
          ))}
        </div>
      )}
    </ComponentContentLayout>
  );
}
