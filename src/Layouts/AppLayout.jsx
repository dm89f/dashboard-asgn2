import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Dashboard from "./DashboardLayout";



function AppLayout() {

  const [sidebarActive, setSidebarActive] = useState(true);

  const toggleSidebar = ()=>{
    setSidebarActive(!sidebarActive)
  }

  return (
    <div className="w-screen min-h-screen flex relative">
      <Sidebar sidebarActive={sidebarActive} toggleSidebar={toggleSidebar} />
        
        {/* overlay */}
        <div onClick={()=>{setSidebarActive(false)}} className={`overlay md:hidden ${!sidebarActive&&"hidden"}`} />

      <Dashboard toggleSidebar={toggleSidebar}/>
    </div>
  )
}

export default AppLayout