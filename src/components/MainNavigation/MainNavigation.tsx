// MainNavigation.js
import React from 'react';
import Link from 'next/link';
import styles from './styles.module.css';

const MainNavigation = () => {
  const handleListarVolumenes = () => {
    // Lógica para listar volúmenes
    console.log('Lista de volúmenes');
    // Aquí podrías hacer una llamada a una API, acceder a un estado de la aplicación, etc.
  };

  return (
    <nav className={styles.nav}>
     
      <Link href="/">Inicio</Link>
      {/* Otros enlaces del menú */}
    </nav>
  );
};

export default MainNavigation;

