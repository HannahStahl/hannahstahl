import React from 'react';
import { Fade } from 'react-reveal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import config from '../config';

const content = require('../content/portfolio.json');

const Portfolio = () => (
  <div className="portfolio">
    <h1>Check out some of my latest work.</h1>
    <Fade left><div className="header-line" /></Fade>
    <div className="portfolio-items">
      {content.portfolio.map((item) => (
        <div className="portfolio-item" key={item.name}>
          <a href={item.url} target="_blank" rel="noopener noreferrer">
            <div className="screenshots">
              <img
                src={`${config.cloudFrontURL}/${item.img}-desktop.png`}
                alt={item.name}
                className="portfolio-desktop-img"
              />
              <img
                src={`${config.cloudFrontURL}/${item.img}-mobile.png`}
                alt={item.name}
                className="portfolio-mobile-img"
              />
            </div>
            <div className="external-link-icon-container">
              <FontAwesomeIcon icon={faExternalLinkAlt} className="external-link-icon" />
            </div>
          </a>
        </div>
      ))}
    </div>
  </div>
);

export default Portfolio;
