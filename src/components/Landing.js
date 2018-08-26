import React, { Component } from 'react';
import Navigation from './Navigation';
import Title from './Title';
import Info from './Info';

export default class Landing extends Component {
  render() {
    return (
      <div className="landing-container">
        <Navigation/>
        <Title/>
        <Info/>
      </div>
    )
  }
}
