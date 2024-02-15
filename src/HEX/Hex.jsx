import React, { useState } from "react";

const Hex = () => {
  const [color, setColor] = useState("#000000");
  const [type, setType] = useState("");

  const generateRandom = (length) => {
    return Math.floor(Math.random() * length);
  };

  const handleColor = (whatType) => {
    if (whatType === "HEX") {
      let hex = "0123456789ABCDEF";
      let hexCode = "#";
      for (let i = 0; i < 6; i++) {
        hexCode += hex[generateRandom(hex.length - 1)];
      }
      setColor(hexCode);
    }
    if (whatType === "RGB") {
      let r = generateRandom(255);
      let g = generateRandom(255);
      let b = generateRandom(255);

      setColor(`rgb(${r},${g},${b})`);
    }
  };

  return (
    <main className="p-4 bg-slate-200">
      <div className="text-3xl font-mono text-center font-extrabold">
        HEX / RGB
      </div>
      <section className="flex flex-col gap-4">
        <div className="w-1/2 flex justify-around align-middle m-auto mt-6">
          <button
            onClick={() => {
              setType("RGB");
              handleColor("RGB");
            }}
            className="bg-teal-400 font-semibold py-3 px-6 rounded-md hover:bg-teal-500"
          >
            Generate RGB
          </button>
          <button
            onClick={() => {
              setType("HEX");
              handleColor("HEX");
            }}
            className="bg-teal-400 font-semibold py-3 px-6 rounded-md hover:bg-teal-500"
          >
            Generate HEX
          </button>
        </div>
        <p className="text-lg font-mono font-bold text-center mt-5 border border-cyan-500 w-1/2 m-auto border-t-4 border-l-0 border-r-0 border-b-0 p-3">
          {type === "HEX"
            ? `HEX: ${color}`
            : type === "RGB"
            ? `${color}`
            : null}
        </p>
        <div
          style={{ backgroundColor: `${color}` }}
          className={`display w-full h-[66vh]`}
        ></div>
      </section>
    </main>
  );
};

export default Hex;
