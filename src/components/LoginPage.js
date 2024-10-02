// src/components/LoginPage.js
'use client';  // Ensure it's a Client Component if necessary

import React, { useState } from 'react';
import styles from '../styles/LoginPage.module.css';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Login functionality to be implemented.');
    };

    return (
        <div className={styles.loginPage}>
            <div className={styles.loginContainer}>
                <h2 className={styles.title}>Login</h2> {/* Use the new class here */}
                <form className={styles.loginForm} onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            className={styles.inputField} // Apply the new class
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            className={styles.inputField} // Apply the new class
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
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
