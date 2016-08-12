import React from 'react';
import { Navbar } from 'react-bootstrap';
class NavBar extends React.Component {
    render(){
        return (
            <Navbar>
                <Navbar.Header>
                <Navbar.Brand>
                    <a href="#">GitHub Profile Viewer</a>
                </Navbar.Brand>
                </Navbar.Header>
            </Navbar>
        )
    }
}

export default NavBar;