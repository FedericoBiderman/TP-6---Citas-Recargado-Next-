import React from 'react'
import Link from 'next/link';

export default function Nabvar() {
  return (
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
  )
}
