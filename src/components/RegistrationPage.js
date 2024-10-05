// src/components/RegistrationPage.js
'use client';

import React, { useState } from 'react';
import styles from '../styles/RegistrationPage.module.css';

const RegistrationPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        emailid: '',
        password:'',
        
    });

    const [formErrors, setFormErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validate = () => {
        let errors = {};
        const phoneRegex = /^[6-9]\d{9}$/; // Basic validation for phone number

        if (!formData.name) {
            errors.name = 'Name is required';
        }
        if (!formData.address) {
            errors.address = 'Emailid is required';
        }
        if (!formData.farmType) {
            errors.farmType = 'Password is required';
        }
     

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            setIsSubmitted(true);
            alert('Form submitted successfully!');
            // Here you can handle the form submission logic, like sending data to the backend
        }
    };

    return (
        <div className={styles.registrationPage}>
            <div className={styles.registrationContainer}>
                <h2 className={styles.title}>Farmer Registration</h2>
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
                            <label htmlFor="address">Email id</label>
                            <input
                                type="email"
                                id="address"
                                name="address"
                                className={styles.inputField}
                                value={formData.address}
                                onChange={handleChange}
                                required
                            />
                            {formErrors.address && <span className={styles.errorMessage}>{formErrors.address}</span>}
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="farmType">Password</label>
                            <input
                                type="password"
                                id="farmType"
                                name="farmType"
                                className={styles.inputField}
                                value={formData.farmType}
                                onChange={handleChange}
                                required
                            />
                            {formErrors.farmType && <span className={styles.errorMessage}>{formErrors.farmType}</span>}
                        </div>
                        
                        
                        <button type="submit" className={styles.registerButton}>Register</button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default RegistrationPage;