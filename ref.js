import { useRef } from "react";
export default function Focus(){
    const focus1=useRef(null);
    const completefocus=()=>{
        focus1.current.focus();
    }
    return(
        <div>
            <h1>Hello</h1>
            <input type="text" ref={focus1}></input>
            <button onClick={completefocus}>clicke me</button>
        </div>
    )
}