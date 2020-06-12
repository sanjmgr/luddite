import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './css/style.css';
import { Navbar } from './components/Navbar';
import { Landing } from './components/Landing';
import { Intro } from './components/Intro';
import { Contacts } from './components/Contacts';
import { Projects } from './components/Projects';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Landing />
        <Intro />
        <Projects />
        <Contacts />
        <Switch>
          <Route exact path='/intro' component={Intro} />
          <Route exact path='/projects' component={Projects} />
          <Route exact path='/contacts' component={Contacts} />
          <Route exact path='/' component={Landing} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
