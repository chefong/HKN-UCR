import React, { Component } from 'react';
import './Contact.css';
import Navigation from './Navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Recaptcha from 'react-recaptcha';

const recaptchaKey = require('../recaptcha');

export default class Contact extends Component {
  state = {
    verified: false
  }

  callback = () => {
    console.log("Successfully loaded")
  }

  verifyCallback = () => {
    this.setState({ verified: true })
  }

  handleSubmit = e => {
    e.preventDefault()

    if (!this.state.verified) {
      toast.warn("Please verify that you aren't a robot!")
      return
    }
  }

  render() {
    return (
      <div className="contact-container">
        <Navigation/>
        <div class="contact-info-container">
          <p id="questions">Questions?</p>
          <p id="questions-caption">Send us an email using the form below and we'll try to get back to you as soon as we can!</p>
          <form className="contact-form" onSubmit={ this.handleSubmit }>
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
        <div className="recaptcha-container">
          <Recaptcha
            sitekey={ recaptchaKey.RECAPTCHA_SITE_KEY }
            render="explicit"
            onloadCallback={ this.callback }
            verifyCallback={ this.verifyCallback }
            className="recaptcha"
          />
        </div>
        <ToastContainer 
          className="toast-container"
          position="bottom-center"
          hideProgressBar
        />
      </div>
    )
  }
}
