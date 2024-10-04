// src/components/LoginPage.js
'use client';

import React, { useState } from 'react';
import styles from '../styles/LoginPage.module.css';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false); // New state for password visibility

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
            setErrorMessage('Please fill in all fields');
        } else {
            setErrorMessage('');
            alert('Login functionality to be implemented.');
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword); // Toggle the password visibility
    };

    return (
        <div className={styles.loginPage}>
            <div className={styles.loginContainer}>
                <h2 className={styles.title}>Login</h2>
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
                                type={showPassword ? "text" : "password"} // Change type based on visibility
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
                                {/* Eye Icon */}
                                <span className={styles.eyeIcon}>{showPassword ? '👁️' : '👁️'}</span> {/* Adjusted for visibility */}
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
