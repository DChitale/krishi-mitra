'use client';
import React, { useEffect, useState } from 'react';
import { databases } from '../appwrite'; 
import styles from '../styles/SchemeDisplay.module.css';
import { useTranslation } from 'react-i18next'; // Import useTranslation

const SchemeRecommender = ({ filters }) => {
    const { t, i18n } = useTranslation(); // Access translation function
    const [schemes, setSchemes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSchemes = async () => {
            try {
                const collectionId = i18n.language === 'mr' 
                    ? process.env.NEXT_PUBLIC_APPWRITE_MARATHI_COLLECTION_ID 
                    : process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID; 

                const response = await databases.listDocuments(
                    process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID, 
                    collectionId
                );
                
                let filteredSchemes = response.documents;

                // Filter based on form input data (income, cropType, etc.)
                if (filters) {
                    filteredSchemes = filteredSchemes.filter(scheme => {
                        const isIncomeEligible = filters.Income <= scheme.Income;
                        const isCropTypeEligible = scheme.cropType.includes(filters.cropType);
                        return isIncomeEligible || isCropTypeEligible; // Both conditions must be true
                    });
                }

                setSchemes(filteredSchemes);
            } catch (err) {
                console.error('Error fetching schemes:', err);
                setError('Failed to fetch schemes. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchSchemes();
    }, [filters, i18n.language]);

    if (loading) return <p>{t('schemes.loading')}</p>; // Translated loading text
    if (error) return <p>{error}</p>; // Display user-friendly error message
    if (schemes.length === 0) return <p>{t('schemes.noSchemesAvailable')}</p>; // Translated no schemes available text

    return (
        <div className={styles.schemeContainer}>
            <h1 className={styles.title}>{t('schemes.relevantSchemesTitle')}</h1>
            {schemes.map((scheme) => (
                <div key={scheme.$id} className={styles.schemeCard}>
                    <h2 className={styles.schemeName}>{scheme.Name}</h2>
                    <p className={styles.description}>{scheme.Description}</p>
                    <p><strong>{t('schemes.eligibility')}:</strong></p>
                    <ul className={styles.noBullets}>
                        {scheme.Eligibility.split('\n').filter(item => item.trim() !== '').map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>

                    <p><strong>{t('schemes.benefits')}:</strong></p>
                    <ul className={styles.noBullets}>
                        {scheme.Benefits.split('\n').filter(item => item.trim() !== '').map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>

                    <p><strong>{t('schemes.deadline')}:</strong> {scheme.Deadline}</p>
                </div>
            ))}
        </div>
    );
};

export default SchemeRecommender;
    