import { motion, useScroll, useTransform } from 'framer-motion';
import { useState } from 'react';
import profileImg from '../assets/profile.jpeg';

import BlurText from './BlurText';
import LogoLoop from './LogoLoop';
import { SiArduino, SiCplusplus, SiPython, SiCisco, SiWireshark, SiMikrotik, SiLinux, SiHuawei } from 'react-icons/si';
import { useAccessibility } from '../context/AccessibilityContext';

const techLogos = [
    { node: <SiCplusplus />, title: "C++", href: "https://isocpp.org/" },
    { node: <SiPython />, title: "Python", href: "https://www.python.org/" },
    { node: <SiArduino />, title: "Arduino", href: "https://www.arduino.cc/" },
    { node: <SiCisco />, title: "Cisco", href: "https://www.cisco.com/" },
    { node: <SiMikrotik />, title: "MikroTik", href: "https://mikrotik.com/" },
    { node: <SiWireshark />, title: "Wireshark", href: "https://www.wireshark.org/" },
    { node: <SiLinux />, title: "Linux", href: "https://www.linux.org/" },
    { node: <SiHuawei />, title: "Huawei", href: "https://www.huawei.com/" },
];

const Hero = () => {
    const { isDarkMode } = useAccessibility();
    const [isHovered, setIsHovered] = useState(false);

    // Background blur variant
    const blurVariant = {
        initial: { filter: 'blur(10px)', opacity: 0.6 },
        hover: { filter: 'blur(0px)', opacity: 1 },
    };

    return (
        <section id="home" className="min-h-screen flex items-center justify-center bg-[var(--bg-color)] relative overflow-hidden pt-[110px] transition-colors duration-300">
            {/* Background Elements - initially blurred, clears on hover over the section */}
            <motion.div
                className="absolute inset-0 z-0"
                initial="initial"
                animate={isHovered ? "hover" : "initial"}
                variants={blurVariant}
                transition={{ duration: 0.8, ease: "easeInOut" }}
            >
                <div className="absolute top-10 left-10 w-64 h-64 bg-[var(--primary-color)] opacity-20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-20 w-80 h-80 bg-[var(--accent-color)] opacity-20 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border-2 border-[var(--primary-color)] opacity-5 rounded-full"></div>
            </motion.div>

            <div
                className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >

                {/* Intro Text */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-6"
                >
                    <h3 className="text-xl md:text-2xl text-[var(--primary-color)] font-semibold tracking-wide uppercase">Hello There!</h3>
                </motion.div>

                {/* Main Headline */}
                {/* Main Headline */}
                <div className="flex flex-wrap justify-center gap-x-4 mb-4">
                    <BlurText
                        text="I'm Jauzana"
                        delay={150}
                        animateBy="words"
                        direction="top"
                        className="text-5xl md:text-7xl font-bold text-[var(--text-color)]"
                    />
                    <BlurText
                        text="Zahira."
                        delay={150}
                        animateBy="words"
                        direction="top"
                        className="text-5xl md:text-7xl font-bold text-[var(--primary-color)]"
                    />
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-lg md:text-xl text-[var(--text-color)] opacity-70 mb-10 max-w-2xl"
                >
                    Computer Technology Student @ Telkom University.
                </motion.p>

                {/* Profile Image - Centered */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, type: "spring" }}
                    className="mb-10 relative group"
                >
                    {/* Decorative blob behind image */}
                    <div className="absolute inset-0 bg-[#800000] rounded-full transform scale-110 opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-md"></div>

                    <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl mx-auto">
                        <img
                            src={profileImg}
                            alt="Jauzana Zahira"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                    </div>
                </motion.div>



                {/* Tech Stack Loop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="mt-12 w-screen relative left-1/2 -translate-x-1/2"
                >
                    <LogoLoop
                        logos={techLogos}
                        speed={50}
                        direction="left"
                        logoHeight={32}
                        gap={40}
                        hoverSpeed={0}
                        scaleOnHover
                        fadeOut
                        fadeOutColor={isDarkMode ? "#121212" : "#F8F9FA"}
                        ariaLabel="Technology partners"
                    />
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;
