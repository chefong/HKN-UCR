import React, { Component } from 'react';
import './Thanks.css';
import Navigation from './Navigation';

const loading = require('../assets/imgs/loading.svg');

export default class Thanks extends Component {

  componentDidMount = () => {
    setTimeout("location.href = '/contact';", 3000);
  }
  
  render() {
    return (
      <div className="thanks-container">
        <Navigation/>
        <div class="container-fluid">
          <div class="row justify-content-center">
            <div class="col-md-8">
              <p className="thank-you">Thanks for submitting a question! You should be redirected back to the contact page in about 3 seconds...</p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <div className="loading-container">
                <img src={ loading } alt="loading-spinner" id="loading"/>
              </div>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-md-8">
              <p className="no-thank-you">If not, click <a href="/contact">here</a>!</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
