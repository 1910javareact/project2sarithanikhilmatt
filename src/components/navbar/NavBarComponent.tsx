import React, { useState } from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';

const NavBarComponent = (props: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="navbarcomponent">
      <Navbar color="fixed" light expand="md">
        <NavbarBrand href="/">Tuesday.com</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/projectname">Start a Project!</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>
            <NavLink href="/login">
              <AccountCircleIcon />
            </NavLink>
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBarComponent;