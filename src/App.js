import React from "react";
import AppLayout from "./Layouts/AppLayout";
import {Routes, Route} from 'react-router-dom'
import Knowledge from "./components/knowledge";
import OtherPageLayout from './Layouts/OtherPageLayout'

function App() {


  return (
    <Routes>

      <Route path="/" element={<AppLayout/>}>
        <Route path="/dashboard" element={<OtherPageLayout/>}/>
        <Route path="/Knowledge" element={<Knowledge/>}/>
        <Route path="/Members" element={<OtherPageLayout/>}/>
        <Route path="/teams" element={<OtherPageLayout/>}/>
        <Route path="/vault" element={<OtherPageLayout/>}/>
        <Route path="/chat" element={<OtherPageLayout/>}/>
        <Route path="*" element={<OtherPageLayout/>} />
      </Route>
    </Routes>
  );
}

export default App;
