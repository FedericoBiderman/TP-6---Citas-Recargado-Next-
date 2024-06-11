import React from 'react';
import Link from 'next/link';
import "./quienes-somos.css";

const QuienesSomos = () => (
  <div>
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/quienes-somos">Quiénes Somos</Link>
        </li>
        <li>
          <Link href="/reservas">Reservas</Link>
        </li>
        <li>
          <Link href="/contacto">Ayuda</Link>
        </li>
      </ul>
    </nav>
    <h1>Quiénes Somos</h1>
    <p>Somos un equipo dedicado a conectar mascotas con sus dueños. Nuestro objetivo es proporcionar un servicio de alta calidad para el bienestar de todas las mascotas.</p>
  </div>
);

export default QuienesSomos;