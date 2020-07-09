import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function Greeting(props) {
  return <h1>Halo {props.name}</h1>
}

class Timer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      time : props.start
    }
  }

  //Lifecgyle
  componentDidMount() {
    this.addInterval = setInterval( () => this.increase(), 1000)
  }
  componentWillUnmount() {
    clearInterval(this.addInterval)
  }
  increase() {
    if (this.state.time == 10) {
      this.state.time = 0
    } else {
      this.setState((state, props) => ({
        time: parseInt(state.time) + 1
      }))
    }
  }
  render() {
    return (
    <div>{this.state.time}</div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Greeting name="Ivan"/>
        <Timer start="0"/>
      </header>
    </div>
  );
}

export default App;
