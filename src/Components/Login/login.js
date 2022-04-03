import  { useState } from 'react';
import { Container, Button, Form, Checkbox } from 'semantic-ui-react';
import useSignInForm from './LoginCustomHooks';
import './login.css';

const Login = () => {
    const [signedIn,setSignedIn] = useState(true)
    const signin = () => {
        //Here is where we would actually write our sign in function.
        console.log(inputs);
    };

    const { inputs, handleInputChange, handleSubmit } = useSignInForm(signin);


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
                    <Checkbox toggle label='Keep me signed in.' name='signedIn' onChange={(e,data) => setSignedIn(data.checked)} checked={signedIn}/>
                </Form.Field>
                <Button type='submit'>Submit</Button>
            </Form>
        </Container>
    )
};

export default Login;