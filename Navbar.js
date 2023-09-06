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

    const [text,setText] = useState("write something here!") // this setText is an updated value of text.
  return (
    <>
    <div>
<div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="10" value={text} onChange = {changing_func}></textarea>
</div>
    </div>
    <div className="button here">
        <button className = "btn btn-primary" onClick={func1}>Click Here to convert to uppercase {props.current_action}</button>
    </div>
    </>
  )
}
