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

const Checking = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Header />
      <h1>Checking Accounts</h1>
      <center>
        <i class="fa fa-comments fa-5x" />
      </center>

      <Navbar color="light" light expand="md">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink a href="/createchecking">
                Create Checking Account
              </NavLink>
            </NavItem>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                {" "}
                Checking Accounts{" "}
              </DropdownToggle>
              <DropdownMenu right>
                <NavItem>
                  <NavLink href="/checking" />
                </NavItem>
                <NavItem>
                  <NavLink href="#personalchecking">
                    Personal Checking Account
                  </NavLink>
                </NavItem>
                <DropdownItem divider />
                <NavItem>
                  <NavLink href="#businesschecking">
                    Business Checking Account (DBA)
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink a href="/account">
                    Account Information
                  </NavLink>
                </NavItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarBrand href="/">Close Checking Account</NavbarBrand>
          <NavbarBrand href="/">Log Out</NavbarBrand>
          <NavbarText />
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Checking;
