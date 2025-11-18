import React from 'react';
import card1 from '../image/barberia.png';
import card2 from '../image/card1.jpg';
import card3 from '../image/card2.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Cards.css'; // Importamos el CSS personalizado

const Cards = () => {
  const cards = [
    { src: card1, title: 'Barbería Moderna', text: 'Estilo clásico con un toque contemporáneo.' },
    { src: card2, title: 'Corte Urbano', text: 'Diseños frescos para cada personalidad.' },
    { src: card3, title: 'Elegancia Natural', text: 'Tu imagen, tu esencia, tu estilo.' },
  ];

  return (
    <div className="container card-section">
      <div className="row">
        {cards.map((card, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card card-hover bg-dark text-white">
              <img src={card.src} className="card-img uniform-img" alt={card.title} />
              <div className="card-img-overlay hidden-text">
                <h5 className="card-title styled-title">{card.title}</h5>
                <p className="card-text styled-text">{card.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;