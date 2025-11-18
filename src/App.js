import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from "./view/Home";
import Contacts from "./view/Contacts";
import About from "./view/About";
import Menu from "./components/Menu";
import Footer from "./components/Footer"; // 👈 importamos el nuevo footer
import Reservas from './view/Reservas';
function App() {
  return (
    <div className="App">
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contactenos" element={<Contacts />} />
        <Route path="nosotros" element={<About />} />
        <Route path="Reservas" element={<Reservas />} />
      </Routes>
      <Footer /> {/* 👈 el footer se muestra en todas las páginas */}
    </div>
  );
}

export default App;
