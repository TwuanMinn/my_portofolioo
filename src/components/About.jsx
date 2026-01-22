import React from 'react';
import { Reveal } from './Reveal';
import { GraduationCap, Code2, MapPin, Languages, Sparkles } from 'lucide-react';

export const About = ({ portfolioData, darkMode, aboutHeadingVisible, aboutWordsVisible }) => {
    const infoItems = [
        { icon: GraduationCap, label: 'Education', value: 'TDTU - Ton Duc Thang University (2021 - 2025)', delay: 0 },
        { icon: Code2, label: 'Major', value: 'Software Engineering', delay: 0.1 },
        { icon: MapPin, label: 'Location', value: 'District 7, Ho Chi Minh City, Vietnam', delay: 0.2 },
        { icon: Languages, label: 'IELTS', value: '7.0 (L: 7.5, R: 6.0, S: 6.0, W: 7.0)', delay: 0.3 }
    ];

    return (
        <section id="about" className="py-20 px-2 relative overflow-hidden" style={{ maxWidth: '100vw' }}>
            {/* Subtle background decoration */}
            <div className="absolute inset-0 pointer-events-none">
                <div className={`absolute top-20 right-10 w-72 h-72 rounded-full blur-[100px] ${darkMode ? 'bg-blue-600/10' : 'bg-blue-400/20'}`} />
                <div className={`absolute bottom-20 left-10 w-96 h-96 rounded-full blur-[120px] ${darkMode ? 'bg-cyan-600/8' : 'bg-cyan-400/15'}`} />
            </div>

            <Reveal width="100%">
                <div className="max-w-4xl mx-auto w-full relative" style={{ padding: '0 0.5rem' }}>
                    {/* Section Header with sparkle */}
                    <div className="flex items-center gap-3 mb-8">
                        <Sparkles className={`w-6 h-6 ${darkMode ? 'text-cyan-400' : 'text-blue-500'}`} style={{
                            animation: 'pulse-custom 2s ease-in-out infinite'
                        }} />
                        <h2 className={`text-3xl font-bold ${darkMode ? 'text-blue-100' : 'text-blue-800'}`} style={{ fontSize: '2rem' }}>
                            {"About Me".split('').map((char, idx) => (
                                <span
                                    key={idx}
                                    className="inline-block"
                                    style={{
                                        opacity: aboutHeadingVisible ? 1 : 0,
                                        transform: aboutHeadingVisible
                                            ? 'translateY(0px) rotateX(0deg) scale(1)'
                                            : 'translateY(-40px) rotateX(90deg) scale(0.5)',
                                        transition: `all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${idx * 0.1}s`,
                                        display: char === ' ' ? 'inline' : 'inline-block',
                                        width: char === ' ' ? '0.3em' : 'auto',
                                        transformOrigin: 'bottom center'
                                    }}
                                >
                                    {char}
                                </span>
                            ))}
                        </h2>
                    </div>

                    <div className={`border-trace rounded-3xl ${darkMode ? 'bg-[#0f111a]' : 'bg-white'} shadow-2xl`}>
                        <div className={`relative border-trace-inner p-6 sm:p-10 ${darkMode ? 'bg-[#0f111a]/90' : 'bg-white/90'} rounded-3xl`}>
                            {/* Bio text */}
                            <p className={`${darkMode ? 'text-blue-100' : 'text-blue-900'} leading-relaxed text-lg sm:text-xl mb-8`}>
                                {portfolioData.bio.split(' ').map((word, idx) => (
                                    <span key={idx} className="inline-block mr-1.5" style={{
                                        opacity: aboutWordsVisible[idx] ? 1 : 0,
                                        transform: aboutWordsVisible[idx] ? 'translateY(0px) scale(1)' : 'translateY(30px) scale(0.8)',
                                        transition: `all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)`
                                    }}>
                                        {word}
                                    </span>
                                ))}
                            </p>

                            {/* Info cards grid */}
                            <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8 border-t ${darkMode ? 'border-white/10' : 'border-blue-100'}`}>
                                {infoItems.map((item, index) => (
                                    <div
                                        key={index}
                                        className={`group flex items-start gap-4 p-4 rounded-2xl transition-all duration-300 hover:scale-[1.02] ${darkMode
                                                ? 'bg-slate-800/40 hover:bg-slate-700/50 border border-white/5 hover:border-cyan-500/30'
                                                : 'bg-blue-50/50 hover:bg-blue-100/70 border border-blue-100 hover:border-blue-300'
                                            }`}
                                        style={{
                                            opacity: aboutWordsVisible[0] ? 1 : 0,
                                            transform: aboutWordsVisible[0] ? 'translateY(0)' : 'translateY(20px)',
                                            transition: `all 0.5s ease ${item.delay + 0.5}s`
                                        }}
                                    >
                                        <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${darkMode
                                                ? 'bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/30'
                                                : 'bg-gradient-to-br from-blue-100 to-blue-200 border border-blue-300/50'
                                            }`}>
                                            <item.icon className={`w-5 h-5 ${darkMode ? 'text-cyan-400' : 'text-blue-600'}`} />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className={`text-sm font-medium ${darkMode ? 'text-blue-300' : 'text-blue-600'}`}>
                                                {item.label}
                                            </p>
                                            <p className={`text-base font-semibold ${darkMode ? 'text-blue-100' : 'text-blue-900'} truncate`}>
                                                {item.value}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Reveal>
        </section>
    );
};
