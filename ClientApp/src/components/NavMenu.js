import React, { Component } from 'react';
import {Collapse, Container, DropdownItem, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink,DropdownToggle,DropdownMenu,UncontrolledDropdown} from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import {Login} from "./UserForms/Login";
import {Register} from "./UserForms/Register";

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
      };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
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
              </ul>
            </Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}
