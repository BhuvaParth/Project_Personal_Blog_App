import React from "react";
import { Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
// import Login from "./components/Login";
import About from "./pages/About";
import Home from "./pages/Home";
import AddBlog from "./components/AddBlog";
import Editblog from "./components/Editblog";

function AppContent() {
  const location = useLocation(); 

  return (
    <>
      {location.pathname !== "/addblog" && <Header />}
      
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/addblog" element={<AddBlog />} />
          <Route path="/editblog" element={<Editblog />} />
        </Routes>
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;

