import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from "reactstrap";
import Header from "./components/Header";

const Savings = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Header />
      <h1>Savings Account</h1>
      <center>
        <i class="fa fa-comments fa-5x" />
      </center>

      <Navbar color="light" light expand="md">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/createsavings">Create Savings Account</NavLink>
            </NavItem>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                {" "}
                Savings Accounts{" "}
              </DropdownToggle>
              <DropdownMenu right>
                <NavItem>
                  <NavLink href="/savings" />
                </NavItem>
                <NavItem>
                  <NavLink href="/savings">Savings Account</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink a href="/account">
                    Account Information
                  </NavLink>
                </NavItem>
                <DropdownItem divider />
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarBrand href="/">Close Savings Account</NavbarBrand>
          <NavbarBrand href="/">Log Out</NavbarBrand>
          <NavbarText />
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Savings;
