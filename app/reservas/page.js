"use client";

import React, { useState, useEffect } from 'react';
import Formulario from '../components/Formulario/index.js';
import ListadoCitas from '../components/ListadoCitas/index.js';
import './reservas.css';

function App() {
  const initialCitas = JSON.parse(localStorage.getItem('citas')) || [];
  const [citas, setCitas] = useState(initialCitas);

  useEffect(() => {
    localStorage.setItem('citas', JSON.stringify(citas));
  }, [citas]);

  const handleSubmit = (cita) => {
    setCitas([...citas, { ...cita, id: Date.now() }]);
  }

  return (
    <div className="container">
      <h1>Administrador de Pacientes</h1>
      <div className="row">
        <Formulario handleSubmit={handleSubmit} />
        <ListadoCitas citas={citas} setCitas={setCitas} />
      </div>
    </div>
  );
}

export default App;