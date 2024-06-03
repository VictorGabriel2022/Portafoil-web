// Navbar.js
import { useContext, useEffect } from 'react';
import './Navbar.css';
import { ThemeContext } from './Context/ThemeContext';
import { Link } from 'react-router-dom';
import { FaHouse } from "react-icons/fa6";


function Navbar() {


  return (
    <div className="contenedor">
    <div className="container-nav">
      <Link className="item" to="/"><i className="fi fi-bs-home"> <span className="tooltip">Home </span></i>
     </Link>
      <Link className="item" to="/proyects"><i className="fi fi-rs-folder">
      <span className="tooltip">Proyect</span></i></Link>
      <Link className="item" to="/cv"><i className="fi fi-rr-resume">
      <span className="tooltip">Formacion</span></i></Link>
      <Link className="item" to="/contact"><i className="fi fi-rr-paper-plane">
      <span className="tooltip">Contactame</span></i></Link>
    
      
    </div>
    </div>
  );
}

export default Navbar;
