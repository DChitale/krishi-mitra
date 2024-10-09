// src/components/SchemeDisplay.js
'use client';
import React, { useEffect, useState } from 'react';
import { databases } from '../appwrite'; // Import the Appwrite client
import styles from '../styles/SchemeDisplay.module.css'; // Import your CSS for styling

const SchemeDisplay = () => {
    const [schemes, setSchemes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSchemes = async () => {
            try {
                const response = await databases.listDocuments(
                    process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID, // Use the correct environment variable
                    process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID // Use the correct environment variable
                );
                setSchemes(response.documents);
            } catch (err) {
                console.error('Error fetching schemes:', err); // Log error for debugging
                setError('Failed to fetch schemes. Please try again later.');
            } finally {
                setLoading(false);
            }
        };
        fetchSchemes();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>; // Display user-friendly error message
    if (schemes.length === 0) return <p>No schemes available.</p>; // Handle empty state

    return (
        <div className={styles.schemeContainer}>
            <h1 className={styles.title}>Government Schemes for Farmers</h1>
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

export default SchemeDisplay;
