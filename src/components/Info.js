import React, { Component } from 'react'
import './Info.css';

const hkn1 = require('../assets/imgs/hkn-1.jpeg');
const academia = require('../assets/imgs/academic.png');
const character = require('../assets/imgs/character.png');
const attitude = require('../assets/imgs/attitude.png');
const crest = require('../assets/imgs/hkn-crest.png');
const ieee = require('../assets/imgs/ieee.png');

export default class Info extends Component {
  render() {
    return (
      <div className="container-fluid">
          <div className="about-container">
            <div className="row justify-content-center">
              <div className="col-md-3">
                <div className="image-container">
                  <img src={crest} alt="" id="crest-about"/>
                </div>
              </div>
              <div className="col-md-6">
                <p className="subtitle">About Us</p>
                <p className="text">Eta Kappa Nu (HKN) is the Electrical and Computer Engineering honor society
                of IEEE, open to all engineering disciplines. The society was nationally founded on October 28, 1904 for Electrical Engineering students at the
                University of Illinois at Urbana-Champaign. Find out more <span id="here">here</span>.</p>
                <p className="text">Here at the University of California, Riverside, we are a student-run organization providing
                academic services to fellow graduate and undergraduate students. Our mission is to provide a variety of service programs and leadership training, through
                which our student members develop lifelong skills that earmark them for prominent positions in the industry and academia.</p>
              </div>
            </div>
          </div>
          <div className="why-container">
            <div className="row justify-content-center">
              <div className="col-md-5">
              <p className="subtitle">Why Join?</p>
              <p className="text">Employers around the world recognize the designation of HKN and understand that IEEE-HKN members are of the best candidates and are well-rounded, articulate, and community minded.
              You'll have the opportunity to network with top students at major universities and have access to key unviversity decision-makers for references, research, graduate school,
              and beyond.</p>
              </div>
              <div className="col-md-4">
                <img src={hkn1} alt="" id="hkn1"/>
              </div>
            </div>
          </div>
          <div className="principles-container">
            <div className="row justify-content-center">
              <p className="blue-subtitle">3 Core Principles</p>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-3">
                <div className="principle-image-container"><img src={academia} alt="" className="principle-image"/></div>
                <div className="principle-name">Academia</div>
                <p className="principle-desc">Individuals must demonstrate an outstanding academic foundation and meet the academic criteria for their degree progress as outlines in our bylaws.</p>
              </div>
              <div className="col-md-3">
                <div className="principle-image-container"><img src={character} alt="" className="principle-image"/></div>
                <div className="principle-name">Character</div>
                <p className="principle-desc">Individuals must be of exceptional character, demonstrating such character to their peers throughout academic, leadership, and
                service events.</p>
              </div>
              <div className="col-md-3">
                <div className="principle-image-container"><img src={attitude} alt="" className="principle-image"/></div>
                <div className="principle-name">Attitude</div>
                <p className="principle-desc">Individuals must have the proper attitude to work hard, continuously challenge themselves, help others, 
                and use their talents and superior skills in service to their academic institution, department, and peers.</p>
              </div>
            </div>
          </div>
          <div className="benefits-container">
            <div className="row justify-content-center">
              <p className="blue-subtitle">Benefits</p>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-6">
                <ul className="benefits-list">
                  <li>Distinguish yourself from other students through a recognition that acknowledges your academic achievements</li>
                  <li>Provide leadership opportunities for your professional development</li>
                  <li>Obtain a lifetime membership to IEEE (Institute of Electrical and Electronics Engineers)</li>
                  <li>Network with current and future engineering professionals</li>
                </ul>
              </div>
              <div className="col-md-3">
                <div className="ieee-container">
                  <img src={ieee} alt="" id="ieee"/>
                </div>
              </div>
            </div>
          </div>
          <div className="mwl-container">
            <p id="mwl">Made with ❤️ in Riverside, CA</p>
          </div>
      </div>
    )
  }
}
