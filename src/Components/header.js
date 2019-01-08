import React, {Component} from 'react';
import { Link } from "react-router-dom";
import { Navbar,Nav,NavItem } from "react-bootstrap/es";

class Header extends Component {

    render(){
        return(
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">Logo</Link>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav pullRight>
                    <NavItem componentClass='div'>
                        <Link to="/about">About</Link>
                    </NavItem>
                    <NavItem componentClass='div'>
                        <Link to="/cart">Cart</Link>
                    </NavItem>
                    <NavItem componentClass='div'>
                        <Link to="/stylishCart">Stylish Cart</Link>
                    </NavItem>
                </Nav>
            </Navbar>
        )
    }
}

export default Header