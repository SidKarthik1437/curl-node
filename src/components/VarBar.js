import React, { useEffect, useRef, useState } from "react";
import "../styles/misc.css";
import { useRecoilState } from "recoil";
import { CurrentFileStore } from "../atoms/dataAtom";

function Sidebar({ queue, data, elements }) {
  const [files, setFiles] = useState([]);
  const filePickerRef = useRef(null);
  const [sid, setSid] = useState();
  const [currentFile, setCurrentFile] = useRecoilState(CurrentFileStore);

  const onDragStart = (event, nodeType, file) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.File = file;
  };
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

  const getFiles = async () => {
    let response = await fetch(`http://127.0.0.1:8000/api/files/`);
    let data = await response.json();
    setFiles(data);
    console.log("Files:", data);
  };

  return (
    <aside className="flex flex-col justify-between h-screen">
      <div className="sidebar flex flex-col overflow-y-scroll">
        {files.map((file) => (
          <div
            className="Add border bg-green-500 rounded text-white p-2 font-semibold tracking-widest uppercase"
            onDragStart={(event) => {
              setCurrentFile(file);
              let ev = {
                ...event,
                file: file,
              };
              onDragStart(ev, "FileRef", file);
              console.log(ev);
            }}
            draggable
            key={file.id}
          >
            {file.name}
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <button
          type="button"
          className=" bg-blue-500 text-white rounded w-full h-10 p-2 cursor-pointer"
          onClick={getFiles}
        >
          GET
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
