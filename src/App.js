import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import About from './pages/about';
import LandingPage from './pages/landing';
import PortfolioPage from './pages/portfolio';

const App = () => (
  <Router>
    <div style={{ minHeight: '100vh', display: 'flex' }}>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/portfolio">
          <PortfolioPage />
        </Route>
        <Route path="/">
          <LandingPage />
        </Route>
      </Switch>
    </div>
  </Router>
);

export default App;
