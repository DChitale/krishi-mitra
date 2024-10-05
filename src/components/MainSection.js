// src/components/MainSection.js
'use client';  // Ensure this is a Client Component if necessary

import React, { useState } from 'react';
import styles from '../styles/MainSection.module.css';

const MainSection = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "What types of agricultural schemes are available?",
            answer: "Various schemes are available including subsidies, loans, and grants aimed at improving farming efficiency and productivity."
        },
        {
            question: "How can I apply for a scheme?",
            answer: "You can apply through our portal by filling out the necessary application forms available under each scheme."
        },
        {
            question: "Who is eligible for these schemes?",
            answer: "Eligibility varies by scheme but generally includes farmers, agricultural cooperatives, and rural entrepreneurs."
        },
        {
            question: "What documents do I need to provide?",
            answer: "Typically, you will need to provide identification, proof of land ownership, and other relevant documents as specified in each scheme."
        }
    ];

    const features = [
        {
            img: "https://via.placeholder.com/100",
            title: "User-Friendly Interface",
            description: "Our platform is designed with users in mind, making it easy to navigate and find the information you need."
        },
        {
            img: "https://via.placeholder.com/100",
            title: "Comprehensive Schemes",
            description: "Browse through a wide range of agricultural schemes tailored to meet the needs of farmers."
        },
        {
            img: "https://via.placeholder.com/100",
            title: "Real-Time Updates",
            description: "Stay informed with the latest updates and notifications about new schemes and benefits."
        }
    ];

    return (
        <main className={styles.main}>
            {/* Existing Header and Content */}
            {/* Add your existing header code here if needed */}
            <section className={styles.imageSection}>
                <img src="https://modernfarmingindia.home.blog/wp-content/uploads/2019/01/cropped-modern-farming-in-india.png" alt="Agriculture Scheme" className={styles.mainImage}/>
            </section>
            <section className={styles.content}>
                <h2>Welcome to the Agricultural Schemes Portal</h2>
                <p>
                    Find the latest schemes and benefits available for farmers. Browse through various options and apply now!!
                </p>
                <button className={styles.ctaButton}>Explore Schemes</button>
            </section>
            {/* Features Section */}
            <section className={styles.featuresSection}>
                <h3>Website Features</h3>
                <div className={styles.featuresContainer}>
                    {features.map((feature, index) => (
                        <div key={index} className={styles.featureCard}>
                            <img src={feature.img} alt={feature.title} className={styles.featureImage} />
                            <h4 className={styles.featureTitle}>{feature.title}</h4>
                            <p className={styles.featureDescription}>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </section>
            {/* FAQ Section */}
            <section className={styles.faqSection}>
                <h3>Frequently Asked Questions</h3>
                {faqs.map((faq, index) => (
                    <div key={index} className={styles.faqItem}>
                        <div 
                            className={styles.faqQuestion}
                            onClick={() => toggleFAQ(index)}
                        >
                            {faq.question}
                            <span className={activeIndex === index ? styles.activeIcon : styles.icon}>▼</span>
                        </div>
                        {activeIndex === index && (
                            <div className={styles.faqAnswer}>
                                {faq.answer}
                            </div>
                        )}
                    </div>
                ))}
            </section>
        </main>
    );
};

export default MainSection;
