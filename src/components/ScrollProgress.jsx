import React, { useState, useEffect } from 'react';

const ScrollProgress = ({ darkMode }) => {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (window.scrollY / totalHeight) * 100;
            setScrollProgress(Math.min(progress, 100));
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="fixed top-0 left-0 right-0 z-[9999] h-1">
            <div
                className="h-full transition-all duration-150 ease-out"
                style={{
                    width: `${scrollProgress}%`,
                    background: darkMode
                        ? 'linear-gradient(90deg, #22d3ee, #3b82f6, #8b5cf6)'
                        : 'linear-gradient(90deg, #3b82f6, #60a5fa, #0ea5e9)',
                    boxShadow: darkMode
                        ? '0 0 10px rgba(34, 211, 238, 0.6), 0 0 20px rgba(59, 130, 246, 0.4)'
                        : '0 0 8px rgba(59, 130, 246, 0.5)'
                }}
            />
        </div>
    );
};

export default ScrollProgress;
