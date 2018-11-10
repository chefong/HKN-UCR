import React, { Component } from 'react';
import './Events.css';
import Navigation from './Navigation';

export default class Events extends Component {
  render() {
    return (
      <div>
        <Navigation/>
        <p id="event-message">Events will be up here soon!</p>
      </div>
    )
  }
}
