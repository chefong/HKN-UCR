import React, { Component } from 'react';
import './App.css';
import Landing from './components/Landing';
import Board from './components/Board';
import Events from './components/Events';
import Contact from './components/Contact';
import Thanks from './components/Thanks';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ Landing }/>
            <Route path="/board" component={ Board }/>
            <Route path="/events" component={ Events }/>
            <Route path="/contact" component={ Contact }/>
            <Route path="/thankyou" component={ Thanks }/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
