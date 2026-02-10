import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <div className={styles.section}>
                    <h3>Healthy Living</h3>
                    <p>Empowering you to live your best, healthiest life.</p>
                </div>

                <div className={styles.section}>
                    <h3>Quick Links</h3>
                    <Link href="/blog" className={styles.link}>Articles</Link>
                    <Link href="/recipes" className={styles.link}>Healthy Recipes</Link>
                    <Link href="/workouts" className={styles.link}>Workout Plans</Link>
                </div>

                <div className={styles.section}>
                    <h3>Connect</h3>
                    <a href="#" className={styles.link}>Instagram</a>
                    <a href="#" className={styles.link}>Twitter</a>
                    <a href="#" className={styles.link}>Newsletter</a>
                </div>
            </div>

            <div className={styles.copyright}>
                &copy; {new Date().getFullYear()} Healthy Living. All rights reserved.
            </div>
        </footer>
    );
}
