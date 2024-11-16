import axios from 'axios';
import React, { useState } from 'react';

const FormularioRegistrarReserva = ({ onReservaAgregada }) => {
  const [nombre, setNombre] = useState('');
  const [fechaIngreso, setFechaIngreso] = useState('');
  const [fechaSalida, setFechaSalida] = useState('');
  const [numeroPersonas, setNumeroPersonas] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const nuevaReserva = {
      nombre: nombre,
      fechaIngreso: fechaIngreso,
      fechaSalida: fechaSalida,
      numeroPersonas: numeroPersonas
    };
    
    try {
      const response = await axios.post('http://localhost:8080/api/reservas', nuevaReserva);
      alert('Reserva agregada exitosamente!');
      onReservaAgregada(response.data);  // Pasar la nueva reserva al componente padre
      // Limpiar los campos del formulario
      setNombre('');
      setFechaIngreso('');
      setFechaSalida('');
      setNumeroPersonas('');
    } catch (error) {
      console.error('Error al agregar reserva:', error);
      alert('Hubo un error al agregar la reserva.');
    }
  };

  return (
    <div>
      <h2>Registrar nueva reserva</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Fecha de Ingreso:
          <input
            type="date"
            value={fechaIngreso}
            onChange={(e) => setFechaIngreso(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Fecha de Salida:
          <input
            type="date"
            value={fechaSalida}
            onChange={(e) => setFechaSalida(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Número de Personas:
          <input
            type="number"
            value={numeroPersonas}
            onChange={(e) => setNumeroPersonas(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Registrar Reserva</button>
      </form>
    </div>
  );
};

export default FormularioRegistrarReserva;
