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
import { BsFillPersonFill, BsFillGearFill } from 'react-icons/bs';
import { BiLogOut } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';

function TopNavigation() {
   return (
      <div>
         <Navbar
            className="p-8 font-bold text-base"
            expand="md"
         >
            <Nav
               className="flex justify-between w-full "
               navbar
            >
               <NavItem>
                  <NavLink className="text-black" href="/">
                     Dashboard
                  </NavLink>
               </NavItem>

               <UncontrolledDropdown
                  inNavbar
                  nav
               >
                  <DropdownToggle
                     caret
                     nav
                     className="text-black"
                     style={{
                        display: 'flex',
                        alignItems: 'center',
                     }}
                  >
                     <CgProfile className="text-xl mx-2" />
                     Nicolas
                  </DropdownToggle>
                  <DropdownMenu className="right-0 drop-shadow-lg border-0 rounded-2xl p-0">
                     <button className="flex gap-2 items-center px-2.5 py-2 hover:bg-neutral-200 w-full transition-all ease-in-out">
                        <BsFillPersonFill className="text-lg" />
                        My Profile
                     </button>
                     <button className="flex gap-2 items-center px-2.5 py-2 hover:bg-neutral-200 w-full transition-all ease-in-out">
                        <BsFillGearFill className="text-lg" />
                        Settings
                     </button>
                     <DropdownItem divider />
                     <button className="flex gap-2 items-center px-2.5 py-2 hover:bg-neutral-200 w-full transition-all ease-in-out" >
                        <BiLogOut className="text-lg" />
                        Logout
                     </button>
                  </DropdownMenu>
               </UncontrolledDropdown>
            </Nav>
         </Navbar>
      </div >
   )
}

export default TopNavigation