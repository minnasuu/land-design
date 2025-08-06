import React from "react";
import ComponentLayout from "../components/ComponentLayout";
import ComponentExplorer from "../components/ComponentExplorer";
import { PRO_COMPONENTS_DATA } from "../mock";
type Props = {};

const ProComponents: React.FC<Props> = () => {
  return (
    <ComponentLayout active="pro-component">
      <ComponentExplorer componentsData={PRO_COMPONENTS_DATA} hash="pro-component" defaultActive="proInput" defaultDropActive="highlightInput" menuTitleDirection="column" />
    </ComponentLayout>
  );
};

export default ProComponents;
