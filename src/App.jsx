import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

import Home from "./home/Home";
import About from "./about/About";
import Contact from './contact/Contact';
import Service from './service/Service';
import Navbar from './navbar/Navbar';

const App = () => {
  return <>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/service" component={Service} />
      <Redirect to="/" />

    </Switch>
  </>
}

export default App;
