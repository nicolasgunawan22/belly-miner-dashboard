import React, { useEffect, useState } from 'react'
import SideBar from "components/SideBar/SideBar.js";
import TopNavigation from "components/TopNavigation/TopNavigation.js";
import { useRouter } from 'next/router'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

function Container({ children }) {
  const [token, setToken] = useState('')
  const [show, setShow] = useState(false)

  function handleOpen() {
    setShow(true)
  }

  function handleClose() {
    setShow(false)
  }

  const router = useRouter()

  useEffect(() => {
    if (window.sessionStorage.token) {
      setToken(window.sessionStorage.token)
    } else {
      router.push("/login");
    }
  }, [router])

  if (token) {
    return (
      <>
        <div className="bg-neutral-200 min-h-screen">
          <SideBar show={show} handleClose={handleClose} />
          <div className="sm:ml-64">
            <div className="mx-3 sm:mx-4 min-h-screen">
              <TopNavigation handleOpen={handleOpen} handleClose={handleClose} />
              <div className="mt-2 mb-2 sm:mt-8">
                {children}
              </div>
            </div>
            <footer className="p-4 bg-violet-700 flex justify-center">
              <span className="text-sm text-neutral-200">
                © 2022 BellyMiner. All Rights Reserved.
              </span>
            </footer>
          </div>
        </div>
      </>
    )
  } else {
    return (
      <div className="flex justify-center items-center h-screen w-screen">
        <AiOutlineLoading3Quarters className="text-violet-700 animate-spin text-2xl" />
      </div>
    )
  }
}

export default Container