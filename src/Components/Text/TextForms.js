import React,{useState} from 'react';

const TextForms = (props) => {
    const [text, setText]= useState("");
    const handleClick=()=>{
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleLowerClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
    }
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }
    const handleClearClick=()=>{
        let newText="";
        setText(newText);
    }
    
    // const newText=text.toUpperCase;
    // setText(newText);
    return (
    <div>
        <h1>{props.header}</h1>
        <div className="container mb-3">
        <textarea className="form-control" value={text} id="exampleFormControlTextarea1" rows="8" onChange={handleOnChange} >{text}</textarea>
        </div>
        <div>
        <button className='btn btn-primary mx-2' onClick={handleClick}>Convert to UpperCase</button>
        <button className='btn btn-primary mx-3' onClick={handleLowerClick}>Convert to LowerCase</button>
        </div>
        <button className='btn btn-danger my-3' onClick={handleClearClick}>Clear Text</button>
        <div className="my-2 border-bottom">
            <h1>Your Text Summary Is-</h1>
            <h4>Words: {text.split(" ").length}, Letter: {text.length}</h4>
            <p><strong> Avg.Time to Read: {0.008*text.split(" ").length}min</strong></p>
        </div>
    </div>
    );
};

export default TextForms;