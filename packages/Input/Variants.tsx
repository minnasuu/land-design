import React, { useState } from 'react';
import Input from '.';
import ComponentSectionLayout from '../../example/components/ComponentSectionLayout';
import CodeOperationContainer from '../../example/components/CodeOperationContainer';
import Flex from '../Flex';

const inputVariants = ['outline', 'fill', 'transparent'];
const inputStatuses = ['default'];

export default function InputVariants() {
  const [value1, setValue1] = useState('这是一段包含错误和警告的文本');
  const [value2, setValue2] = useState('关键词高亮显示，自定义颜色');
  const [value3, setValue3] = useState('React Vue Angular');

  const highlights1 = ['错误', '警告'];
  const highlights2 = [
    { text: '关键词', color: '#1677ff', backgroundColor: '#e6f4ff' },
    { text: '自定义颜色', color: '#52c41a', backgroundColor: '#f6ffed' },
  ];
  const highlights3 = ['React', 'Vue', 'Angular'];

  return (
    <>
      <ComponentSectionLayout title="高亮输入框 - 基础用法">
        <CodeOperationContainer>
          <Flex gap={12} column>
            {inputVariants.map(v => (
              <Flex key={v} gap={12}>
                {inputStatuses.map(status => (
                  <Input.InputHighlight
                    key={`${v}-${status}`}
                    variant={v as any}
                    status={status as any}
                    value={value1}
                    onChange={setValue1}
                    highlights={highlights1}
                    style={{ width: 280 }}
                  />
                ))}
              </Flex>
            ))}
          </Flex>
        </CodeOperationContainer>
      </ComponentSectionLayout>

      <ComponentSectionLayout title="高亮输入框 - 自定义高亮样式">
        <CodeOperationContainer>
          <Flex gap={12} column>
            <Input.InputHighlight
              value={value2}
              onChange={setValue2}
              highlights={highlights2}
              style={{ width: 320 }}
              placeholder="输入包含关键词或自定义颜色的文本"
            />
            <div style={{ fontSize: 12, color: 'var(--color-text-secondary)' }}>
              支持通过 HighlightItem 配置每个高亮项的颜色和背景色
            </div>
          </Flex>
        </CodeOperationContainer>
      </ComponentSectionLayout>

      <ComponentSectionLayout title="高亮输入框 - 自定义渲染">
        <CodeOperationContainer>
          <Flex gap={12} column>
            <Input.InputHighlight
              value={value3}
              onChange={setValue3}
              highlights={highlights3}
              renderHighlight={(text) => (
                <span
                  style={{
                    color: '#fff',
                    backgroundColor: '#722ed1',
                    padding: '0 4px',
                    borderRadius: 4,
                    fontWeight: 500,
                  }}
                >
                  {text}
                </span>
              )}
              style={{ width: 320 }}
              placeholder="输入框架名称如 React Vue Angular"
            />
            <div style={{ fontSize: 12, color: 'var(--color-text-secondary)' }}>
              通过 renderHighlight 完全自定义高亮文本的渲染方式
            </div>
          </Flex>
        </CodeOperationContainer>
      </ComponentSectionLayout>

      <ComponentSectionLayout title="高亮输入框 - 尺寸变体">
        <CodeOperationContainer>
          <Flex gap={12} column>
            <Input.InputHighlight
              size="small"
              value="小尺寸高亮输入框"
              highlights={['高亮']}
              style={{ width: 280 }}
            />
            <Input.InputHighlight
              size="default"
              value="默认尺寸高亮输入框"
              highlights={['高亮']}
              style={{ width: 280 }}
            />
            <Input.InputHighlight
              size="large"
              value="大尺寸高亮输入框"
              highlights={['高亮']}
              style={{ width: 280 }}
            />
          </Flex>
        </CodeOperationContainer>
      </ComponentSectionLayout>

      <ComponentSectionLayout title="高亮输入框 - 带前后内容">
        <CodeOperationContainer>
          <Flex gap={12} column>
            <Input.InputHighlight
              value="https://www.example.com"
              highlights={['example']}
              beforeContent={<span style={{ color: 'var(--color-text-secondary)' }}>URL</span>}
              style={{ width: 320 }}
            />
            <Input.InputHighlight
              value="user@example.com"
              highlights={['@']}
              afterContent={<span style={{ color: 'var(--color-text-secondary)' }}>邮箱</span>}
              style={{ width: 320 }}
            />
          </Flex>
        </CodeOperationContainer>
      </ComponentSectionLayout>

      <ComponentSectionLayout title="高亮输入框 - 禁用状态">
        <CodeOperationContainer>
          <Flex gap={12}>
            <Input.InputHighlight
              value="禁用状态的高亮文本"
              highlights={['高亮']}
              disabled
              style={{ width: 280 }}
            />
          </Flex>
        </CodeOperationContainer>
      </ComponentSectionLayout>
    </>
  );
}
