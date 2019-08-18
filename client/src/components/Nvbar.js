import React, { Component } from 'react';
import {Navbar}  from 'react-bootstrap'
class Nvbar extends Component {
    render() {
        return (
            <div>
              <Navbar bg="light" variant="dark">
                <Navbar.Brand href="/"></Navbar.Brand>
              </Navbar>
            </div>
        );
    }
}

export default Nvbar;