import styles from './Navbar.module.scss';
import { TicketsButton } from '../ComponentIndex';

const Navbar = () => {
  return (
    <header className={styles.header}>
        <nav className={styles.navbar}>
            <h1>FIESTA LOGO</h1>
            <TicketsButton />
        </nav>
    </header>
  )
}

export default Navbar