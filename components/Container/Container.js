import React from 'react'
import SideBar from "components/SideBar/SideBar.js";
import TopNavigation from "components/TopNavigation/TopNavigation.js";

function Container({ children }) {
  return (
    <div className="bg-neutral-200 min-h-screen">
      <SideBar />
      <div className="ml-64">
        <TopNavigation />
        {children}
      </div>
    </div>

  )
}

export default Container