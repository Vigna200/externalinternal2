import { useEffect, useState } from "react";
export default function Incre(){
    const[count,setCount]=useState(0);
    useEffect(()=>{
        console.log("incremented")
    },[count]);
    return(
        <div>
            <h1>Counter</h1>
            <p>Count: {count}</p>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <button onClick={()=>setCount(count-1)}>Decrement</button>
            <button onClick={()=>setCount(0)}>Reset</button>
        </div>
    )
}