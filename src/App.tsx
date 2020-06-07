import React from 'react';
import './css/style.css';
import { Navbar } from './components/Navbar';
import { Landing } from './components/Landing';
import { Intro } from './components/Intro';
import { Contacts } from './components/Contacts';
import { GitProjects } from './components/GitProjects';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Landing />
      <Intro />
      <GitProjects />
      <Contacts />
    </div>
  );
}

export default App;
