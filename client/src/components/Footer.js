import React, { Component } from 'react';
import {Navbar, Container, NavbarBrand}  from 'react-bootstrap';

class Footer extends Component {
    render() {
        return (
            <div>
                <div className="fixed-bottom">  
                    <Navbar bg="light">
                        <Container>
                            <NavbarBrand>By Frank Orefice (12NaN)</NavbarBrand>
                        </Container>
                    </Navbar>
                </div>
                
            </div>
        );
    }
}

export default Footer;