import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
  } from 'reactstrap';

import { NavLink as RRNavLink } from 'react-router-dom';  

class HeaderComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
          isOpen: false
        };

    }
    
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render(){
       return (
        <Navbar color="info" dark expand="md">
            <div className="container">
                <NavbarBrand href="/">ST 2019</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink exact tag={RRNavLink} to="/">Начало</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink exact tag={RRNavLink} to="/gallery">Галерия</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink exact tag={RRNavLink} to="/images">Снимки</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink exact tag={RRNavLink} to="/darling">Любимец13</NavLink>
                    </NavItem>
                    </Nav>
                </Collapse>
            </div>
        </Navbar>
       )
    }
}
export default HeaderComponent;