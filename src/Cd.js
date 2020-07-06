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

const Cd = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Header />
      <h1>Certificate of Deposit (CD)</h1>
      <center>
        <i class="fa fa-comments fa-5x" />
      </center>

      <Navbar color="light" light expand="md">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink a href="/createcd">
                Create Certificate of Deposit Account
              </NavLink>
            </NavItem>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                {" "}
                Certificate of Deposit Account{" "}
              </DropdownToggle>
              <DropdownMenu right>
                <NavItem>
                  <NavLink href="/cd" />
                </NavItem>
                <NavItem>
                  <NavLink href="#cd">
                    Certificate of Deposit (CD)
                  </NavLink>
                </NavItem>
                <DropdownItem divider />
                <NavItem>
                  <NavLink href="#something">
                    
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
          <NavbarBrand href="/">Close Certificate of Deposit Account</NavbarBrand>
          <NavbarBrand href="/">Log Out</NavbarBrand>
          <NavbarText />
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Cd;