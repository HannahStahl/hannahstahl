import React from 'react';

const content = require('../content/about.json');

const About = () => (window.innerWidth > 992 ? (
  <div className="about">
    {content.map((section, index) => (
      <div key={section.header} className="about-section">
        {index % 2 === 0 && (
          <div>
            <img src={section.photo} alt={section.header} className="about-photo" />
          </div>
        )}
        <div className={`about-section-text ${index % 2 === 0 && 'about-section-2'}`}>
          <h1>{section.header}</h1>
          <p>{section.paragraph}</p>
        </div>
        {index % 2 === 1 && (
          <div className="about-section-2">
            <img src={section.photo} alt={section.header} className="about-photo" />
          </div>
        )}
      </div>
    ))}
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
          <img src={section.photo} alt={section.header} className="mobile-about-photo" />
        </div>
      </div>
    ))}
  </div>
));

export default About;
