import React, { Component } from 'react'
import { Button, Navbar, Nav, Form, FormControl, Container } from 'react-bootstrap';
import '../Styles/Navigasi.css';

export default class Navigasi extends Component {
    render() {
        const text_selected = { color: "#d8345f" };
        const text_color = { color: "black" };
        const nav_colour = { background: "#eeeeee" };
        const nav_fixed = { position: "fixed" };
        
        return (
            <Navbar className="justify-content-around shadow p-3 mb-5 bg-white rounded" style={ nav_colour }>
                <Nav style={{fontWeight: "bold"}} >
                    <Nav.Link style={text_selected} href="#home">EXPLORE</Nav.Link>
                    <Nav.Link style={text_color} href="#features">TECHNOLOGY</Nav.Link>
                    <Nav.Link style={text_color} href="#pricing">TUTORIAL</Nav.Link>
                    <Nav.Link style={text_color} href="#pricing">WhoAreWe??</Nav.Link>
                </Nav>
            </Navbar>
        )
    }
}
