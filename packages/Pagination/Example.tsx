import { useState } from 'react';
import Pagination from '.';
import ComponentContentLayout from '../../example/components/ComponentContentLayout';
import ComponentSectionLayout from '../../example/components/ComponentSectionLayout';
import CodeOperationContainer from '../../example/components/CodeOperationContainer';
import ComponentPropsTable from '../../example/components/ComponentPropsTable';

const paginationProps = [
  { name: 'current', type: 'number', default: '1', desc: '当前页码' },
  { name: 'total', type: 'number', default: '1', desc: '总页数' },
  { name: 'pageSize', type: 'number', default: '5', desc: '每次可见的页码数量' },
  { name: 'showTotal', type: 'boolean', default: 'false', desc: '是否显示总页数' },
  { name: 'showInput', type: 'boolean', default: 'false', desc: '是否显示页码输入框' },
  { name: 'onChange', type: '(current: number) => void', desc: '页码变化回调' },
  { name: 'style', type: 'CSSProperties', desc: '自定义样式' },
  { name: 'className', type: 'string', desc: '自定义类名' },
];

export default function PaginationExample() {
  const [activeTab, setActiveTab] = useState<string>('examples');
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPage2, setCurrentPage2] = useState(1);
  const [currentPage3, setCurrentPage3] = useState(1);
  const [currentPage4, setCurrentPage4] = useState(1);

  return (
    <ComponentContentLayout
      zh='分页'
      en='Pagination'
      desc='LandDesign 的分页组件，用于数据分页展示。支持常规分页、缩略分页、总页数显示、自定义输入框等功能。'
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >
      {activeTab === 'examples' && (
        <div className='flex flex-col gap-24'>
          {/* 常规分页 */}
          <ComponentSectionLayout
            title='常规分页'
            id='pagination-normal'
            description='Pagination 组件的基础用法，支持基本的页码切换。'
          >
            <CodeOperationContainer>
              <Pagination
                total={7}
                current={currentPage}
                pageSize={5}
                onChange={setCurrentPage}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 缩略分页 */}
          <ComponentSectionLayout
            title='缩略分页'
            id='pagination-short'
            description='当页数较多时，会自动显示缩略分页样式。'
          >
            <CodeOperationContainer>
              <Pagination
                total={24}
                current={currentPage2}
                pageSize={5}
                onChange={setCurrentPage2}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 显示总页数 */}
          <ComponentSectionLayout
            title='显示总页数'
            id='pagination-total'
            description='通过 showTotal 属性可以显示总页数信息。'
          >
            <CodeOperationContainer>
              <Pagination
                total={24}
                current={currentPage3}
                pageSize={5}
                showTotal
                onChange={setCurrentPage3}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 显示自定义页码输入框 */}
          <ComponentSectionLayout
            title='显示自定义页码输入框（自动切换）'
            id='pagination-input'
            description='通过 showInput 属性可以显示页码输入框，支持直接跳转到指定页面。'
          >
            <CodeOperationContainer>
              <Pagination
                total={24}
                current={currentPage4}
                pageSize={5}
                showInput
                onChange={setCurrentPage4}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 大页数测试 */}
          <ComponentSectionLayout
            title='大页数测试'
            id='pagination-large'
            description='大页数场景下的分页组件表现。'
          >
            <CodeOperationContainer>
              <Pagination
                total={100}
                current={50}
                pageSize={5}
                showTotal
                showInput
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>
        </div>
      )}

      {activeTab === 'props' && (
        <div className='flex flex-col gap-12'>
          <ComponentPropsTable props={paginationProps} />
        </div>
      )}
    </ComponentContentLayout>
  );
}
