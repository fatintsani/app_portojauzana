import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAccessibility } from '../context/AccessibilityContext';
import { FaUniversalAccess, FaMoon, FaSun, FaTextHeight, FaFont, FaAdjust, FaTimes } from 'react-icons/fa';

const AccessibilitySettings = () => {
    const [isOpen, setIsOpen] = useState(false);
    const {
        isDarkMode, setIsDarkMode,
        fontSize, setFontSize,
        fontFamily, setFontFamily,
        highContrast, setHighContrast
    } = useAccessibility();

    const fonts = [
        { name: 'Outfit', value: 'Outfit' },
        { name: 'Poppins', value: 'Poppins' },
        { name: 'Inter', value: 'Inter' },
        { name: 'Dyslexic', value: 'OpenDyslexic' }
    ];

    return (
        <div className="fixed bottom-8 right-8 z-[99999]">
            {/* Toggle Button */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="w-14 h-14 bg-[var(--primary-color)] text-white rounded-2xl shadow-xl flex items-center justify-center border border-white/20 focus:outline-none"
                aria-label="Accessibility Settings"
            >
                {isOpen ? <FaTimes size={22} /> : <FaUniversalAccess size={26} />}
            </motion.button>

            {/* Settings Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95, filter: 'blur(10px)' }}
                        animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                        exit={{ opacity: 0, y: 20, scale: 0.95, filter: 'blur(10px)' }}
                        className="absolute bottom-20 right-0 w-80 glass-card p-6"
                    >
                        <div className="flex justify-between items-center mb-8">
                            <h3 className="text-xl font-bold tracking-tight">Accessibility</h3>
                            <button onClick={() => setIsOpen(false)} className="text-[var(--text-muted)] hover:text-[var(--text-color)] transition-colors">
                                <FaTimes />
                            </button>
                        </div>

                        <div className="space-y-8">
                            {/* Theme Toggle */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                    <div className="p-2 bg-[var(--primary-color)] rounded-lg shadow-sm">
                                        {isDarkMode ? <FaMoon className="text-white" /> : <FaSun className="text-white" />}
                                    </div>
                                    <span className="font-medium text-sm">Dark Mode</span>
                                </div>
                                <button
                                    onClick={() => setIsDarkMode(!isDarkMode)}
                                    className={`w-12 h-6 rounded-full transition-colors relative ${isDarkMode ? 'bg-[var(--primary-color)]' : 'bg-[var(--border-color)]'}`}
                                >
                                    <motion.div
                                        animate={{ x: isDarkMode ? 26 : 4 }}
                                        className="absolute top-1 w-4 h-4 bg-white rounded-full shadow-sm"
                                    />
                                </button>
                            </div>

                            {/* High Contrast */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                    <div className="p-2 bg-[var(--primary-color)] rounded-lg shadow-sm">
                                        <FaAdjust className="text-white" />
                                    </div>
                                    <span className="font-medium text-sm">High Contrast</span>
                                </div>
                                <button
                                    onClick={() => setHighContrast(!highContrast)}
                                    className={`w-12 h-6 rounded-full transition-colors relative ${highContrast ? 'bg-[var(--primary-color)]' : 'bg-[var(--border-color)]'}`}
                                >
                                    <motion.div
                                        animate={{ x: highContrast ? 26 : 4 }}
                                        className="absolute top-1 w-4 h-4 bg-white rounded-full shadow-sm"
                                    />
                                </button>
                            </div>

                            {/* Font Size */}
                            <div className="space-y-4">
                                <div className="flex items-center space-x-3">
                                    <div className="p-2 bg-[var(--primary-color)] rounded-lg shadow-sm">
                                        <FaTextHeight className="text-white" />
                                    </div>
                                    <span className="font-medium text-sm">Font Size: {fontSize}%</span>
                                </div>
                                <input
                                    type="range"
                                    min="80"
                                    max="150"
                                    step="5"
                                    value={fontSize}
                                    onChange={(e) => setFontSize(parseInt(e.target.value))}
                                    className="w-full h-1.5 bg-[var(--border-color)] rounded-lg appearance-none cursor-pointer accent-[var(--primary-color)]"
                                />
                            </div>

                            {/* Font Family */}
                            <div className="space-y-4">
                                <div className="flex items-center space-x-3">
                                    <div className="p-2 bg-[var(--primary-color)] rounded-lg shadow-sm">
                                        <FaFont className="text-white" />
                                    </div>
                                    <span className="font-medium text-sm">Typography</span>
                                </div>
                                <div className="grid grid-cols-2 gap-2">
                                    {fonts.map((f) => (
                                        <button
                                            key={f.value}
                                            onClick={() => setFontFamily(f.value)}
                                            className={`py-2 px-1 text-[10px] uppercase tracking-widest rounded-xl border transition-all ${
                                                fontFamily === f.value
                                                    ? 'border-[var(--primary-color)] bg-[var(--primary-color)] text-white font-bold shadow-sm'
                                                    : 'border-[var(--border-color)] text-[var(--text-muted)] hover:border-[var(--primary-color)]'
                                            }`}
                                            style={{ fontFamily: f.value }}
                                        >
                                            {f.name}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="mt-10 pt-6 border-t border-[var(--border-color)] text-center">
                            <p className="text-[10px] text-[var(--text-muted)] uppercase tracking-widest font-medium">Settings saved</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default AccessibilitySettings;
