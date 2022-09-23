import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const UseEffectHooksFuncAPICompo = () => {
    const [Counter,setCounter] = useState(0)
    const [Counter2,setCounter2] = useState(0)
    // useEffect(() => {
    //     fetch("https://jsonplaceholder.typicode.com/posts").then((res) => res.json()).then((res) => { console.log(res); })
    // })
    // useEffect(() => {
    //     fetch("https://jsonplaceholder.typicode.com/posts").then((res) => res.json()).then((res) => { console.log(res); })
    // },[])
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts").then((res) => res.json()).then((res) => { console.log(res); })
    },[Counter])
    return (
        <>
            <button onClick={()=>{setCounter(Counter+1)}}>Click increse State val {Counter}</button>
            <button onClick={()=>{setCounter2(Counter2+1)}}>Click increse State val {Counter2}</button>
            Conditional UseEffect Calling

        </>
    );
};

export default UseEffectHooksFuncAPICompo;