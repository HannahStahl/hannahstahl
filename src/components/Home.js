import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';

const Home = () => (
  <div className="home">
    <img alt="Home" src="/home.jpg" className="home-photo" />
    <div>
      <h1>Focus on what you do best.</h1>
      <h2>Let me handle the website.</h2>
      <FontAwesomeIcon icon={faAngleDoubleDown} className="down-arrow" />
    </div>
  </div>
);

export default Home;
