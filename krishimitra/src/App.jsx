// src/App.jsx
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';

const App = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <MainContent />
            <Footer />
        </div>
    );
};

export default App;