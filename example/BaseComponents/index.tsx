import React from "react";
import ComponentLayout from "../components/ComponentLayout";
import ComponentExplorer from "../components/ComponentExplorer";
import { COMPONENTS_DATA } from "../mock";
type Props = {};

const BaseComponents: React.FC<Props> = () => {
  return (
    <ComponentLayout>
      <ComponentExplorer componentsData={COMPONENTS_DATA} hash="base-component" />
    </ComponentLayout>
  );
};

export default BaseComponents;
