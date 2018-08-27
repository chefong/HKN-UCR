import React, { Component } from 'react';
import './Title.css';

const hkn = require('../assets/imgs/HKN-UCR.png');
const triangle = require('../assets/imgs/Triangle.png');

export default class Title extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="title-container">
            <img src={hkn} alt="HKN" id="hkn"/>
          </div>
        </div>
        <div className="row justify-content-center">
          <p id="lambda">Lambda Sigma Chapter at <span id="ucr">UCR</span></p>
        </div>
        <div className="row justify-content-center">
          <div className="triangle-container"><img src={triangle} alt="Triangle" id="triangle"/></div>
        </div>
      </div>
    )
  }
}
