import React, { Component } from 'react';
import './Contact.css';
import Navigation from './Navigation';

export default class Contact extends Component {

  render() {
    return (
      <div className="contact-container">
        <Navigation/>
        <div class="contact-info-container">
          <p id="questions">Questions?</p>
          <p id="questions-caption">Send us an email using the form below and we'll try to get back to you as soon as we can!</p>
          <form action="https://formspree.io/ucretakappanu@gmail.com" method="POST">
            <div class="row justify-content-center">
              <div class="col-md-5">
                <p className="form-email">Email</p>
                <input type="email" name="_replyto" class="form-control email" id="exampleFormControlInput1" placeholder="john.doe@email.com"/>
                <p className="form-email">Message</p>
                <textarea name="name" class="form-control message" id="exampleFormControlTextarea1" rows="5" placeholder="Your message..."></textarea>
              </div>
            </div>
            <div class="submit-button-container">
              <button type="submit" class="btn btn-primary">Submit</button>
            </div>
            <input type="hidden" name="_next" value="/thankyou" />
          </form>
        </div>
      </div>
    )
  }
}
