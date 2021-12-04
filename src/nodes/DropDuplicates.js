import React, { memo } from "react";

import { Handle } from "react-flow-renderer";

export default memo(({ data, isConnectable }) => {
  return (
    <div className="bg-blue-100 p-2 rounded">
      <div>
        Drop Duplicates 
      </div>
      <Handle
        type="target"
        position="left"
        style={{ background: "#555" }}
        onConnect={(params) => console.log("handle onConnect", params)}
        isConnectable={isConnectable}
      />
      <Handle
        type="target"
        position="left"
        style={{ background: "#555" }}
        onConnect={(params) => console.log("handle onConnect", params)}
        isConnectable={isConnectable}
      />
      <Handle
        type="target"
        position="left"
        style={{ background: "#555" }}
        onConnect={(params) => console.log("handle onConnect", params)}
        isConnectable={isConnectable}
      />
      <Handle
        type="target"
        position="left"
        style={{ background: "#555" }}
        onConnect={(params) => console.log("handle onConnect", params)}
        isConnectable={isConnectable}
      />
      <input
        className="nodrag"
        type="color"
        onChange={data.onChange}
        defaultValue={data.color}
      />
      
      <Handle
        type="source"
        position="right"
        id="b"
        style={{ bottom: 10, top: "auto", background: "#555" }}
        isConnectable={isConnectable}
      />
    </div>
  );
});
