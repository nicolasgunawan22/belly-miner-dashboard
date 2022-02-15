import React from 'react'
import SideBar from "../..//components/SideBar/SideBar.js";

function Container({ children }) {
  return (
    <div>
      <SideBar />
      <div className="ml-64">
        {children}
      </div>
    </div>

  )
}

export default Container