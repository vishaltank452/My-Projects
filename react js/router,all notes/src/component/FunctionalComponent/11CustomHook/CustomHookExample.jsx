import React from 'react';
import CustomHooks from './customHooks.jsx';
const CustomHookExample = () => {
    const {inputs, handleInputChange,checkValid,errors} = CustomHooks({user_name:''},{usernameError:""});
    return (
        <>
            {/* <input type="text" className="form-control" name="user_name" onChange={handleInputChange} value={inputs.user_name}  placeholder="Enter user name"></input> */}
            <input type="email" className="form-control" name="user_name" onBlur={checkValid} onChange={handleInputChange} value={inputs.user_name}  placeholder="Enter user name"></input>
            {errors.usernameError}
            {/* {JSON.stringify(errors)} */}
            <br />
            <br />
            <br />
            <br />
            <br />
        </>
    );
};

export default CustomHookExample;