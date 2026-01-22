import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Reveal } from './Reveal';

export const Certificates = ({ portfolioData, darkMode }) => {
    return (
        <section id="certificates" className={`py-20 px-4 ${darkMode ? 'bg-[#08080b]/40' : 'bg-blue-50/60'}`}>
            <Reveal width="100%">
                <div className="max-w-6xl mx-auto">
                    <h2 className={`text-4xl font-bold mb-8 ${darkMode ? 'text-blue-100' : 'text-blue-800'}`}>Certificates</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {portfolioData.certificates.map((cert, index) => (
                            <div
                                key={index}
                                className={`relative glass-card overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(34,211,238,0.8),0_0_80px_rgba(255,255,255,0.5)] border border-transparent hover:border-cyan-400 hover:bg-cyan-900/30 h-full flex flex-col animate-card-wave`}
                                style={{ animationDelay: `${index * 0.4}s` }}
                            >
                                <div className={`absolute -top-8 -right-8 w-24 h-24 rounded-full ${darkMode ? 'bg-cyan-500/10' : 'bg-blue-200/50'} blur-2xl`} />
                                <div className="relative flex-grow">
                                    <p className={`text-sm font-semibold ${darkMode ? 'text-cyan-300' : 'text-blue-600'}`}>{cert.issuer}</p>
                                    <h3 className={`mt-2 text-xl font-bold ${darkMode ? 'text-blue-100' : 'text-blue-900'}`}>{cert.title}</h3>
                                    <p className={`mt-2 text-sm ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>{cert.description}</p>
                                </div>
                                <div className="mt-4 flex items-center justify-between relative mt-auto">
                                    <span className={`text-xs font-semibold ${darkMode ? 'text-blue-200/80' : 'text-blue-600/80'}`}>{cert.date}</span>
                                    <a
                                        href={cert.link}
                                        className={`text-sm font-semibold ${darkMode ? 'text-cyan-300 hover:text-cyan-200' : 'text-blue-600 hover:text-blue-700'} inline-flex items-center gap-2`}
                                    >
                                        View <ExternalLink size={14} />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Reveal>
        </section>
    );
};
