import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ListaReservas = () => {
  const [reservas, setReservas] = useState([]);

  useEffect(() => {
    const fetchReservas = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/reservas');
        setReservas(response.data);
      } catch (error) {
        console.error('Error al obtener las reservas', error);
        alert('Hubo un error al cargar las reservas');
      }
    };

    fetchReservas();
  }, []);

  return (
    <div>
      <h2>Lista de Reservas</h2>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Fecha Ingreso</th>
            <th>Fecha Salida</th>
            <th>Habitación</th>
          </tr>
        </thead>
        <tbody>
          {reservas.map((reserva) => (
            <tr key={reserva.id}>
              <td>{reserva.nombre}</td>
              <td>{reserva.fechaIngreso}</td>
              <td>{reserva.fechaSalida}</td>
              <td>{reserva.habitacion}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListaReservas;
