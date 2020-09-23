import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import About from './pages/About';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <Navbar />
      <div className='pt-4'>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/profile/:name" component={Profile} />
        </Switch>
      </div>

    </Router>
  );
}

export default App;
