// @ts-nocheck
'use client';
import { useState } from 'react';
import styles from './navbar.module.scss';
import Link from 'next/link';
import Years from '../../app/years/page';

const Navbar: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [showYears, setShowYears] = useState(false);

  const handleItemClick = (itemName: string) => {
    if (itemName === 'volumenes') {
      // setSelectedItem('Años');
      setShowYears(true);
    } else {
      setSelectedItem(null);
      setShowYears(false);
    }
    if (itemName === 'Años')
      if (showYears) {
        setShowYears(true);
        setSelectedItem((prevSelectedItem) =>
          prevSelectedItem === itemName ? null : itemName
        );
      }
  };
  return (
    <>
      <div className={styles.toolbar}>
        <ul>
          <li>
            <Link
              href='/'
              onClick={() => handleItemClick('inicio')}
            >
              INICIO
            </Link>
          </li>
          <li>
            <Link
              href='/'
              onClick={() => handleItemClick('articulos')}
            >
              ARTÍTCULOS
            </Link>
          </li>

          <li className={styles.volumen}>
            <Link
              href={`/volumes`}
              onClick={() => handleItemClick('volumenes')}
            >
              VOLÚMENES
            </Link>
          </li>
        </ul>{' '}
        {showYears && (
          <button
            variant='extended'
            className={styles.fab}
            onClick={() => handleItemClick('Años')}
          >
            AÑOS
          </button>
        )}
        {selectedItem && (
          <Years selectedItemContent={<div>Contenido de {selectedItem}</div>} />
        )}
      </div>
    </>
  );
};

export default Navbar;
