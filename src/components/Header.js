'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Header.module.css';
import { account } from '../appwrite';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const router = useRouter();
    const { t, i18n } = useTranslation();

    useEffect(() => {
        const checkLoginStatus = async () => {
            try {
                const session = await account.getSession('current');
                setIsLoggedIn(!!session);
            } catch (error) {
                if (error.message.includes('Missing required parameter')) {
                    console.error('No session found:', error.message);
                    setIsLoggedIn(false);
                } else {
                    console.error('Error fetching session:', error.message);
                }
            }
        };
    
        checkLoginStatus();
    }, []);

    const handleLogout = async () => {
        try {
            await account.deleteSession('current');
            setIsLoggedIn(false);
            router.push('/');
        } catch (error) {
            console.error('Failed to logout:', error.message);
        }
    };

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <ul className={styles.navList}>
                    <li><Link href="/">{t('header.home')}</Link></li>
                    <li><Link href="/about">{t('header.about')}</Link></li>
                    <li><Link href="/contact">{t('header.contact')}</Link></li>
                    {!isLoggedIn ? (
                        <li><Link href="/login">{t('header.login')}</Link></li>
                    ) : (
                        <li onClick={handleLogout} className={styles.logoutButton}>{t('header.logout')}</li>
                    )}
                </ul>
                <div className={styles.languageSwitcher}>
                    <button onClick={() => changeLanguage('en')}>English</button>
                    <button onClick={() => changeLanguage('mr')}>मराठी</button>
                </div>
            </nav>
        </header>
    );
};

export default Header;
