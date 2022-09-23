import React, { useEffect, useState, useLayoutEffect } from 'react';

const UseLayoutEffectHooks = () => {
    const [Counter, setCounter] = useState(0)
    const [Counter2, setCounter2] = useState(0)
    useEffect(() => {
        setTimeout(() => {
            console.log("called useEffect");
        }, 3000);
    }, [])
    useLayoutEffect(() => {
        setTimeout(() => {
            console.log("called useLayoutEffect");
        }, 3000);
    }, [])
    console.log("called inside function");
    return (
        <>
            <button onClick={() => { setCounter(Counter + 1) }}>Click increse State val {Counter}</button>
            <button onClick={() => { setCounter2(Counter2 + 1) }}>Click increse State val {Counter2}</button>
            <p> If you’re migrating code from a class component, note useLayoutEffect fires in the same phase as componentDidMount and componentDidUpdate. However, we recommend starting with useEffect first and only trying useLayoutEffect if that causes a problem.</p>

            <p> If you use server rendering, keep in mind that neither useLayoutEffect nor useEffect can run until the JavaScript is downloaded. This is why React warns when a server-rendered component contains useLayoutEffect. To fix this, either move that logic to useEffect (if it isn’t necessary for the first render), or delay showing that component until after the client renders (if the HTML looks broken until useLayoutEffect runs).</p>

            <p> To exclude a component that needs layout effects from the server-rendered HTML, render it conditionally with showChild && &lt;Child /&gt; and defer showing it with useEffect(() =&gt; &#123;setShowChild(true); &#125;, []). This way, the UI doesn’t appear broken before hydration.</p>



            <p>First, you have to understand the different phases of Rendering.</p> 

           <p> A DOM mutation that is visible to the user must fire synchronously before the next paint so that the user does not perceive a visual inconsistency. We should use either useMutationEffect or useLayoutEffect for this specific case to perform blocking visual updates. The only difference between these two is we should use useLayoutEffect if we want to read Layout from the DOM. Otherwise, we should use useMutationEffect.</p>

            <p><b>useMutationEffect</b></p> 
            It fires synchronously before Layout phase i.e. during the same phase that React performs its DOM mutations. Use it to perform blocking custom DOM mutations without taking any DOM measurement/reading layout.

            <p><b>useLayoutEffect</b></p> 
            
            It fires synchronously after all DOM mutations but before Paint phase. Use this to read layout(styles or layout information) from the DOM and then perform blocking custom DOM mutations based on layout.

            <p><b>useEffect</b></p> 
            
            It runs after the render is committed to the screen i.e. after Layout and Paint phase. Use this whenever possible to avoid blocking visual updates.

        </>
    );
};

export default UseLayoutEffectHooks;
