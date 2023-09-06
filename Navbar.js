import React,{useState} from 'react'

export default function Navbar(props) {

    function func1(){
        console.log(text);
        let new_text = text.toUpperCase();
        setText(new_text);
    }

    function changing_func(event){
        console.log("something trying to change")
        setText(event.target.value);
    }

    function clear_it(e){
        text = ""; //if text is const then this line will be an error
        setText(text);
    }

    let [text,setText] = useState("") // this setText is an updated value of text and it's a function.

  return (
    <>
    <div>
<div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="10" value={text} onChange = {changing_func}></textarea>
</div>
    </div>
    <div className="button here flex">
        <button className = "btn btn-primary mx-3" onClick={func1}>Click Here to convert to uppercase {props.current_action}</button> 
        <button className = "btn btn-primary mx-3" onClick={clear_it}>Clear the text area{props.current_action}</button>
    </div>

    <div className="summary my-5">
        <p><h2>Your Text Summary</h2></p>
        <p> Number of words are: {text.length === 0 ? 0 : text.split(" ").length} and number of characters are: {text.length}</p>
    </div>
    <div>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
