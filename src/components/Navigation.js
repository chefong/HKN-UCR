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

const crest = require('../assets/imgs/hkn-crest.png');

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
      <div className="container-fluid">
        <Navbar light expand="md" className="reactstrap-navbar">
          <NavbarBrand href="/"><img src={crest} alt="HKN crest" id="crest"/></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className="reactstrap-navitem" href="/">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="reactstrap-navitem" href="/">Board</NavLink>
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
