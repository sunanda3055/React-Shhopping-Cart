import React from 'react';
import { Link } from "react-router-dom";
import { Navbar,Nav,NavItem } from "react-bootstrap/es";

function Header () {

    return(
        <header>
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
                        <Link to="/products">Products</Link>
                    </NavItem>
                    <NavItem componentClass='div'>
                        <Link to="/cart">Cart</Link>
                    </NavItem>
                </Nav>
            </Navbar>
        </header>
    )
}

export default Header