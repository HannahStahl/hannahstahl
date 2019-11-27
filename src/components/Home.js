import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';
import config from '../config';

const Home = () => (
  <div>
    <img alt="Home" src={`${config.cloudFrontURL}/home.jpg`} className="home-photo" />
    <div className="home-content">
      <h1>Focus on what you do best.</h1>
      <h3>Let me handle the website.</h3>
      <FontAwesomeIcon icon={faAngleDoubleDown} className="down-arrow" />
    </div>
  </div>
);

export default Home;
