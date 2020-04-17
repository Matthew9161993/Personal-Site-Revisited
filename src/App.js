import React from 'react';
import logo from './logo.svg';
import './App.css';
import GenericText from './GenericText.js';
import GenericPicture from './GenericPicture.js'
import SAMPLETEXT from './SampleText.js';
import MATTOCONNOR from './MattOConnor.jpg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <GenericText text={SAMPLETEXT} />
        <GenericPicture file={MATTOCONNOR} description="Matt O'Connor" width="250px" height="750px" />
      </header>
    </div>
  );
}

export default App;
