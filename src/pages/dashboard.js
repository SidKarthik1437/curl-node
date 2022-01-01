import React, { useState, useRef, useEffect } from "react";
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  removeElements,
  Controls,
  updateEdge,
} from "react-flow-renderer";

import Sidebar from "../components/Sidebar";
import ConnectionLine from "../components/ConnectionLine";
import CustomEdge from "../components/CustomEdge";
import "../styles/dnd.css";
import * as NODES from "../nodes";

const edgeTypes = {
  custom: CustomEdge,
};

const nodeTypes = {
  Start: NODES.Start,
  Stop: NODES.Stop,
  DropDuplicates: NODES.DropDuplicates,
};

const initialElements = [
  {
    id: "1",
    type: "Start",
    data: { label: "Start node" },
    position: { x: 100, y: 400 },
  },
  {
    id: "2",
    type: "Stop",
    data: { label: "Stop node" },
    position: { x: 1500, y: 400 },
  },
];

let id = 0;
const getId = () => `dndnode_${id++}`;

const DnDFlow = () => {
  const reactFlowWrapper = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);

  const onEdgeUpdate = (oldEdge, newConnection) =>
    setElements((els) => updateEdge(oldEdge, newConnection, els));
  const onConnect = (params) => setElements((els) => addEdge(params, els));
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
    const position = reactFlowInstance.project({
      x: event.clientX - reactFlowBounds.left,
      y: event.clientY - reactFlowBounds.top,
    });
    const newNode = {
      id: getId(),
      type,
      position,
      data: { label: `${type} node` },
    };

    setElements((es) => es.concat(newNode));
  };

    const [elements, setElements] = useState(initialElements);
  let getNodes = async () => {
    let response = (await fetch("/api/scripts/")).json();
    return (response);
    // setElements(data);
  };


  return (
    <div className="dndflow w-full h-screen bg-gray-500">
      <ReactFlowProvider>
        <Sidebar elements={elements} />
        <div className="reactflow-wrapper" ref={reactFlowWrapper}>
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
            // key="edges"
          >
            <Controls />
          </ReactFlow>
        </div>
      </ReactFlowProvider>
    </div>
  );
};

export default DnDFlow;
