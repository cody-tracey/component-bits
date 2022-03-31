import React, {useState} from 'react';

const useSignUpForm = (callback) => {
    const initialState = {
        username: "",
        password: '',
    }
    const [inputs,setInputs] = useState(initialState);

    const handleSubmit = e => {
        if(e){
            e.preventDefault();
        }
        callback();
    };

    const handleInputChange = e => {
        e.persist();
        setInputs(inputs => ({...inputs, [e.target.name]: e.target.value}));
    }

    return {
        handleSubmit,
        handleInputChange,
        inputs
    };
}

export default useSignUpForm;