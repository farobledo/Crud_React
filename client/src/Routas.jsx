import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./index.css";
import Login from "./Components/Login/index";
import Register from "./Components/Register";


function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />}/>
      <Route path="/register" element={<Register />}/>
    </Routes>
   );
}


export default App;
