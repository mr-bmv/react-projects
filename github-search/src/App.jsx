import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// pages
import About from './pages/About/About';
import Profile from './pages/Profile/Profile';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';

import GitProvider from './context/GitContext';

// components
import Navbar from './components/Navbar/Navbar';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

const App = () => {
  return (
    <ErrorBoundary>
      <GitProvider>
        <Router>
          <Navbar />
          <div className='pt-4'>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
              <Route path="/profile/:name" component={Profile} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
      </GitProvider>
    </ErrorBoundary>
  );
}

export default App;
