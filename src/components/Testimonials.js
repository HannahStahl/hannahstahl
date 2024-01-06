import React from 'react';
import { Fade } from 'react-reveal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

const content = require('../content/testimonials.json');

const Testimonials = () => (
  <div className="testimonials">
    <h1>See what my clients have to say.</h1>
    <Fade right><div className="header-line" /></Fade>
    <Fade bottom cascade>
      <div className="testimonials-list">
        {content.map((testimonial) => (
          <div key={testimonial.name}>
            <div className="testimonial">
              <FontAwesomeIcon icon={faQuoteLeft} className="quote-icon" />
              <p className="quote">{testimonial.quote}</p>
              <p className="client">
                {`- ${testimonial.name}`}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Fade>
  </div>
);

export default Testimonials;
