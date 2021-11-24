import React, { Component } from 'react';
import {Form, FormGroup, Label, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap'
import {Redirect} from "react-router-dom";
import {Login} from "./Login";
import {Home} from "../HomeView/Home";

export class Register extends Component {


    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            firstname:"",
            lastname:"",
            phonenumber:"",
            email:"",
            passwordHash:""

        };
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });

    }
    async handleSubmit(event){

        const {firstname,lastname,phonenumber,email,passwordHash} = this.state
        let redirect = false;
        const  response = await fetch('http://localhost:5000/api/auth/register',{
            method:'POST',
            headers:{'Content-type':'application/json'},
            body:JSON.stringify(
                {
                    firstname,
                    lastname,
                    phonenumber,
                    email,
                    passwordHash
                })
        });

        const content = await response.json();
        redirect=true;
        console.log(redirect);
        event.preventDefault();
        if(redirect){

            this.setState({
                modal: !this.state.modal
            });
        }


    }

    render() {
        return (
            <div>
                <Button color="light" onClick={this.toggle}> Register </Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>{this.props.title} Register</ModalHeader>
                    <ModalBody>
                        {this.props.modal}
                        <Form>
                            <div>
                                <FormGroup className="mb-2 me-sm-2 mb-sm-0">

                                    <Label
                                        className="me-sm-2"
                                        for="firstname"
                                    >
                                        First name
                                    </Label>
                                    <Input
                                        id="firstname"
                                        name="firstname"
                                        type="text"
                                        value={this.state.firstname}
                                        onChange={this.handleChange}
                                        required
                                    />
                                </FormGroup>
                            </div>
                            <div>
                                <FormGroup className="mb-2 me-sm-2 mb-sm-0">

                                    <Label
                                        className="me-sm-2"
                                        for="Lastname"
                                    >
                                        Last name
                                    </Label>
                                    <Input
                                        id="lastname"
                                        name="lastname"
                                        type="text"
                                        value={this.state.lastname}
                                        onChange={this.handleChange}
                                    />
                                </FormGroup>
                            </div>
                            <div>
                                <FormGroup className="mb-2 me-sm-2 mb-sm-0">

                                    <Label
                                        className="me-sm-2"
                                        for="phonenumber"
                                    >
                                        Phone number
                                    </Label>
                                    <Input
                                        id="phonenumber"
                                        name="phonenumber"
                                        type="phone"
                                        value={this.state.phonenumber}
                                        onChange={this.handleChange}
                                    />
                                </FormGroup>
                            </div>
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
                                    />
                                </FormGroup>
                            </div>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.handleSubmit}>Go</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}
