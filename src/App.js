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

  return (
      <div className="App">
        <header className="App-header">
          <Scroller first = {picturebox} second = {smallText} third = {smallText}/>
          <div className="Background-image"> </div>
          <GridView data = {textarray}/>
        </header>
      </div>
  );
}

export default App;
