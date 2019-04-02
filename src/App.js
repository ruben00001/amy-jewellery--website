import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './css/style.css';
import Navbar from './components/navbar';
import Home from './components/home';
import Contact from './components/contact';

class App extends Component {
  render() {
    return(
      <BrowserRouter>
        <div className="body">
          <Navbar />
          <Route exact path="/" render={() => <Home />} />
          <Route path="/contact" render={() => <Contact />} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
