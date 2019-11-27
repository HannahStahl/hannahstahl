import React from 'react';

const content = require('../content/portfolio.json');

const Portfolio = () => (
  <div>
    <div className="portfolio">
      {content.portfolio.map((item) => (
        <div className="portfolio-item" key={item.name}>
          <a href={item.url} target="_blank" rel="noopener noreferrer">
            <img src={`${item.img}-desktop.png`} alt={item.name} className="portfolio-desktop-img" />
            <img src={`${item.img}-mobile.png`} alt={item.name} className="portfolio-mobile-img" />
          </a>
        </div>
      ))}
    </div>
  </div>
);

export default Portfolio;
