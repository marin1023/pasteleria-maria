import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Outlet } from "react-router-dom";

const Navbarpg = () => {
  return (
    <>
     <Navbar expand="lg" className="navBg" variant="dark">
      <Container className="letranav">
        <Navbar.Brand className="nav-brand" as={Link} to="/">Tortas Maria</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto mx-50px">
            <Nav.Link className="nav-link" as={Link} to="/">Home</Nav.Link>
            <Nav.Link className="nav-link" as={Link} to="/About">Productos Destacados</Nav.Link>
            <Nav.Link className="nav-link" as={Link} to="/Contact">contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      <br />
       <section>
        <Outlet></Outlet>
        </section>
      
    </>
  );
}

export default Navbarpg;