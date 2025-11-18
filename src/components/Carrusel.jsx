import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../css/Carrusel.css';
import video1 from '../videos/1.mp4';
import video2 from '../videos/2.mp4';
import video3 from '../videos/3.mp4';

const Carrusel = () => {
  useEffect(() => {
    const carousel = document.getElementById('carouselExampleCaptions');
    const videos = carousel.querySelectorAll('video');

    const handleSlide = () => {
      videos.forEach((video) => {
        const item = video.closest('.carousel-item');
        if (item.classList.contains('active')) {
          video.play();
        } else {
          video.pause();
        }
      });
    };

    carousel.addEventListener('slid.bs.carousel', handleSlide);
    handleSlide();

    return () => {
      carousel.removeEventListener('slid.bs.carousel', handleSlide);
    };
  }, []);

  const handleCanPlay = (e) => {
    e.target.classList.add('visible');
  };

  return (
    <div className="carousel-container">
      <div
        id="carouselExampleCaptions"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        data-bs-interval="5000"
      >
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <video className="video-fade" muted loop preload="auto" onCanPlay={handleCanPlay}>
              <source src={video1} type="video/mp4" />
            </video>
            <div className="carousel-caption fade-in-text">
              <h5>BIENVENIDO A BARBER ZONE</h5>
              <p>Donde el estilo es más que un corte: es una actitud.</p>
            </div>
          </div>

          <div className="carousel-item">
            <video className="video-fade" muted loop preload="auto" onCanPlay={handleCanPlay}>
              <source src={video2} type="video/mp4" />
            </video>
            <div className="carousel-caption fade-in-text">
              <h5>UNA EXPERIENCIA DE ESTILO</h5>
              <p>Relájate, disfruta el ambiente y deja que tu look hable por ti.</p>
            </div>
          </div>

          <div className="carousel-item">
            <video className="video-fade" muted loop preload="auto" onCanPlay={handleCanPlay}>
              <source src={video3} type="video/mp4" />
            </video>
            <div className="carousel-caption fade-in-text">
              <h5>TU LOOK, TU MOMENTO</h5>
              <p>Reserva tu cita y vive la experiencia Barber Zone.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carrusel;

