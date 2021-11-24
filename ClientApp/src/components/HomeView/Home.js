import React, { Component,useEffect} from 'react';
import {HomeCarousel} from './HomeCarousel'
export class Home extends Component {
    constructor(props) {
        super(props);

        this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
        //this.handleLogout = this.handleLogout.bind(this);
    }
  static displayName = Home.name;
    handleSuccessfulAuth(data) {
        this.props.handleLogin(data);

    }

  render () {
    return (
        <div>

            <h1>Salam, {this.props.user.firstname} , {this.props.user.email}!Status:{this.props.loggedInStatus}</h1>

            <HomeCarousel/>

            <h1>Hello, asd !</h1>

      </div>
    );
  }

}



