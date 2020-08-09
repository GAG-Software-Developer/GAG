import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navigasi from './Views/Elements/Essential/Navigasi.js';
import Explore from './Views/Pages/Explore';
import DetailProjek from './Views/Elements/Projek/DetailProjek';


function App() {
  return (
    <div className="App">
      <Router>

      <Navigasi />

      <Route exact path='/' component={ Explore } />
      
      <Switch>
        <Route exact path='/Detail-Projek' component={ DetailProjek } />
        <Route exact path='/Detail-Projek/{$id}' component={ DetailProjek } />
      </Switch>
      
      </Router>
    </div>
  );
}


export default App;
