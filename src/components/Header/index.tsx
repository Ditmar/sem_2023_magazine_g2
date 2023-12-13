import MainNavigation from '../MainNavigation/MainNavigation'
import styles from './styles.module.scss'
const Header = () => {

    return (
        <header className={styles.header}>
            <MainNavigation />
            <div className={styles.text}>
                Header
            </div>
        </header>
    )
}
export default Header