import React from 'react';
import { useState } from 'react';

const HooksIntroFuncCompo = () => {
    const [count, setCount] = useState(0);

    return (
        <>
            <h2>Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.</h2>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
            <p>

                The useState is a Hook that allows you to have state variables in functional components . so basically useState is the ability to encapsulate local state in a functional component. React has two types of components, one is class components which are ES6 classes that extend from React and the other is functional components. Class components a Component and can have state and lifecycle methods: class Message extends React. The  useState hook is a special function that takes the initial state as an argument and returns an array of two entries.  UseState encapsulate only singular value from the state, for multiple state need to have useState calls.
            </p>
            <p>
                Syntax: The first element is the initial state and the second one is a function that is used for updating the state.
            </p>
            <p>
            But, it’s more common to use array destructuring and assign the returned elements to variables in one step:
            </p>

            <p>let a, b, rest;</p> 
            <p>[a, b] = [10, 20];</p> 
            <p>[a, b, ...rest] = [10, 20, 30, 40, 50];</p> 


            <img src="/usestate.png" alt="" />
            {/* <img src={`${process.env.PUBLIC_URL}/usestate.png`} alt="" /> */}
        </>
    );
};

export default HooksIntroFuncCompo;