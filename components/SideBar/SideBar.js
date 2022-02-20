import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import {
  NavbarBrand,
  NavItem,
  Nav,
} from "reactstrap";

import { MdDashboard } from 'react-icons/md';
import { AiFillBook, AiFillRocket, AiFillExclamationCircle, AiFillQuestionCircle } from 'react-icons/ai';
import { MdPayment } from 'react-icons/md';

function SideBar() {
  const router = useRouter()
  let routes = [
    {
      path: "/",
      name: "Dashboard",
      icon: <MdDashboard className="text-rose-500 text-xl" />,
    },
    {
      path: "/payments",
      name: "Payments",
      icon: <MdPayment className="text-fuchsia-500" />,
    },
    {
      path: "/upgrade",
      name: "Upgrade",
      icon: <AiFillRocket className="text-indigo-500" />,
    },
    {
      path: "/help",
      name: "Help",
      icon: <AiFillExclamationCircle className="text-rose-500 text-xl" />,
    },
    {
      path: "/about",
      name: "About Us",
      icon: <AiFillQuestionCircle className="text-teal-500" />,
    },
  ];

  return (
    <div
      color="dark"
      dark="true"
      fixed="top"
      className="h-full w-64 bg-violet-700 fixed bottom-0 top-0 left-0 flex flex-col p-8 hover:no-underline gap-12 text-lg"
    >
      <NavbarBrand href="/" className="text-white flex justify-center font-bold">
        BellyMiner
      </NavbarBrand>
      <Nav
        className="flex flex-col height-full gap-4"
        navbar
      >
        {routes.map((route, index) => (
          <NavItem key={index} className={`flex items-center rounded-3xl hover:-translate-y-0.5 ${router.pathname === route.path ? 'bg-violet-900' : ''}`}>
            <Link href={route.path}>
              <a className={`flex items-center gap-6 px-3 py-2 ${router.pathname === route.path ? 'text-white' : 'text-violet-400'} no-underline font-semibold hover:text-violet-400  `}>
                {route.icon}
                {route.name}
              </a>
            </Link>
          </NavItem>
        ))}
      </Nav>
    </div >
  )
}

export default SideBar