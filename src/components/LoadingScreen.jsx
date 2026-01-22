import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ onLoadingComplete }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [currentLine, setCurrentLine] = useState(0);

    useEffect(() => {
        // Animate code lines appearing - spread over 4 seconds
        const lineTimers = [];
        const delays = [0, 600, 1200, 1800, 2400, 3000, 3600];

        delays.forEach((delay, index) => {
            const timer = setTimeout(() => {
                setCurrentLine(index + 1);
            }, delay);
            lineTimers.push(timer);
        });

        // Complete loading after 5 seconds
        const completeTimer = setTimeout(() => {
            setIsLoading(false);
        }, 5000);

        // Call onLoadingComplete after exit animation (5s + 0.5s for exit)
        const callbackTimer = setTimeout(() => {
            if (onLoadingComplete) {
                onLoadingComplete();
            }
        }, 5500);

        return () => {
            lineTimers.forEach(t => clearTimeout(t));
            clearTimeout(completeTimer);
            clearTimeout(callbackTimer);
        };
    }, []); // Empty dependency array - run once on mount

    // Code lines data
    const codeLines = [
        { text: 'const developer = {' },
        { text: '  name: "Minh Tuấn",' },
        { text: '  role: "Software Engineer",' },
        { text: '  passion: "Building Digital Experiences"' },
        { text: '};' },
        { text: '' },
        { text: 'developer.init();' },
    ];

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#0a0a12]"
                    initial={{ opacity: 1 }}
                    exit={{
                        opacity: 0,
                        y: -50,
                    }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                >
                    {/* Animated gradient background */}
                    <div className="absolute inset-0 overflow-hidden">
                        <motion.div
                            className="absolute top-0 left-0 w-full h-full"
                            style={{
                                background: 'radial-gradient(ellipse at 30% 20%, rgba(59, 130, 246, 0.15) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(34, 211, 238, 0.1) 0%, transparent 50%)',
                            }}
                            animate={{
                                opacity: [0.5, 1, 0.5],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: 'easeInOut'
                            }}
                        />
                    </div>

                    {/* Grid pattern overlay */}
                    <div
                        className="absolute inset-0 opacity-[0.03]"
                        style={{
                            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                            backgroundSize: '50px 50px'
                        }}
                    />

                    {/* Main content - Code editor style */}
                    <motion.div
                        className="relative z-10 w-full max-w-lg mx-4"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* Terminal window */}
                        <div className="rounded-2xl overflow-hidden border border-slate-700/50 shadow-2xl shadow-cyan-500/10">
                            {/* Window header */}
                            <div className="bg-slate-800/80 px-4 py-3 flex items-center gap-2 border-b border-slate-700/50">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                </div>
                                <div className="flex-1 text-center">
                                    <span className="text-xs text-slate-400 font-mono">portfolio.js</span>
                                </div>
                            </div>

                            {/* Code content */}
                            <div className="bg-[#0d1117] p-6 font-mono text-sm min-h-[200px]">
                                {codeLines.map((line, index) => (
                                    <motion.div
                                        key={index}
                                        className="flex"
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{
                                            opacity: index < currentLine ? 1 : 0,
                                            x: index < currentLine ? 0 : -10
                                        }}
                                        transition={{ duration: 0.15 }}
                                    >
                                        <span className="text-slate-600 w-6 text-right mr-4 select-none">
                                            {index + 1}
                                        </span>
                                        <span className="flex-1">
                                            {line.text.includes('const') && (
                                                <>
                                                    <span className="text-purple-400">const</span>
                                                    <span className="text-cyan-300"> developer</span>
                                                    <span className="text-white"> = {'{'}</span>
                                                </>
                                            )}
                                            {line.text.includes('name:') && (
                                                <>
                                                    <span className="text-blue-300">  name</span>
                                                    <span className="text-white">: </span>
                                                    <span className="text-green-400">"Minh Tuấn"</span>
                                                    <span className="text-white">,</span>
                                                </>
                                            )}
                                            {line.text.includes('role:') && (
                                                <>
                                                    <span className="text-blue-300">  role</span>
                                                    <span className="text-white">: </span>
                                                    <span className="text-green-400">"Software Engineer"</span>
                                                    <span className="text-white">,</span>
                                                </>
                                            )}
                                            {line.text.includes('passion:') && (
                                                <>
                                                    <span className="text-blue-300">  passion</span>
                                                    <span className="text-white">: </span>
                                                    <span className="text-green-400">"Building Digital Experiences"</span>
                                                </>
                                            )}
                                            {line.text === '};' && (
                                                <span className="text-white">{'}'};</span>
                                            )}
                                            {line.text.includes('.init()') && (
                                                <>
                                                    <span className="text-cyan-300">developer</span>
                                                    <span className="text-white">.</span>
                                                    <span className="text-yellow-300">init</span>
                                                    <span className="text-white">();</span>
                                                </>
                                            )}
                                        </span>
                                    </motion.div>
                                ))}

                                {/* Blinking cursor */}
                                <motion.div
                                    className="flex mt-1"
                                    animate={{ opacity: [1, 0] }}
                                    transition={{ duration: 0.8, repeat: Infinity }}
                                >
                                    <span className="text-slate-600 w-6 text-right mr-4 select-none">
                                        {codeLines.length + 1}
                                    </span>
                                    <span className="w-2 h-5 bg-cyan-400" />
                                </motion.div>
                            </div>

                            {/* Loading bar at bottom */}
                            <div className="bg-slate-800/50 px-4 py-2 border-t border-slate-700/50">
                                <div className="flex items-center gap-3">
                                    <motion.div
                                        className="flex-1 h-1.5 bg-slate-700 rounded-full overflow-hidden"
                                    >
                                        <motion.div
                                            className="h-full rounded-full"
                                            style={{
                                                background: 'linear-gradient(90deg, #22d3ee, #3b82f6, #8b5cf6)',
                                            }}
                                            initial={{ width: '0%' }}
                                            animate={{ width: '100%' }}
                                            transition={{ duration: 4.8, ease: 'easeInOut' }}
                                        />
                                    </motion.div>
                                    <span className="text-xs text-slate-400 font-mono">Loading...</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Floating code symbols */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        {['</', '/>', '{', '}', '()', '=>', '[]', '&&'].map((symbol, i) => (
                            <motion.span
                                key={i}
                                className="absolute text-cyan-500/20 font-mono text-2xl"
                                style={{
                                    left: `${10 + (i * 12)}%`,
                                    top: `${20 + (i % 3) * 25}%`,
                                }}
                                animate={{
                                    y: [0, -20, 0],
                                    opacity: [0.1, 0.3, 0.1],
                                }}
                                transition={{
                                    duration: 3 + i * 0.5,
                                    repeat: Infinity,
                                    delay: i * 0.2,
                                }}
                            >
                                {symbol}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default LoadingScreen;
