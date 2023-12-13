import MainNavigation from '../MainNavigation';
import styles from './styles.module.scss';
import MenButt from '../BurguerButton'


const Header = () => {
  return (
    <header className={styles.header}>
      
      <MainNavigation />
      
    </header>
  );
};

export default Header;
