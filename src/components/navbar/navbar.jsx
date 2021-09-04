import React from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import CartWidget from "../cart/CartWidget";

const NavBar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="/icon/logoRufit.png"
              width="130"
              height="80"
              className="d-inline-block align-top"
              alt="Logo Rufit"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <NavDropdown title="Productos" id="basic-nav-dropdown">
                <NavDropdown.Item href="#Productos/3.1">
                  Remeras
                </NavDropdown.Item>
                <NavDropdown.Item href="#Productos/3.2">
                  Accesorios
                </NavDropdown.Item>
                <NavDropdown.Item href="#Productos/3.3">
                  Suplementos
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <CartWidget />
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
