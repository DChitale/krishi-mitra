// src/components/SchemeDisplay.js
import React from 'react';
import styles from '../styles/SchemeDisplay.module.css'; // Import your CSS for styling

const SchemeDisplay = () => {
    const schemes = [
        {
            name: "Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)",
            description: "Financial support for farmers to supplement their income.",
            eligibility: "Small and marginal farmers.",
            benefits: "₹6,000 per year in three equal installments.",
            applicationProcess: "Register through the official PM-KISAN portal.",
            deadline: "Ongoing",
            contact: "Call the helpline at 155261"
        },
        {
            name: "Soil Health Card Scheme",
            description: "Provides information on soil health to improve productivity.",
            eligibility: "Farmers cultivating on agricultural land.",
            benefits: "Soil health card issued to farmers to guide them on fertilizer usage.",
            applicationProcess: "Visit the local agriculture office.",
            deadline: "N/A",
            contact: "Contact your local agriculture department"
        },
        {
            name: "Pradhan Mantri Fasal Bima Yojana (PMFBY)",
            description: "Crop insurance scheme to provide financial support to farmers.",
            eligibility: "Farmers growing notified crops.",
            benefits: "Insurance coverage for crop losses due to natural calamities.",
            applicationProcess: "Apply through the designated insurance companies.",
            deadline: "Season-wise deadlines apply.",
            contact: "Visit the nearest agriculture office."
        },
        {
            name: "National Agriculture Market (eNAM)",
            description: "Online trading platform for agricultural commodities.",
            eligibility: "Farmers and traders.",
            benefits: "Access to better prices and wider market reach.",
            applicationProcess: "Register on the eNAM portal.",
            deadline: "Ongoing",
            contact: "Call the eNAM helpline."
        }
    ];

    return (
        <div className={styles.schemeContainer}>
            <h1 className={styles.title}>Government Schemes for Farmers</h1>
            {schemes.map((scheme, index) => (
                <div key={index} className={styles.schemeCard}>
                    <h2 className={styles.schemeName}>{scheme.name}</h2>
                    <p className={styles.description}>{scheme.description}</p>
                    <p><strong>Eligibility:</strong> {scheme.eligibility}</p>
                    <p><strong>Benefits:</strong> {scheme.benefits}</p>
                    <p><strong>Application Process:</strong> {scheme.applicationProcess}</p>
                    <p><strong>Deadline:</strong> {scheme.deadline}</p>
                    <p><strong>Contact:</strong> {scheme.contact}</p>
                </div>
            ))}
        </div>
    );
};

export default SchemeDisplay;
