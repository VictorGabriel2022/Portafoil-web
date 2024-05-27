// Navbar.js
import { useContext, useEffect } from 'react';
import './Navbar.css';
import { ThemeContext } from './Context/ThemeContext';
import { Link } from 'react-router-dom';

function Navbar() {


  return (
    <div className="contenedor">
    <div className="container-nav">
      <Link className="item" to="/"><i className="fi fi-bs-home"> <span className="tooltip">Home</span></i>
     </Link>
      <Link className="item" to="/proyects"><i className="fi fi-bs-home">
      <span className="tooltip">Proyect</span></i></Link>
      <Link className="item" to="/cv"><i className="fi fi-bs-home">
      <span className="tooltip">Formacion</span></i></Link>
      <div className="item"><i className="fi fi-bs-home"></i></div>
      <div className="item"><i className="fi fi-bs-home"></i></div>
      
    </div>
    </div>
  );
}

export default Navbar;
