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
      icon: <MdDashboard className="text-rose-400 text-xl" />,
    },
    {
      path: "/payments",
      name: "Payments",
      icon: <MdPayment className="text-fuchsia-400" />,
    },
    {
      path: "/upgrade",
      name: "Upgrade",
      icon: <AiFillRocket className="text-indigo-400" />,
    },
    {
      path: "/help",
      name: "Help",
      icon: <AiFillExclamationCircle className="text-rose-400 text-xl" />,
    },
    {
      path: "/about",
      name: "About Us",
      icon: <AiFillQuestionCircle className="text-teal-400" />,
    },
  ];

  return (
    <>
      <div
        color="dark"
        dark="true"
        fixed="top"
        className={`z-30 min-h-full w-64 bg-violet-700 fixed bottom-0 top-0 left-0 flex flex-col p-6 hover:no-underline gap-12 text-xl ${show ? "translate-x-0 " : "-translate-x-full "} sm:translate-x-0 transition-all ease-in-out`}
      >
        <NavbarBrand href="/" >
          <h4 className="text-white flex justify-left font-black">BellyMiner</h4>
        </NavbarBrand>
        <Nav
          className="flex flex-col height-full gap-4"
          navbar
        >
          {routes.map((route, index) => (
            <NavItem key={index} className={`flex items-center rounded-3xl hover:-translate-y-0.5 ${router.pathname === route.path ? 'bg-violet-900' : ''}`}>
              <Link href={route.path}>
                <a className={`font-extrabold flex items-center gap-6 px-3 py-2 ${router.pathname === route.path ? 'text-white' : 'text-violet-400'} no-underline font-semibold hover:text-violet-400  `}>
                  {route.icon}
                  {route.name}
                </a>
              </Link>
            </NavItem>
          ))}
        </Nav>
      </div >
      <div onClick={handleClose} className={`fixed top-0 left-0 h-screen w-screen z-10 ${show ? "translate-x-0 " : "-translate-x-full "}`}></div>
    </>
  )
}

export default SideBar