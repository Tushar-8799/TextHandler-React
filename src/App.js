import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from "react";
import Alert from './components/Alert';

import './App.css';
function App() {
  const [mode, setMode] = useState('light');  //Whether Dark Mode is enabled or not
  const [alert, setAlert] = useState(null);

  const theAlert = (messege, type) => {
    setAlert({
      msg: messege,
      type: type
    });
    setTimeout(()=>{
      setAlert(null);
    },2000);
  }

  const toggleMode = () => {
    if(mode === 'dark'){
      setMode('light');
      document.body.style.backgroundColor = '#adb5bd';
      theAlert("Light mode is enabled", "success")
      document.title = 'TextHandler - Light Mode Enabled';
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor = '#343a40';
      theAlert("Dark mode is enabled", "success")
      document.title = 'TextHandler - Dark Mode Enabled';
    }

  }
  return (
    <>
   <Navbar title = "TextHandler" mode = {mode} toggleMode = {toggleMode}/>
   <Alert alert={alert}/>
   <div className="container my-3">
   <TextForm heading = "Enter Your Text To Ananlyze below" mode = {mode} theAlert={theAlert}/>
   </div>
    </>
  );
}

export default App;
