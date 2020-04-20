import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

function Create() {

    return (
        <>
            <Form>
                <FormGroup>
                    <Label for="exampleEmail">Chirp Away</Label>
                    <Input type="text" name="email" id="exampleEmail" placeholder="Name of Chirp" />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleText"></Label>
                    <Input type="textarea" name="text" id="exampleText" placeholder="Chirp Here" />
                </FormGroup>
                <Button color="warning">Chirp IT out</Button>{' '}
            </Form>
        </>
    )
}

export default Create