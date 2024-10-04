// src/components/ContactPage.js
'use client'; // This line makes this a Client Component

import React, { useState } from 'react';
import styles from '../styles/ContactPage.module.css'; // Import your CSS for styling

const ContactPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !message) {
            setErrorMessage('Please fill in all fields');
        } else {
            setErrorMessage('');
            alert('Your message has been sent!');
            // Add further handling logic (like sending data to an API) here
        }
    };

    return (
        <div className={styles.contactPage}>
            <div className={styles.contactContainer}>
                <h2 className={styles.title}>Contact Us</h2>
                <form className={styles.contactForm} onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            className={styles.inputField}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your name"
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            className={styles.inputField}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            className={styles.textAreaField}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Enter your message"
                            required
                        ></textarea>
                    </div>
                    {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
                    <button type="submit" className={styles.submitButton}>Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default ContactPage;
