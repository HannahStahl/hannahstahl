import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';

export default class Home extends Component {
  componentDidMount() {
    setTimeout(this.showDiv, 500);
  }

  showDiv = () => {
    document.getElementById('home-content').className = 'home-content visible';
  }

  render() {
    return (
      <div className="home">
        <div id="home-content" className="home-content hidden">
          <h1>Focus on what you do best.</h1>
          <h3>Let me handle the website.</h3>
          <a href="/#about"><FontAwesomeIcon icon={faAngleDoubleDown} className="down-arrow" /></a>
        </div>
      </div>
    );
  }
}
