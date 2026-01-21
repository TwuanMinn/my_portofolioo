import React from 'react';

export const Footer = ({ portfolioData, darkMode }) => {
    return (
        <footer className={`py-8 px-4 border-t ${darkMode ? 'border-blue-900/30 bg-black/90' : 'border-blue-200 bg-blue-50/50'}`}>
            <p className={`text-center ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>
                © 2025 {portfolioData.name}. All rights reserved.
            </p>
        </footer>
    );
};
