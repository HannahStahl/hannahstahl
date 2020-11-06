import React, { useState } from 'react';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';
import { Waypoint } from 'react-waypoint';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Modal } from 'react-bootstrap';

configureAnchors({ offset: -62 });

const App = () => {
  const [showModal, setShowModal] = useState(true);
  return (
    <>
      <Modal centered show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>IMPORTANT UPDATE</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            I have started working with a company full-time.<br />
            As a result, I will not be taking on new clients at this time.
          </p>
        </Modal.Body>
      </Modal>
      <ScrollableAnchor id="home">
        <Waypoint topOffset="50%"><div className="section"><Home /></div></Waypoint>
      </ScrollableAnchor>
      <ScrollableAnchor id="about">
        <Waypoint topOffset="50%"><div className="section"><About /></div></Waypoint>
      </ScrollableAnchor>
      <ScrollableAnchor id="portfolio">
        <Waypoint topOffset="50%"><div className="section"><Portfolio /></div></Waypoint>
      </ScrollableAnchor>
      <ScrollableAnchor id="testimonials">
        <Waypoint topOffset="50%"><div className="section"><Testimonials /></div></Waypoint>
      </ScrollableAnchor>
      <ScrollableAnchor id="pricing">
        <Waypoint topOffset="50%"><div className="section"><Pricing /></div></Waypoint>
      </ScrollableAnchor>
      <ScrollableAnchor id="contact">
        <Waypoint topOffset="50%"><div className="section"><Contact /></div></Waypoint>
      </ScrollableAnchor>
      <Footer />
    </>
  );
};

export default App;
