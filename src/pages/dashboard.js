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
import ColorSelectorNode from "../nodes/DropDuplicates";

const edgeTypes = {
  custom: CustomEdge,
};

const nodeTypes = {
  selectorNode: ColorSelectorNode,
};

const initialElements = [
  {
    id: "1",
    type: "input",
    data: { label: "input node" },
    position: { x: 250, y: 5 },
  },
  {
    id: "2",
    type: "selectorNode",
    position: { x: 297, y: 162 },
    data: { label: "default node" },
  },
  {
    id: "3",
    type: "default",
    position: { x: 147, y: 339 },
    data: { label: "default node" },
  },
  {
    id: "4",
    type: "output",
    position: { x: 632, y: 359 },
    data: { label: "output node" },
    animated: true,
    style: { stroke: "white" },
  },
  {
    source: "1",
    sourceHandle: null,
    target: "2",
    targetHandle: null,
    id: "reactflow__edge-1null-2null",
    animated: true,
    style: { stroke: "white" },
  },
  {
    source: "2",
    sourceHandle: null,
    target: "3",
    targetHandle: null,
    id: "reactflow__edge-dndnode_0null-3null",
  },
  {
    source: "3",
    sourceHandle: null,
    target: "4",
    targetHandle: null,
    id: "reactflow__edge-3null-4null",
  },
];

let id = 0;
const getId = () => `dndnode_${id++}`;

const DnDFlow = () => {
  const reactFlowWrapper = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const [elements, setElements] = useState(initialElements);
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

  useEffect(() => {
    console.log(JSON.stringify(elements));
  }, [elements]);

  const addScript = async () => {
    await fetch(`http://127.0.0.1:8000/api/scripts/create/`, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(elements)
    })
  };
  const getScripts = async () => {
    let response = await fetch(`http://127.0.0.1:8000/api/scripts/`);
    let data = await response.json();
    console.log(data);
  };

  return (
    <div className="dndflow w-full h-screen bg-gray-500">
      <ReactFlowProvider>
        <Sidebar />
        <button type="button" className="bg-blue-500 text-white rounded" onClick={addScript}>
          POST
        </button>
        <button type="button" className="bg-blue-500 text-white rounded" onClick={getScripts}>
          GET
        </button>
        <div className="reactflow-wrapper" ref={reactFlowWrapper}>
          <ReactFlow
            elements={elements}
            onConnect={onConnect}
            onElementsRemove={onElementsRemove}
            edgeTypes={edgeTypes}
            nodeTypes={nodeTypes}
            connectionLineComponent={ConnectionLine}
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
