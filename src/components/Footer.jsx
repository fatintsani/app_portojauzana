import { FaInstagram, FaEnvelope, FaWhatsapp, FaLinkedin, FaMapMarkerAlt, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer id="contact" className="py-24 bg-[var(--bg-color)] border-t border-[var(--border-color)]">
            <div className="container mx-auto px-8 md:px-12">
                <div className="glass-card p-12 relative overflow-hidden">
                    {/* Background Glow */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--primary-color)] opacity-5 rounded-full blur-3xl"></div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
                        {/* Left Side */}
                        <div>
                            <h2 className="text-4xl font-bold mb-6">Let's <span>Connect.</span></h2>
                            <p className="text-[var(--text-muted)] text-lg mb-10 max-w-md">
                                I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                            </p>
                            
                            <div className="flex flex-col gap-4">
                                <a href="mailto:jauzanazahira@gmail.com" className="flex items-center gap-4 text-xl font-medium hover:text-[var(--primary-color)] transition-colors">
                                    <FaEnvelope className="text-[var(--primary-color)]" />
                                    jauzanazahira@gmail.com
                                </a>
                                <div className="flex items-center gap-4 text-xl font-medium">
                                    <FaMapMarkerAlt className="text-[var(--primary-color)]" />
                                    Malang, Indonesia
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Social Links */}
                        <div className="flex flex-col justify-between">
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                {[
                                    { icon: <FaInstagram />, label: "Instagram", href: "https://instagram.com/ocgie_" },
                                    { icon: <FaLinkedin />, label: "LinkedIn", href: "#" },
                                    { icon: <FaGithub />, label: "GitHub", href: "#" },
                                    { icon: <FaWhatsapp />, label: "WhatsApp", href: "https://wa.me/62881027445498" },
                                ].map((social, i) => (
                                    <a 
                                        key={i} 
                                        href={social.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex flex-col items-center justify-center p-6 rounded-2xl bg-[var(--bg-color)] border border-[var(--border-color)] hover:border-[var(--primary-color)] hover:text-[var(--primary-color)] transition-all group"
                                    >
                                        <span className="text-2xl mb-2 group-hover:scale-110 transition-transform">{social.icon}</span>
                                        <span className="text-xs font-bold uppercase tracking-widest">{social.label}</span>
                                    </a>
                                ))}
                            </div>

                            <div className="mt-12 pt-8 border-t border-[var(--border-color)] flex flex-col lg:flex-row justify-between items-center gap-6 text-xs md:text-sm text-[var(--text-muted)]">
                                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-4 gap-y-2">
                                    <p className="whitespace-nowrap">&copy; {new Date().getFullYear()} Jauzana Zahira.</p>
                                    <span className="hidden sm:inline opacity-30">|</span>
                                    <a 
                                        href="https://www.instagram.com/fatin_tsani" 
                                        target="_blank" 
                                        rel="noreferrer" 
                                        className="font-medium hover:text-[var(--primary-color)] transition-colors flex items-center gap-2 whitespace-nowrap"
                                    >
                                        Build app with <span className="text-[var(--text-color)] font-bold">@fatin_tsani</span>
                                    </a>
                                </div>
                                <div className="flex gap-6 whitespace-nowrap">
                                    <a href="#home" className="hover:text-[var(--text-color)]">Home</a>
                                    <a href="#about" className="hover:text-[var(--text-color)]">About</a>
                                    <a href="#projects" className="hover:text-[var(--text-color)]">Projects</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
