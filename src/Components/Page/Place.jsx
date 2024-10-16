
import '../../Page.css';
import React,{useState} from "react";
import "../.././Wedding.css";
import 'reactjs-popup/dist/index.css';
import { Map, Marker } from 'pigeon-maps'
import { Stack } from '@mui/material';

var first = true;

function Place() {
  const [center, setCenter] = useState([45.9635, -66.6431]);
  const [zoom, setZoom] = useState(11);
  const [hue, setHue] = useState(0);
  const [markers, setMarkers] = useState(1);
  const [userLocation, setUserLocation] = useState({x:undefined,y:undefined});
  const radiusInM = 50 * 1000;
  const [markerLocations, setMarkerLocations] = useState(
    {
      data:[[45.9635, -66.6431],]
    }
  )
  var storagedata;
 try{
    storagedata = JSON.parse(localStorage.getItem('storagedata'));
    //console.log(storagedata);
    if(storagedata==null)
    {
     
      storagedata={
        location: markerLocations,
      }
    }
    if(first)
    {
      console.log("firstIF");
      const sd = storagedata.location;
      console.log(sd);
      if(sd != undefined){
        console.log(sd)
      setMarkerLocations(sd);
     
      setMarkers(countArray(sd.data));
      }
      first = false;
    }
  }
  catch(error){
    console.log(error);
    storagedata = {
      location:markerLocations,
    };
  }
  function success(pos) {
    const crd = pos.coords;
     setUserLocation({x: crd.latitude, y: crd.longitude});
     storagedata.markerLocations = markerLocations;
     localStorage.setItem("storagedata", JSON.stringify(storagedata))
     //console.log("location",crd.latitude,crd.longitude)
  }
  navigator.geolocation.getCurrentPosition(success);

  
  function locationSnapshot(){
    const snapshot = userLocation;
    addMarker(snapshot.x, snapshot.y);
    storagedata.location.data.push([snapshot.x,snapshot.y]);
    localStorage.setItem("storagedata", JSON.stringify(storagedata))
    console.log("StorgeData: ",storagedata);
  }
  function clear(){
    storagedata = {location: {data:null}}
    localStorage.setItem("storagedata", JSON.stringify(storagedata))
  }
  function countArray(myArr) {
    let objectsLen = 0;
    for (let i = 0; i < myArr.length; i++) {

      if (myArr[i] instanceof Object) {
          objectsLen++;
      }
    }
    return objectsLen;
  }
  const exportData = () => {
    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
      JSON.stringify(storagedata)
    )}`;
    const link = document.createElement("a");
    link.href = jsonString;
    link.download = "data.json";

    link.click();
  };
  function addMarker(latin, lngin) {
     let hold = markerLocations;
     hold.data[hold.data.length] = [latin, lngin] ;
     setMarkerLocations(hold);
     setMarkers(markers+1);
    console.log(markerLocations.data);
  }
  const color = `hsl(${hue % 360}deg 39% 70%)`;
  return (
    <div> 
      <Stack>
      <span className="partyTitle">Find Saftey Equipment In Your Area</span>
      <div className ='centered'>
      <header></header>
      
    
      <Map 
        height="50%"
        width="50%"
        className="rcorners1"
        center={center} 
        zoom={zoom} 
        onBoundsChanged={({ center, zoom }) => { 
          setCenter(center) 
          setZoom(zoom) 
        }} 
      >
         {[...Array(markers).keys()].map((markers, i) => {
      return <Marker key={i} width={50} anchor={markerLocations.data[i]} color={color} 
      onClick={() => setHue(hue + 20)} />;
    })}
        </Map>
       {/* </div> </Box> */}
      </div>
      <button onClick={locationSnapshot}>location snapshot</button>
      <button
            onClick={exportData}
          >
            Download Json
          </button>
      </Stack>
      <button onClick={clear}>Clear Data</button>
    </div>

  )
}
export default Place;
