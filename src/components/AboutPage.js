import React from 'react';
import styles from '../styles/AboutPage.module.css'; // Import your CSS for styling

const AboutPage = () => {
    return (
        <div className={styles.aboutPage}>
            <div className={styles.aboutContainer}>
                <h1 className={styles.title}>About Us</h1>
                <p className={styles.description}>
                    Welcome to Krishi Mitra, your trusted partner in agriculture! Our mission is to empower farmers
                    by providing comprehensive information about government schemes and resources that can help
                    improve their farming practices and enhance their livelihoods.
                </p>
                <p className={styles.description}>
                    We understand the challenges faced by farmers in accessing timely and relevant information.
                    That’s why we have created a user-friendly platform that simplifies the process of finding
                    government schemes tailored to your needs.
                </p>
                <p className={styles.description}>
                    Our team is dedicated to keeping you informed about the latest developments in agricultural
                    policies, funding opportunities, and support programs. Together, we can cultivate a
                    prosperous future for our farmers and communities.
                </p>
                <h2 className={styles.subtitle}>Why Choose Us?</h2>
                <ul className={styles.benefitsList}>
                    <li>Comprehensive information on government schemes</li>
                    <li>User-friendly platform designed for farmers</li>
                    <li>Regular updates on agricultural policies</li>
                    <li>Dedicated support for navigating resources</li>
                </ul>
            </div>
        </div>
    );
};

export default AboutPage;
