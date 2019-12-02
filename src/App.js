import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import { Waypoint } from 'react-waypoint';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import Contact from './components/Contact';

const App = () => (
  <>
    <ScrollableAnchor id="home">
      <Waypoint topOffset="50%"><div className="section"><Home /></div></Waypoint>
    </ScrollableAnchor>
    <ScrollableAnchor id="about">
      <Waypoint topOffset="50%"><div className="section"><About /></div></Waypoint>
    </ScrollableAnchor>
    <ScrollableAnchor id="portfolio">
      <Waypoint topOffset="50%"><div className="section"><Portfolio /></div></Waypoint>
    </ScrollableAnchor>
    <ScrollableAnchor id="pricing">
      <Waypoint topOffset="50%"><div className="section"><Pricing /></div></Waypoint>
    </ScrollableAnchor>
    <ScrollableAnchor id="contact">
      <Waypoint topOffset="50%"><div className="section"><Contact /></div></Waypoint>
    </ScrollableAnchor>
  </>
);

export default App;
