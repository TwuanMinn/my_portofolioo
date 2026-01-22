import React from 'react';
import { Reveal } from './Reveal';

export const About = ({ portfolioData, darkMode, aboutHeadingVisible, aboutWordsVisible }) => {
    return (
        <section id="about" className="py-16 px-2" style={{ maxWidth: '100vw' }}>
            <Reveal width="100%">
                <div className="max-w-4xl mx-auto w-full" style={{ padding: '0 0.5rem' }}>
                    <h2 className={`text-3xl font-bold mb-6 ${darkMode ? 'text-blue-100' : 'text-blue-800'}`} style={{ fontSize: '2rem' }}>
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
                    <div className={`border-trace rounded-2xl ${darkMode ? 'bg-[#0f111a]' : 'bg-white'} shadow-2xl`}>
                        <div className={`relative border-trace-inner p-8 ${darkMode ? 'bg-[#0f111a]/90' : 'bg-white/90'} rounded-2xl`}>
                            <p className={`${darkMode ? 'text-blue-100' : 'text-blue-900'} leading-relaxed text-xl mb-6`} style={{ fontSize: '1.25rem' }}>
                                {portfolioData.bio.split(' ').map((word, idx) => (
                                    <span key={idx} className="inline-block mr-1" style={{
                                        opacity: aboutWordsVisible[idx] ? 1 : 0,
                                        transform: aboutWordsVisible[idx] ? 'translateY(0px) scale(1)' : 'translateY(30px) scale(0.8)',
                                        transition: `all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)`
                                    }}>
                                        {word}
                                    </span>
                                ))}
                            </p>
                            <div className={`space-y-4 pt-6 border-t ${darkMode ? 'border-white/20 text-blue-100' : 'border-blue-200 text-blue-900'}`} style={{ fontSize: '1.1rem' }}>
                                <p><strong className={darkMode ? 'text-blue-300' : 'text-blue-800'}>Education:</strong> TDTU - Ton Duc Thang University (2021 - 2025)</p>
                                <p><strong className={darkMode ? 'text-blue-300' : 'text-blue-800'}>Major:</strong> Software Engineering</p>
                                <p><strong className={darkMode ? 'text-blue-300' : 'text-blue-800'}>Location:</strong> District 7, Ho Chi Minh City, Vietnam</p>
                                <p><strong className={darkMode ? 'text-blue-300' : 'text-blue-800'}>IELTS:</strong> 7.0 (L: 7.5, R: 6.0, S: 6.0, W: 7.0)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Reveal>
        </section>
    );
};
