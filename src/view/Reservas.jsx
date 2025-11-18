import React, { useEffect, useState } from 'react';
import '../css/listar.Reservas.css';

const Reservas = () => {
  const [reservas, setReservas] = useState([]);
  const [loading, setLoading] = useState(true);

  // Estados para modal
  const [showEditarModal, setShowEditarModal] = useState(false);
  const [showEliminarModal, setShowEliminarModal] = useState(false);
  const [reservaSeleccionada, setReservaSeleccionada] = useState(null);
  const [correoConfirmacion, setCorreoConfirmacion] = useState('');

  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    telefono: '',
    fecha: '',
    hora: '',
  });

  useEffect(() => {
    const fetchReservas = async () => {
      try {
        const res = await fetch('http://localhost:4000/api/citas');
        if (!res.ok) throw new Error('Error al cargar citas');
        const data = await res.json();
        setReservas(data);
      } catch (error) {
        console.error('Error al obtener reservas:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchReservas();
  }, []);

  const ordenarPorFechaHora = (a, b) => {
    const fechaA = new Date(`${a.fecha}T${a.hora}`);
    const fechaB = new Date(`${b.fecha}T${b.hora}`);
    return fechaA - fechaB;
  };

  // Abrir modal de editar
  const abrirEditarModal = (reserva) => {
    setReservaSeleccionada(reserva);
    setFormData({
      nombre: reserva.nombre,
      apellido: reserva.apellido,
      telefono: reserva.telefono,
      fecha: reserva.fecha,
      hora: reserva.hora,
    });
    setCorreoConfirmacion('');
    setShowEditarModal(true);
  };

  // Abrir modal de eliminar
  const abrirEliminarModal = (reserva) => {
    setReservaSeleccionada(reserva);
    setCorreoConfirmacion('');
    setShowEliminarModal(true);
  };

  // Actualizar reserva
  const handleEditar = async () => {
    if (correoConfirmacion.trim() !== reservaSeleccionada.correo) {
      return alert("❌ El correo no coincide. No puedes editar esta cita.");
    }

    try {
      const res = await fetch(`http://localhost:4000/api/citas/${reservaSeleccionada._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error('Error al actualizar la cita');

      setReservas(reservas.map(r =>
        r._id === reservaSeleccionada._id ? { ...r, ...formData } : r
      ));

      setShowEditarModal(false);
      alert("Cita actualizada ✔️");
    } catch (error) {
      console.error(error);
      alert("Error al actualizar la cita");
    }
  };

  // Eliminar reserva
  const handleEliminar = async () => {
    if (correoConfirmacion.trim() !== reservaSeleccionada.correo) {
      return alert("❌ El correo no coincide. No puedes eliminar esta cita.");
    }

    try {
      await fetch(`http://localhost:4000/api/citas/${reservaSeleccionada._id}`, { method: 'DELETE' });
      setReservas(reservas.filter(r => r._id !== reservaSeleccionada._id));
      setShowEliminarModal(false);
      alert("Cita cancelada ✔️");
    } catch (error) {
      console.error(error);
      alert("Error al eliminar la cita");
    }
  };

  return (
    <div className="reservas-container">
      <h2>📅 Reservas agendadas</h2>

      {loading ? (
        <p>Cargando reservas...</p>
      ) : (
        <table className="reservas-table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Correo</th>
              <th>Teléfono</th>
              <th>Fecha</th>
              <th>Hora</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {reservas.sort(ordenarPorFechaHora).map((reserva) => (
              <tr key={reserva._id}>
                <td>{reserva.nombre}</td>
                <td>{reserva.apellido}</td>
                <td>{reserva.correo}</td>
                <td>{reserva.telefono}</td>
                <td>{reserva.fecha}</td>
                <td>{reserva.hora}</td>
                <td>
                  <button className="btn-editar" onClick={() => abrirEditarModal(reserva)}>Editar ✏️</button>
                  <button className="btn-eliminar" onClick={() => abrirEliminarModal(reserva)}>Cancelar ❌</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Modal Editar */}
      {showEditarModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Editar Cita</h3>
            <input
              type="text"
              placeholder="Nombre"
              value={formData.nombre}
              onChange={e => setFormData({ ...formData, nombre: e.target.value })}
            />
            <input
              type="text"
              placeholder="Apellido"
              value={formData.apellido}
              onChange={e => setFormData({ ...formData, apellido: e.target.value })}
            />
            <input
              type="text"
              placeholder="Teléfono"
              value={formData.telefono}
              onChange={e => setFormData({ ...formData, telefono: e.target.value })}
            />
            <input
              type="date"
              value={formData.fecha}
              onChange={e => setFormData({ ...formData, fecha: e.target.value })}
            />
            <input
              type="time"
              value={formData.hora}
              onChange={e => setFormData({ ...formData, hora: e.target.value })}
            />
            <input
              type="email"
              placeholder="Confirma tu correo"
              value={correoConfirmacion}
              onChange={e => setCorreoConfirmacion(e.target.value)}
            />
            <div className="modal-buttons">
              <button onClick={handleEditar} className="btn-editar">Guardar ✔️</button>
              <button onClick={() => setShowEditarModal(false)} className="btn-cancelar">Cancelar ❌</button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Eliminar */}
      {showEliminarModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Cancelar Cita</h3>
            <p>Para cancelar la cita, confirma tu correo:</p>
            <input
              type="email"
              placeholder="Correo"
              value={correoConfirmacion}
              onChange={e => setCorreoConfirmacion(e.target.value)}
            />
            <div className="modal-buttons">
              <button onClick={handleEliminar} className="btn-eliminar">Cancelar </button>
              <button onClick={() => setShowEliminarModal(false)} className="btn-cancelar">Cerrar ✖️</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Reservas;
