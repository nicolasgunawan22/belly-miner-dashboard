import React from 'react'
import { useRouter } from 'next/router'
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
import Link from "next/link"
import { BsFillPersonFill } from 'react-icons/bs';
import { BiLogOut } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';

function TopNavigation() {
   let routes = [
      {
         path: "/",
         name: "Dashboard",
      },
      {
         path: "/payments",
         name: "Payments",
      },
      {
         path: "/upgrade",
         name: "Upgrade",
      },
      {
         path: "/help",
         name: "Help",
      },
      {
         path: "/about",
         name: "About Us",
      },
   ];

   const router = useRouter()
   const pageName = routes?.filter(route => route.path == router.route)?.[0]?.name

   function handleLogout() {
      if (sessionStorage.token) {
         sessionStorage.removeItem("token");
         router.push("/login")
      }
   }

   return (
      <div>
         <Navbar
            className="font-bold text-base"
            expand="md"
         >
            <Nav
               className="flex justify-between w-full "
               navbar
            >
               <NavItem>
                  <NavLink className="text-black capitalize" href={router.route}>
                     {pageName ? pageName : ''}
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
                     <Link href='/profile' passHref>
                        <button className="flex gap-2 items-center px-2.5 py-2 hover:bg-neutral-200 w-full transition-all ease-in-out">
                           <BsFillPersonFill className="text-lg" />
                           My Profile
                        </button>
                     </Link>
                     {/* <button className="flex gap-2 items-center px-2.5 py-2 hover:bg-neutral-200 w-full transition-all ease-in-out">
                        <BsFillGearFill className="text-lg" />
                        Settings
                     </button> */}
                     <DropdownItem divider />
                     <button onClick={handleLogout} className="flex gap-2 items-center px-2.5 py-2 hover:bg-neutral-200 w-full transition-all ease-in-out" >
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