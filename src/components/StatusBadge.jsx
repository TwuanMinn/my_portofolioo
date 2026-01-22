import React, { useState, useEffect } from 'react';

const StatusBadge = ({ darkMode }) => {
    const [status, setStatus] = useState('Open for work');
    const [isBlue, setIsBlue] = useState(true);

    useEffect(() => {
        // Swap text every 1 second
        const interval = setInterval(() => {
            setStatus(prev => prev === 'Open for work' ? 'Available' : 'Open for work');
        }, 1000);

        // Pulse color - faster interval for the radar feel
        const colorInterval = setInterval(() => {
            setIsBlue(prev => !prev);
        }, 1000);

        return () => {
            clearInterval(interval);
            clearInterval(colorInterval);
        };
    }, []);

    return (
        <div className={`fixed top-24 left-12 z-[9990] flex items-center gap-3 px-4 py-2.5 rounded-full backdrop-blur-md border transition-all duration-300 ${darkMode
            ? 'bg-slate-900/40 border-slate-700/50 hover:bg-slate-800/50'
            : 'bg-white/60 border-white/60 hover:bg-white/80'
            } shadow-lg hover:shadow-cyan-500/10 hover:scale-105 group cursor-default select-none`}>

            {/* Radar Dot Container */}
            <div className="relative flex items-center justify-center w-4 h-4">
                {/* Ping Animation */}
                <span className={`absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping duration-1000 ${isBlue ? 'bg-cyan-400' : 'bg-white'
                    }`}></span>

                {/* Main Dot */}
                <span className={`relative inline-flex rounded-full h-3 w-3 transition-colors duration-1000 ${isBlue ? 'bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.6)]' : 'bg-white shadow-[0_0_8px_rgba(255,255,255,0.6)]'
                    }`}></span>
            </div>

            {/* Swapping Text Container */}
            <div className="relative w-28 h-5 overflow-hidden">
                <div className={`absolute w-full h-full flex items-center text-sm font-semibold tracking-wide transition-all duration-700 transform ${status === 'Open for work' ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
                    } ${darkMode ? 'text-slate-200' : 'text-slate-700'}`}>
                    Open for Work
                </div>

                <div className={`absolute w-full h-full flex items-center text-sm font-semibold tracking-wide transition-all duration-700 transform ${status === 'Available' ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                    } ${darkMode ? 'text-slate-200' : 'text-slate-700'}`}>
                    Available
                </div>
            </div>
        </div>
    );
};

export default StatusBadge;
