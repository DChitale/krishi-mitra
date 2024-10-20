'use client';

import React, { useEffect } from 'react';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import '../src/styles/globals.css';
import '../src/i18n';  // Import i18n configuration
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';

export default function Layout({ children }) {
    useEffect(() => {
        i18next.init({
            fallbackLng: 'en',
            debug: true,
            interpolation: {
                escapeValue: false,
            },
            resources: {
                en: {
                    translation: require('../locales/en/translation.json')
                },
                mr: {
                    translation: require('../locales/mr/translation.json')
                }
            }
        });
    }, []);

    return (
        <html lang="en">
            <I18nextProvider i18n={i18next}>
                <body>
                    <Header />
                    {children}
                    <Footer />
                </body>
            </I18nextProvider>
        </html>
    );
}