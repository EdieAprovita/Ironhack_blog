import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Homapge from './components/Homepage';
import Navbar from './components/Navbar';
import Articles from './components/Articles';

const App = () => {
  <div className='container'>
    <Navbar />
    <Router>
      <Switch>
        <Route />
      </Switch>
    </Router>
  </div>;
};

export default App;
