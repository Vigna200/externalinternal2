import { createContext, useContext, useState } from 'react';
const userContext=createContext();
export default function Component1(){
    const [user,setUser]=useState('cbit');
    return(
        <div>
        <userContext.Provider value={[user,setUser]}>
                <h1>Component1</h1>
                <h1>{`HI ${user}`}</h1>
                <Component2/>
        </userContext.Provider>
        </div>
    )
}
function Component2(){
    return(
        <div>
            <h1>component2</h1>
            <Component3 />
        </div>
    )
}
function Component3(){
    const [user]=useContext(userContext);
    return(
        <div>
            <h1>component3</h1>
            <h1>{`HI ${user} again`}</h1>
        </div>
    )}