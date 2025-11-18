import React from 'react';
import '../css/Home.css';
import Carrusel from "../components/Carrusel";
import Footer from "../components/Footer";
import Cards from '../components/Cards';

const Home = () => {
  return (
    <div>
      <Carrusel />
      <div className="home-page">
        {/* ===== Sección INICIO ===== */}
        <section id="inicio" className="section">
          <div className="inicio-content">
            <h2 className="section-title">Barber Zone</h2>
            <p className="section-text">
              Más que una barbería, somos un espacio para redefinir tu estilo.
              Combinamos técnicas clásicas con las últimas tendencias para lograr un look auténtico, moderno y con personalidad.
            </p>
          </div>
        </section>
      </div>
    <Cards />
    </div>
  );
};

export default Home;