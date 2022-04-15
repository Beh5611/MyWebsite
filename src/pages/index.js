import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import Project from '../components/Project';
import {Card, Button, ListGroup, ListGroupItem} from 'react-bootstrap';
import {
  homeObjOne
} from '../components/InfoSection/Data';
import {
  portfolio,
  myshell,
  trietree,
  threemusk
} from '../components/Project/Data';
import {
  languages,
  frameworks
} from '../components/Services/languages';
import Services from '../components/Services';

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <Services {...languages}/>
      <Services {...frameworks}/>

      <Project {...portfolio} />
      <Project {...myshell} />
      <Project {...threemusk} />
      <Project {...trietree} />
      
    </>
  );
}

export default Home;
