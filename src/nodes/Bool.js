import React, { memo, useContext, useEffect, useState } from "react";

import { Handle } from "react-flow-renderer";
import { useGlobalState } from "state-pool";

export default memo(({ data, isConnectable }) => {
  const [bool, setbool] = useState(0);
  const [iData, setiData] = useGlobalState("data");

  const handleChange = (event) => {
    event.preventDefault();
    setbool(event.target.value);
    console.log("idata", iData);
  };
  const setVal = (event) => {
    event.preventDefault();
    setiData(iData.concat(bool));
    console.log("idata", iData);
  };

  return (
    <div className="bg-blue-500 p-2 w-auto h-auto rounded text-white tracking-wider">
      <Handle
        type="target"
        position="left"
        style={{
          background: "transparent",
          width: 10,
          height: 10,
          //   borderColor: "orange",
          borderRadius: "5px 0px 5px 5px",
          transform: "rotate(45deg)",
          top: 15,
        }}
        onConnect={(event) => console.log("handle onConnect", event)}
        isConnectable={isConnectable}
      />
      <div className="text-center">Boolean</div>
      <div className="flex flex-col">
        <input
          className="w-20 text-black pt-2 rounded text-center"
          type="radio"
          onChange={(event) => handleChange(event)}
          value={bool}
        />
        <button
          className="bg-black w-20 h-10 text-white mt-2 rounded text-center"
          type="button"
          onClick={(event) => setVal(event)}
        >
          set
        </button>
      </div>
      <Handle
        type="source"
        position="right"
        id="a"
        style={{
          background: "transparent",
          width: 10,
          height: 10,
          //   borderColor: "orange",
          borderRadius: "5px 5px 5px 0px",
          transform: "rotate(45deg)",
          top: 15,
        }}
        onConnect={(event) => console.log("handle onConnect", event)}
        isConnectable={isConnectable}
      />
    </div>
  );
});
