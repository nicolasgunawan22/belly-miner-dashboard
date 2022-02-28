import React, { useEffect, useState } from 'react'
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

function SideBar({ show, handleClose }) {
  const router = useRouter()

  let routes = [
    {
      path: "/",
      name: "Dashboard",
      icon: <MdDashboard className={`${router.pathname === "/" ? 'text-white' : 'text-white'}`} />,
    },
    {
      path: "/payments",
      name: "Payments",
      icon: <MdPayment className={`${router.pathname === "/payments" ? 'text-white' : 'text-white'}`} />,
    },
    {
      path: "/upgrade",
      name: "Upgrade",
      icon: <AiFillRocket className={`${router.pathname === "/upgrade" ? 'text-white' : 'text-white'}`} />,
    },
    {
      path: "/help",
      name: "Help",
      icon: <AiFillExclamationCircle className={`${router.pathname === "/help" ? 'text-white' : 'text-white'}`} />,
    },
    {
      path: "/about",
      name: "About Us",
      icon: <AiFillQuestionCircle className={`${router.pathname === "/about" ? 'text-white' : 'text-white'}`} />,
    },
  ];

  return (
    <>
      <div
        color="dark"
        dark="true"
        fixed="top"
        className={`z-30 min-h-full w-64 bg-indigo-900 fixed bottom-0 top-0 left-0 flex flex-col p-6 hover:no-underline gap-12 text-md  ${show ? "translate-x-0 " : "-translate-x-full "} sm:translate-x-0 transition-all ease-in-out`}
      >
        <NavbarBrand href="/" >
          <h4 className="text-white text-center font-black">BellyMiner</h4>
        </NavbarBrand>
        <Nav
          className="flex flex-col height-full gap-4"
          navbar
        >
          {routes.map((route, index) => (
            <NavItem key={index} className={`flex items-center rounded-xl hover:bg-indigo-800 active:bg-indigo-800 ${router.pathname === route.path ? 'bg-indigo-800' : ''}`}>
              <Link href={route.path}>
                <a className={`flex items-center gap-6 px-3 py-2.5 ${router.pathname === route.path ? 'text-white' : 'text-white'} no-underline hover:text-white `}>
                  {route.icon}
                  {route.name}
                </a>
              </Link>
            </NavItem>
          ))}
        </Nav>
      </div >
      <div onClick={handleClose} className={`fixed top-0 left-0 h-screen w-screen z-10 bg-neutral-200 opacity-50 ${show ? "translate-x-0 " : "-translate-x-full "}`}></div>
    </>
  )
}

export default SideBar