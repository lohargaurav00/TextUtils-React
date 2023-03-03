import React, { useState } from "react";

export default function TextForm(props) {
  const upperText = () => {
    let newText = text.toUpperCase();
    setText(newText);
    let preview = document.getElementById("preview");
    preview.hidden = false
    props.show_alert("Converted to Uppercase.", "success");
  };
  
  const lowerText = () => {
    let newText = text.toLowerCase();
    setText(newText);
    let preview = document.getElementById("preview");
    preview.hidden = false
    props.show_alert("Converted to Lowercase.", "success");
  };
  
  const previewText = () =>{
    let preview = document.getElementById("preview");
    if (preview.hidden === true){
      preview.hidden = false
      props.show_alert("Text Preview is Enabled.", "success");
    }
    else{
      preview.hidden = true
      props.show_alert("Text Preview is Disabled.", "success");
    };
  };
  
  const speakText = () =>{
    let newText = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(newText);
    props.show_alert("Text is converted to voice.", "success");
  };
  
  const clearText = () =>{
    let newText = ''
    setText(newText);
    props.show_alert("Text is cleared.", "success");
  };

  const handleonChange = (e) => {
    setText(e.target.value);
  };

  const [text, setText] = useState('');
  return (
    <>
      <div className="container" style={{color: props.Theme ==="light"?"black":"white"}}>
        <h1> {props.heading} </h1>
        <textarea className="form-control" id="Mytext" rows="8" value={text} style={{backgroundColor: props.Theme ==="dark"?"#121212":"white", color: props.Theme ==="light"?"black":"white"}} onChange={handleonChange}></textarea>
        <button disabled={text.length===0} className="btn btn-primary my-2 mx-1" onClick={upperText}>Convert to UPPERCASE</button>
        <button disabled={text.length===0} className="btn btn-primary my-2 mx-1" onClick={lowerText}>Convert to lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary my-2 mx-1" onClick={previewText}>Preview</button>
        <button disabled={text.length===0} className="btn btn-primary my-2 mx-1" onClick={speakText}>Speak Text</button>
        <button disabled={text.length===0} className="btn btn-primary my-2 mx-1" onClick={clearText}>Clear Text</button>
      </div>
      <div className="container" style={{color: props.Theme ==="light"?"black":"white"}}>
          <h2>Your text summary</h2>
          <p><b>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</b> No. of words and <b>{text.length}</b> No. of characters</p>
          <p> Estimate time required to Read = <b> {0.008* text.split(' ').filter((element)=>{return element.length!==0}).length} Minutes</b></p>
          <div id="preview" hidden>
            <h4>Preview</h4>
            <p> {text} </p>
          </div>
      </div>
    </>
  );
}
