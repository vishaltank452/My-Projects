import React, { useContext } from 'react';
import { useState } from 'react';


const themes = {
    light: {
        foreground: "#000000",
        background: "#eeeeee"
    },
    dark: {
        foreground: "#ffffff",
        background: "#222222"
    }
};

const ThemeContext = React.createContext(themes.light);

const SingleFileUseContext = () => {
    const [themebtn,setThemeBtn] = useState(false)
    function changeTheme() {
        setThemeBtn(!themebtn);
        console.log(themebtn);
    }
    let themeHTML;
    if (themebtn) {
        themeHTML= <ThemeContext.Provider value={themes.dark}>
                <Toolbar/>
            </ThemeContext.Provider>
    }else{
        themeHTML= <ThemeContext.Provider value={themes.light}>
                <Toolbar/>
            </ThemeContext.Provider>
    }
    return (
        <>
            <p>Accepts a context object (the value returned from React.createContext) and returns the current context value for that context. The current context value is determined by the value prop of the nearest &lt;MyContext.Provider&gt; above the calling component in the tree.</p>

            <p>
                When the nearest &lt;MyContext.Provider&gt; above the component updates, this Hook will trigger a rerender with the latest context value passed to that MyContext provider. Even if an ancestor uses React.memo or shouldComponentUpdate, a rerender will still happen starting at the component itself using useContext.
            </p>

            <ul>
                <li> Correct: useContext(MyContext)</li>
                <li> Incorrect: useContext(MyContext.Consumer)</li>
                <li> Incorrect: useContext(MyContext.Provider)</li>
            </ul>
            <button onClick={changeTheme}>Change Theme</button>
            {themeHTML}
        </>
    );
};


function Toolbar() {
    return(
        <ThemeButton/>
    )
}

function ThemeButton() {
    const theme = useContext(ThemeContext);
    return(
        <button style={{backgroundColor:theme.background,color:theme.foreground}}>Click me</button>
    )
}

export default SingleFileUseContext;