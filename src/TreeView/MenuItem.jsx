import React, { useState } from "react";
import MenuList from "./MenuList";

const MenuItem = ({ item }) => {
  const [displayCurChildren, setDisplayCurChildren] = useState({});

  const handleToggleChild = (label) => {
    setDisplayCurChildren({
      ...displayCurChildren,
      [label]: !displayCurChildren[label],
    });
  };

  return (
    <>
      <li className="list-disc ml-4">
        <div className="flex gap-2">
          <p>{item.label}</p>
          {item?.children?.length ? (
            <span onClick={() => handleToggleChild(item.label)}>
              {displayCurChildren[item.label] ? "-" : "+"}
            </span>
          ) : null}
        </div>
      </li>
      {item &&
      item.children &&
      item.children.length > 0 &&
      displayCurChildren[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
    </>
  );
};

export default MenuItem;
