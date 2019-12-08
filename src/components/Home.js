import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';

const Home = () => (
  <div className="home">
    <div className="home-content">
      <h1>Focus on what you do best.</h1>
      <h3>Let me handle the website.</h3>
      <a href="/#about"><FontAwesomeIcon icon={faAngleDoubleDown} className="down-arrow" /></a>
    </div>
  </div>
);

export default Home;
