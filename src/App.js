import React from 'react';
import './App.css';
import ContactButton from './ContactButton.js';
import GenericText from './GenericText.js';
import GenericPicture from './GenericPicture.js';
import GridView from './GridView.js';
import Scroller from './Scroller.js';
import SplitBox from './SplitBox.js';
import SAMPLETEXT from './SampleText.js';
import LOREMIPSUM from './LoremIpsum.js';
import MATTOCONNOR from './MattOConnor.jpg';
import SARAPROJECT from './STAWProject.js';
import WEBSITEPROJECT from './personalSite.js';

function App() {

  const smallText = <GenericText text={SAMPLETEXT} />;
  const bigText = <GenericText text={LOREMIPSUM} />;
  const picturebox = <GenericPicture file={MATTOCONNOR} description="Matt O'Connor" />
  const splitbox = <SplitBox text={bigText} pic={picturebox} />;
  const textarray = [splitbox, smallText, bigText, picturebox, bigText, smallText, smallText];
  const testarray = [smallText, smallText, smallText];
  const positions = [0, 150, 700];

  console.log(SARAPROJECT.picture);

  const finalProjectArray = [
    <SplitBox text={<GenericText text={SARAPROJECT.description}/>} 
      pic={<GenericPicture file={SARAPROJECT.picture} description="Sara Takes A Walk" link={SARAPROJECT.link} />} />,
    <SplitBox text={<GenericText text={WEBSITEPROJECT.description}/>} 
      pic={<GenericPicture file={WEBSITEPROJECT.picture} description="Personal Website" link={WEBSITEPROJECT.link} />} />
  ];
  
  return (
      <div className="App">
        <header className="App-header">
          <div className="Background" />
        </header>
        <ContactButton link='https://www.facebook.com/profile.php?id=100006827449201' picture= 'Facebook.png' hoverPicture= 'FacebookHover.png' text='Facebook Link' />
        <GridView data = {finalProjectArray}/>
        <Scroller icons= {testarray} position={positions}/>
      </div>
  );
}

export default App;
