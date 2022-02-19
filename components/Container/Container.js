import React, { useEffect, useState } from 'react'
import SideBar from "components/SideBar/SideBar.js";
import TopNavigation from "components/TopNavigation/TopNavigation.js";
import { useRouter } from 'next/router'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

function Container({ children }) {
  const [token, setToken] = useState('')
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
          <SideBar />
          <div className="ml-64">
            <div className="mx-4 min-h-screen">
              <TopNavigation />
              <div className="mt-8">
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