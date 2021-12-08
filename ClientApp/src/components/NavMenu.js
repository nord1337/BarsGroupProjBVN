import React, { Component } from 'react';
import {
  Collapse,
  Container,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  DropdownToggle,
  DropdownMenu,
  UncontrolledDropdown,
  Button
} from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import {Login} from "./UserForms/Login";
import {Register} from "./UserForms/Register";
import {render} from "react-dom";

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {
      collapsed: true
      };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
 async handleLogoutClick() {
    const response = await fetch('http://localhost:5000/api/auth/logout',{
      method:'POST',
      headers:{'Content-type':'application/json'},
      credentials:'include',

    });
    if(response.ok){
      this.props.handleLogout();
    }
    else{
      console.log("cannot logout......");
    }

  }


  render () {
    return (
      <header>
        <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
          <Container>
            <NavbarBrand tag={Link} to="/">Team_Let1m_carShop</NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
              <ul className="navbar-nav flex-grow">
                <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/Services">Services</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/Cars">Cars</NavLink>
                </NavItem>

                <DependentDropDown loggedInStatus={this.props.loggedInStatus} handleLogoutClick = {this.handleLogoutClick}/>

              </ul>
            </Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}

class DependentDropDown extends Component{
  constructor(props) {
    super(props);


  }
  render() {
    if(this.props.loggedInStatus==="LOGGED_IN"){
      return(
          // здесь ссылка на корзину
          // ссылка на профиль
          //ссылка на заказы
          <UncontrolledDropdown
              inNavbar
              nav
          >
            <DropdownToggle
                caret
                nav
            >
              Options
            </DropdownToggle>
            <DropdownMenu right>

              <DropdownItem>
                <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/ProfilePage">My Profile</NavLink>
                </NavItem>
              </DropdownItem>
              <DropdownItem>
                <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/OrderTab">My Orders</NavLink>
                </NavItem>
              </DropdownItem>

              <DropdownItem divider />
              <DropdownItem>
                <Button onClick={this.props.handleLogoutClick}>Log out</Button>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
      )
    }
    else if(this.props.loggedInStatus==="NOT_LOGGED_IN"){
      return (
          <UncontrolledDropdown
              inNavbar
              nav
          >
            <DropdownToggle
                caret
                nav
            >
              Options
            </DropdownToggle>
            <DropdownMenu right>

              <DropdownItem>

                <Login/>
              </DropdownItem>
              <DropdownItem>
                <Register/>
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem>
                Logout
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
      )
    }
  }
}
