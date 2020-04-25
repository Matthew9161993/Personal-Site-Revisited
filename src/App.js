import React from 'react';
import logo from './logo.svg';
import './App.css';
import GenericText from './GenericText.js';
import GenericPicture from './GenericPicture.js';
import GridView from './GridView.js';
import SAMPLETEXT from './SampleText.js';
import MATTOCONNOR from './MattOConnor.jpg';

function App() {
  const textbox = <GenericText text={SAMPLETEXT} />;
  const picturebox = <GenericPicture file={MATTOCONNOR} description="Matt O'Connor" />

  const textarray = [picturebox, textbox, textbox, textbox, textbox, textbox, textbox];

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
        <GridView data = {textarray}/>
      </header>
    </div>
  );
}

export default App;
