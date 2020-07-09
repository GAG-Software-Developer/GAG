import React, { Component } from 'react'
import { Button, Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import '../../../public/css/react.css';

export default class Navigasi extends Component {
    render() {
        const text_selected = { color: "#ffffff" };
        const text_color = { color: "#aaaaaa" };
        return (
            <Navbar className="justify-content-around black-background">
                <Nav className="font-header" >
                    <Nav.Link style={text_selected} href="#home">EXPLORE</Nav.Link>
                    <Nav.Link style={text_color} href="#features">TECHNOLOGY</Nav.Link>
                    <Nav.Link style={text_color} href="#pricing">TUTORIAL</Nav.Link>
                    <Nav.Link style={text_color} href="#pricing">WhoAreWe??</Nav.Link>
                </Nav>
            </Navbar>
        )
    }
}
