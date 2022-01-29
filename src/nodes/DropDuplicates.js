import React, { memo, useState } from "react";
import { useRef } from "react";

import { Handle } from "react-flow-renderer";


// export default memo(({ data, isConnectable }) => {

//   // const [show, setShow] = useState([])
//   // const [hide, setHide] = useState(['subset', 'keep', 'inplace', 'inplace', 'ignore-index'])
//   let show = [true, true, true, true]


//   return (
//     <div className="bg-purple-600 w-62 h-40 pt-2 rounded text-white">
//       <div style={{ display: "block" }}>
//         <div>
//           <Handle
//             type="target"
//             position="left"
//             style={{
//               background: "white",
//               width: 10,
//               height: 10,

//               borderRadius: "5px 0px 5px 5px",
//               transform: "rotate(45deg)",
//               top: 15,
//             }}
//             onConnect={(params) => console.log("handle onConnect", params)}
//             isConnectable={isConnectable}
//             id="flow-in"
//           />
//         </div>
//         <div></div>
//         <Handle
//           type="source"
//           position="right"
//           style={{
//             background: "white",
//             width: 10,
//             height: 10,

//             borderRadius: "5px 5px 5px 0px",
//             transform: "rotate(45deg)",
//             top: 15,
//           }}
//           onConnect={(params) => console.log("handle onConnect", params)}
//           isConnectable={isConnectable}
//           id="flow-out"
//         />
//         <div className="text-center">Drop Duplicates</div>
//       </div>

//       <div style={{ display: "flex" }}>
//         <div style={{ display: "flex", flexDirection: "column" }}>
//           <div className="h-5">
//             <Handle
//               type="target"
//               position="left"
//               style={{
//                 background: "transparent",
//                 width: 10,
//                 height: 10,

//                 borderRadius: "5px 0px 5px 5px",
//                 transform: "rotate(45deg)",
//                 top: 40,
//               }}
//               onConnect={(params) => console.log("handle onConnect", params)}
//               isConnectable={isConnectable}
//               id="a"
//             />
//             <span className="m-0 p-0 ml-4 text-sm">data </span>
//           </div>
//           {show[0] && (
//             <div className="h-5">
//               <Handle
//                 type="target"
//                 position="left"
//                 style={{
//                   background: "transparent",
//                   width: 10,
//                   height: 10,

//                   borderRadius: "5px 0px 5px 5px",
//                   transform: "rotate(45deg)",
//                   top: 60,
//                 }}
//                 onConnect={(params) => console.log("handle onConnect", params)}
//                 isConnectable={isConnectable}
//                 id="a"
//               />
//               <span className="m-0 p-0 ml-4 text-sm">subset </span>
//             </div>
//           )}
//           {show[1] && (
//             <div className="h-5">
//               <Handle
//                 type="target"
//                 position="left"
//                 style={{
//                   background: "transparent",
//                   width: 10,
//                   height: 10,

//                   borderRadius: "5px 0px 5px 5px",
//                   transform: "rotate(45deg)",
//                   top: 80,
//                 }}
//                 onConnect={(params) => console.log("handle onConnect", params)}
//                 isConnectable={isConnectable}
//                 id="b"
//               />
//               <span className="ml-4 text-sm">keep </span>
//             </div>)}
//           {show[2] && (<div className="h-5">
//             <Handle
//               type="target"
//               position="left"
//               style={{
//                 background: "transparent",
//                 width: 10,
//                 height: 10,

//                 borderRadius: "5px 0px 5px 5px",
//                 transform: "rotate(45deg)",
//                 top: 100,
//               }}
//               onConnect={(params) => console.log("handle onConnect", params)}
//               isConnectable={isConnectable}
//               id="c" />
//             <span className="ml-4 text-sm">inplace</span>
//           </div>
//           )}
//           {show[3] && (<div className="h-5">
//               <Handle
//                 type="target"
//                 position="left"
//                 style={{
//                   background: "transparent",
//                   width: 10,
//                   height: 10,

//                   borderRadius: "5px 0px 5px 5px",
//                   transform: "rotate(45deg)",
//                   top: 120,
//                 }}
//                 onConnect={(params) => console.log("handle onConnect", params)}
//                 isConnectable={isConnectable}
//                 id="d" />
//               <span className="ml-4 text-sm">ignore index </span>
//             </div>)}
//         </div>
//         <div
//           style={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//         >
//           <div className="h-5 ">
//             <Handle
//               type="source"
//               position="right"
//               style={{
//                 background: "transparent",
//                 width: 10,
//                 height: 10,

//                 borderRadius: "5px 5px 5px 0px",
//                 transform: "rotate(45deg)",
//                 top: 78,
//               }}
//               isConnectable={isConnectable}
//               id="out"
//             />
//             <span className="mr-4 ml-3 text-sm">output </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// });

// import React, { memo } from "react";

// import { Handle } from "react-flow-renderer";


export default memo(({ data, isConnectable }) => {
  return (
    <div className="bg-purple-600 w-62 h-40 pt-2 rounded text-white">
      <div style={{ display: "block" }}>
        <div>
          <Handle
            type="target"
            position="left"
            style={{
              background: "white",
              width: 10,
              height: 10,

              borderRadius: "5px 0px 5px 5px",
              transform: "rotate(45deg)",
              top: 15,
            }}
            onConnect={(params) => console.log("handle onConnect", params)}
            isConnectable={isConnectable}
            id="flow-in"
          />
        </div>
        <div></div>
        <Handle
          type="source"
          position="right"
          style={{
            background: "white",
            width: 10,
            height: 10,

            borderRadius: "5px 5px 5px 0px",
            transform: "rotate(45deg)",
            top: 15,
          }}
          onConnect={(params) => console.log("handle onConnect", params)}
          isConnectable={isConnectable}
          id="flow-out"
        />
        <div className="text-center">Drop Duplicates</div>
      </div>

      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div className="h-5">
            <Handle
              type="target"
              position="left"
              style={{
                background: "transparent",
                width: 10,
                height: 10,

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

                borderRadius: "5px 0px 5px 5px",
                transform: "rotate(45deg)",
                top: 100,
              }}
              onConnect={(params) => console.log("handle onConnect", params)}
              isConnectable={isConnectable}
              id="c"
            />
            <span className="ml-4 text-sm">inplace</span>
          </div>
          <div className="h-5">
            <Handle
              type="target"
              position="left"
              style={{
                background: "transparent",
                width: 10,
                height: 10,

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
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="h-5 ">
            <Handle
              type="source"
              position="right"
              style={{
                background: "transparent",
                width: 10,
                height: 10,

                borderRadius: "5px 5px 5px 0px",
                transform: "rotate(45deg)",
                top: 78,
              }}
              isConnectable={isConnectable}
              id="out"
            />
            <span className="mr-4 ml-3 text-sm">output </span>
          </div>
        </div>
      </div>
    </div>
  );
});

