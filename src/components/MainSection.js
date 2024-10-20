// src/components/MainSection.js
'use client';  // Ensure this is a Client Component if necessary
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import styles from '../styles/MainSection.module.css';

const MainSection = () => {
    const { t } = useTranslation();
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqs = [
        {
            question: t('mainpage.faq1Question'),
            answer: t('mainpage.faq1Answer')
        },
        {
            question: t('mainpage.faq2Question'),
            answer: t('mainpage.faq2Answer')
        },
        {
            question: t('mainpage.faq3Question'),
            answer: t('mainpage.faq3Answer')
        },
        {
            question: t('mainpage.faq4Question'),
            answer: t('mainpage.faq4Answer')
        }
    ];

    const features = [
        {
            img: "https://i.ibb.co/pJbd8ng/person.png",
            title: t('mainpage.userFriendlyInterface'),
            description: t('mainpage.userFriendlyDescription')
        },
        {
            img: "https://i.ibb.co/d4LSBB0/sprout.png",
            title: t('mainpage.comprehensiveSchemes'),
            description: t('mainpage.comprehensiveDescription')
        },
        {
            img: "https://i.ibb.co/mSNzj15/fast-time.png",
            title: t('mainpage.realTimeUpdates'),
            description: t('mainpage.realTimeDescription')
        }
    ];

    return (
        <main className={styles.main}>
            {/* Hero Section */}
            <section className={styles.heroSection}>
                <div className={styles.heroOverlay}>
                    <h2 className={styles.heroTitle}>{t('mainpage.heroTitle')}</h2>
                    <p className={styles.heroSubtitle}>
                        {t('mainpage.heroSubtitle')}
                    </p>
                    <a href='/scheme'><button className={styles.ctaButton}>{t('mainpage.exploreSchemes')}</button></a>
                </div>
            </section>

            {/* Features Section */}
            <section className={styles.featuresSection}>
                <h3 className={styles.featuresTitle}>{t('mainpage.featuresTitle')}</h3>
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
                <h3 className={styles.faqTitle}>{t('mainpage.faqTitle')}</h3>
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

            {/* Footer Section */}
            <footer className={styles.footer}>
                <p>{t('mainpage.footerText')}</p>
            </footer>
        </main>
    );
};

export default MainSection;
