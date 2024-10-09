'use client';
import React, { useEffect, useState } from 'react';
import { databases } from '../appwrite'; 
import styles from '../styles/SchemeDisplay.module.css';

const SchemeRecommeder = ({ filters }) => {
    const [schemes, setSchemes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSchemes = async () => {
            try {
                const response = await databases.listDocuments(
                    process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID, 
                    process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID 
                );
                
                let filteredSchemes = response.documents;

                // Filter based on form input data (income, cropType, etc.)
                if (filters) {
                    filteredSchemes = filteredSchemes.filter(scheme => {
                        // Check if the farmer's income is less than or equal to the scheme's required income
                        const isIncomeEligible = filters.Income <= scheme.Income;
                        // Check if the crop type matches
                        const isCropTypeEligible = scheme.cropType.includes(filters.cropType); // Use includes for array comparison
                
                        // Display schemes where both conditions are met
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
    }, [filters]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
    if (schemes.length === 0) return <p>No schemes available for your input.</p>;

    return (
        <div className={styles.schemeContainer}>
            <h1 className={styles.title}>Relevant Government Schemes for Farmers</h1>
            {schemes.map((scheme) => (
                <div key={scheme.$id} className={styles.schemeCard}>
                    <h2 className={styles.schemeName}>{scheme.Name}</h2>
                    <p className={styles.description}>{scheme.Description}</p>
                    <p><strong>Eligibility:</strong></p>
<ul className={styles.noBullets}>
  {scheme.Eligibility.split('\n').filter(item => item.trim() !== '').map((item, index) => (
    <li key={index}>{item}</li>
  ))}
</ul>

<p><strong>Benefits:</strong></p>
<ul className={styles.noBullets}>
  {scheme.Benefits.split('\n').filter(item => item.trim() !== '').map((item, index) => (
    <li key={index}>{item}</li>
  ))}
</ul>

                    <p><strong>Deadline:</strong> {scheme.Deadline}</p>
                </div>
            ))}
        </div>
    );
};

export default SchemeRecommeder;
