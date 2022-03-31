import React, { useState } from 'react';
import { Container, Button, Form, Checkbox } from 'semantic-ui-react';
import useSignUpForm from './CustomHooks';
import './login.css';

const Login = () => {
    const signup = () => {
console.log(`
Username: ${inputs.username}\n
Password: ${inputs.password}\n
SignedIn: ${inputs.signedIn}
`)
    }

    const { inputs, handleInputChange, handleSubmit } = useSignUpForm(signup);


    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Form.Field>
                    <label>Username</label>
                    <input placeholder='Username' type='text' name='username' onChange={handleInputChange} value={inputs.username} />
                </Form.Field>
                <Form.Field>
                    <label>Password</label>
                    <input placeholder='Password' type='text' name='password' onChange={handleInputChange} value={inputs.password} />
                </Form.Field>
                <Form.Field>
                    <Checkbox label='Keep me signed in.' name='signedIn' onChange={handleInputChange} value={inputs.signedIn} />
                </Form.Field>
                <Button type='submit'>Submit</Button>
            </Form>
        </Container>
    )
};

export default Login;