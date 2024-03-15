import ".././PlanGame.css"
import React, { useState } from "react";
import Draggable from 'react-draggable'; // Both at the same time


var first = true;
function PlanGame() {
  /*
    This project was inspired by and created for my 
    beautiful fiance Kira Smith <3
  */
    const [file, setFile] = useState(process.env.PUBLIC_URL +"/dog.png");
    const [settings, setSettingsOpen] = useState(false);
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
    const [ areas, setAreas ] = useState(1);
    var data;
   try{
      data = JSON.parse(localStorage.getItem('data'));
      if(data == null)
      {
        data = {
          areas: areas,
          text:[],
        };
      }
    }
    catch(error){
      console.log(error);
      data = {
        areas: areas,
        text:[],
      };
    }
    
    console.log(data);
    
  if(first)
  {
    setAreas(data.areas);
    first = false;
  }
  function handleDelete(e) {
    setAreas(1);
    data = {
      areas: areas,
      text:[],
    };
    localStorage.setItem('data',JSON.stringify(data));
  }
  function openSettings() {
    setSettingsOpen(true);
  };
  function closeSettings() {
    setSettingsOpen(false);
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
            {[...Array(areas).keys()].map((areas, i) => {
              return <textarea key={i} id={'TA'+i} placeholder={data.text[i] || "Enter here"} className="input" onChange={(event)=>{
                data.text[i] = event.target.value;
                data.areas = areas+1;
                localStorage.setItem('data',JSON.stringify(data));
              }} />;
            })}
            <button className="button1" onClick={() => setAreas(prev => (prev + 1))}>+</button>
            <div>
              <button className="settingsButton" onClick={openSettings}>
                <img src={process.env.PUBLIC_URL +"/gear.png"} height='50px' width='50px' className="background"></img>
              </button>
            </div>
            <Draggable onDrag={saveLocation}>
              <img id={process.env.PUBLIC_URL +"/"+file} className="absolute" src={file} draggable={false}/>
            </Draggable>  
          </div>
        )}
      </div>
    );
  };
  function saveLocation()
  {
  
  }


export default PlanGame;
