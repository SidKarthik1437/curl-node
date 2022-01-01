import React, { memo } from "react";

import { Handle } from "react-flow-renderer";

export default memo(({ data, isConnectable }) => {
  return (
    <div className="bg-purple-600 w-48 h-36 pt-2 rounded text-white">
      <Handle
        type="target"
        position="left"
        style={{
          background: "white",
          width: 10,
          height: 10,
          //   borderColor: "orange",
          borderRadius: "5px 0px 5px 5px",
          transform: "rotate(45deg)",
          top: 15,
        }}
        onConnect={(params) => console.log("handle onConnect", params)}
        isConnectable={isConnectable}
        id="flow-in"
      />
      <Handle
        type="source"
        position="right"
        style={{
          background: "white",
          width: 10,
          height: 10,
          //   borderColor: "orange",
          borderRadius: "5px 5px 5px 0px",
          transform: "rotate(45deg)",
          top: 15,
        }}
        onConnect={(params) => console.log("handle onConnect", params)}
        isConnectable={isConnectable}
        id="flow-out"
      />
      <div className="text-center">Drop Duplicates</div>
      <div className="h-5">
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
            top: 40,
          }}
          onConnect={(params) => console.log("handle onConnect", params)}
          isConnectable={isConnectable}
          id="a"
        />
        <span className="m-0 p-0 ml-4 text-sm">data </span>
      </div>
      <div className="h-5">
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
            top: 60,
          }}
          onConnect={(params) => console.log("handle onConnect", params)}
          isConnectable={isConnectable}
          id="a"
        />
        <span className="m-0 p-0 ml-4 text-sm">subset </span>
      </div>
      <div className="h-5">
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
            top: 80,
          }}
          onConnect={(params) => console.log("handle onConnect", params)}
          isConnectable={isConnectable}
          id="b"
        />
        <span className="ml-4 text-sm">keep </span>
      </div>
      <div className="h-5">
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
            top: 100,
          }}
          onConnect={(params) => console.log("handle onConnect", params)}
          isConnectable={isConnectable}
          id="c"
        />
        <span className="ml-4 text-sm">inplace </span>
      </div>
      <div className="h-5">
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
            top: 120,
          }}
          onConnect={(params) => console.log("handle onConnect", params)}
          isConnectable={isConnectable}
          id="d"
        />
        <span className="ml-4 text-sm">ignore index </span>
      </div>
      <div className="h-5 flex">
        <Handle
          type="source"
          position="right"
          style={{
            background: "transparent",
            width: 10,
            height: 10,
            //   borderColor: "orange",
            borderRadius: "5px 5px 5px 0px",
            transform: "rotate(45deg)",
            top: 70,
          }}
          isConnectable={isConnectable}
          id="out"
        />
        {/* <span className="ml-4 text-sm">data </span> */}
      </div>
    </div>
  );
});
