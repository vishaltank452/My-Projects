import React from 'react';
import { useCallback } from 'react';

// function MyComponent() {
//     const handleClick = () => {
//       // handle the click event
//       console.log("called");
//     };
//     return <MyChild onClick={handleClick} />;
//   }
//   function MyChild ({ onClick }) {
//     return <button onClick={onClick}>I am a child</button>;
//   }

const UsecallbackExample = () => {
    const clickHandler = useCallback(() => {
        // handle the click event
        console.log("called");
    }, []);
    const ButtonWrapper = (({ ClickHandlerCallBkFunc }) => {
        console.log("onClick");
        return <button onClick={ClickHandlerCallBkFunc}>Click me</button>
    })
    return (
        <>
            {/* <button >Click me</button> */}
            <ButtonWrapper ClickHandlerCallBkFunc={clickHandler} />
            <p> The array of dependencies is not passed as arguments to the callback. Conceptually, though, that's what they represent: every value referenced inside the callback should also appear in the dependencies array. In the future, a sufficiently advanced compiler could create this array automatically.</p>

            <p> We recommend using the exhaustive-deps rule as part of our eslint-plugin-react-hooks package. It warns when dependencies are specified incorrectly and suggests a fix.</p>


        </>
    );
};

export default UsecallbackExample;


// poor usage of useCallback()
// const clickHandler = useCallback(() => {
//     // handle the click event
//   }, []);

//   return <ButtonWrapper onClick={clickHandler} />;
// }

// const ButtonWrapper = ({ clickHandler }) => {
//   return <button onClick={clickHandler}>Child Component</button>;
// };