import React from "react";
import "./CustomerMenu.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

const CustomerMenu = () => {
  return (
    <Navbar expand="lg" className="navbar-dark custom-navbar">
      <Container fluid>
        {/* Brand Title */}
        <Navbar.Brand className="navbar-title me-auto">
          EXPENSE MANAGEMENT CUSTOMER MENU
        </Navbar.Brand>

        {/* Toggle Button */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-center">
            {/* Customer Dropdown */}
            <NavDropdown title="Customer" id="customer-nav-dropdown">
              <NavDropdown.Item href="/customer-registration">
                Customer Registration
              </NavDropdown.Item>
              <NavDropdown.Item href="/customer-details">
                Customer Details
              </NavDropdown.Item>
            </NavDropdown>

            {/* Expense Dropdown */}
            <NavDropdown title="Expense" id="expense-nav-dropdown">
              <NavDropdown.Item href="/expense-entry">
                Expense Entry
              </NavDropdown.Item>
              <NavDropdown.Item href="/customer-category-list">
                Category List
              </NavDropdown.Item>
              <NavDropdown.Item href="/expense-report">
                Expense Report
              </NavDropdown.Item>
            </NavDropdown>

            {/* Logout Button */}
            <Nav.Link href="/" className="logout-link">
              Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomerMenu;
