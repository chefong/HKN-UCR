import React, { Component } from 'react';
import './Navigation.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';

export default class Navigation extends Component {

  state = {
    isOpen: false
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar light expand="md" className="reactstrap-navbar">
          <NavbarBrand href="/"><h1 id="hkn-name">HKN</h1></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className="reactstrap-navitem" href="/">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="reactstrap-navitem" href="/">Members</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="reactstrap-navitem" href="/">Events</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="reactstrap-navitem" id="right-nav" href="/">Contact</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}
