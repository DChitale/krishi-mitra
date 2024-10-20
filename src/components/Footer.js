// src/components/Footer.js
'use client';  // Ensure it's a Client Component if necessary

import React from 'react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import styles from '../styles/Footer.module.css';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';  // Importing icons

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <nav className={styles.nav}>
                    <ul className={styles.navList}>
                        <li>
                            <Link href="/">{t('footer.home')}</Link>
                        </li>
                        <li>
                            <Link href="/scheme">{t('footer.schemes')}</Link>
                        </li>
                        <li>
                            <Link href="/about">{t('footer.about')}</Link>
                        </li>
                        <li>
                            <Link href="/contact">{t('footer.contact')}</Link>
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
            <p className={styles.text}>© 2024 Krishi Mitra. {t('mainpage.footerText')}</p>
        </footer>
    );
};

export default Footer;
