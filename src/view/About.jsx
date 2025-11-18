import React from 'react';
import '../css/About.css';
import logo from '../image/logo.png'; 

const About = () => {
  return (
    <div className="about-page">
      <div className="about-box">
        {/* Logo */}
        <div className="logo-area">
          <img src={logo} alt="Logo Barbería" className="logo-img" />
        </div>

        {/* Texto */}
        <div className="text-area">
          <h1 className="about-title">Sobre Nosotros</h1>
          <p className="about-text">
            En nuestra barbería, el estilo urbano se fusiona con la tradición. Cada corte es una declaración, cada visita una experiencia. Nos inspira la calle, la cultura y la autenticidad de quienes buscan algo más que un simple cambio de look.
          </p>
          <p className="about-text">
            Con toques de verde que representan frescura y renovación, nuestro espacio está diseñado para que te sientas cómodo, seguro y listo para destacar. Somos un equipo apasionado por el detalle, la precisión y el arte de la barbería moderna.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;