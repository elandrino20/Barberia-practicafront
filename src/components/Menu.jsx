import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../css/Menu.css';
import logo from '../image/logo.png';

const Menu = () => {
  useEffect(() => {
    const navLinks = document.querySelectorAll('.nav-link');
    const collapse = document.querySelector('.navbar-collapse');

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth < 992 && collapse.classList.contains('show')) {
          const bsCollapse = new window.bootstrap.Collapse(collapse, { toggle: false });
          bsCollapse.hide();
        }
      });
    });

    return () => {
      navLinks.forEach(link => {
        link.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="Barber Logo" className="logo-image" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><Link to="/" className="nav-link">Inicio</Link></li>
            <li className="nav-item"><Link to="/nosotros" className="nav-link">Nosotros</Link></li>
            <li className="nav-item"><Link to="/contactenos" className="nav-link">Contáctenos</Link></li>
            <li className="nav-item"><Link to="/reservas" className="nav-link">Reservas</Link></li>
            
          </ul>
          
        </div>
      </div>
    </nav>
  );
};

export default Menu;