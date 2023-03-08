import React from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";

function App() {

  return (
    <div className="w-screen h-screen flex relative">
      <Sidebar/>
      <Dashboard/>
    </div>
  );
}

export default App;
