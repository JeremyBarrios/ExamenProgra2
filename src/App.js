import React, { useState } from 'react';
import FormularioRegistrarReserva from './FormularioRegistrarReserva';
import ListaReservas from './ListaReservas';

function App() {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  return (
    <div className="App">
      <header>
        <h1>Hotel - Gestión de Reservas</h1>
        <button onClick={() => setMostrarFormulario(!mostrarFormulario)}>
          {mostrarFormulario ? 'Ver Reservas' : 'Hacer Reserva'}
        </button>
      </header>

      <main>
        {mostrarFormulario ? <FormularioRegistrarReserva /> : <ListaReservas />}
      </main>
    </div>
  );
}

export default App;
