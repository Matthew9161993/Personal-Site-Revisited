import React from 'react';

import './App.css';
import GenericText from './GenericText.js';
import GenericPicture from './GenericPicture.js';
import GridView from './GridView.js';
import Scroller from './Scroller.js';
import SAMPLETEXT from './SampleText.js';
import LOREMIPSUM from './LoremIpsum.js';
import MATTOCONNOR from './MattOConnor.jpg';

function App() {

  const smallText = <GenericText text={SAMPLETEXT} />;
  const bigText = <GenericText text={LOREMIPSUM} />;
  const picturebox = <GenericPicture file={MATTOCONNOR} description="Matt O'Connor" />

  const textarray = [picturebox, smallText, bigText, smallText, bigText, smallText, smallText];
  const testarray = [smallText, smallText, smallText];
  const positions = [0, 300];
  
  return (
      <div className="App">
        <Scroller icons= {testarray} position={positions}/>
        <header className="App-header">
        </header>
        <GridView data = {textarray}/>
      </div>
  );
}

export default App;
