import { Link } from "react-router-dom";
import "../css/Footer.css"; // si ya tienes estilos

function Footer() {
  return (
    <footer className="footer text-light py-5">
      <div className="container">
        <div className="row">

          {/* Columna 1 - Barber Zone */}
          <div className="col-md-4 mb-4 text-center text-md-start">
            <h5 className="footer-title">Barber Zone</h5>
            <p className="footer-text">
              Estilo, precisión y confianza.  
              Vive una experiencia de barbería moderna pensada para ti.
            </p>
          </div>

          {/* Columna 2 - Enlaces rápidos */}
          <div className="col-md-4 mb-4 text-center">
            <h5 className="footer-title">Enlaces Rápidos</h5>
            <ul className="list-unstyled footer-links">
              <li><Link to="/" className="footer-link">Inicio</Link></li>
              <li><Link to="/nosotros" className="footer-link">Nosotros</Link></li>
              <li><Link to="/contactenos" className="footer-link">Contáctenos</Link></li>
            </ul>
          </div>

          {/* Columna 3 - Contacto */}
          <div className="col-md-4 mb-4 text-center text-md-end">
            <h5 className="footer-title">Contacto</h5>
            <p className="footer-text mb-1">📍 Calle Ejemplo 23, Medellín</p>
            <p className="footer-text mb-1">📞 +57 3023848770</p>
            <p className="footer-text">📧 contacto@barberzone.com</p>
          </div>
        </div>

        {/* Línea inferior */}
        <div className="text-center mt-4 border-top pt-3 footer-copy">
          <p className="mb-0">&copy; {new Date().getFullYear()} Barber Zone. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
