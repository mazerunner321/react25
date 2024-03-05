import React from "react";
import MenuItem from "./MenuItem";

const MenuList = ({ list = [] }) => {
  return (
    <ul className="ml-4">
      {list?.map((list, i) => (
        <MenuItem key={i} item={list} />
      ))}
    </ul>
  );
};

export default MenuList;
