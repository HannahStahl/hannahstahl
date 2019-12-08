import React from 'react';
import { Fade } from 'react-reveal';
import config from '../config';

const content = require('../content/about.json');

const About = () => (window.innerWidth > 992 ? (
  <div className="about">
    {content.map((section, index) => {
      if (index % 2 === 0) {
        return (
          <Fade left key={section.header}>
            <div className="about-section">
              <div>
                <img
                  src={`${config.cloudFrontURL}/${section.photo}`}
                  alt="About"
                  className={`about-photo ${index === 2 ? 'cms' : ''}`}
                />
              </div>
              <div className="about-section-text about-section-2">
                <h1>{section.header}</h1>
                <p>{section.paragraph}</p>
              </div>
            </div>
          </Fade>
        );
      }
      return (
        <Fade right key={section.header}>
          <div className="about-section">
            <div className="about-section-text">
              <h1>{section.header}</h1>
              <p>{section.paragraph}</p>
            </div>
            <div className="about-section-2">
              <img src={`${config.cloudFrontURL}/${section.photo}`} alt="About" className="about-photo" />
            </div>
          </div>
        </Fade>
      );
    })}
  </div>
) : (
  <div className="mobile-about">
    {content.map((section) => (
      <div key={section.header} className="mobile-about-section">
        <div className="mobile-about-section-text">
          <h1>{section.header}</h1>
          <p>{section.paragraph}</p>
        </div>
        <div>
          <img src={`${config.cloudFrontURL}/${section.photo}`} alt="About" className="mobile-about-photo" />
        </div>
      </div>
    ))}
  </div>
));

export default About;
