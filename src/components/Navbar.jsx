import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAccessibility } from '../context/AccessibilityContext';
import { HiMenuAlt3, HiX, HiMoon, HiSun } from 'react-icons/hi';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const { isDarkMode, toggleDarkMode } = useAccessibility();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Experience', href: '#experience' },
        { name: 'Blog', href: '#blog' },
    ];

    return (
        <nav className="fixed top-8 left-0 right-0 z-50 px-8 md:px-12">
            <motion.div 
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`container mx-auto max-w-4xl glass-card px-6 py-3 flex items-center justify-between transition-all duration-300 ${scrolled ? 'py-3' : 'py-5'}`}
            >
                {/* Logo */}
                <a href="#home" className="text-2xl font-bold tracking-tighter text-[var(--text-color)] group">
                    J<span className="text-[var(--primary-color)] transition-colors group-hover:text-[var(--text-color)]">Z.</span>
                </a>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a 
                            key={link.name} 
                            href={link.href}
                            className="text-sm font-medium text-[var(--text-muted)] hover:text-[var(--primary-color)] transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    
                    <div className="w-px h-4 bg-[var(--border-color)]"></div>
                    
                    {/* Theme Toggle */}
                    <button 
                        onClick={toggleDarkMode}
                        className="p-2 text-[var(--text-color)] hover:bg-[var(--primary-color)] hover:bg-opacity-10 rounded-full transition-all"
                    >
                        {isDarkMode ? <HiSun size={20} /> : <HiMoon size={20} />}
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center gap-4">
                    <button onClick={toggleDarkMode} className="p-2">
                        {isDarkMode ? <HiSun size={20} /> : <HiMoon size={20} />}
                    </button>
                    <button onClick={() => setIsOpen(!isOpen)} className="text-[var(--text-color)]">
                        {isOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
                    </button>
                </div>
            </motion.div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        className="absolute top-24 left-6 right-6 glass-card p-6 md:hidden flex flex-col gap-4"
                    >
                        {navLinks.map((link) => (
                            <a 
                                key={link.name} 
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-lg font-medium text-[var(--text-muted)] hover:text-[var(--primary-color)] py-2 border-b border-[var(--border-color)] last:border-0"
                            >
                                {link.name}
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
