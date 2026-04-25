import React, { createContext, useContext, useState, useEffect } from 'react';

const AccessibilityContext = createContext();

export const AccessibilityProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const saved = localStorage.getItem('darkMode');
        return saved ? JSON.parse(saved) : false;
    });

    const [fontSize, setFontSize] = useState(() => {
        const saved = localStorage.getItem('fontSize');
        return saved ? parseInt(saved) : 100; // Percentage
    });

    const [fontFamily, setFontFamily] = useState(() => {
        const saved = localStorage.getItem('fontFamily');
        return saved || 'Poppins';
    });

    const [highContrast, setHighContrast] = useState(() => {
        const saved = localStorage.getItem('highContrast');
        return saved ? JSON.parse(saved) : false;
    });

    useEffect(() => {
        localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
            document.body.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
            document.body.classList.remove('dark');
        }
    }, [isDarkMode]);

    useEffect(() => {
        localStorage.setItem('fontSize', fontSize.toString());
        document.documentElement.style.fontSize = `${fontSize}%`;
    }, [fontSize]);

    useEffect(() => {
        localStorage.setItem('fontFamily', fontFamily);
        document.documentElement.style.setProperty('--font-main', fontFamily);
        document.body.style.fontFamily = `var(--font-main), sans-serif`;
    }, [fontFamily]);

    useEffect(() => {
        localStorage.setItem('highContrast', JSON.stringify(highContrast));
        if (highContrast) {
            document.documentElement.classList.add('high-contrast');
            document.body.classList.add('high-contrast');
        } else {
            document.documentElement.classList.remove('high-contrast');
            document.body.classList.remove('high-contrast');
        }
    }, [highContrast]);

    const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

    return (
        <AccessibilityContext.Provider value={{
            isDarkMode, setIsDarkMode,
            toggleDarkMode,
            fontSize, setFontSize,
            fontFamily, setFontFamily,
            highContrast, setHighContrast
        }}>
            {children}
        </AccessibilityContext.Provider>
    );
};

export const useAccessibility = () => {
    const context = useContext(AccessibilityContext);
    if (!context) {
        throw new Error('useAccessibility must be used within an AccessibilityProvider');
    }
    return context;
};
