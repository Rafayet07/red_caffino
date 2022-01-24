import React, { useEffect, useState } from 'react';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export default function SettingsPage() {
  const localdata=localStorage.getItem("setting");

  const [settings, setSettings] = useState(localdata?JSON.parse(localdata):{
    "--background-color": "#fff",
    "--background-light": "#fff",
    "--primary-color": "rgb(255, 0, 86)",
    "--shadow-color": "rgba(0,0,0,0.2)",
    "--text-color": "#0A0A0A",
    "--text-light": "#575757",
    "--font-size": "16px",
    "--animation-speed": 1
})


useEffect(()=>{
    const root=document.documentElement;
    for(let key in settings){
      root.style.setProperty(key,settings[key]);
      localStorage.setItem("setting",JSON.stringify(settings)); 
    } 
    
},[settings]);

  const primaryColors = [
    "rgb(255, 0, 86)",
    "rgb(33, 150, 243)",
    "rgb(255, 193, 7)",
    "rgb(0, 200, 83)",
    "rgb(156, 39, 176)"
]

const fontSizes = [
  {
      title: "Small",
      value: "12px"
  },
  {
      title: "Medium",
      value: "16px"
  },
  {
      title: "Large",
      value: "20px"
  }
]

const animationSpeeds = [
  {
        title: "Slow",
        value: 2
  },
  {
        title: "Medium",
        value: 1
  },
  {
        title: "Fast",
        value: .5
  }
]

const localtheme=localStorage.getItem("theme");

  const[activetheme,setActivetheme]=useState(localtheme?localtheme:"light");

  useEffect(()=>{
    localStorage.setItem("theme",activetheme);
  },[activetheme]);
  const themes = [
    {
        "--background-color": "#fff",
        "--background-light": "#fff",
        "--shadow-color": "rgba(0,0,0,0.2)",
        "--text-color": "#0A0A0A",
        "--text-light": "#575757"
    },
    {
        "--background-color": "rgb(29, 29, 29)",
        "--background-light": "rgb(77, 77, 77)",
        "--shadow-color": "rgba(0,0,0,0.2)",
        "--text-color": "#ffffff",
        "--text-light": "#eceaea",
    }
]

function changeTheme(i){
    const _theme={...themes[i]};
    setActivetheme(i===0?"light":"dark");
    
    //update settings
    let _settings={...settings};
    for(let key in _theme){
      _settings[key]=_theme[key];
    }
    setSettings(_settings);
}



const localprimaryColor=localStorage.getItem("primaryColor");
  const[primaryColor,setPrimaryColor]=useState(localprimaryColor?JSON.parse(localprimaryColor):0);

  useEffect(()=>{
    localStorage.setItem("primaryColor",JSON.stringify(primaryColor));
  },[primaryColor]);

  function changeColor(i){
    const _color=primaryColors[i];
    let _settings={...settings};
    _settings["--primary-color"]=_color;
    setPrimaryColor(i);
    setSettings(_settings);
  }
  const localFontSize=localStorage.getItem("fontSize");
  const[fontSize,setfontSize]=useState(localFontSize?JSON.parse(localFontSize):1);

  useEffect(()=>{
    localStorage.setItem("fontSize",JSON.stringify(fontSize));
  },[fontSize]);

  function changeFontSize(i){
    const _size=fontSizes[i];
    let _settings={...settings};
    _settings["--font-size"]=_size.value;
    setfontSize(i);
    setSettings(_settings);
  }

  const localAnimationSpeed=localStorage.getItem("animationSpeed");
  const [animationSpeed, setAnimationSpeed] = useState(localAnimationSpeed?JSON.parse(localAnimationSpeed):1);

  useEffect(()=>{
    localStorage.setItem("animationSpeed",JSON.stringify(animationSpeed));
  },[animationSpeed]);
  function changeAnimationSpeed(i){
    const _speed=animationSpeeds[i];
    let _settings={...settings};
    _settings["--animation-speed"]=_speed.value;
    setAnimationSpeed(i);
    setSettings(_settings);
  }
  return <>
           <div className='section d-block'>
             <h2>Preferred Theme</h2>
             <div className='options-container'>
                  <div className='option light' onClick={()=>changeTheme(0)}>
                  {activetheme==="light" && 
                     <div className='check'>
                       <FontAwesomeIcon icon={faCheck}/>
                     </div>
                  }
                  </div>
                  <div className='option dark' onClick={()=>changeTheme(1)}>
                  {activetheme==="dark" && 
                     <div className='check'>
                       <FontAwesomeIcon icon={faCheck}/>
                     </div>
                  }
                  </div>
                  
             </div>
           </div>;
           <div className="section d-block">
                <h2>Preferred color</h2>
                <div className="options-container">
                    { primaryColors.map((color, index) => (
                        <div key={index} className="option light" style={{backgroundColor: color}} onClick={()=>changeColor(index)} >
                            { primaryColor===index && (
                                <div className="check">
                                    <FontAwesomeIcon icon={faCheck} />
                                </div>
                            ) }
                        </div>
                    ))}
                </div>
            </div>
            <div className="section d-block">
                <h2>Font Size</h2>
                <div className="options-container">
                    { fontSizes.map((size, index) => (
                        <button key={index} className="btn" onClick={()=>changeFontSize(index)}>
                        {size.title}
                        {fontSize===index &&
                         <span><FontAwesomeIcon icon={faCheck} /></span> 
                        }
                        </button>
                    ))}
                </div>
            </div>
            <div className="section d-block">
                <h2>Animation Speed</h2>
                <div className="options-container">
                    {animationSpeeds.map((Speed, index) => (
                        <button key={index} className="btn" onClick={()=>changeAnimationSpeed(index)}>
                        {Speed.title}
                        {animationSpeed===index &&
                         <span><FontAwesomeIcon icon={faCheck} /></span> 
                        }
                        </button>
                    ))}
                </div>
            </div>
    </>
}
