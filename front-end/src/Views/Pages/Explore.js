import React, { Component } from 'react';
import '../Styles/Navigasi.css';
import '../Styles/stylish-portfolio.css'
import Projek from '../Elements/Projek/Projek';
import Heading from '../Elements/Essential/Heading';
import Navigasi from '../Elements/Essential/Navigasi';


export default class Explore extends Component {
    render() {
        return (
            <div>
                <Heading />
                <Projek />
            </div>
        )
    }
}
