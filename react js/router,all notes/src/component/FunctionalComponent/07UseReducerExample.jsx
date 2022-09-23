import React, { useReducer } from 'react';
function init() {
    console.log("init function");
    return { count: 0 };
}

function reducer(state, action) {
    switch (action.type) {
        case "increment":
            console.log("increment");
            return { count: state.count + 1 };
        case "decrement":
            console.log("decrement");
            return { count: state.count - 1 };

        default:
            throw new Error();
    }
}
const UseReducerExample = ({ initialCount }) => {
    console.log("UseReducerExample main function");
    const [state, dispatch] = useReducer(reducer, initialCount, init);

    return (
        <>
            Count: {state.count}
            <p>An alternative to useState. Accepts a reducer of type (state, action) =&gt; newState, and returns the current state paired with a dispatch method. (If you're familiar with Redux, you already know how this works.)</p>

            <p>useReducer is usually preferable to useState when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one. useReducer also lets you optimize performance for components that trigger deep updates because you can pass dispatch down instead of callbacks.</p>
            <button onClick={() => { dispatch({ type: "increment" }) }}>Increment</button>
            <button onClick={() => { dispatch({ type: "decrement" }) }}>decrement</button>
        </>
    );
};

export default UseReducerExample;