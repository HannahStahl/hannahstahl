import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import config from '../config';

const content = require('../content/portfolio.json');

const Portfolio = () => (
  <div>
    <div className="portfolio">
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
