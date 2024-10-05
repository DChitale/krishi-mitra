// src/components/RegistrationPage.js
'use client';

import React, { useState } from 'react';
import styles from '../styles/RegistrationPage.module.css';
import { account } from '../appwrite'; // Import the Appwrite account instance

const RegistrationPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const [formErrors, setFormErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validate = () => {
        let errors = {};

        if (!formData.name) {
            errors.name = 'Name is required';
        }
        if (!formData.email) {
            errors.email = 'Email is required';
        }
        if (!formData.password) {
            errors.password = 'Password is required';
        }

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validate()) {
            try {
                // Create a new user in Appwrite
                await account.create('unique()', formData.email, formData.password, formData.name);
                setIsSubmitted(true);
                alert('User registered successfully!');
            } catch (error) {
                console.error('Error during registration:', error.message);
                setFormErrors({ ...formErrors, server: error.message });
            }
        }
    };

    return (
        <div className={styles.registrationPage}>
            <div className={styles.registrationContainer}>
                <h2 className={styles.title}>User Registration</h2>
                {isSubmitted ? (
                    <p className={styles.successMessage}>Registration successful!</p>
                ) : (
                    <form className={styles.registrationForm} onSubmit={handleSubmit}>
                        <div className={styles.formGroup}>
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className={styles.inputField}
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                            {formErrors.name && <span className={styles.errorMessage}>{formErrors.name}</span>}
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className={styles.inputField}
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            {formErrors.email && <span className={styles.errorMessage}>{formErrors.email}</span>}
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className={styles.inputField}
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                            {formErrors.password && <span className={styles.errorMessage}>{formErrors.password}</span>}
                        </div>

                        {formErrors.server && <span className={styles.errorMessage}>{formErrors.server}</span>}

                        <button type="submit" className={styles.registerButton}>Register</button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default RegistrationPage;
