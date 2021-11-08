import React, { Component } from 'react';
import {Form, FormGroup, Label, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap'

export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };
        this.toggle = this.toggle.bind(this);
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
                    <ModalHeader toggle={this.toggle}>{this.props.title} Registration</ModalHeader>
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
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.toggle}>OK</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}