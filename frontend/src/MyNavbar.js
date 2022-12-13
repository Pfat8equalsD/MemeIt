import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";

import Nav from 'react-bootstrap/Nav'

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'

function MyNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg">
        <Navbar.Brand style={{marginLeft:30}} href="#home">
			<img
				src={require('./img/MemeIT.png')}
				className="d-inline-block align-top"
			/>
		</Navbar.Brand>
		<Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end ml-auto">
			<Nav className="ml-auto">
				<Nav.Link href="#home">Logare</Nav.Link>
				<Nav.Link href="#home">Creare cont</Nav.Link>
			</Nav>
        </Navbar.Collapse>
    </Navbar>
  );
// 	return (
// 	  <Navbar bg="light" expand="lg">
// 		<Navbar.Brand href="#">
// 		  <Image src="https://www.example.com/logo.png" width="30" height="30" />
// 		</Navbar.Brand>
// 		<Navbar.Toggle aria-controls="basic-navbar-nav" />
// 		<Navbar.Collapse id="basic-navbar-nav">
// 		  <Nav className="ml-auto">
// 			<NavItem>
// 			  <Nav.Link href="#">Login</Nav.Link>
// 			</NavItem>
// 			<NavItem>
// 			  <Nav.Link href="#">Create account</Nav.Link>
// 			</NavItem>
// 		  </Nav>
// 		</Navbar.Collapse>
// 	  </Navbar>
// 	);
  

}

export default MyNavbar
