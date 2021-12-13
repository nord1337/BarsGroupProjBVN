import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/HomeView/Home';
import { CarsView } from './components/CarsList/CarsView';
import { ServicesView } from './components/ServicesList/ServicesView';
import {Provider} from "react-redux";
import './custom.css';
import axios from "axios";
import ProductService from "./components/api/ProductService";
import {OrderTab} from "./components/UserForms/OrderTab";
import {ProfilePage} from "./components/UserForms/ProfilePage";
import {store} from "./components/ProductCart/ind";
import {cartMenu} from "./components/ProductCart/cartMenu";

export default class App extends Component {
  static displayName = App.name;
    constructor() {
        super();

        this.state = {
            loggedInStatus: "NOT_LOGGED_IN",
            user: {},

        };

        this.handleLogin = this.handleLogin.bind(this);
        this.handleLogout = this.handleLogout.bind(this);

    }



    async checkLoginStatus() {
        const response = await fetch('http://localhost:5000/api/auth/user',{
            method:'GET',
            headers:{'Content-type':'application/json'},
            credentials:'include',

        });
        const user = await response.json();

        if(response.ok)
        {
            this.setState({
                loggedInStatus: "LOGGED_IN",
                user: user
            });
        }
        else{
            this.setState({
                loggedInStatus: "NOT_LOGGED_IN",
                user: {}
            });
        }

    }

    async componentDidMount() {
        try {
            await this.checkLoginStatus();


        }
        catch (e) {
            console.log("server not responding")
        }


    }

     handleLogout() {

         this.setState({
             loggedInStatus: "NOT_LOGGED_IN",
             user: {}
         });

    }

    handleLogin(data) {
        this.setState({
            loggedInStatus: "LOGGED_IN",
            user: this.state.user
        });
    }
  render () {
    return (
        <Provider store={store}>
          <Layout loggedInStatus={this.state.loggedInStatus} handleLogout = {this.handleLogout}>
            <Route exact path='/'
                render={props =>(
                    <Home loggedInStatus={this.state.loggedInStatus}
                          handleLogin={this.handleLogin}
                          handleLogout={this.handleLogout}
                          user={this.state.user}
                    />
                )


                }/>

              <Route path='/Cars'component={CarsView} />
              <Route exact path='/ProfilePage'
                     render={props =>(
                         <ProfilePage
                               user={this.state.user}
                         />
                     )}/>
              <Route path='/OrderTab' component={OrderTab} />
              <Route path='/Services' component={ServicesView} />
              <Route path='/cart' component={cartMenu}/>
          </Layout>
        </Provider>
    );
  }
}
