import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import About from './pages/About';
import Profile from './pages/Profile';
import Alert from './components/Alert';
import AlertProvider from './context/AlertContext';

function App() {
  return (
    <AlertProvider>
      <Router>
        <Navbar />
        <div className='pt-4'>
          <Alert />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/profile/:name" component={Profile} />
          </Switch>
        </div>
      </Router>
    </AlertProvider>
  );
}

export default App;
