import React, { useState } from "react";
import "./Accordion.css";
import data from "./data";

function Accordion() {
  const [selected, setSelected] = useState(null);
  const [toggleMulti, setToggleMulti] = useState(false);
  const [multiSelectArray, setMultiSelectArray] = useState([]);

  const handleSingleSelection = (getCurrentId) => {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  };

  const handleMultiSelection = (getCuttentId) => {
    let cpyArr = [...multiSelectArray];
    let indexOfCurrent = cpyArr.indexOf(getCuttentId);

    if (indexOfCurrent === -1) cpyArr.push(getCuttentId);
    else cpyArr.splice(indexOfCurrent, 1);

    setMultiSelectArray(cpyArr);
  };

  return (
    <>
      <div className="wrapper flex flex-col gap-5">
        <button
          onClick={() => setToggleMulti(!toggleMulti)}
          className="bg-teal-300 rounded-lg py-3 px-6 font-semibold hover:bg-teal-400"
        >
          {toggleMulti ? "Disable Multi Selection" : "Enable Multi Selection"}
        </button>

        <div className="accordian">
          {data && data.length > 0 ? (
            data.map((dataItem, i) => (
              <div key={i} className="item">
                <div
                  onClick={
                    toggleMulti
                      ? () => handleMultiSelection(dataItem.id)
                      : () => handleSingleSelection(dataItem.id)
                  }
                  className="title"
                >
                  <h3>{dataItem.question}</h3>
                  <span>{selected === dataItem.id ? "-" : "+"}</span>
                </div>
                {toggleMulti
                  ? multiSelectArray.indexOf(dataItem.id) !== -1 && (
                      <div className="content">{dataItem.answer}</div>
                    )
                  : selected === dataItem.id && (
                      <div className="content">{dataItem.answer}</div>
                    )}
                {/* {selected === dataItem.id ||
                multiSelectArray.indexOf(dataItem.id) !== -1 ? (
                  <div className="content">{dataItem.answer}</div>
                ) : null} */}
              </div>
            ))
          ) : (
            <div>Data is Empty!</div>
          )}
        </div>
      </div>
    </>
  );
}

export default Accordion;
