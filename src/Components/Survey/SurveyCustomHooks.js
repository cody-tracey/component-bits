import { useState } from "react";

const useSurveyForm = (callback) => {
    const initialState = {
        name: "",
        salary: "",
        why: ""
    }

    const [inputs, setInputs] = useState(initialState);


    const handleChange = e => {
        e.persist();
        setInputs(inputs => ({ ...inputs, [e.target.name]: e.target.value }));
    };


    const handleSubmit = e => {
        if (e) e.preventDefault();
        callback();
    };

    return {
        inputs,
        handleChange,
        handleSubmit
    }
};

export default useSurveyForm;



