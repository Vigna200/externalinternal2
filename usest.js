import { useState } from "react";
export default function Sum(){
    const [count,setCount]=useState(0);
    const increment=()=>{
        setCount(count+1);
    }
    return(
        <div>
            <h1>Increasing</h1>
            <h2>count:{count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={()=>{setCount(count-1)}}>Decrement</button>
        </div>
    )
}