import React from 'react'
import {
  Collapse,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  NavbarBrand,
  NavItem,
  NavLink,
  Nav,
  NavbarToggler,
  NavbarText,
  Navbar
} from "reactstrap";
import { BsFillHouseFill } from 'react-icons/bs';

function SideBar() {
  return (
    <div
      color="dark"
      dark
      fixed="top"
      className="w-64 bg-slate-900 absolute bottom-0 top-0 left-0 flex flex-col p-8 hover:no-underline"
    >
      <NavbarBrand href="/" className="text-white">
        BellyMiner
      </NavbarBrand>
      <Nav
        className="flex flex-col height-full"
        navbar
      >
        <NavItem className="flex items-center gap-x-6">
          <BsFillHouseFill className="text-white" />
          <NavLink href="/" className="text-white">
            Dashboard
          </NavLink>
        </NavItem>

        <NavItem className="flex items-center gap-x-6">
          <BsFillHouseFill className="text-white" />
          <NavLink href="/" className="text-white" href="https://github.com/reactstrap/reactstrap">
            GitHub
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  )
}

export default SideBar