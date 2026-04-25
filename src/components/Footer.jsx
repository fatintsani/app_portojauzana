import { FaInstagram, FaEnvelope, FaWhatsapp, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer id="contact" className="bg-[var(--primary-color)] text-white py-16 relative overflow-hidden transition-colors duration-300">
            {/* Decorative background element */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--accent-color)] to-transparent opacity-30"></div>
            
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
                    {/* Brand/About Section */}
                    <div className="flex flex-col space-y-4">
                        <h2 className="text-3xl font-bold tracking-tight">Jauzana <span className="text-[var(--accent-color)]">Zahira.</span></h2>
                        <p className="text-gray-300 max-w-sm">
                            Computer Technology student at Telkom University, passionate about networking, IoT, and innovative technology solutions.
                        </p>
                        <div className="flex items-center space-x-2 text-gray-300">
                            <FaMapMarkerAlt className="text-[var(--accent-color)]" />
                            <span>Malang, Indonesia</span>
                        </div>
                    </div>

                    {/* Quick Links / Services - Could be useful for navigation */}
                    <div className="flex flex-col space-y-4">
                        <h3 className="text-xl font-semibold text-[var(--accent-color)]">Navigation</h3>
                        <nav className="flex flex-col space-y-2">
                            <a href="#home" className="hover:text-[var(--accent-color)] transition-colors w-fit">Home</a>
                            <a href="#about" className="hover:text-[var(--accent-color)] transition-colors w-fit">About</a>
                            <a href="#education" className="hover:text-[var(--accent-color)] transition-colors w-fit">Education</a>
                            <a href="#experience" className="hover:text-[var(--accent-color)] transition-colors w-fit">Portfolio</a>
                        </nav>
                    </div>

                    {/* Social/Contact Section */}
                    <div className="flex flex-col space-y-6">
                        <h3 className="text-xl font-semibold text-[var(--accent-color)]">Connect with Me</h3>
                        <div className="flex flex-col space-y-4">
                            <a
                                href="https://instagram.com/ocgie_"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center space-x-3 group"
                            >
                                <div className="p-3 bg-white/10 rounded-lg group-hover:bg-[var(--accent-color)] group-hover:text-[var(--primary-color)] transition-all duration-300">
                                    <FaInstagram size={20} />
                                </div>
                                <span className="text-lg group-hover:text-[var(--accent-color)] transition-colors">@ocgie_</span>
                            </a>

                            <a
                                href="mailto:jauzanazahira@gmail.com"
                                className="flex items-center space-x-3 group"
                            >
                                <div className="p-3 bg-white/10 rounded-lg group-hover:bg-[var(--accent-color)] group-hover:text-[var(--primary-color)] transition-all duration-300">
                                    <FaEnvelope size={20} />
                                </div>
                                <span className="text-lg group-hover:text-[var(--accent-color)] transition-colors">jauzanazahira@gmail.com</span>
                            </a>

                            <a
                                href="https://wa.me/62881027445498"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center space-x-3 group"
                            >
                                <div className="p-3 bg-white/10 rounded-lg group-hover:bg-[var(--accent-color)] group-hover:text-[var(--primary-color)] transition-all duration-300">
                                    <FaWhatsapp size={20} />
                                </div>
                                <span className="text-lg group-hover:text-[var(--accent-color)] transition-colors">0881-0274-45498</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Jauzana Zahira. All rights reserved.</p>
                    <div className="mt-4 md:mt-0 flex space-x-6">
                        <span className="hover:text-white cursor-default transition-colors">Built with React & Tailwind</span>
                        <span className="hover:text-white cursor-default transition-colors">Designed for Excellence</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
