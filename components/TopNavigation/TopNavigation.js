import React from 'react';
import { useRouter } from 'next/router';
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
  Navbar,
} from 'reactstrap';
import Link from 'next/link';
import { BsFillPersonFill } from 'react-icons/bs';
import { BiLogOut } from 'react-icons/bi';
import { AiOutlineMenu, AiOutlineUserAdd } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { useUser } from 'components/User/User';
import Cookies from 'js-cookie';

function TopNavigation({ handleOpen }) {
  const user = JSON.parse(Cookies.get('PROFILE'));

  let routes = [
    {
      path: '/',
      name: 'Dashboard',
    },
    {
      path: '/payments',
      name: 'Payments',
    },
    {
      path: '/upgrade',
      name: 'Upgrade',
    },
    {
      path: '/help',
      name: 'Help',
    },
    {
      path: '/about',
      name: 'About Us',
    },
  ];

  const router = useRouter();
  const pageName = routes?.filter((route) => route.path == router.route)?.[0]
    ?.name;

  function handleLogout() {
    if (sessionStorage.token) {
      sessionStorage.removeItem('token');
      router.push('/login');
    }
  }

  return (
    <div>
      <Navbar className="font-bold text-base md:text-xl" expand="md">
        <Nav
          className="flex w-full flex-row justify-between items-center p-2"
          navbar
        >
          <NavItem className="">
            <AiOutlineMenu
              onClick={handleOpen}
              className="inline-block sm:hidden text-lg my-2 cursor-pointer"
            />

            <li
              className="hidden sm:inline-block text-black capitalize py-2"
              href={router.route}
            >
              {pageName ? pageName : ''}
            </li>
          </NavItem>

          <UncontrolledDropdown inNavbar nav className="">
            <DropdownToggle caret nav className="text-black flex items-center">
              <CgProfile className="text-base md:text-xl mx-2" />
              {user?.firstName}
            </DropdownToggle>
            <DropdownMenu className="bg-white right-0 drop-shadow-lg border-0 rounded-2xl p-0">
              <Link href="/profile" passHref>
                <button className="flex gap-2 items-center p-2 hover:bg-neutral-200 w-full transition-all ease-in-out">
                  <BsFillPersonFill className=" text-base md:text-xl" />
                  My Profile
                </button>
              </Link>
              {user?.isAdmin && (
                <Link href="/signup" passHref>
                  <button className="flex gap-2 items-center p-2 hover:bg-neutral-200 w-full transition-all ease-in-out">
                    <AiOutlineUserAdd className="text-base md:text-xl" />
                    Create User
                  </button>
                </Link>
              )}
              <DropdownItem divider />
              <button
                onClick={handleLogout}
                className="flex gap-2 items-center p-2 hover:bg-neutral-200 w-full transition-all ease-in-out"
              >
                <BiLogOut className=" text-base md:text-xl" />
                Logout
              </button>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Navbar>
    </div>
  );
}

export default TopNavigation;
