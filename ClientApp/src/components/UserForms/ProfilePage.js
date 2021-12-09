import React, { Component } from 'react';
import {Badge} from "reactstrap";
import { Provider } from 'react-redux'
export class ProfilePage extends React.Component{
    constructor(props) {
        super(props);



    }
    render() {


        return(
            <div>

                <h5>Firstname: {this.props.user.firstname}</h5>
                <h5>Lastname: {this.props.user.lastname}</h5>
                <h5>Email: {this.props.user.email}</h5>
                <h5>Phone: {this.props.user.phonenumber}</h5>
            </div>

        )
    }


}