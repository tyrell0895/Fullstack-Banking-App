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

const Account = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Header />
      <h1>Account Information</h1>
      <center>
        <i class="fa fa-comments fa-5x" />
      </center>

      <Navbar color="light" light expand="md">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink a href="/createchecking">
                Create Account
              </NavLink>
            </NavItem>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                {" "}
                User Information{" "}
              </DropdownToggle>
              <DropdownMenu right>
                <NavItem>
                  <NavLink href="#updateinfo" />
                </NavItem>
                <NavItem>
                  <NavLink href="#update">Edit/update User Information</NavLink>
                </NavItem>
                <DropdownItem divider />
                <NavItem>
                  <NavLink href="#delete">Delete Account</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink a href="/account">
                    Account Information
                  </NavLink>
                </NavItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        
          <NavbarBrand href="/">Log Out</NavbarBrand>
          <NavbarText />
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Account;
