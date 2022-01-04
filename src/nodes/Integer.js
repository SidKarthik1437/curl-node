import React, { memo } from "react";

import { Handle } from "react-flow-renderer";

export default memo(({ data, isConnectable }) => {
  return (
    <div className="bg-blue-500 p-2 w-20 h-20 rounded text-white tracking-wider">
      <Handle
        type="target"
        position="left"
        style={{ background: "#555" }}
        onConnect={(params) => console.log("handle onConnect", params)}
        isConnectable={isConnectable}
      />
      <div>
        Integer<strong>{data.number}</strong>
      </div>
      <input
        className="w-10 text-black pt-2 rounded"
        type="text"
        onChange={data.onChange}
        defaultValue={data.number}
      />
      <Handle
        type="source"
        position="right"
        id="a"
        style={{ top: 10, background: "#555" }}
        isConnectable={isConnectable}
      />
      
    </div>
  );
});
