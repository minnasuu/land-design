import React, { useState } from 'react';
import Table from '.';
import CodeOperationContainer from '../../example/components/CodeOperationContainer';
import ComponentContentLayout from '../../example/components/ComponentContentLayout';
import ComponentPropsTable from '../../example/components/ComponentPropsTable';
import ComponentSectionLayout from '../../example/components/ComponentSectionLayout';

export default function TableExample() {
  const [activeTab, setActiveTab] = useState<string>('examples');

  const tableProps = [
    { name: 'titleData', type: 'Array<{title: string, value: string}>', desc: '表头数据，定义表格的列标题和对应的数据字段' },
    { name: 'data', type: 'Array<Record<string, any>>', desc: '表格数据，每行数据的对象数组' },
    { name: 'striped', type: 'boolean', default: 'false', desc: '是否显示隔行背景，设置为true时偶数行会有背景色' },
    { name: 'crossHighlight', type: 'boolean', default: 'false', desc: '是否启用十字高亮，鼠标悬停时高亮当前行和列' },
    { name: 'headFixed', type: 'boolean', default: 'false', desc: '是否固定表头，设置为true时表头会固定在顶部' },
    { name: 'fixedColumns', type: 'number', desc: '固定列数，指定左侧固定的列数' },
    { name: 'style', type: 'CSSProperties', desc: '自定义样式，可以传入CSS样式对象来自定义表格外观' },
    { name: 'className', type: 'string', desc: '自定义类名，可以传入额外的CSS类名' },
  ];

  const basicData = [
    { title: "8.2", value: "北京", cost: "122元" },
    { title: "8.3", value: "深圳", cost: "88元" },
  ];

  const extendedData = [
    { title: "8.2", value: "北京", cost: "122元", status: "已完成" },
    { title: "8.3", value: "深圳", cost: "88元", status: "进行中" },
    { title: "8.4", value: "上海", cost: "156元", status: "已完成" },
    { title: "8.5", value: "广州", cost: "98元", status: "待开始" },
    { title: "8.6", value: "杭州", cost: "134元", status: "已完成" },
    { title: "8.7", value: "南京", cost: "112元", status: "进行中" },
    { title: "8.8", value: "武汉", cost: "145元", status: "待开始" },
    { title: "8.9", value: "成都", cost: "167元", status: "已完成" },
    { title: "8.10", value: "西安", cost: "123元", status: "进行中" },
    { title: "8.11", value: "重庆", cost: "189元", status: "待开始" },
  ];

  const wideData = [
    { title: "8.2", value: "北京", cost: "122元", status: "已完成", manager: "张三", remark: "项目顺利", createTime: "2024-01-01", updateTime: "2024-01-02" },
    { title: "8.3", value: "深圳", cost: "88元", status: "进行中", manager: "李四", remark: "需要跟进", createTime: "2024-01-03", updateTime: "2024-01-04" },
    { title: "8.4", value: "上海", cost: "156元", status: "已完成", manager: "王五", remark: "按时完成", createTime: "2024-01-05", updateTime: "2024-01-06" },
    { title: "8.5", value: "广州", cost: "98元", status: "待开始", manager: "赵六", remark: "等待开始", createTime: "2024-01-07", updateTime: "2024-01-08" },
    { title: "8.6", value: "杭州", cost: "134元", status: "已完成", manager: "钱七", remark: "质量优秀", createTime: "2024-01-09", updateTime: "2024-01-10" },
  ];

  return (
    <ComponentContentLayout
      zh='表格'
      en='Table'
      desc='LandDesign 的表格组件，用于展示结构化数据。支持隔行背景、十字高亮、固定表头、固定列等功能。'
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >

      {/* 标签页内容 */}
      {activeTab === 'examples' && (
        <div className='flex flex-col gap-24'>
          {/* 基础用法 */}
          <ComponentSectionLayout
            title='基础用法'
            id='basic-usage'
            description='Table 组件的基础用法，展示简单的表格数据。'
          >
            <CodeOperationContainer>
              <Table
                className="width-100"
                titleData={[
                  { title: "时间", value: "time" },
                  { title: "地点", value: "location" },
                  { title: "花费", value: "cost" },
                ]}
                data={basicData}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 隔行背景 */}
          <ComponentSectionLayout
            title='隔行背景'
            id='table-striped'
            description='通过 striped 属性可以启用隔行背景效果。'
          >
            <CodeOperationContainer>
              <Table
                className="width-100"
                striped={true}
                titleData={[
                  { title: "时间", value: "time" },
                  { title: "地点", value: "location" },
                  { title: "花费", value: "cost" },
                ]}
                data={[
                  { title: "8.2", value: "北京", cost: "122元" },
                  { title: "8.3", value: "深圳", cost: "88元" },
                  { title: "8.4", value: "上海", cost: "156元" },
                  { title: "8.5", value: "广州", cost: "98元" },
                ]}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 十字高亮 */}
          <ComponentSectionLayout
            title='十字高亮'
            id='table-cross-highlight'
            description='通过 crossHighlight 属性可以启用十字高亮效果。'
          >
            <CodeOperationContainer>
              <Table
                className="width-100"
                crossHighlight={true}
                titleData={[
                  { title: "时间", value: "time" },
                  { title: "地点", value: "location" },
                  { title: "花费", value: "cost" },
                ]}
                data={[
                  { title: "8.2", value: "北京", cost: "122元" },
                  { title: "8.3", value: "深圳", cost: "88元" },
                  { title: "8.4", value: "上海", cost: "156元" },
                  { title: "8.5", value: "广州", cost: "98元" },
                ]}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 固定表头 */}
          <ComponentSectionLayout
            title='固定表头'
            id='table-head-fixed'
            description='通过 headFixed 属性可以固定表头，适合数据较多的场景。'
          >
            <CodeOperationContainer>
              <Table
                className="width-100"
                headFixed={true}
                titleData={[
                  { title: "时间", value: "time" },
                  { title: "地点", value: "location" },
                  { title: "花费", value: "cost" },
                  { title: "状态", value: "status" },
                ]}
                data={extendedData}
                style={{ height: '400px' }}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 固定列 */}
          <ComponentSectionLayout
            title='固定列'
            id='table-fixed-columns'
            description='通过 fixedColumns 属性可以固定左侧的列数。'
          >
            <CodeOperationContainer>
              <Table
                className="width-100"
                fixedColumns={2}
                titleData={[
                  { title: "时间", value: "time" },
                  { title: "地点", value: "location" },
                  { title: "花费", value: "cost" },
                  { title: "状态", value: "status" },
                  { title: "负责人", value: "manager" },
                  { title: "备注", value: "remark" },
                  { title: "创建时间", value: "createTime" },
                  { title: "更新时间", value: "updateTime" },
                ]}
                data={wideData}
                style={{ width: '600px' }}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 组合功能 */}
          <ComponentSectionLayout
            title='组合功能'
            id='table-combined'
            description='可以组合使用多种功能，如隔行背景、十字高亮和固定表头。'
          >
            <CodeOperationContainer>
              <Table
                className="width-100"
                striped={true}
                crossHighlight={true}
                headFixed={true}
                titleData={[
                  { title: "时间", value: "time" },
                  { title: "地点", value: "location" },
                  { title: "花费", value: "cost" },
                  { title: "状态", value: "status" },
                ]}
                data={extendedData}
                style={{ height: '300px' }}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 自定义样式 */}
          <ComponentSectionLayout
            title='自定义样式'
            id='table-custom'
            description='可以通过 style 和 className 属性自定义表格的外观。'
          >
            <CodeOperationContainer>
              <Table
                className="width-100"
                titleData={[
                  { title: "时间", value: "time" },
                  { title: "地点", value: "location" },
                  { title: "花费", value: "cost" },
                ]}
                data={basicData}
                style={{
                  border: '2px solid #1890ff',
                  borderRadius: '8px',
                  overflow: 'hidden'
                }}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>
        </div>
      )}

      {activeTab === 'props' && (
        <div className='flex flex-col gap-12'>
          <ComponentPropsTable props={tableProps} />
        </div>
      )}
    </ComponentContentLayout>
  );
}
