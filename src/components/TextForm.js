import React, { useState } from "react";

import PropTypes from "prop-types";
export default function TextForm(props) {
  //   Intial Text and State
  const [text, setText] = useState("");

  //   Text Updation----------------------------------------------------------------
  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };

  //   UpperCase Btn----------------------------------------------------------------

  const handleUpClick = () => {
    console.log("Upper Case Button Changed:" + " " + text);
    let newText = text.toUpperCase();
    setText(newText);
    if(text.length > 0){
      props.theAlert("Converted into Uppercase!","success");
    }
  };
  
  //   LowerCase btn----------------------------------------------------------------
  
  const handleLoClick = () => {
    console.log("Lower Case Button Changed:" + " " + text);
    let newText = text.toLowerCase();
    setText(newText);
    if(text.length > 0){
      props.theAlert("Converted into Lowercase!","success");
    }
  };
  
  //   Speak Button----------------------------------------------------------------
  
  const handleSpeakClick = () => {
    const myText = new SpeechSynthesisUtterance();
    myText.text = text;
    window.speechSynthesis.speak(myText);
  };
  
  //   Copy Button---------------------------------------------------------------
  
  const handleCopyClick = () => {
    var theText = document.getElementById("myBox");
    theText.select();
    navigator.clipboard.writeText(theText.value);
    if(text.length > 0){
      props.theAlert("Copied to Clipboard!","success");
    }
  };
  
  //   Remove Extra Spaces----------------------------------------------------------------
  
  const handleExtraSpaces = () => {
    const handledText = text.split(/[ ]+/);
    setText(handledText.join(" "));
    props.theAlert("Extra spaces removed!","success");
  };
  
  
  //   Clear Button----------------------------------------------------------------
  
  const handleClearClick = () => {
    console.log("Cleared: " + text);
    let newText = "";
    setText(newText);
    if(text.length > 0){
      props.theAlert("Cleared All!","success");
    }
  };

  //   Dark Mode/ Light Mode Switch----------------------------------------------------------------------

//   const [modeBtnText, setmodeBtnText] = useState("Enable Dark Mode");

//   const [modeStyle, setModeStyle] = useState({
//     color: "black",
//     backgroundColor: "white",
//   });
//   const toggleStyle = () => {
//     if (modeStyle.color === "black") {
//       setModeStyle({
//         color: "white",
//         backgroundColor: "black",
//         border: "2px solid white",
//       });
//       setmodeBtnText("Enable Light Mode");
//     } else {
//       setModeStyle({
//         color: "black",
//         backgroundColor: "white",
//       });
//       setmodeBtnText("Enable Dark Mode");
//     }
//   };

  //   Number of words---------------------------------------------------------

  const numberOfWords = () => {
    if (text.length == 0) {
      return 0;
    } else {
      return text.split(" ").length;
    }
  };
  return (
    <div >
      <div className="container " style={{color: props.mode ==='dark'? 'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            style = {{backgroundColor: props.mode ==='dark'? 'black':'white', color: props.mode ==='dark'? 'white':'black'}}
            value={text}
            onChange={handleOnChange}
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-success mx-1" onClick={handleUpClick}>
          Convert to uppercase
        </button>
        <button className="btn btn-success mx-1" onClick={handleLoClick}>
          Convert to lowercase
        </button>
        <button className="btn btn-success mx-1" onClick={handleSpeakClick}>
          Speak
        </button>
        <button className="btn btn-success mx-1" onClick={handleCopyClick}>
          Copy Text
        </button>
        <button className="btn btn-success mx-1" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
        <button className="btn btn-danger mx-1" onClick={handleClearClick}>
          Clear all
        </button>
        {/* <button className="btn btn-success mx-1" onClick={toggleStyle}>
          {modeBtnText}
        </button> */}
      </div>
      <div className="container my-3" style={{color: props.mode ==='dark'? 'white':'black'}}>
        <h1>Text Summary</h1>
        <p>
          {text.length} letters and {numberOfWords()} words
        </p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0? text: "Please Enter Something In The Textbox Above To Preview Here"}</p>
      </div>
    </div>
  );
}

TextForm.propTypes = { heading: PropTypes.string.isRequired };
TextForm.props = {
  heading: "set heading here",
};
