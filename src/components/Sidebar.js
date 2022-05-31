import React, { useEffect, useRef, useState } from "react";
import "../styles/misc.css";
import { useRecoilState } from "recoil";
import { Output } from "../atoms/outputAtom";

function Sidebar({ queue, data, elements }) {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };
  const [scripts, setScripts] = useState([]);
  const [file, setFile] = useState([]);
  const filePickerRef = useRef(null)
  const [sid, setSid] = useState();
  const [op, setOp] = useRecoilState(Output);

  // axios.post(url, form_data, {
  //     headers: {
  //       'content-type': 'multipart/form-data'
  //     }
  //   })
  //       .then(res => {
  //         console.log(res.data);
  //       })
  //       .catch(err => console.log(err))
  // };

  // const docRef = await fetch("http://127.0.0.1:8000/api/scripts/create/", {
  //   method: "POST",
  //   headers: { "Content-Type": '"multipart/form-data"' },
  //   body: '',
  // });

  const addScript = async () => {
    await fetch(`http://127.0.0.1:8000/api/scripts/create/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ elements: elements, data: data }),
    });
  };
  const getScripts = async () => {
    let response = await fetch(`http://127.0.0.1:8000/api/scripts/`);
    let data = await response.json();
    setScripts(data);
    // console.log(data);
  };

  const exeScript = async () => {
    let response = await fetch(
      `http://127.0.0.1:8000/api/scripts/${sid}/execute/`
    );
    let data = await response.json();
    // setOp(data);
    console.log(data);
  };

  useEffect(() => {
    console.log("script", scripts[0]?.id);
    // console.log(sid);
    // console.log('elements', elements);
    setSid(scripts[0]?.id);
  }, [scripts]);

  return (
    <aside className="flex flex-col justify-between h-screen">
      <div className="sidebar flex flex-col overflow-y-scroll">
        <div className="mb-2 h-auto">
          <span className="font-semibold uppercase tracking-widest">Basic</span>
          <div
            className="Add border bg-green-500 rounded text-white p-2 font-semibold tracking-widest uppercase"
            onDragStart={(event) => onDragStart(event, "Add")}
            draggable
          >
            Add
          </div>
          <div
            className="Sub border bg-green-500 rounded text-white p-2 font-semibold tracking-widest uppercase"
            onDragStart={(event) => onDragStart(event, "Sub")}
            draggable
          >
            Sub
          </div>
          <div
            className="Mul border bg-green-500 rounded text-white p-2 font-semibold tracking-widest uppercase"
            onDragStart={(event) => onDragStart(event, "Mul")}
            draggable
          >
            Multiply
          </div>
          <div
            className="Add border bg-green-500 rounded text-white p-2 font-semibold tracking-widest uppercase"
            onDragStart={(event) => onDragStart(event, "Div")}
            draggable
          >
            Divide
          </div>
        </div>
        <div className="mb-2 h-auto">
          <span className="font-semibold uppercase tracking-widest">Data</span>
          <div
            className="Integer border bg-blue-500 rounded text-white p-2 font-semibold tracking-widest uppercase"
            onDragStart={(event) => onDragStart(event, "Integer")}
            draggable
          >
            Integer
          </div>
          <div
            className="Integer border bg-blue-500 rounded text-white p-2 font-semibold tracking-widest uppercase"
            onDragStart={(event) => onDragStart(event, "Float")}
            draggable
          >
            Float
          </div>
          <div
            className="Integer border bg-blue-500 rounded text-white p-2 font-semibold tracking-widest uppercase"
            onDragStart={(event) => onDragStart(event, "Char")}
            draggable
          >
            Char
          </div>
          <div
            className="Integer border bg-blue-500 rounded text-white p-2 font-semibold tracking-widest uppercase"
            onDragStart={(event) => onDragStart(event, "Bool")}
            draggable
          >
            Bool
          </div>
          <div
            className="Integer border bg-blue-500 rounded text-white p-2 font-semibold tracking-widest uppercase"
            onDragStart={(event) => onDragStart(event, "String")}
            draggable
          >
            String
          </div>
          <div
            className="Integer border bg-blue-500 rounded text-white p-2 font-semibold tracking-widest uppercase"
            onDragStart={(event) => onDragStart(event, "File")}
            draggable
          >
            File
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
          <div
            className="Start border bg-purple-500 rounded text-white p-2 font-semibold tracking-widest uppercase"
            onDragStart={(event) => onDragStart(event, "IsNull")}
            draggable
          >
            Is NUll
          </div>
          <div
            className="Start border bg-purple-500 rounded text-white p-2 font-semibold tracking-widest uppercase"
            onDragStart={(event) => onDragStart(event, "StandardScaler")}
            draggable
          >
            Standard Scaler
          </div>
          <div
            className="Start border bg-purple-500 rounded text-white p-2 font-semibold tracking-widest uppercase"
            onDragStart={(event) => onDragStart(event, "FitTransform")}
            draggable
          >
            Fit Transform
          </div>

          <div
            className="Start border bg-purple-500 rounded text-white p-2 font-semibold tracking-widest uppercase"
            onDragStart={(event) => onDragStart(event, "LabelEncoder")}
            draggable
          >
            Label Encoder
          </div>
        </div>

        <div className="mb-2 h-auto">
          <span className="font-semibold uppercase tracking-widest">
            ML MODELS
          </span>
          <div
            className="Start border bg-pink-500 rounded text-white p-2 font-semibold tracking-widest uppercase"
            onDragStart={(event) => onDragStart(event, "LogisticRegression")}
            draggable
          >
            Logistic Regression
          </div>
          <div
            className="Start border bg-pink-500 rounded text-white p-2 font-semibold tracking-widest uppercase"
            onDragStart={(event) => onDragStart(event, "DecisionTree")}
            draggable
          >
            Decision Tree
          </div>
          <div
            className="Start border bg-pink-500 rounded text-white p-2 font-semibold tracking-widest uppercase"
            onDragStart={(event) => onDragStart(event, "RandomForest")}
            draggable
          >
            Random Forest
          </div>
          <div
            className="Start border bg-pink-500 rounded text-white p-2 font-semibold tracking-widest uppercase"
            onDragStart={(event) => onDragStart(event, "KNN")}
            draggable
          >
            KNN
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
            className="Start border bg-gray-500 rounded text-white p-2 font-semibold tracking-widest uppercase"
            onDragStart={(event) => onDragStart(event, "Output")}
            draggable
          >
            OUTPUT
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
      <div className="flex flex-col w-full h-auto">
        <div className="mb-2">
          <button
            type="button"
            className="w-full bg-blue-500 text-white rounded h-10 p-2 cursor-pointer"
            onClick={exeScript}
          >
            Execute
          </button>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            className="bg-blue-500 text-white rounded w-20 h-10  p-2cursor-pointer"
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
      </div>
    </aside>
  );
}

export default Sidebar;
