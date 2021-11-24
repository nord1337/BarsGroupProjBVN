import React, { Component } from 'react';
import {Form, FormGroup, Label, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import {Redirect} from "react-router-dom";

export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            email:"",
            passwordHash:"",
            loginErrors:""
        };
        this.toggle = this.toggle.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleChange=this.handleChange.bind(this);

    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
        //console.log(this.state.email)
    }
    async handleSubmit(event){
        event.preventDefault();
        const {email,passwordHash} = this.state

        const  response = await fetch('http://localhost:5000/api/auth/login',{
            method:'POST',
            headers:{'Content-type':'application/json'},
            credentials:'include',
            body:JSON.stringify(
                {
                    email,
                    passwordHash
                })
        });
        const content = await response.json();


    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return (
            <div>
                <Button color="light" onClick={this.toggle}> Log in </Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>{this.props.title} Login</ModalHeader>
                    <ModalBody>
                        {this.props.modal}
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
                                        value={this.state.email}
                                        onChange={this.handleChange}
                                        required

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
                                        name="passwordHash"
                                        placeholder="don't tell!"
                                        type="password"
                                        value={this.state.passwordHash}
                                        onChange={this.handleChange}
                                        required
                                    />
                                </FormGroup>
                            </div>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.handleSubmit}>OK</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}