import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        setText("You have changed the value" + text)
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("success", "The uppercase has been set");
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("success", "The lowercase has been set");
    }

    const clearText = () => {
        setText("");
        props.showAlert("success", "The text has been cleared")
    }

    const handleCopy = () => {
        let newText = document.getElementById("myBox");
        newText.select();
        navigator.clipboard.writeText(newText.value);
        document.getSelection().removeAllRanges();
        props.showAlert("success", "The text has been copied")
    }

    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("success", "The sxtra space has been trimmed")
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState("");
  
  return (
    <>
    <div className="container1" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1 className='mb-4'>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value = {text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn mx-2 my-1" disabled = {text.length===0} style={{backgroundColor: props.mode==='dark'?'grey':'cadetblue', color:'white', fontWeight: 'bold'}} onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn mx-2 my-1" disabled = {text.length===0} style={{backgroundColor: props.mode==='dark'?'grey':'cadetblue', color:'white', fontWeight: 'bold'}} onClick={handleLowClick}>Convert to Lowercase</button>
        <button className="btn mx-2 my-1" disabled = {text.length===0} style={{backgroundColor: props.mode==='dark'?'grey':'cadetblue', color:'white', fontWeight: 'bold'}} onClick={clearText}>Clear Text</button>
        <button className="btn mx-2 my-1" disabled = {text.length===0} style={{backgroundColor: props.mode==='dark'?'grey':'cadetblue', color:'white', fontWeight: 'bold'}} onClick={handleCopy}>Copy Text</button>
        <button className="btn mx-2 my-2 my-1" disabled = {text.length===0} style={{backgroundColor: props.mode==='dark'?'grey':'cadetblue', color:'white', fontWeight: 'bold'}} onClick={handleExtraSpace}>Remove Exra Space</button>
    </div>

    <div className="container2" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h2 className="my-2">Your test summary</h2>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to complete the text the box</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview"}</p>
    </div>
    </>
  )
}