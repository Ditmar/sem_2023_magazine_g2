import styles from './styles.module.css';

import Navbar from '../Navbar';

const MainNavigation = () => {

    return (
        <nav className={styles.nav}>
            <Navbar/>
        </nav>
    )
}
export default MainNavigation;