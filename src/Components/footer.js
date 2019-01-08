import React, {Component} from 'react';
import { Nav,Navbar,NavItem } from "react-bootstrap";

class Footer extends Component {

    render(){
        return(
            <Navbar>
                <Nav pullRight>
                    <NavItem>
                        &copy; Shopping Cart
                    </NavItem>
                </Nav>
            </Navbar>
        )
    }
}

export default Footer
