import styles from '../styles/Navbar.module.css'
import Link from 'next/Link'

const Navbar = () => {
    return (
        <div className={styles.container}>
            <Link href="/">She B.L.O.G.S</Link>
            <ul className={styles.list}>
                <li className={styles.listItem}>
                    <Link href="www.google.com">About</Link>
                </li>
                <li className={styles.listItem}>
                    <Link href="/products/design">Skills</Link>
                </li>
                <li className={styles.listItem}>
                    <Link href="/products/design">Contact</Link>
                </li>
            </ul>
            
        </div>
    )
}
export default Navbar;