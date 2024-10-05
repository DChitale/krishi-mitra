'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Header.module.css'; // Adjust path as necessary
import { account } from '../appwrite';  // Import Appwrite account module
import { useRouter } from 'next/navigation';  // For navigation after logout

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);  // State to track login status
    const router = useRouter();  // Router for redirect after logout

    // Check if the user is logged in by querying the Appwrite session
    useEffect(() => {
        const checkLoginStatus = async () => {
            try {
                const session = await account.getSession();  // Check if a session exists
                setIsLoggedIn(!!session);  // If a session exists, set the user as logged in
            } catch (error) {
                console.error('No session found:', error.message);
                setIsLoggedIn(false);  // If no session, the user is not logged in
            }
        };

        checkLoginStatus();
    }, []);

    // Handle logout function
    const handleLogout = async () => {
        try {
            await account.deleteSession('current');  // Delete the current session
            setIsLoggedIn(false);  // Update the state to reflect logout
            router.push('/');  // Redirect to the homepage after logout
        } catch (error) {
            console.error('Failed to logout:', error.message);
        }
    };

    return (
        <header className={styles.header}>
            <nav className={styles.navContainer}>
                <div className={styles.navLeft}>
                    <ul className={styles.navList}>
                        <li className={styles.navItem}><Link href="/">Home</Link></li>
                        <li className={styles.navItem}><Link href="/about">About</Link></li>
                        <li className={styles.navItem}><Link href="/contact">Contact</Link></li>
                    </ul>
                </div>

                <div className={styles.logoContainer}>
                    <img src="https://i.ibb.co/HF5r4tK/LOGO-removebg-preview.png"alt="Krushi Mitra Logo" className={styles.logo} />
                    <span className={styles.brandName}>KRISHIMITRA</span>
                </div>

                <div className={styles.navRight}>
                    {/* Conditionally render Login or Logout */}
                    {!isLoggedIn ? (
                        <Link href="/login" className={styles.navItemRight}>Login</Link>
                    ) : (
                        <button onClick={handleLogout} className={styles.logoutButton}>Logout</button>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Header;
