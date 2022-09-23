import React, { useState } from 'react';

const CustomHooks = (initialValues,initialErrorValues) => {
    console.log("initialValues in custom hook : ",initialValues);
    const [inputs, setInputs] = useState(initialValues);
    const [errors, setErrors] = useState(initialErrorValues);

    const handleInputChange = (event) =>{
        event.persist();
        if (event.target.type == "text") {
            if (event.target.value == "") {
                setErrors(errors => ({ ...errors, "usernameError": "this field is required" }));                
            } else {
                setErrors(errors => ({ ...errors, "usernameError": "" }));
            }
        }else if(event.target.type == "email"){
            var Pattern = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9_\.\-])+\.)+([a-zA-Z]{2,4})$/;
            // var Pattern = /^([A-Z])+$/; //capital alpha
            // var Pattern = /^([A-Za-z])+$/; //only alpha capi+small
            // var Pattern = /^([0-9])+$/; //only Numbers
            if (Pattern.test(event.target.value)) {
                setErrors(errors => ({ ...errors, "usernameError": "" }));
            } else {
                setErrors(errors => ({ ...errors, "usernameError": "Invalid Email Formate" }));
            }
        }
        setInputs(inputs => ({ ...inputs, [event.target.name]: event.target.value }));
    }
    const checkValid = (event) =>{
        event.persist();
        if (event.target.type == "text") {
            if (event.target.value == "") {
                setErrors(errors => ({ ...errors, "usernameError": "this field is required" }));                
            } else {
                setErrors(errors => ({ ...errors, "usernameError": "" }));
            }
        }
        setInputs(inputs => ({ ...inputs, [event.target.name]: event.target.value }));
    }
    return {
        handleInputChange,
        checkValid,
        inputs,
        errors
        };
};

export default CustomHooks;