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

const Ira = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Header />
      <h1>Individual Retirement Account (IRA)</h1>
      <center>
        <i class="fa fa-comments fa-5x" />
      </center>

      <Navbar color="light" light expand="md">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink a href="/createira">
                Create an IRA Account
              </NavLink>
            </NavItem>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                {" "}
                IRA Accounts{" "}
              </DropdownToggle>
              <DropdownMenu right>
                <NavItem>
                  <NavLink a href="#ira" />
                </NavItem>
                <NavItem>
                  <NavLink href="#rollover">Rollover IRA</NavLink>
                </NavItem>
                <DropdownItem divider />
                <NavItem>
                  <NavLink href="#roth">Roth IRA</NavLink>
                </NavItem>
                <DropdownItem divider />
                <NavItem>
                  <NavLink href="#regular">Regular IRA</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink a href="/account">
                    Account Information
                  </NavLink>
                </NavItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarBrand href="/">Close an IRA Account</NavbarBrand>
          <NavbarBrand href="/">Log Out</NavbarBrand>
          <NavbarText />
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Ira;
