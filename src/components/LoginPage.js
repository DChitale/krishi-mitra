'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';  // Correct import for App Router
import styles from '../styles/LoginPage.module.css';
import { account } from '../appwrite';  // Adjust according to your Appwrite configuration

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter();  // Initialize the Next.js router

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            setErrorMessage('Please fill in all fields');
        } else {
            setErrorMessage('');
            try {
                // Login the user with Appwrite
                await account.createEmailPasswordSession(email, password);
                // alert('Login successful!');
                router.push('/scheme');  // Redirect to homepage or another path
            } catch (error) {
                console.error('Login failed:', error.message);
                setErrorMessage('Invalid credentials. Please try again.');
            }
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);  // Toggle password visibility
    };

    return (
        <div className={styles.loginPage}>
            <div className={styles.loginContainer}>
                <h2 className={styles.title}>User Login</h2>
                <form className={styles.loginForm} onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            className={styles.inputField}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            aria-label="Email"
                            aria-required="true"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="password">Password</label>
                        <div className={styles.passwordContainer}>
                            <input
                                type={showPassword ? "text" : "password"} 
                                id="password"
                                className={styles.inputField}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                aria-label="Password"
                                aria-required="true"
                                placeholder="Enter your password"
                                required
                            />
                            <button type="button" className={styles.togglePassword} onClick={togglePasswordVisibility}>
                                <span className={styles.eyeIcon}>{showPassword ? '👁️' : '👁️'}</span>
                            </button>
                        </div>
                    </div>
                    {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
                    <button type="submit" className={styles.loginButton}>Login</button>
                </form>
                <p className={styles.registerText}>
                    Don't have an account? <a href="/register">Register here</a>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;