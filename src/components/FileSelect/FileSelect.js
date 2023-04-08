import "./FileSelect.css";
import ListGroup from "react-bootstrap/ListGroup";
import { useState } from "react";

export const FileSelect = (props) => {
  const [activeFile, setActiveFile] = useState("");
  let availableFiles = [
    "Collection_Video",
    "Basic_View",
    "Trajectory_Map"
  ];

  const handleSelect = (value) => {
    setActiveFile(value.itemName);
    props.callbackFromParent(value.itemName);
  };

  return (
    <div className="fileselect-container d-flex justify-content-center">
      <div className="fileselect">
        <ListGroup bg="dark" variant="dark">
          {availableFiles.map((itemName) => (
            <ListGroup.Item
            key={itemName}
              bg="dark"
              variant="dark"
              className={"file-item " + (itemName===activeFile ? 'selected-file' : '')}
              onClick={() => handleSelect({ itemName })}
            >
              {itemName}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    </div>
  );
};
