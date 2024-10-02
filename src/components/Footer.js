// src/components/Footer.js
'use client';  // Ensure it's a Client Component if necessary

import React from 'react';
import Link from 'next/link';
import styles from '../styles/Footer.module.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Importing icons

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <p className={styles.text}>© 2024 Krishi Mitra. All Rights Reserved.</p>
                <nav className={styles.nav}>
                    <ul className={styles.navList}>
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/schemes">Schemes</Link>
                        </li>
                        <li>
                            <Link href="/about">About</Link>
                        </li>
                        <li>
                            <Link href="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
                <div className={styles.socialLinks}>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebookF />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <FaTwitter />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </a>
                 
                </div>
            </div>
        </footer>
    );
};

export default Footer;
