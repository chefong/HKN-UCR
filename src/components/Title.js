import React, { Component } from 'react';
import './Title.css';

const hknucr = require('../assets/imgs/HKN-UCR.png');
const triangle = require('../assets/imgs/Triangle.png');

export default class Title extends Component {
  render() {
    return (
      <div className="container-fluid title-container">
        <img src={hknucr} alt="HKN-UCR" id="hkn-title"/>
        <div className="row justify-content-center">
          <div id="lambda-sigma">
            Lambda Sigma Chapter at UCR
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="triangle-container">
            <img src={triangle} alt="triangle" className="triangle"/>
          </div>
        </div>
      </div>
    )
  }
}
