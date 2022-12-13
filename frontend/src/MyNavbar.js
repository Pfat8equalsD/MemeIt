import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";

import Nav from 'react-bootstrap/Nav'

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'

function MyNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg">
        <Navbar.Brand style={{marginLeft:30}} bg="#f5f5f5" href="#home">
			<img
				src={require('./img/MemeIT.png')}
				className="d-inline-block align-top"
			/>
		</Navbar.Brand>
		<Navbar.Toggle aria-controls="basic-navbar-nav" >
		<img
				src={require('./img/menu.svg')}
				
			/>
		</Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end ml-auto">
			<Nav className="ml-auto">
				<Nav.Link href="#home">Logare</Nav.Link>
				<Nav.Link href="#home">Creare cont</Nav.Link>
			</Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNavbar
