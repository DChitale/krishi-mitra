import React from 'react';
import Link from 'next/link';
import styles from '../styles/Header.module.css'; // Adjust path as necessary

const Header = () => {
    return (
        <header className={styles.header}>
            <nav>
                <ul className={styles.navList}>
                    <li><Link href="/">Home</Link></li> {/* Assuming you have a Home page */}
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                    <li><Link href="/register">Register</Link></li>
                    <li><Link href="/login">Login</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
