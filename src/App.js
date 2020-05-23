import React from 'react';
import Landing from './components/Home/Landing/Landing';
import LandingContact from './components/Home/LandingContact/LandingContact';
import LandingCta from './components/Home/LandingCta/LandingCta';
import ContactMe from './components/Home/ContactMe/ContactMe';
import LandingExperience from './components/Home/LandingExperience/LandingExperience';
import LandingProjectContainer from './components/Home/Projects/LandingProjectContainer';

function App() {
  return (<>
    <Landing />
    <LandingCta />
    <LandingContact />
    <LandingExperience />
    <LandingProjectContainer />
    <ContactMe />
  </>
  );
}

export default App;
