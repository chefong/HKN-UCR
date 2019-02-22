import React, { Component } from 'react';
import './Contact.css';
import Navigation from './Navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Recaptcha from 'react-recaptcha';
import axios from 'axios';

const recaptchaKey = require('../recaptcha');
const spinner = require('../assets/imgs/spinner.svg');
let recaptchaInstance;

export default class Contact extends Component {
  state = {
    verified: false,
    loading: false
  }

  resetRecaptcha = () => {
    recaptchaInstance.reset()
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

    let sender = e.target.email.value
    let subject = e.target.subject.value
    let message = e.target.message.value

    if (message.length < 20) {
      toast.warn("Your message seems a bit too short, make sure it's at least 20 characters!")
      return
    }

    this.setState({ loading: true })

    axios.get(`https://hkn-ucr-backend.herokuapp.com/email?sender=${sender}&subject=${subject}&message=${message}`).then(res => {
      this.setState({ loading: false })
    }).then(() => {
      toast.success("Email successfully sent!")
    }).then(() => {
      recaptchaInstance.reset() // Reset recaptcha if successfully sent
      this.setState({ verified: false })
    }).catch(err => {
      toast.error("Oops, something went wrong!")
      console.log(err)
    })
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
                <input type="email" name="email" class="form-control email" id="exampleFormControlInput1" placeholder="john.doe@email.com"/>
                <p className="form-email">Subject</p>
                <input type="text" name="subject" class="form-control email" id="exampleFormControlInput1" placeholder="Subject"/>
                <p className="form-email">Message</p>
                <textarea name="message" class="form-control message" id="exampleFormControlTextarea1" rows="5" placeholder="Your message..."></textarea>
              </div>
            </div>
            <div className="recaptcha-container">
              <Recaptcha
                ref={e => recaptchaInstance = e}
                sitekey={ recaptchaKey.RECAPTCHA_SITE_KEY }
                render="explicit"
                onloadCallback={ this.callback }
                verifyCallback={ this.verifyCallback }
                className="recaptcha"
              />
            </div>
            <div class="submit-button-container">
              { !this.state.loading && <button type="submit" class="btn btn-primary">Submit</button> }
              { this.state.loading && <img src={ spinner } id="spinner" alt=""/> }
            </div>
            <input type="hidden" name="_next" value="/thankyou" />
          </form>
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
