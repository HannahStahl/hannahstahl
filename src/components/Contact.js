import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Contact = () => (
  <div className="contact">
    <a href="https://calendly.com/hannahstahl/consultation" target="_blank" rel="noopener noreferrer">
      <Button variant="outline-primary" size="lg">Schedule a free consultation</Button>
    </a>
    <div className="line-header">OR</div>
    <h4 className="send-email-text">Send me an email:</h4>
    <Form>
      <Form.Group controlId="name">
        <Form.Control type="text" placeholder="Your name" />
      </Form.Group>
      <Form.Group controlId="email">
        <Form.Control type="email" placeholder="Your email address" />
      </Form.Group>
      <Form.Group controlId="message">
        <Form.Control as="textarea" rows="5" placeholder="Your message" />
      </Form.Group>
      <Button variant="primary" type="submit" block>
        Send
      </Button>
    </Form>
  </div>
);

export default Contact;
