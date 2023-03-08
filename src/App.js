import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";

function App() {

  const [sidebarActive, setSidebarActive] = useState(true);

  const toggleSidebar = ()=>{
    setSidebarActive(!sidebarActive)
  }

  return (
    <div className="w-screen h-screen flex relative">
      <Sidebar sidebarActive={sidebarActive} toggleSidebar={toggleSidebar} />
        {/* overlay */}
        <div onClick={()=>{setSidebarActive(false)}} className={`overlay md:hidden ${!sidebarActive&&"hidden"}`} />
      <Dashboard toggleSidebar={toggleSidebar}/>
    </div>
  );
}

export default App;
