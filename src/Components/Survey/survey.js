import { Container, Form, TextArea, Button } from "semantic-ui-react"


const Survey = () => {

    return (

        <Container>
            <Form>
                <Form.Field>
                    <label>What is your name?</label>
                    <input type='text' name='name' />
                </Form.Field>
                <Form.Field>
                    <label>What is your desired salary per year?</label>
                    <input type='text' name='salary' />
                </Form.Field>
                <Form.Field>
                    <label>Why should we hire you?</label>
                    <TextArea name='why' />
                </Form.Field>
                <Button type='submit'>Submit</Button>
            </Form>
        </Container>

    )
}

export default Survey;