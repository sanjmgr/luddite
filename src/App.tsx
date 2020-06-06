import React from 'react';
import './css/style.css';
import { Navbar } from './components/Navbar';
import { Landing } from './components/Landing';
import { Intro } from './components/Intro';
import { Contacts } from './components/Contacts';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Landing />
      <Intro />
      <Contacts />
    </div>
  );
}

export default App;
