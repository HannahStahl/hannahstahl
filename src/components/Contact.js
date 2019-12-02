import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import config from '../config';

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '', email: '', message: '', sending: false, sent: false,
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, email, message } = this.state;
    this.setState({ sending: true });
    fetch(`${config.emailServiceURL}/email/send`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message }),
    }).then((response) => response.json()).then((json) => {
      if (json.MessageId) {
        this.setState({
          name: '', email: '', message: '', sending: false, sent: true,
        });
      } else {
        // eslint-disable-next-line no-alert
        window.alert('There was an error sending your message. Please email me directly at hannahstahl14@gmail.com. Thank you!');
      }
    });
  }

  handleChange = (event) => this.setState({ [event.target.id]: event.target.value, sent: false });

  disabled = () => {
    const {
      name, email, message, sending, sent,
    } = this.state;
    return sent || sending || name.length === 0 || email.length === 0 || message.length === 0;
  }

  buttonText = () => {
    const { sending, sent } = this.state;
    if (sent) return 'Sent!';
    if (sending) return 'Sending...';
    return 'Send';
  }

  render() {
    const { name, email, message } = this.state;
    return (
      <div className="contact">
        <img alt="Contact" src={`${config.cloudFrontURL}/contact.jpg`} className="contact-photo" />
        <div className="contact-form">
          <div className="consultation-button">
            <a href="https://calendly.com/hannahstahl/consultation" target="_blank" rel="noopener noreferrer">
              <Button variant="outline-primary" size="lg">Schedule a free consultation</Button>
            </a>
          </div>
          <div className="line-header">OR</div>
          <h4 className="send-email-text">Send me an email.</h4>
          <p className="send-email-text-2">I will get back to you within 1 business day.</p>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="name">
              <Form.Control type="text" placeholder="Your name" value={name} onChange={this.handleChange} />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Control type="email" placeholder="Your email address" value={email} onChange={this.handleChange} />
            </Form.Group>
            <Form.Group controlId="message">
              <Form.Control as="textarea" rows="5" placeholder="Your message" value={message} onChange={this.handleChange} />
            </Form.Group>
            <Button variant="primary" type="submit" block disabled={this.disabled()}>
              {this.buttonText()}
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}
