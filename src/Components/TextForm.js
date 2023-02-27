import React, { useState } from "react";

export default function TextForm(props) {
  const upperText = () => {
    let newText = text.toUpperCase();
    setText(newText);
    let preview = document.getElementById("preview");
    preview.hidden = false
    
  };
  const lowerText = () => {
    let newText = text.toLowerCase();
    setText(newText);
    let preview = document.getElementById("preview");
    preview.hidden = false
  };

  const previewText = () =>{
    let preview = document.getElementById("preview");
    if (preview.hidden === true){
      preview.hidden = false
    }
    else{
      preview.hidden = true
    }
  }

  const handleonChange = (e) => {
    setText(e.target.value);
  };

  const [text, setText] = useState("Enter your text");
  return (
    <>
      <div className="container">
        <h1> {props.heading} </h1>
        <textarea className="form-control" id="Mytext" rows="8" value={text} onChange={handleonChange}></textarea>
        <button className="btn btn-primary my-2 mx-1" onClick={upperText}>Convert to UPPERCASE</button>
        <button className="btn btn-primary my-2 mx-1" onClick={lowerText}>Convert to lowercase</button>
        <button className="btn btn-primary my-2 mx-1" onClick={previewText}>Preview</button>
      </div>
      <div className="container">
          <h2>Your text summary</h2>
          <p><b>{text.split(' ').length}</b> No. of words and <b>{text.length}</b> No. of characters</p>
          <p> Estimate time required to Read = <b> {0.008* text.split(' ').length} Minutes</b></p>
          <div id="preview" hidden>
            <h4>Preview</h4>
            <p> {text} </p>
          </div>
      </div>
    </>
  );
}
