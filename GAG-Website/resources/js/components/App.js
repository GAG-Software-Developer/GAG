import React from 'react';
import ReactDOM from 'react-dom';
import Navigasi from './Navigasi';
import Explore from '../pages/Explore'

function App() {
    return (
       <Explore/>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
