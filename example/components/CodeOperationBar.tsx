import React, { useState } from 'react'
import Icon from '../../packages/Icon';
import CodeTransform from './CodeTransform';
import Flex from '../../packages/Flex';
import Button from '../../packages/Button';

const codeTransformData = [
  {
    label: 'React',
    key: 'react',
  },
  {
    label: 'HTML',
    key: 'html',
  },
]

export default function CodeOperationBar({ reactTsxCodeStr, reactScssCodeStr }: { reactTsxCodeStr: string, reactScssCodeStr: string }) {
  const [showCodeTransform, setShowCodeTransform] = useState(false);
  const [active, setActive] = useState<string>('react');
  return (
    <details className="flex flex-col justify-between border-box" open={showCodeTransform}>
      <summary
        className="flex items-center gap-16"
      >
        <div
          className={`flex items-center gap-8 h-[40px] cursor-pointer border border-border-primary overflow-hidden ${showCodeTransform ? '' : 'hover:bg-bg-secondary'} transition-colors`}
          style={{
            width: showCodeTransform ? '100%' : '124px',
            borderRadius: showCodeTransform ? '8px 8px 0px 0px' : '8px'
          }}
          onClick={(e) => {
            e.preventDefault();
            setShowCodeTransform(!showCodeTransform);
          }}
        >
          <div className='flex items-center gap-4 flex-shrink-0 px-16 text-14'><Icon name="code" size={16} />组件源码</div>
          <Flex className='h-full' justify='end' gap={0} style={{ opacity: showCodeTransform ? 1 : 0, pointerEvents: showCodeTransform ? 'auto' : 'none' }}>
            {codeTransformData.map((item) => (
              <Button
                key={item.key}
                type={active === item.key ? 'background' : 'text'}
                size='small'
                onClick={(e) => {
                  e.stopPropagation();
                  setActive(item.key);
                }}
                style={{
                  borderRadius: 0,
                  borderLeft: '1px solid var(--color-border-primary)',
                  height: '100%',
                  minWidth: '80px'
                }}
              >
                {item.label}
              </Button>
            ))}
          </Flex>
        </div>
      </summary>
      <div className='translate-y-[-1px] border border-border-primary rounded-b-[8px] overflow-hidden'>
        {showCodeTransform && <div>
          <CodeTransform
            active={active}
            reactTsxCodeStr={reactTsxCodeStr}
            reactScssCodeStr={reactScssCodeStr}
          />
        </div>}
      </div>
    </details>
  )
}
