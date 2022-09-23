import React, { useContext } from "react";
import { AppContext } from "./02MultipleFileUseContext";

function Login() {
  const { username,setUsername } = useContext(AppContext);

  return (
    <div>
      <h1>Login: {username}</h1>
      <input
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
    </div>
  );
}

export default Login;