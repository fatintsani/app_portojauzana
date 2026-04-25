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
        { name: 'Poppins', value: 'Poppins' },
        { name: 'Inter', value: 'Inter' },
        { name: 'Open Sans', value: 'Open Sans' },
        { name: 'Dyslexic Friendly', value: 'OpenDyslexic' } // Need to import this or use a similar font
    ];

    return (
        <div className="fixed bottom-8 right-8 z-[99999]">
            {/* Toggle Button */}
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="w-16 h-16 bg-[var(--primary-color)] text-white rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.3)] flex items-center justify-center border-2 border-white/20 focus:outline-none"
                aria-label="Accessibility Settings"
            >
                {isOpen ? <FaTimes size={26} /> : <FaUniversalAccess size={30} />}
            </motion.button>

            {/* Settings Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="absolute bottom-20 right-0 w-80 bg-[var(--card-bg)] text-[var(--text-color)] rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.4)] overflow-hidden border border-gray-100 dark:border-gray-800 p-6"
                    >
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-xl font-bold text-gray-800 dark:text-white">Accessibility</h3>
                            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
                                <FaTimes />
                            </button>
                        </div>

                        <div className="space-y-6">
                            {/* Theme Toggle */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                    <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
                                        {isDarkMode ? <FaMoon className="text-yellow-400" /> : <FaSun className="text-orange-500" />}
                                    </div>
                                    <span className="font-medium text-gray-700 dark:text-gray-200">Dark Mode</span>
                                </div>
                                <button
                                    onClick={() => setIsDarkMode(!isDarkMode)}
                                    className={`w-12 h-6 rounded-full transition-colors relative ${isDarkMode ? 'bg-[#800000]' : 'bg-gray-300'}`}
                                >
                                    <motion.div
                                        animate={{ x: isDarkMode ? 24 : 4 }}
                                        className="absolute top-1 w-4 h-4 bg-white rounded-full"
                                    />
                                </button>
                            </div>

                            {/* High Contrast */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                    <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-blue-500">
                                        <FaAdjust />
                                    </div>
                                    <span className="font-medium text-gray-700 dark:text-gray-200">High Contrast</span>
                                </div>
                                <button
                                    onClick={() => setHighContrast(!highContrast)}
                                    className={`w-12 h-6 rounded-full transition-colors relative ${highContrast ? 'bg-[#800000]' : 'bg-gray-300'}`}
                                >
                                    <motion.div
                                        animate={{ x: highContrast ? 24 : 4 }}
                                        className="absolute top-1 w-4 h-4 bg-white rounded-full"
                                    />
                                </button>
                            </div>

                            {/* Font Size */}
                            <div className="space-y-3">
                                <div className="flex items-center space-x-3">
                                    <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-green-500">
                                        <FaTextHeight />
                                    </div>
                                    <span className="font-medium text-gray-700 dark:text-gray-200">Font Size: {fontSize}%</span>
                                </div>
                                <input
                                    type="range"
                                    min="80"
                                    max="150"
                                    step="5"
                                    value={fontSize}
                                    onChange={(e) => setFontSize(parseInt(e.target.value))}
                                    className="w-full accent-[#800000]"
                                />
                            </div>

                            {/* Font Family */}
                            <div className="space-y-3">
                                <div className="flex items-center space-x-3">
                                    <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-purple-500">
                                        <FaFont />
                                    </div>
                                    <span className="font-medium text-gray-700 dark:text-gray-200">Font Style</span>
                                </div>
                                <div className="grid grid-cols-2 gap-2">
                                    {fonts.map((f) => (
                                        <button
                                            key={f.value}
                                            onClick={() => setFontFamily(f.value)}
                                            className={`py-2 px-1 text-xs rounded-lg border transition-all ${
                                                fontFamily === f.value
                                                    ? 'border-[#800000] bg-[#800000]/10 text-[#800000] font-bold'
                                                    : 'border-gray-200 dark:border-gray-600 text-gray-500 dark:text-gray-400'
                                            }`}
                                            style={{ fontFamily: f.value }}
                                        >
                                            {f.name}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-700 text-center">
                            <p className="text-xs text-gray-400">Settings are saved automatically</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default AccessibilitySettings;
