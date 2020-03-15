import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch, Redirect } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Profile from './components/Profile';
import Contact from './components/Contact';
import NotFound from './components/NotFound';

const Links = () => (
  <ul>
    <li>
      <NavLink exact activeClassName="active" to="/">Home</NavLink>
    </li>
    <li>
      <NavLink to="/about">About</NavLink>
    </li>
    <li>
      <NavLink to="/profile">Profile</NavLink>
    </li>
    <li>
      <NavLink to="/contact">Contact</NavLink>
    </li>
  </ul>
)

const App = () => (
  <Router>
    <Links />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/profile" component={Profile} />
      <Route path="/contact" component={Contact} />
      <Route path="*" component={NotFound} />
    </Switch>
  </Router>
)

export default App;
