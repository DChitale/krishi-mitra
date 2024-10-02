// app/layout.js
import React from 'react';
import Header from '../src/components/Header';  // Adjust the path to src/components/Header
import Footer from '../src/components/Footer';
import '../src/styles/globals.css';  // Adjust the path to src/styles/globals.css

export default function Layout({ children }) {
    return (
        <html lang="en">
            <body>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
