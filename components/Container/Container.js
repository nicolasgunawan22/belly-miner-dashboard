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

  const [width, setWidth] = useState(1)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    function increaseWidth() {
      let timer = setInterval(scene, 10)
      function scene() {
        if (width >= 100) {
          clearInterval(timer);
          setIsVisible(false)
        } else {
          setIsVisible(true)
          setWidth((prev) => prev + 1)
        }
      }
    }

    router.events.on('routeChangeStart', increaseWidth)
    return () => {
      router.events.off('routeChangeStart', increaseWidth)
    }
  }, [])

  if (token) {
    return (
      <>
        <div className=" bg-neutral-200 min-h-screen">
          <div className={`${isVisible ? "inline-block" : "hidden"} fixed w-full h-1`}>
            <div className="bg-indigo-600 h-1 transition-all" style={{ width: `${width}%` }}></div>
          </div>
          <SideBar show={show} handleClose={handleClose} />
          <div className="sm:ml-64">
            <div className="mx-3 sm:mx-4 min-h-screen">
              <TopNavigation handleOpen={handleOpen} handleClose={handleClose} />
              <div className="my-6 sm:mt-8">
                {children}
              </div>
            </div>
            <footer className="p-4 bg-indigo-700 flex justify-center">
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
        <AiOutlineLoading3Quarters className="text-indigo-700 animate-spin text-2xl" />
      </div>
    )
  }
}

export default Container