import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'

export class Login extends Component {
    render() {
        return (
            <Form>
                <div>
                <FormGroup className="mb-2 me-sm-2 mb-sm-0">
                    
                    <Label
                        className="me-sm-2"
                        for="exampleEmail"
                    >
                        Email
                    </Label>
                    <Input
                        id="exampleEmail"
                        name="email"
                        placeholder="something@idk.cool"
                        type="email"
                    />
                    </FormGroup>
                </div>
                <div>
                <FormGroup className="mb-2 me-sm-2 mb-sm-0">
                    <Label
                        className="me-sm-2"
                        for="examplePassword"
                    >
                        Password
                    </Label>
                    <Input
                        id="examplePassword"
                        name="password"
                        placeholder="don't tell!"
                        type="password"
                    />
                    </FormGroup>
                    </div>
                
                <div>
                <Button>
                    Submit
                    </Button>
                </div>
            </Form>
        )
    }
}
