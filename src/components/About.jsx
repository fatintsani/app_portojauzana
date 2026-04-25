import { motion } from 'framer-motion';
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

const About = () => {
    const { isDarkMode } = useAccessibility();
    const stats = [
        { label: "GPA", value: "3.75/4.0" },
        { label: "Projects", value: "10+" },
        { label: "Certifications", value: "5+" },
        { label: "Events", value: "12+" },
    ];

    return (
        <section id="about" className="py-32 bg-[var(--bg-color)]">
            <div className="container mx-auto px-8 md:px-12">
                <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
                    
                    {/* Left: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex-1"
                    >
                        <h2 className="section-title">
                            A bit about <span>myself.</span>
                        </h2>
                        <div className="space-y-6 text-lg text-[var(--text-muted)] leading-relaxed">
                            <p>
                                I am Jauzana Zahira, a 20-year-old <span className="text-[var(--text-color)] font-medium">Computer Technology student</span> at Telkom University with a strong passion for exploring innovative solutions in technology.
                            </p>
                            <p>
                                Currently based in Malang, I specialize in <span className="text-[var(--text-color)] font-medium">IoT Systems</span> and <span className="text-[var(--text-color)] font-medium">Network Security</span>. I am an enthusiastic learner who actively participates in diverse technical and organizational activities.
                            </p>
                        </div>
                    </motion.div>

                    {/* Right: Stats Grid */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 grid grid-cols-2 gap-4 sm:gap-6 w-full"
                    >
                        {stats.map((stat, index) => (
                            <div key={index} className="glass-card p-6 sm:p-8 flex flex-col items-center justify-center text-center group hover:-translate-y-2 transition-transform duration-300">
                                <span className="text-3xl sm:text-5xl font-bold text-[var(--primary-color)] mb-2">{stat.value}</span>
                                <span className="text-[10px] sm:text-sm font-medium uppercase tracking-wider text-[var(--text-muted)] group-hover:text-[var(--text-color)] transition-colors">{stat.label}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Tech Loop */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="pt-16 border-t border-[var(--border-color)]"
                >
                    <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-[var(--text-muted)] mb-12">Technologies I work with</p>
                    <div className="w-full relative">
                        <LogoLoop
                            logos={techLogos}
                            speed={40}
                            direction="left"
                            logoHeight={32}
                            gap={60}
                            fadeOut
                            fadeOutColor={isDarkMode ? "#0A0A0A" : "#FDFDFD"}
                            scaleOnHover
                            ariaLabel="Technology stack"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
