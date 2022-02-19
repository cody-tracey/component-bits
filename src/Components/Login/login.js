import React from 'react';
import { Container, Button, Form,Checkbox } from 'semantic-ui-react';
import './login.css';

const Login = () => {
    return (
        <Container>
            <Form>
                <Form.Field>
                    <label>Username</label>
                    <input placeholder='Username' />
                </Form.Field>
                <Form.Field>
                    <label>Password</label>
                    <input placeholder='Password' />
                </Form.Field>
                <Form.Field>
                    <Checkbox label='Keep me signed in.' />
                </Form.Field>
                <Button type='submit'>Submit</Button>
            </Form>
        </Container>
    )
};

export default Login;