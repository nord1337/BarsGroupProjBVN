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

            <h1>Salam, {this.props.user.firstname} !</h1>
            {/*{console.log(this.props.user)}*/}

            <HomeCarousel/>



      </div>
    );
  }

}



