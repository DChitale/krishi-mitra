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
            errors.address = 'Address is required';
        }
        if (!formData.farmType) {
            errors.farmType = 'Farm Type is required';
        }
        if (!phoneRegex.test(formData.contactNo)) {
            errors.contactNo = 'Please enter a valid phone number';
        }
        if (!formData.farmArea) {
            errors.farmArea = 'Farm area is required';
        }
        if (!formData.cropType) {
            errors.cropType = 'Crop type is required';
        }
        if (!formData.experience) {
            errors.experience = 'Experience is required';
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
                            {formErrors.address && <span className={styles.errorMessage}>{formErrors.address}</span>}
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
                            {formErrors.farmType && <span className={styles.errorMessage}>{formErrors.farmType}</span>}
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
                            {formErrors.contactNo && <span className={styles.errorMessage}>{formErrors.contactNo}</span>}
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
                            {formErrors.farmArea && <span className={styles.errorMessage}>{formErrors.farmArea}</span>}
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
                            {formErrors.cropType && <span className={styles.errorMessage}>{formErrors.cropType}</span>}
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
                            {formErrors.experience && <span className={styles.errorMessage}>{formErrors.experience}</span>}
                        </div>
                        <button type="submit" className={styles.registerButton}>Register</button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default RegistrationPage;