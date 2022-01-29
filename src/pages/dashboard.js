import React, { useState, useRef, useEffect } from "react";
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  removeElements,
  Controls,
  updateEdge,
} from "react-flow-renderer";
import { useRecoilState } from "recoil";

import Sidebar from "../components/Sidebar";
import ConnectionLine from "../components/ConnectionLine";
import CustomEdge from "../components/CustomEdge";

import "../styles/dnd.css";
import * as NODES from "../nodes";
import DataContext from "../context/Data";
import { dataStore } from "../atoms/dataAtom";

const edgeTypes = {
  custom: CustomEdge,
};

const nodeTypes = {
  Start: NODES.Start,
  Stop: NODES.Stop,
  DropDuplicates: NODES.DropDuplicates,
  Add: NODES.Add,
  Integer: NODES.Integer,
  File: NODES.File,
  Output: NODES.Output,
  Sub: NODES.Sub,
  Mul: NODES.Multiply,
  IsNull: NODES.IsNull,
  Div: NODES.Divide,
  Float: NODES.Float,
  Char: NODES.Char,
  String: NODES.String,
  StandardScaler: NODES.StandardScaler,
  FitTransform: NODES.FitTransform,
  LabelEncoder: NODES.LabelEncoder,
  LogisticRegression: NODES.LogisticRegression,
  DecisionTree: NODES.DecisionTree,
  KNN: NODES.KNN,
  RandomForest: NODES.RandomForest,
  Bool: NODES.Bool,
};

// store.setState("data", []);

const initialElements = [
  {
    id: "start",
    type: "Start",
    data: { label: "Start node" },
    position: { x: 100, y: 400 },
  },
  // {
  //   id: "stop",
  //   type: "Stop",
  //   data: { label: "Stop node" },
  //   position: { x: 500, y: 400 },
  // },
];

let id = 0;
// let node = {
//   ADD: "operation",
//   SUBTRACT: "operation",
//   MULTIPLY: "operation",
//   DIVIDE: "operation",
// };
const getId = (type) => `${type}_${id++}`;

const DnDFlow = () => {
  const reactFlowWrapper = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const [queue, setQueue] = useState(["start"]);
  // const [data, setData, updateData] = useGlobalState("data");
  const [data, setData] = useRecoilState(dataStore);

  console.log(data);

  const onEdgeUpdate = (oldEdge, newConnection) =>
    setElements((els) => updateEdge(oldEdge, newConnection, els));

  // const onConnect = (params) => setElements((els) => addEdge(params, els));
  const onConnect = (event) => {
    const fromNode = event.source.split("__")[0];
    const toNode = event.target.split("__")[0];
    let flag = false;
    for (let i = 0; i < queue.length; i++) {
      if (queue[i] === toNode) {
        flag = true;
      }
    }
    if (!flag) {
      setQueue(queue.concat(toNode));
    }
    //prevent self-linking
    if (fromNode === toNode) return;
    //prevent reduntant links
    if (
      elements.some(
        (elm) =>
          (elm.source === fromNode && elm.target === toNode) ||
          (elm.source === toNode && elm.target === fromNode)
      )
    )
      return;
    setElements((els) => addEdge(event, els));
    if (fromNode.split("_")[0] === "input") {
      setData(data.concat({ fromNode: fromNode, value: data }));
      // setData(data.concat());
      // setData(data.push({ fromNode: fromNode, value: data }));
    }
    console.log(fromNode.split("_")[0]);
    // console.log(data.concat({ fromNode: fromNode, value: data }));
  };

  const onElementsRemove = (elementsToRemove) =>
    setElements((els) => removeElements(elementsToRemove, els));

  const onLoad = (_reactFlowInstance) =>
    setReactFlowInstance(_reactFlowInstance);

  const onDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  };

  const onDrop = (event) => {
    event.preventDefault();

    const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
    const type = event.dataTransfer.getData("application/reactflow");
    const data = event.dataTransfer.getData("text");

    console.log("e", event);

    const position = reactFlowInstance.project({
      x: event.clientX - reactFlowBounds.left,
      y: event.clientY - reactFlowBounds.top,
    });

    let id = getId(type)
    const newNode = {
      id: id,
      type,
      position,
      data: {
        id: id,
        label: `${data} node`,
        type: `${type}`,
        value: `value`,
      },
    };

    setElements((es) => es.concat(newNode));
  };

  const [elements, setElements] = useState(initialElements);
  // let getNodes = async () => {
  //   let response = (await fetch("/api/scripts/")).json();
  //   return response;
  //   setElements(data);
  // };

  useEffect(() => {
    console.log("elements", elements);
  }, [elements]);
  return (
    <DataContext.Provider value={queue}>
      <div className="dndflow w-full h-screen bg-gray-500 select-none">
        <ReactFlowProvider className="overflow-hidden flex flex-col">
          <Sidebar queue={queue} data={data} elements={elements} />

          <div
            className="reactflow-wrapper overflow-hidden flex flex-col"
            ref={reactFlowWrapper}
          >
            <ReactFlow
              elements={elements}
              onConnect={onConnect}
              onElementsRemove={onElementsRemove}
              edgeTypes={edgeTypes}
              nodeTypes={nodeTypes}
              connectionLineComponent={ConnectionLine}
              connectionLineType={"custom"}
              onLoad={onLoad}
              onDrop={onDrop}
              onDragOver={onDragOver}
              onEdgeUpdate={onEdgeUpdate}
              deleteKeyCode={46}
              className="overflow-hidden absolute"
            >
              <Controls />
            </ReactFlow>
          </div>
          {/* <Terminal /> */}
        </ReactFlowProvider>
      </div>
    </DataContext.Provider>
  );
};

export default DnDFlow;

// create stack, export stack to backend and use it for execution sequence
// unique id
// queue implementation
// 1 -> Add
