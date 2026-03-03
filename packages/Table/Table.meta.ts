/**
 * Table 组件元数据
 * @description 用于 AI 代码生成的组件信息描述
 * @author Land Design System
 */

export const TableMeta = {
  // 基础信息
  name: 'Table',
  chineseName: '表格',
  description: '表格组件，用于展示行列数据。支持排序、筛选、分页、行选择、展开行、固定列等丰富功能。',
  
  // 分类
  category: 'display',
  subcategory: 'table',
  
  // 引入方式
  importStatement: "import Table from 'land-design/Table';",
  
  // 组件特性
  features: [
    '列配置灵活：支持自定义渲染、对齐、宽度等',
    '支持列排序（升序/降序）',
    '支持行选择（单选/多选）',
    '支持分页',
    '支持展开行显示详情',
    '支持固定表头',
    '支持固定列',
    '支持横向/纵向滚动',
    '支持隔行变色',
    '支持十字高亮',
    '支持表头分组',
    '支持表格标题和尾部',
    '支持空数据展示',
    '支持加载状态',
  ],
  
  // 使用场景
  useCases: [
    '数据列表展示',
    '后台管理表格',
    '订单/用户列表',
    '数据报表',
    '配置项管理',
    '日志查看',
  ],
  
  // 代码示例
  examples: [
    {
      title: '基础用法',
      description: '简单的表格',
      code: `<Table
  columns={[
    { title: '姓名', dataIndex: 'name' },
    { title: '年龄', dataIndex: 'age' },
    { title: '地址', dataIndex: 'address' },
  ]}
  dataSource={[
    { key: '1', name: '张三', age: 28, address: '北京' },
    { key: '2', name: '李四', age: 32, address: '上海' },
  ]}
/>`,
    },
    {
      title: '自定义列渲染',
      description: '自定义单元格内容',
      code: `<Table
  columns={[
    { title: '姓名', dataIndex: 'name' },
    {
      title: '状态',
      dataIndex: 'status',
      render: (value) => (
        <Tag color={value === 'active' ? 'green' : 'red'}>
          {value === 'active' ? '已激活' : '未激活'}
        </Tag>
      ),
    },
    {
      title: '操作',
      dataIndex: 'action',
      render: (_, record) => (
        <Button size="small" onClick={() => handleEdit(record)}>
          编辑
        </Button>
      ),
    },
  ]}
  dataSource={data}
/>`,
    },
    {
      title: '列排序',
      description: '支持列排序功能',
      code: `<Table
  columns={[
    { title: '姓名', dataIndex: 'name' },
    {
      title: '年龄',
      dataIndex: 'age',
      sorter: { compare: (a, b) => a.age - b.age },
    },
  ]}
  dataSource={data}
  onSortChange={(sorter) => console.log(sorter)}
/>`,
    },
    {
      title: '行选择',
      description: '支持单选/多选行',
      code: `<Table
  columns={columns}
  dataSource={data}
  rowSelection={{
    selectedRowKeys,
    onChange: (keys, rows) => setSelectedRowKeys(keys),
  }}
/>`,
    },
    {
      title: '分页',
      description: '内置分页功能',
      code: `<Table
  columns={columns}
  dataSource={data}
  pagination={{
    current: 1,
    pageSize: 10,
    total: 100,
    onChange: (page, size) => fetchData(page, size),
  }}
/>`,
    },
    {
      title: '展开行',
      description: '展开显示详情内容',
      code: `<Table
  columns={columns}
  dataSource={data}
  expandable={{
    expandedRowRender: (record) => (
      <p style={{ margin: 0 }}>{record.description}</p>
    ),
  }}
/>`,
    },
    {
      title: '固定表头',
      description: '表头固定，内容滚动',
      code: `<Table
  columns={columns}
  dataSource={data}
  stickyHeader
  scroll={{ y: 300 }}
/>`,
    },
    {
      title: '固定列',
      description: '首列/末列固定',
      code: `<Table
  columns={[
    { title: 'ID', dataIndex: 'id', fixed: 'left', width: 100 },
    { title: '名称', dataIndex: 'name', width: 200 },
    // 更多列...
    { title: '操作', dataIndex: 'action', fixed: 'right', width: 100 },
  ]}
  dataSource={data}
  scroll={{ x: 1500 }}
/>`,
    },
    {
      title: '隔行变色',
      description: '斑马纹效果',
      code: `<Table columns={columns} dataSource={data} striped />`,
    },
  ],
  
  // 相关组件
  relatedComponents: ['Pagination', 'Checkbox', 'Loading'],
  
  // 使用注意事项
  notes: [
    'dataSource 中每条数据需要有 key 字段或通过 rowKey 指定',
    'columns 中 dataIndex 对应数据源的字段名',
    '固定列时需要设置列宽度',
    'scroll.x 设置表格横向滚动宽度，scroll.y 设置纵向滚动高度',
    'sorter 可以是 boolean 或包含 compare 函数的对象',
  ],
  
  // 版本信息
  version: '1.0.0',
  
  // 更新日志
  changelog: [
    {
      version: '1.0.0',
      date: '2024-01-01',
      changes: ['初始版本发布'],
    },
  ],
};

export default TableMeta;
