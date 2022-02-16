import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import {
  NavbarBrand,
  NavItem,
  Nav,
} from "reactstrap";

import { MdDashboard } from 'react-icons/md';
import { AiFillRocket, AiFillExclamationCircle, AiFillQuestionCircle } from 'react-icons/ai';

function SideBar() {
  const router = useRouter()

  return (
    <div
      color="dark"
      dark
      fixed="top"
      className="h-full w-64 bg-slate-700 fixed bottom-0 top-0 left-0 flex flex-col p-8 hover:no-underline gap-12 text-lg"
    >
      <NavbarBrand href="/" className="text-white flex justify-center font-bold">
        BellyMiner
      </NavbarBrand>
      <Nav
        className="flex flex-col height-full gap-4"
        navbar
      >
        <NavItem className={`flex items-center rounded-3xl hover:-translate-y-0.5 ${router.pathname === '/' ? 'bg-slate-900' : ''}`}>
          <Link href="/">
            <a className={`flex items-center gap-6 px-3 py-2 ${router.pathname === '/' ? 'text-white' : 'text-slate-400'} no-underline font-semibold hover:text-slate-400  `}>
              <MdDashboard className="text-white text-xl" />
              Dashboard
            </a>
          </Link>
        </NavItem>



        <NavItem className={`flex items-center rounded-3xl hover:-translate-y-0.5 ${router.pathname === '/upgrade' ? 'bg-slate-900' : ''}`}>
          <Link href="/upgrade" className="text-white">
            <a className={`flex items-center gap-6 px-3 py-2 ${router.pathname === '/upgrade' ? 'text-white' : 'text-slate-400'} no-underline	font-semibold hover:text-slate-400  `}>
              <AiFillRocket className="text-white" />
              Upgrade
            </a>
          </Link>
        </NavItem>

        <NavItem className={`flex items-center rounded-3xl hover:-translate-y-0.5 ${router.pathname === '/help' ? 'bg-slate-900' : ''}`}>
          <Link href="/help" className="text-white">
            <a className={`flex items-center gap-6 px-3 py-2 ${router.pathname === '/help' ? 'text-white' : 'text-slate-400'} no-underline	font-semibold hover:text-slate-400  `}>
              <AiFillExclamationCircle className="text-white" />
              Help
            </a>
          </Link>
        </NavItem>

        <NavItem className={`flex items-center rounded-3xl hover:-translate-y-0.5 ${router.pathname === '/about' ? 'bg-slate-900' : ''}`}>
          <Link href="/about" className="text-white">
            <a className={`flex items-center gap-6 px-3 py-2 ${router.pathname === '/about' ? 'text-white' : 'text-slate-400'} no-underline	font-semibold hover:text-slate-400  `}>
              <AiFillQuestionCircle className="text-white" />
              About Us
            </a>
          </Link>
        </NavItem>

      </Nav>
    </div>
  )
}

export default SideBar