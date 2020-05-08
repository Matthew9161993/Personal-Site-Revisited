import React from 'react';

import './App.css';
import GenericText from './GenericText.js';
import GenericPicture from './GenericPicture.js';
import GridView from './GridView.js';
import Scroller from './Scroller.js';
import SplitBox from './SplitBox.js';
import SAMPLETEXT from './SampleText.js';
import LOREMIPSUM from './LoremIpsum.js';
import MATTOCONNOR from './MattOConnor.jpg';

function App() {

  const smallText = <GenericText text={SAMPLETEXT} />;
  const bigText = <GenericText text={LOREMIPSUM} />;
  const picturebox = <GenericPicture file={MATTOCONNOR} description="Matt O'Connor" />
  const splitbox = <SplitBox text={bigText} pic={picturebox} />;
  const textarray = [splitbox, smallText, bigText, picturebox, bigText, smallText, smallText];
  const testarray = [smallText, smallText, smallText];
  const positions = [0, 150, 700];
  
  return (
      <div className="App">
        <header className="App-header">
          <div className="Background" />
        </header>
        <GridView data = {textarray}/>
        <Scroller icons= {testarray} position={positions}/>
      </div>
  );
}

export default App;
