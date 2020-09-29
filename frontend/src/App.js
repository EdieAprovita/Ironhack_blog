import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import Header from './components/Header';
import ProjectList from './components/Articles/ProjectList';

const App = () => (
  <div className='container-fluid'>
    <Header />
    <Navbar />
    <Switch>
      <Route exact path='/' component={Homepage} />
      <Route path='/articles' component={ProjectList} />
    </Switch>
  </div>
);

export default App;
