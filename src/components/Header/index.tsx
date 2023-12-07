import MainNavigation from '../MainNavigation/MainNavigation'
import Navbar from '../Navbar'
import Navigationbar from '../Navigationbar/Navigationbar'
import styles from './styles.module.scss'
const Header = () => {

    return (
        <header className={styles.header}>
            <Navigationbar/>
            <div className={styles.text}>
                Header
            </div>
        </header>
    )
}
export default Header