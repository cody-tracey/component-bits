import { Container, Form, TextArea, Button } from "semantic-ui-react"
import useSurveyForm from "./SurveyCustomHooks";

const Survey = () => {
    const surveySubmit = () => {
        console.log(inputs)
    }

    const { inputs, handleChange, handleSubmit } = useSurveyForm(surveySubmit);


    return (

        <Container>
            <Form onSubmit={handleSubmit} >
                <Form.Field>
                    <label>What is your name?</label>
                    <input type='text' name='name' value={inputs.name} onChange={handleChange}/>
                </Form.Field>
                <Form.Field>
                    <label>What is your desired salary per year?</label>
                    <input type='text' name='salary' value={inputs.salary} onChange={handleChange}/>
                </Form.Field>
                <Form.Field>
                    <label>Why should we hire you?</label>
                    <TextArea name='why' value={inputs.why} onChange={handleChange}/>
                </Form.Field>
                <Button type='submit'>Submit</Button>
            </Form>
        </Container>

    )
}

export default Survey;