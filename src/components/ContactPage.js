import React, { useState } from 'react';
import styles from '../styles/ContactPage.module.css';

const ContactPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !message) {
            setError('Please fill in all fields.');
            setSuccess(false);
            return;
        }
        setError('');
        // Handle the form submission (e.g., send the data to an API)
        // For now, we simulate a successful submission
        setSuccess(true);
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className={styles.contactPage}>
            <div className={styles.contactContainer}>
                <h1 className={styles.title}>Contact Us</h1>
                {success && <p className={styles.successMessage}>Your message has been sent successfully!</p>}
                {error && <p className={styles.errorMessage}>{error}</p>}
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
                            placeholder="Write your message here"
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className={styles.submitButton}>Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default ContactPage;
