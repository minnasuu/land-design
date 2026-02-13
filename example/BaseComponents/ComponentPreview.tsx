import React from 'react';
import Flex from "../../packages/Flex";
import Anchor from "../../packages/Anchor";
import { COMPONENTS_DATA } from "../mock";
import ComponentContentLayout from '../components/ComponentContentLayout';

interface Props {
  onClick?: (dropItem: any, item: any) => void;
}

const ComponentPreview: React.FC<Props> = ({ onClick }) => {
  const data = COMPONENTS_DATA.filter(item => item.id !== "componentsPreview");

  const anchorData = data?.map((item) => ({
    key: item.id,
    title: item.title,
  }));

  return (
    <ComponentContentLayout zh='组件概览' en='Component Overview' >
      <div className="fixed bg-bg-primary z-[101]" style={{ right: 0, top: 48 }} >
        <Anchor items={anchorData} getContainer={() => document.getElementById('components-scroller') as HTMLElement} />
      </div>
      {data?.map((item) => (
        <div key={item.id} className={'flex flex-col gap-[8px]'} id={item.id}>
          <div className="text-text-primary font-medium text-l">{item.title}</div>
          <div
            className="grid gap-6 w-full"
            style={{
              gridTemplateColumns: "repeat(auto-fill, minmax(200px,1fr))",
            }}
          >
            {item.data?.map((items) => (
              <div
                className="flex flex-col gap-2 rounded-lg cursor-pointer transition-colors duration-200"
                onClick={(e) => {
                  e.stopPropagation();
                  onClick?.(items, item);
                }}
              >
                {items.demo && (
                  <div className="relative flex items-center justify-center rounded-lg border border-border-primary hover:bg-bg-secondary hover:-translate-y-1 aspect-square transition-all duration-200 bg-bg-primary">
                    {items.demo}
                  </div>
                )}
                <Flex align="center" gap={8}>
                  <div className='text-sm font-semibold text-text-primary'>{items.en}</div>
                  <div className='text-xs text-text-secondary'>{items.zh}</div>
                </Flex>
              </div>
            ))}
          </div>
        </div>
      ))}
    </ComponentContentLayout>
  );
};

export default ComponentPreview;
