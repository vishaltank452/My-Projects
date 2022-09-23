import React, { useState } from 'react';
import Login from "./Login.jsx";
import User from "./User.jsx";

export const AppContext = React.createContext(null);
const MultipleFileUseContext = () => {
    const [username, setUsername] = useState("");

    return (
        <>
            <AppContext.Provider value={{ username, setUsername }}>
                <Login /> <User />
            </AppContext.Provider>
        </>
    );
};

export default MultipleFileUseContext;