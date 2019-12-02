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
      <Waypoint topOffset="50%"><Home /></Waypoint>
    </ScrollableAnchor>
    <ScrollableAnchor id="about">
      <Waypoint topOffset="50%"><About /></Waypoint>
    </ScrollableAnchor>
    <ScrollableAnchor id="portfolio">
      <Waypoint topOffset="50%"><Portfolio /></Waypoint>
    </ScrollableAnchor>
    <ScrollableAnchor id="pricing">
      <Waypoint topOffset="50%"><Pricing /></Waypoint>
    </ScrollableAnchor>
    <ScrollableAnchor id="contact">
      <Waypoint topOffset="50%"><Contact /></Waypoint>
    </ScrollableAnchor>
  </>
);

export default App;
