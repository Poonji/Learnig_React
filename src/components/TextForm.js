import React, {useState} from 'react'

export default function TextForm(props)
{
  const handleUpClick=()=>{
    console.log("uppercase was clicked" + text);
    let newText=text.toLocaleUpperCase();
    setText(newText)
  }

  const handleOnChange=(event)=>{
    console.log("on  change");
    setText(event.target.value);
  }
  const[text,setText]=useState('');
    return (
      <>
        <div className="container">
          <h1>{props.heading}</h1>
  <div className="mb-3">
    <label for="myBox" class="form-label">Enter your text below</label>
    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
   </div>
   <button className="button.btn.btn-primary" onClick={handleUpClick}>convert to uppercase </button>
 
  </div>
  <div className="container my-3">
    <h2>Your text summary here</h2>
    <p>{text.split(" ").length} words and {text.length} char</p>
    <p>{0.008*text.split(" ").length}Minutes read</p>
    <h3>Preview</h3>
    <p>{text}</p>

  </div>
      </>
  )
    }