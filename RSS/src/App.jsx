import Home from "./components/Home/Home"
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from "./components/Login.jsx";



function App() {

  return (
    <>

<Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Home/>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  
     
    </>
  )
}

export default App
