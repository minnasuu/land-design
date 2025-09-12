import "./app.css";
import "../packages/styles/variable.scss";
import "../packages/styles/theme.scss";
import BaseComponents from "./BaseComponents";
import { Routes, Route } from 'react-router-dom';
import ProComponents from "./ProComponents";
import React from "react";
import ComponentsCenter from "./ComponentsCenter";
import Design from "./Design";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ComponentsCenter />} />
      <Route path="components" element={<ComponentsCenter />} />
      <Route path="design" element={<Design />} />
      <Route path="base-component" element={<BaseComponents />} />
      <Route path="pro-component" element={<ProComponents />} />
    </Routes>
  );
}

export default App;
