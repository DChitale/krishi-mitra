// src/components/MainSection.js
'use client';  // Ensure this is a Client Component if necessary

import React from 'react';
import styles from '../styles/MainSection.module.css';

const MainSection = () => {
    return (
        <main className={styles.main}>
            <section className={styles.imageSection}>
                <img src="https://modernfarmingindia.home.blog/wp-content/uploads/2019/01/cropped-modern-farming-in-india.png" alt="Agriculture Scheme" className={styles.mainImage} />
            </section>
            <section className={styles.content}>
                <h2>Welcome to the Agricultural Schemes Portal</h2>
                <p>
                    Find the latest schemes and benefits available for farmers. Browse through various options and apply now.
                </p>
            </section>
        </main>
    );
};

export default MainSection;
