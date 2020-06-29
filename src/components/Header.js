import React from "react";
import * as ReactBootStrap from "react-bootstrap";

function Header() {
  return (
    <header>
      <ReactBootStrap.Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <ReactBootStrap.Navbar.Brand js-scroll-trigger href="#home">
          Merit Bank
        </ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
          <ReactBootStrap.Nav className="mr-auto">
            <ReactBootStrap.Nav.Link href="#home">Home</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link js-scroll-trigger href="#about">
              About Us
            </ReactBootStrap.Nav.Link>
            <ReactBootStrap.NavDropdown
              title="Accounts We Offer"
              id="collasible-nav-dropdown"
            >
              <ReactBootStrap.NavDropdown.Item href="#accounts">
                Checking Accounts
              </ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item href="#accounts">
                Savings Account
              </ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item href="#accounts">
                Certificate of Deposits Account (CD)
              </ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Divider />
              <ReactBootStrap.NavDropdown.Item href="#accounts">
                Individual Retirement Accounts (IRA)
              </ReactBootStrap.NavDropdown.Item>
            </ReactBootStrap.NavDropdown>
          </ReactBootStrap.Nav>
          <ReactBootStrap.Nav>
            <ReactBootStrap.Nav.Link js-scroll-trigger href="#benefits">
              Benefits
            </ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link js-scroll-trigger href="/login">
              Login
            </ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link eventKey={2} href="#new">
              Create a New Account
            </ReactBootStrap.Nav.Link>
          </ReactBootStrap.Nav>
        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Navbar>
    </header>
  );
}

export default Header;
