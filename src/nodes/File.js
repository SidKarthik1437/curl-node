import React, { memo, useState } from "react";

import { Handle } from "react-flow-renderer";

export default memo(({ data, isConnectable }) => {
  const [file, setFile] = useState()

  const handleChange = (event) => {
    setFile(event.target.value)
    console.log(file);
  }

  return (
    <div className="bg-blue-500 p-2 rounded text-white tracking-wider">
      <div className="text-center">File</div>
      <Handle
        type="source"
        position="right"
        style={{
          background: "white",
          width: 10,
          height: 10,
          //   borderColor: "orange",
          borderRadius: "5px 0px 5px 5px",
          transform: "rotate(45deg)",
          top: 16,
        }}
        onConnect={(params) => console.log("handle onConnect", params)}
        isConnectable={isConnectable}
      />
      <input type="file" onChange={(event) => handleChange(event)} />
      <button
        className="bg-black w-20 h-10 text-white mt-2 rounded text-center"
        type="button"
        onClick={(event) => setFile(event)}
      >
        upload
      </button>
    </div>
  );
});
