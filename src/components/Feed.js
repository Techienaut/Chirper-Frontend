import React from 'react'
import Users from './Users'
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Feed() {
    return (
        <>

            <br />
            Everything should be called in here
            <section>Display of getAll Chirps

                <Users />
            </section>

            <br />
            <br />
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/chirps">Chirp Out</NavbarBrand>
                <NavbarBrand href="/users">Users</NavbarBrand>
                <NavbarBrand href="/signup">Sign Up</NavbarBrand>
                {/* <NavbarToggler onClick={toggle} /> */}
                {/* <Collapse isOpen={isOpen} navbar> */}

                {/* <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink href="/components/">Components</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            Options
              </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>
                                Option 1
                </DropdownItem>
                            <DropdownItem>
                                Option 2
                </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>
                                Reset
                </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Nav>
                <NavbarText>Simple Text</NavbarText>
                {/* </Collapse> */}
            </Navbar>

        </>
    )
}

export default Feed