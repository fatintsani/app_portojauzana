import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import MagicBento from './MagicBento';
import telkomImg from '../assets/telkom.jpg';
import smaImg from '../assets/sma3.jpg';

const Education = () => {
    const [selectedId, setSelectedId] = useState(null);

    const educationData = [
        {
            id: 'telkom',
            institution: "Telkom University",
            degree: "D3-Computer Technology",
            year: "2024 - 2027 (Current)",
            desc: "Focusing on embedded systems and network technology.",
            photos: [
                telkomImg,
                "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&auto=format&fit=crop"
            ]
        },
        {
            id: 'sma',
            institution: "SMA 3 Malang",
            degree: "High School Diploma",
            year: "2021 - 2024",
            desc: "Science Major.",
            photos: [
                smaImg,
                "https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=600&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=600&auto=format&fit=crop"
            ]
        }
    ];

    const selectedItem = educationData.find(item => item.id === selectedId);

    return (
        <section id="education" className="py-20 bg-[var(--bg-color)] transition-colors duration-300">
            <div className="container mx-auto px-6">
                <h2 className="section-title">Education</h2>

                <div className="mt-12 w-full flex justify-center">
                    <MagicBento
                        cards={educationData.map(item => ({
                            title: item.institution,
                            description: `${item.degree} • ${item.desc}`,
                            label: item.year,
                            color: '#ffffff',
                            backgroundImage: item.photos[0] // Pass the first photo
                        }))}
                        textAutoHide={false}
                        enableStars={true}
                        enableSpotlight={true}
                        enableBorderGlow={true}
                        enableTilt={true}
                        glowColor="128, 0, 0"
                        particleCount={15}
                        onCardClick={(index) => setSelectedId(educationData[index].id)}
                    />
                </div>
            </div>

            {/* Gallery Modal */}
            <AnimatePresence>
                {selectedId && selectedItem && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                        onClick={() => setSelectedId(null)}
                    >
                        <motion.div
                            layoutId={selectedId}
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-[var(--card-bg)] rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="p-6 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center bg-[var(--primary-color)] text-white">
                                <div>
                                    <h3 className="text-2xl font-bold">{selectedItem.institution}</h3>
                                    <p className="text-gray-200 text-sm">{selectedItem.year}</p>
                                </div>
                                <button
                                    onClick={() => setSelectedId(null)}
                                    className="p-2 hover:bg-white/20 rounded-full transition-colors"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                                </button>
                            </div>

                            <div className="p-6 overflow-y-auto">
                                <p className="text-[var(--text-color)] opacity-80 mb-6 font-medium text-lg">{selectedItem.desc}</p>
                                <div className="flex justify-center">
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="rounded-xl overflow-hidden shadow-xl w-full max-h-[500px]"
                                    >
                                        <img 
                                            src={selectedItem.photos[0]} 
                                            alt={selectedItem.institution} 
                                            className="w-full h-full object-cover" 
                                        />
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Education;
