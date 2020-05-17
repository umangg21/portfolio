import React from 'react';
import Landing from './components/Home/Landing/Landing';
import LandingContact from './components/Home/LandingContact/LandingContact';
import LandingCta from './components/Home/LandingCta/LandingCta';

function App() {
  return (<>
    <Landing />
    <LandingCta />
    <LandingContact />
  </>
  );
}

export default App;
