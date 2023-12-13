
// @ts-nocheck
'use client';


import styles from './styles.module.scss';
import Image from 'next/image';


import MenuIcon from '../BurguerButton'
import tupa from 'public/assets/img/icon-tupa.svg'
import logo from 'public/assets/img/logo.png'

const Navbar = () => {
    return (
        <nav >
            <div className={styles.nav} >
                <div className={styles.rectangle1}> 
                    <div className={styles.rectangle2}>
                        <Image className={styles.logos} src={logo} alt="image logo"  />
                    </div>
                    <MenuIcon/>
                    <button className={styles.icon}>
                        <Image  src={tupa} alt="tupa icon" />
                    </button>  
                </div>
            </div>  
        </nav>
    );
};
export default Navbar;

/*import { useState } from 'react';
import styles from './styles.module.scss';
import Link from 'next/link';
import Years from '../../app/years/page';


const Navbar: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [showYears, setShowYears] = useState(false);

  const handleItemClick = (itemName: string) => {
    if (itemName === 'volumenes') {
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
            className={styles.fab}
            onClick={() => handleItemClick('Años')}
          >
            AÑOS
          </button>
        )}
        {selectedItem && <Years />}
      </div>
    </>
  );
};
export default Navbar;*/
