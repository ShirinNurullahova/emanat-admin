import React, { useState, useRef, useCallback, useEffect } from "react";
import { EDITOR_JS_TOOLS } from "../../components/editor/tools/editor-tools";
import { createReactEditorJS } from "react-editor-js";
import Undo from "editorjs-undo";
import DragDrop from "editorjs-drag-drop";
import "./editor.css";
export default function Editor({ customStyles, placeholder, value }) {
  const editorCore = useRef(null);
  const ReactEditorJS = createReactEditorJS();
  const [data, setData] = useState(null);
  const handleInitialize = useCallback((instance) => {
    instance._editorJS.isReady
      .then(() => {
        editorCore.current = instance;
        new Undo({ editor: instance._editorJS });
        new DragDrop(instance._editorJS);
      })
      .catch((err) => console.log("An error occured", err));
  }, []);

  const handleSave = useCallback(async () => {
    const savedData = await editorCore?.current?.save();
    const mainData = JSON.parse(localStorage.getItem("editorData")) || value;
    const copyValue = { ...mainData };
    copyValue[placeholder] = savedData;
    localStorage.setItem("editorData", JSON.stringify(copyValue));
  }, [setData]);
  console.log(JSON.parse(localStorage.getItem("editorData")));
  return (
    <div>
      <div style={customStyles} id="editorjs">
        <ReactEditorJS
          onInitialize={handleInitialize}
          tools={EDITOR_JS_TOOLS}
          holder={placeholder}
          placeholder="Bura yazın"
          onChange={() => handleSave()}
          defaultValue={{
            blocks: JSON.parse(localStorage.getItem("editorData"))
              ? JSON.parse(localStorage.getItem("editorData"))[placeholder]
                  ?.blocks
                ? JSON.parse(localStorage.getItem("editorData"))[placeholder]
                    ?.blocks
                : JSON.parse(JSON.parse(localStorage.getItem("editorData"))[placeholder])
                    ?.blocks
              : [],
          }}
        />
      </div>
    </div>
  );
}
