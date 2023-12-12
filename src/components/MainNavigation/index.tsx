import styles from './styles.module.scss';
import Navbar from '../Navbar';
import Link from 'next/link';

const MainNavigation = () => (
  <div className={styles.mainNavigation}>
    <div className={styles.navHeader}>
      <Navbar />
    </div>
    <div className={styles.container}>
      <Link href="/iniciarSesion">
          <button className={styles.buttonLogin}>Iniciar Sesión</button>
        </Link>
        <Link href="/register">
          <button className={styles.buttonRegister}>Registrarse</button>
        </Link>
    </div>
  </div>
);

export default MainNavigation;
