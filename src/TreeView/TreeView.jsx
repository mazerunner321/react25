import React from "react";
import Info from "./data.js";
import MenuList from "./MenuList.jsx";

const TreeView = () => {
  return (
    <main>
      <MenuList list={Info} />
    </main>
  );
};

export default TreeView;
