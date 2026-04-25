import { motion } from 'framer-motion';
import profileImg from '../assets/profile.jpeg';
import BlurText from './BlurText';
import { useAccessibility } from '../context/AccessibilityContext';

const Hero = () => {
    const { isDarkMode } = useAccessibility();

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 px-8 md:px-12">
            {/* Background Accent */}
            <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-[var(--primary-color)] opacity-[0.03] rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-[-10%] left-[-5%] w-[300px] h-[300px] bg-[var(--accent-color)] opacity-[0.03] rounded-full blur-[80px] pointer-events-none"></div>

            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
                
                {/* Text Content */}
                <div className="flex-1 text-center md:text-left order-2 md:order-1">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block px-4 py-1.5 mb-6 text-[10px] font-bold tracking-[0.2em] text-white uppercase bg-[var(--primary-color)] rounded-full shadow-sm">
                            Portfolio 2026
                        </span>
                        
                        <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 leading-tight tracking-tight text-[var(--text-color)]">
                            <BlurText
                                text="Jauzana"
                                delay={100}
                                animateBy="words"
                                direction="top"
                                className="inline-block"
                            />
                            <span className="text-gradient block sm:inline">Zahira.</span>
                        </h1>
                        
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="text-lg md:text-xl text-[var(--text-muted)] max-w-xl mb-10 leading-relaxed"
                        >
                            Computer Technology Student @ Telkom University. 
                            Specializing in <span className="text-[var(--text-color)] font-medium">IoT Systems</span>, 
                            <span className="text-[var(--text-color)] font-medium"> Networking</span>, and 
                            <span className="text-[var(--text-color)] font-medium"> Cybersecurity</span>.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="flex flex-wrap items-center justify-center md:justify-start gap-4"
                        >
                            <a href="#projects" className="px-8 py-4 bg-[var(--primary-color)] text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                                View Projects
                            </a>
                            <a href="#about" className="px-8 py-4 bg-transparent border border-[var(--border-color)] text-[var(--text-color)] font-semibold rounded-2xl hover:bg-[var(--border-color)] transition-all">
                                About Me
                            </a>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Profile Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="flex-1 flex justify-center md:justify-end order-1 md:order-2"
                >
                    <div className="relative w-72 h-72 md:w-[450px] md:h-[450px]">
                        {/* Decorative Frame */}
                        <div className="absolute inset-0 border-2 border-[var(--primary-color)] rounded-[40px] rotate-3 opacity-10"></div>
                        
                        <div className="w-full h-full glass-card overflow-hidden p-4">
                            <img
                                src={profileImg}
                                alt="Jauzana Zahira"
                                className="w-full h-full object-cover rounded-[20px]"
                            />
                        </div>

                        {/* Floating Badge */}
                        <motion.div 
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -bottom-6 -left-6 glass-card px-6 py-4 flex items-center gap-3"
                        >
                            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-sm font-medium">Available for Internships</span>
                        </motion.div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;
