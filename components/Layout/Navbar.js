import styles from './Navbar.module.css';
import Link from 'next/link';

export default function Navbar({}) {
  return (
    <nav className={styles.navbar}>
      <div>
        <div className={styles.logoImage}>Better Parenting</div>
      </div>
      <ul className={styles.navElementsContainer}>
        <Link href='/about' passHref>
          <li className={styles.navElement}>About</li>
        </Link>
        <Link href='/program' passHref>
          <li className={styles.navElement}>Program</li>
        </Link>
        <Link href='/reviews' passHref>
          <li className={styles.navElement}>Reviews</li>
        </Link>
        <Link href='/refund' passHref>
          <li className={styles.navElement}>Refund</li>
        </Link>
        <Link href='/register' passHref>
          <li className={styles.navElement}>Register</li>
        </Link>
      </ul>
    </nav>
  );
}
