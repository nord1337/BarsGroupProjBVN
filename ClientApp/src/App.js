import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/HomeView/Home';
import { FetchData } from './components/FetchData';
import { CarsView } from './components/CarsList/CarsView';
import { ServicesView } from './components/ServicesList/ServicesView';
import { Login } from './components/Login';
import './custom.css';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/Cars' component={CarsView} />
          <Route path='/Services' component={ServicesView} />
      </Layout>
    );
  }
}
