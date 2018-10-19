import React, { Component } from 'react';
import './Board.css';
import Navigation from './Navigation';

export default class Board extends Component {
  render() {
    return (
      <div>
        <Navigation/>
        <div className="board-image-container">
        
        </div>
      </div>
    )
  }
}
