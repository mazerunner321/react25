import React from "react";
import MenuList from "./MenuList";

const MenuItem = ({ item }) => {
  return (
    <>
      <li>
        <p>{item.label}</p>
      </li>
      {item && item.children && item.children.length > 0 ? (
        <MenuList list={item.children} />
      ) : null}
    </>
  );
};

export default MenuItem;
