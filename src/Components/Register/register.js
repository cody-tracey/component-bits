import React from 'react';
import { Container, Button, Form } from 'semantic-ui-react';
import useSignUpForm from './RegisterCustomHooks';
import './register.css';

const Register = () => {
    
    const signup = () => {
        console.log(inputs);
    };

    const { inputs, handleInputChange, handleSubmit } = useSignUpForm(signup);


    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Form.Field>
                    <label>Desired Username:</label>
                    <input placeholder='Username' type='text' name='username' onChange={handleInputChange} value={inputs.username} />
                </Form.Field>
                <Form.Field>
                    <label>Password:</label>
                    <input placeholder='Password' type='text' name='password' onChange={handleInputChange} value={inputs.password} />
                </Form.Field>
                <Form.Field>
                    <label>Confirm Password:</label>
                    <input placeholder='Confirm Password' type='text' name='password2' onChange={handleInputChange} value={inputs.password2} />
                </Form.Field>
                <Button type='submit'>Submit</Button>
            </Form>
            
        </Container>
    )
};

export default Register;