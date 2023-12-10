import styles from './styles.module.scss';
import Navbar from '../Navbar';

const MainNavigation = () => (
  <div className={styles.mainNavigation}>
    <div className={styles.navHeader}>
      <Navbar />
    </div>
  </div>
);

export default MainNavigation;
