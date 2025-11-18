import React, { useState } from 'react';
import '../css/Contacts.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    correo: '',
    telefono: '',
    fecha: '',
    hora: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Usando variable de entorno para la URL del backend
      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/citas`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('Error al crear la cita');

      // Guardar el correo del usuario
      localStorage.setItem("userEmail", formData.correo);

      alert('✅ ¡Cita agendada con éxito!');

      setFormData({
        nombre: '',
        apellido: '',
        correo: '',
        telefono: '',
        fecha: '',
        hora: '',
      });

    } catch (error) {
      console.error('Error:', error);
      alert(`❌ Error al agendar la cita: ${error.message}`);
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-box">
        <h1 className="contact-title">Contáctanos</h1>
        <p className="contact-text">
          ¿Quieres agendar una cita, conocer nuestros servicios o simplemente hablar con nosotros?
          Estamos aquí para ti.
        </p>

        <div className="contact-info">
          <p><strong>📍 Dirección:</strong> Calle 10 #23-45, Medellín</p>
          <p><strong>📞 Teléfono:</strong> +57 300 123 4567</p>
          <p><strong>📧 Email:</strong> contacto@barberiaurbana.com</p>
        </div>

        <div className="social-icons">
          <a href="https://wa.me/573001234567" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Agendar tu cita</h2>

          <input type="text" name="nombre" placeholder="Nombre" value={formData.nombre} onChange={handleChange} required />
          <input type="text" name="apellido" placeholder="Apellido" value={formData.apellido} onChange={handleChange} required />
          <input type="email" name="correo" placeholder="Correo" value={formData.correo} onChange={handleChange} required />
          <input type="tel" name="telefono" placeholder="Teléfono" value={formData.telefono} onChange={handleChange} required />
          <input type="date" name="fecha" value={formData.fecha} onChange={handleChange} required />
          <input type="time" name="hora" value={formData.hora} onChange={handleChange} required />

          <button type="submit">Reservar</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
