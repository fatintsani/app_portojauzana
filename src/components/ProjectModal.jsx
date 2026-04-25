import { motion, AnimatePresence } from 'framer-motion';
import { IoClose } from 'react-icons/io5';

const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
                onClick={onClose}
            >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 20 }}
                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                    className="bg-[var(--bg-color)] rounded-[32px] overflow-hidden max-w-5xl w-full max-h-[90vh] shadow-2xl relative flex flex-col md:flex-row border border-[var(--border-color)]"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 z-20 glass-card text-[var(--text-color)] p-2 rounded-xl hover:bg-[var(--primary-color)] hover:text-white transition-all duration-300"
                    >
                        <IoClose size={24} />
                    </button>

                    {/* Image Section */}
                    <div className="w-full md:w-1/2 h-72 md:h-auto bg-gray-100 relative overflow-hidden">
                        <img
                            src={project.img}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                        />
                        <div className="absolute bottom-6 left-6">
                            <span className="bg-[var(--primary-color)] text-white text-[10px] font-bold px-4 py-2 rounded-full uppercase tracking-[0.2em] shadow-lg">
                                {project.category}
                            </span>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="w-full md:w-1/2 p-10 overflow-y-auto custom-scrollbar">
                        <div className="mb-8">
                            <span className="text-[var(--primary-color)] font-bold text-sm tracking-widest uppercase mb-2 block">{project.date}</span>
                            <h2 className="text-4xl font-bold text-[var(--text-color)] leading-tight">{project.title}</h2>
                        </div>

                        <div className="space-y-8">
                            <div>
                                <h4 className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-[0.2em] mb-4">The Challenge</h4>
                                <p className="text-[var(--text-muted)] leading-relaxed text-lg">
                                    {project.fullDescription || project.description}
                                </p>
                            </div>

                            {project.features && (
                                <div>
                                    <h4 className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-[0.2em] mb-4">Key Features</h4>
                                    <ul className="grid grid-cols-1 gap-3">
                                        {project.features.map((feature, i) => (
                                            <li key={i} className="flex items-center text-[var(--text-muted)]">
                                                <span className="w-2 h-2 bg-[var(--primary-color)] rounded-full mr-4"></span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            <div>
                                <h4 className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-[0.2em] mb-4">Technologies</h4>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1.5 bg-[var(--primary-color)] text-white text-[10px] font-bold rounded-lg shadow-sm uppercase tracking-wider">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {project.url && (
                                <div className="pt-6">
                                    <a
                                        href={project.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block bg-[var(--primary-color)] text-white px-8 py-4 rounded-2xl font-bold hover:shadow-xl hover:-translate-y-1 transition-all"
                                    >
                                        Live Project Preview
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default ProjectModal;
