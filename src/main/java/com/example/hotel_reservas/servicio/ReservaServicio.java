package com.example.hotel_reservas.servicio;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.hotel_reservas.excepciones.ResourceNotFoundException;
import com.example.hotel_reservas.modelo.Reserva;
import com.example.hotel_reservas.repositorio.ReservaRepositorio;

@Service
public class ReservaServicio {

    private final ReservaRepositorio reservaRepositorio;

    public ReservaServicio(ReservaRepositorio reservaRepositorio) {
        this.reservaRepositorio = reservaRepositorio;
    }

    public Reserva registrarReserva(Reserva reserva) {
        return reservaRepositorio.save(reserva);
    }

    public List<Reserva> listarReservas() {
        return reservaRepositorio.findAll();
    }

    public Reserva actualizarReserva(Long id, Reserva reservaActualizada) {
        // Aseguramos que la reserva existe
        Reserva reserva = reservaRepositorio.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Reserva no encontrada con ID: " + id));

        // Actualizamos los campos
        reserva.setFechaInicio(reservaActualizada.getFechaInicio());
        reserva.setFechaFin(reservaActualizada.getFechaFin());
        reserva.setTipoHabitacion(reservaActualizada.getTipoHabitacion());

        return reservaRepositorio.save(reserva);
    }

    public void eliminarReserva(Long id) {
        // Verificamos que la reserva exista antes de eliminarla
        Reserva reserva = reservaRepositorio.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Reserva no encontrada con ID: " + id));
        
        reservaRepositorio.delete(reserva);
    }
}
