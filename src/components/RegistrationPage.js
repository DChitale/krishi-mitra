// src/components/RegistrationPage.js
'use client';

import React, { useState } from 'react';
import styles from '../styles/RegistrationPage.module.css';

const RegistrationPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        farmType: '',
        contactNo: '',
        farmArea: '',
        cropType: '',
        experience: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can handle the form submission, e.g., send data to your backend
        alert('Registration functionality to be implemented.');
    };

    return (
        <div className={styles.registrationPage}>
            <div className={styles.registrationContainer}>
                <h2 className={styles.title}>Farmer Registration</h2>
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
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="address">Address</label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            className={styles.inputField}
                            value={formData.address}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="farmType">Farm Type</label>
                        <input
                            type="text"
                            id="farmType"
                            name="farmType"
                            className={styles.inputField}
                            value={formData.farmType}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="contactNo">Contact No.</label>
                        <input
                            type="tel"
                            id="contactNo"
                            name="contactNo"
                            className={styles.inputField}
                            value={formData.contactNo}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="farmArea">Area of Farm (in acres)</label>
                        <input
                            type="number"
                            id="farmArea"
                            name="farmArea"
                            className={styles.inputField}
                            value={formData.farmArea}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="cropType">Crop Type</label>
                        <input
                            type="text"
                            id="cropType"
                            name="cropType"
                            className={styles.inputField}
                            value={formData.cropType}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="experience">Experience (in years)</label>
                        <input
                            type="number"
                            id="experience"
                            name="experience"
                            className={styles.inputField}
                            value={formData.experience}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" className={styles.registerButton}>Register</button>
                </form>
            </div>
        </div>
    );
};

export default RegistrationPage;
