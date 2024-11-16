package com.example.hotel_reservas.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.hotel_reservas.modelo.Reserva;

public interface ReservaRepositorio extends JpaRepository<Reserva, Long> {
}
