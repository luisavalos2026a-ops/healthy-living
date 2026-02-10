import Link from 'next/link';
import { Leaf } from 'lucide-react';
import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <Link href="/" className={styles.logo}>
                <Leaf />
                Healthy Living
            </Link>

            <nav className={styles.nav}>
                <Link href="/" className={styles.navLink}>Home</Link>
                <Link href="/blog" className={styles.navLink}>Blog</Link>
                <Link href="/recipes" className={styles.navLink}>Recipes</Link>
                <Link href="/workouts" className={styles.navLink}>Workouts</Link>
                <Link href="/resources" className={styles.navLink}>Tools</Link>
                <Link href="/about" className={styles.navLink}>About</Link>
            </nav>

            <div className={styles.actions}>
                <Link href="/auth/login" className="btn btn-secondary">Login</Link>
            </div>
        </header>
    );
}
