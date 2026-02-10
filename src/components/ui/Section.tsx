import React from 'react';
import styles from './Section.module.css';

interface SectionProps {
    children: React.ReactNode;
    className?: string;
    variant?: 'default' | 'muted' | 'primary' | 'secondary';
    id?: string;
}

export const Section = ({ children, className = '', variant = 'default', id }: SectionProps) => {
    return (
        <section
            id={id}
            className={`${styles.section} ${styles[`bg-${variant}`]} ${className}`}
        >
            <div className={styles.inner}>{children}</div>
        </section>
    );
};
