import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";

import Nav from 'react-bootstrap/Nav'

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function MyNavbar() {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#home">
			<img
				src="img/MemeIT.png"
				className="d-inline-block align-top"
			/>
		</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav.Link href="#home">
			Logare
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar
