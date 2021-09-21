import React from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import CartWidget from "../cart/CartWidget";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/Home">
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
              <Nav.Link as={Link} to="/Home">
                Home
              </Nav.Link>
              <NavDropdown title="Productos" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/category/Remeras">
                  Remeras
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/category/Accesorios">
                  Accesorios
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/category/Suplementos">
                  Suplementos
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to={"/cart"}
          >
            <CartWidget />
          </NavLink>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
