import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <ReactBootStrap.Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <ReactBootStrap.Navbar.Brand js-scroll-trigger a href="/account">
          Merit Bank
        </ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
          <ReactBootStrap.Nav className="mr-auto">
            <ReactBootStrap.Nav.Link a href="/account">
              Home
            </ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link js-scroll-trigger a href="/transfer">
              Transfers
            </ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link
              js-scroll-trigger
              a
              href="/depositwithdraws"
            >
              Deposit / Withdrawals
            </ReactBootStrap.Nav.Link>
            <ReactBootStrap.NavDropdown
              title="Accounts"
              id="collasible-nav-dropdown"
            >
              <ReactBootStrap.NavDropdown.Item a href="/checking">
                Checking Accounts
              </ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item a href="/savings">
                Savings Account
              </ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item a href="/cd">
                Certificate of Deposit Account (CD)
              </ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Divider />
              <ReactBootStrap.NavDropdown.Item a href="/ira">
                Individual Retirement Accounts (IRA)
              </ReactBootStrap.NavDropdown.Item>
            </ReactBootStrap.NavDropdown>
          </ReactBootStrap.Nav>
          <ReactBootStrap.Nav>
            <ReactBootStrap.Nav.Link js-scroll-trigger a href="/register">
              Create a New Account
            </ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link js-scroll-trigger a href="/">
              Login
            </ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link eventKey={2} a href="/">
              Logout
            </ReactBootStrap.Nav.Link>
          </ReactBootStrap.Nav>
        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Navbar>
    </header>
  );
}

export default Header;
