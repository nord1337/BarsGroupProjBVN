import React, { Component } from 'react';
import {HomeCarousel} from './HomeCarousel'
export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
        <div>
            <h1>Salam, bratka!</h1>
            <HomeCarousel/>

            <h1>Hello, asd !</h1>

      </div>
    );
  }
}


