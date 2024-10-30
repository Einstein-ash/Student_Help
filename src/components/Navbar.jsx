import React from 'react';
import "../assets/css/navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="header">
      <p className="logo">Prototype</p>
      
      <div className="nav">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
