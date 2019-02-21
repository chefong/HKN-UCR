import React, { Component } from 'react';
import './Board.css';
import Navigation from './Navigation';

const dylan = require('../assets/imgs/board/dylanwright.jpg');
const eric = require('../assets/imgs/board/ericong.jpg');
const ryan = require('../assets/imgs/board/ryanpan.jpg');
const brandon = require('../assets/imgs/board/brandonlam.jpg');

export default class Board extends Component {
  render() {
    return (
      <div>
        <Navigation/>
        <div class="container-fluid">
          <div className="board-title-container">
            <div className="row justify-content-center">
              <div className="col-md-6">
                <p className="board-title">Board</p>
              </div>
            </div>
          </div>
          <div className="board-image-container">
            <div className="row justify-content-center">
              <div className="col-md-3 col-sm-3">
                <img src={ dylan } alt="" className="board-image"/>
                <a href="mailto:dwrig010@ucr.edu" className="board-email"><p className="board-name">Dylan Wright</p></a>
                <p className="board-position">President</p>
                <p className="board-major">Chemical Engineering</p>
              </div>
              <div className="col-md-3 col-sm-3">
                <img src={ eric } alt="" className="board-image"/>
                <a href="mailto:eong001@ucr.edu" className="board-email"><p className="board-name">Eric Ong</p></a>
                <p className="board-position">Vice President, Webmaster</p>
                <p className="board-major">Computer Science</p>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-3 col-sm-3">
                <img src={ ryan } alt="" className="board-image"/>
                <a href="mailto:rpan002@ucr.edu" className="board-email"><p className="board-name">Ryan Pan</p></a>
                <p className="board-position">Treasurer</p>
                <p className="board-major">Chemical Engineering</p>
              </div>
              <div className="col-md-3 col-sm-3">
                <img src={ brandon } alt="" className="board-image"/>
                <a href="mailto:blam020@ucr.edu" className="board-email"><p className="board-name">Brandon Lam</p></a>
                <p className="board-position">Secretary</p>
                <p className="board-major">Electrical Engineering</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
