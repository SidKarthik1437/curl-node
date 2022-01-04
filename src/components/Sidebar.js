import React from "react";

function Sidebar({ elements }) {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  const addScript = async () => {
    await fetch(`http://127.0.0.1:8000/api/scripts/create/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(elements),
    });
  };
  const getScripts = async () => {
    let response = await fetch(`http://127.0.0.1:8000/api/scripts/`);
    let data = await response.json();
    console.log(data);
  };

  return (
    <aside className="flex flex-col justify-between h-full">
      <div className="description">
        You can drag these nodes to the pane on the right.
      </div>
      <div className="flex flex-col h-full">
        <div className="mb-2 h-auto">
          <span className="font-semibold uppercase tracking-widest">
            Basic
          </span>
          <div
            className="Add border bg-green-500 rounded text-white p-2 font-semibold tracking-widest uppercase"
            onDragStart={(event) => onDragStart(event, "Add")}
            draggable
          >
            Add
          </div>
          <div
            className="Integer border bg-blue-500 rounded text-white p-2 font-semibold tracking-widest uppercase"
            onDragStart={(event) => onDragStart(event, "Integer")}
            draggable
          >
            Integer
          </div>
        </div>
        <div className="mb-2 h-auto">
          <span className="font-semibold uppercase tracking-widest">
            Data Cleaning
          </span>
          <div
            className="Start border bg-purple-500 rounded text-white p-2 font-semibold tracking-widest uppercase"
            onDragStart={(event) => onDragStart(event, "DropDuplicates")}
            draggable
          >
            Drop duplicates
          </div>
        </div>
        <div>
          <span className="font-semibold uppercase tracking-widest">
            Execution
          </span>
          <div
            className="Start border bg-yellow-500 rounded text-white p-2 font-semibold tracking-widest uppercase"
            onDragStart={(event) => onDragStart(event, "Start")}
            draggable
          >
            START
          </div>
          <div
            className="Stop border bg-red-500 rounded text-white p-2 font-semibold tracking-widest uppercase"
            onDragStart={(event) => onDragStart(event, "Stop")}
            draggable
          >
            STOP
          </div>
        </div>
      </div>
      <div className="flex gap-4 w-full h-auto">
        <button
          type="button"
          className="bg-blue-500 text-white rounded w-20 h-10 p-2 cursor-pointer"
          onClick={addScript}
        >
          POST
        </button>
        <button
          type="button"
          className=" bg-blue-500 text-white rounded w-20 h-10 p-2 cursor-pointer"
          onClick={getScripts}
        >
          GET
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
