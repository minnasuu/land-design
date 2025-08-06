import React from 'react'
import Flex from '../../packages/Flex'
import Title from '../../packages/Title'
import Divider from '../../packages/Divider'
import Tabs from '../../packages/Tabs'

export default function ComponentContentLayout({ zh, en, desc, activeTab, hasVariants, onTabChange, children }: { zh: string, en: string, desc?: string, activeTab?: string, hasVariants?: boolean, onTabChange?: (tab: string) => void, children: React.ReactNode }) {
  const tabs = [
    { key: 'examples', label: '示例' },
    { key: 'props', label: 'API' },
    ...(hasVariants ? [{ key: 'variants', label: '变体' }] : []),
  ];
  return (
    <div className='flex flex-col gap-24 pb-24 h-fit w-full px-24 box-border'>
      <div
        className="w-full sticky top-0 flex justify-center pt-20 box-border right-0 bg-bg-opacity backdrop-blur-md"
        style={{
          zIndex: 100,
        }}
      >
        <div style={{ maxWidth: "960px" }} className="w-full">
          <Flex justify="space-between" align="end">
            <div className="flex flex-col gap-2">
              <Title
                title={`${zh} ${en}`}
                type="h1"
              />
              {desc && (
                <div className="text-xs text-text-secondary">
                  {desc}
                </div>
              )}
            </div>
          </Flex>
          {/* 标签页导航 */}
          {onTabChange && <Tabs checked={activeTab} onChange={onTabChange} data={tabs} style={{ width: '320px' }} className='mt-16' />}
          <Divider style={{ marginTop: "20px" }} />
        </div>
      </div>
      {children}
    </div>
  )
}
