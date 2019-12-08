import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const NavBar = () => {
  const section = window.location.hash;
  return (section === '' || section === '#' || section === '#home') ? <div /> : (
    <Navbar collapseOnSelect expand="lg" fixed="top">
      <Navbar.Brand href="/#home">
        <img
          alt="Home"
          src="logo.png"
          width="40"
          height="40"
          className="d-inline-block align-top"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto" activeKey={`/${section}`}>
          <Nav.Link href="/#about">About</Nav.Link>
          <Nav.Link href="/#portfolio">Portfolio</Nav.Link>
          <Nav.Link href="/#pricing">Pricing</Nav.Link>
          <Nav.Link href="/#contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
