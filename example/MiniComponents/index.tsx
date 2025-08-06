import React from "react";
import ComponentLayout from "../components/ComponentLayout";
import ComponentExplorer from "../components/ComponentExplorer";
import { MINI_COMPONENTS_DATA } from "../mock";
import Title from "../../packages/Title";
import Divider from "../../packages/Divider";

type Props = {};

const MiniComponents: React.FC<Props> = () => {
  return (
    <ComponentLayout active="mini-component">
      <ComponentExplorer
        componentsData={MINI_COMPONENTS_DATA}
        hash="mini-component"
        defaultActive="nav"
        defaultDropActive="drawer"
        customRender={(curItem) => {
          return <div className="flex flex-col">
            <div className="sticky top-0 bg-white pt-24" style={{ zIndex: 100 }}>
              <Title title={`${curItem.zh} ${curItem.en}`} type="h1" />
              {curItem.desc && <div className="text-sm text-gray-500">{curItem.desc}</div>}
              <Divider gap={20} />
            </div>

          </div>
        }}
      />
    </ComponentLayout>
  );
};

export default MiniComponents;
