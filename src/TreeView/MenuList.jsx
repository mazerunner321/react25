import React from "react";
import MenuItem from "./MenuItem";

const MenuList = ({ list = [] }) => {
  return (
    <ul>
      {list?.map((list, i) => (
        <MenuItem key={i} item={list} />
      ))}
    </ul>
  );
};

export default MenuList;
