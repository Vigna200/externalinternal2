import { useState } from "react";
function Virtual() {
  const [text,setText]=useState("wertyuiopighfcfghj")
  const hi=()=>{
    setText("text changed");
  }
  return (
    <div className="App">
      <h1>Welcome to the page</h1>
      <h2>{text}</h2>
      <button onClick={hi} >click me </button>
    </div>
  );
}

export default Virtual;
git init