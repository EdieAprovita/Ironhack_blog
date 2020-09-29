import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Articles from './components/Articles';

const App = () => (
  <div className='container-fluid'>
    <Header />
    <Navbar />
    <Switch>
      <Route exact path='/' component={Homepage} />
      <Route path='/articles' component={Articles} />
    </Switch>
  </div>
);

export default App;
