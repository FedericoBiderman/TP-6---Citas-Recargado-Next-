import React from 'react';
import Link from 'next/link';
import './home.css';

const Home = () => (
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
    <h1>Bienvenido a nuestro sitio de citas para mascotas</h1>
    <p>¡Nos alegra tenerte aquí!</p>
  </div>
);

export default Home;