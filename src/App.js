import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch, Redirect } from 'react-router-dom';
import Home from './Home';
import NotFound from './NotFound';
import logo from './logo.svg';
import './App.css';

const Links = () => (
  <ul>
    <li>
      <NavLink exact activeClassName="active" to="/">Home</NavLink>
    </li>
  </ul>
)

const App = () => (
  <Router>
    <Links />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="*" component={NotFound} />
    </Switch>
  </Router>
)

export default App;
