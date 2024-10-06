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
                const session = await account.getSession('current');  // Specify 'current' to get the current session
                setIsLoggedIn(!!session);  // Update login state based on session existence
            } catch (error) {
                // Handle specific errors here
                if (error.message.includes('Missing required parameter')) {
                    console.error('No session found:', error.message);
                    setIsLoggedIn(false);  // No session means user is not logged in
                } else {
                    console.error('Error fetching session:', error.message);
                }
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
            <nav>
                <ul className={styles.navList}>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                    {/* <li><Link href="/scheme">Schemes</Link></li> */}

                    {/* Conditionally render Login or Logout based on user login state */}
                    {!isLoggedIn ? (
                        <li><Link href="/login">Login</Link></li>
                    ) : (
                        <li onClick={handleLogout} >Logout</li>
                    )}
                </ul>
            </nav>
        </header>
    );
};

export default Header;