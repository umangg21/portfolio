import React from 'react';
import Landing from './components/Home/Landing/Landing';
import LandingContact from './components/Home/LandingContact/LandingContact';
import LandingCta from './components/Home/LandingCta/LandingCta';
import ContactMe from './components/Home/ContactMe/ContactMe';
import LandingExperience from './components/Home/LandingExperience/LandingExperience';

function App() {
  return (<>
    <Landing />
    <LandingCta />
    <LandingContact /> 
    <LandingExperience />
    <ContactMe />
  </>
  );
}

export default App;
