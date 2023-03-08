import React, { useState } from "react";
import AppLayout from "./Layouts/AppLayout";
import {Routes, Route} from 'react-router-dom'
import Knowledge from "./components/knowledge";

function App() {


  return (
    <Routes>

      <Route path="/" element={<AppLayout/>}>
        <Route path="/dashboard" element={<div>dashboard</div>}/>
        <Route path="/Knowledge" element={<Knowledge/>}/>
        <Route path="/Members" element={<div>members</div>}/>
        <Route path="/teams" element={<div>teams</div>}/>
        <Route path="/vault" element={<div>Members</div>}/>
        <Route path="/chat" element={<div>chat</div>}/>
        <Route path="*" element={<div>Error Page</div>} />
      </Route>
    </Routes>
  );
}

export default App;
