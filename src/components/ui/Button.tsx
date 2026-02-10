import React from 'react';
import Link from 'next/link';
import styles from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'small' | 'medium' | 'large';
    fullWidth?: boolean;
    href?: string;
    className?: string;
}

export const Button = ({
    children,
    variant = 'primary',
    size = 'medium',
    fullWidth = false,
    href,
    className = '',
    ...props
}: ButtonProps) => {
    const rootClassName = [
        styles.button,
        styles[variant],
        styles[size],
        fullWidth ? styles.fullWidth : '',
        className,
    ]
        .filter(Boolean)
        .join(' ');

    if (href) {
        return (
            <Link href={href} className={rootClassName}>
                {children}
            </Link>
        );
    }

    return (
        <button className={rootClassName} {...props}>
            {children}
        </button>
    );
};
