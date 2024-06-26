import ".././PlanGame.css";
import React, { useState, useEffect } from "react";
import Draggable from 'react-draggable';

function PlanGame() {
  const [file, setFile] = useState(process.env.PUBLIC_URL + "/dog.png");
  const [settings, setSettingsOpen] = useState(false);
  const [areas, setAreas] = useState(0);
  const [data, setData] = useState({ areas: 0, text: [], position: { x: 0, y: 0 } });

  useEffect(() => {
    try {
      const storedData = JSON.parse(localStorage.getItem('data'));
      if (storedData) {
        setData(storedData);
        setAreas(storedData.areas);
      }
      
      const storedImage = localStorage.getItem('uploadedImage');
      if (storedImage) {
        setFile(storedImage);
      }
    } catch (error) {
      console.log(error);
      setData({ areas: 0, text: [], position: { x: 0, y: 0 } });
    }
  }, []);

  function handleChange(e) {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result;
      setFile(base64String);
      localStorage.setItem('uploadedImage', base64String);
    };
    reader.readAsDataURL(file);
  }

  function handleDelete() {
    setFile(process.env.PUBLIC_URL + "/dog.png")
    setAreas(0);
    const newData = { areas: 0, text: [], position: { x: 0, y: 0 } };
    setData(newData);
    localStorage.setItem('data', JSON.stringify(newData));
    localStorage.removeItem('uploadedImage');
    localStorage.setItem('uploadedImage', process.env.PUBLIC_URL + "/dog.png");
  }

  function openSettings() {
    setSettingsOpen(true);
  }

  function newArea() {
    const newAreas = areas + 1;
    const newData = { ...data, areas: newAreas };
    setAreas(newAreas);
    setData(newData);
    localStorage.setItem('data', JSON.stringify(newData));
  }

  function closeSettings() {
    setSettingsOpen(false);
  }

  function handleTextChange(index, value) {
    const newText = [...data.text];
    newText[index] = value;
    const newData = { ...data, text: newText };
    setData(newData);
    localStorage.setItem('data', JSON.stringify(newData));
  }

  function handleDrag(e, position) {
    const { x, y } = position;
    const newData = { ...data, position: { x, y } };
    setData(newData);
    localStorage.setItem('data', JSON.stringify(newData));
  }

  return (
    <div>
      {settings && (
        <div className="background">
          <div className="div1">
            <label className="fileLabel">
              <input type="file" onChange={handleChange} />
              Choose Image
            </label>
          </div>
          <div className="div2">
            <button className="button2" onClick={closeSettings}>Return</button>
          </div>
          <div className="rightAlign">
            <button className="clearButton" onClick={handleDelete}>Clear</button>
          </div>
        </div>
      )}

      {!settings && (
        <div className="background">
          {[...Array(areas).keys()].map((area, i) => (
            <textarea
              key={i}
              id={'TA' + i}
              defaultValue={data.text[i] || "Enter here"}
              className="input"
              onChange={(event) => handleTextChange(i, event.target.value)}
            />
          ))}
          <button className="button1" onClick={newArea}>+</button>
          <div>
            <button className="settingsButton" onClick={openSettings}>
              <img src={process.env.PUBLIC_URL + "/gear.png"} height='50px' width='50px' className="background" alt="settings icon"/>
            </button>
          </div>
          <Draggable position={data.position} onStop={handleDrag}>
            <img id={process.env.PUBLIC_URL + "/" + file} className="absolute" src={file} draggable={false} alt="draggable"/>
          </Draggable>  
        </div>
      )}
    </div>
  );
}

export default PlanGame;
