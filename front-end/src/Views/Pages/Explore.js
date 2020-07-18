import React, { Component } from 'react';
import { Alert, Container, Card } from 'react-bootstrap';
import Navigasi from '../Elements/Navigasi';
import '../Styles/Navigasi.css';
import '../Styles/stylish-portfolio.css'
import Projek from '../Elements/Projek';


export default class Explore extends Component {
    render() {
        return (
            <div>
                <header>
                <Navigasi />
                    <Container>
                        <Alert className="d-flex flex-column  mt-5 handwriting">
                            <Alert.Heading className="monospace"><h1>Hi, nice to see you</h1></Alert.Heading>
                            <p className="monospace">
                                Welcome to our gallery of our work.
                            </p>
                            <hr />
                            <p className="mb-0">

                            </p>
                        </Alert>
                    </Container>
                </header>
                <Projek />
            </div>
        )
    }
}
