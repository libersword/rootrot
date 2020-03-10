import React, { Component, Fragment } from "react";
import {
  Collapse,
  Nav,
  NavItem
} from "reactstrap";
import styled from 'styled-components';
import rotLogo from '../assets/rotLogo.png';

const Navbar = styled.div`
position: relative;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    justify-content: space-between;
    padding: .5rem 1rem;
    background-color: #90AA87;
`

const Logo = styled.div `
background-image: url(${rotLogo});
height: 40px;
    width: 100%;
    background-repeat: no-repeat;
    background-size: contain;
`

class Header extends Component {
  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    const guestLinks = (
      <Fragment>
        <NavItem>
          Register
        </NavItem>
        <NavItem>
          Login
        </NavItem>
      </Fragment>
    );

    return (
      <div>
        <Navbar>
            <Logo />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                {guestLinks}
              </Nav>
            </Collapse>
        </Navbar>
      </div>
    );
  }
}


export default Header;
