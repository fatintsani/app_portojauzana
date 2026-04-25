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
                className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                onClick={onClose}
            >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 20 }}
                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    className="bg-white rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] shadow-2xl relative flex flex-col md:flex-row"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 z-20 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full backdrop-blur-md transition-colors"
                    >
                        <IoClose size={24} />
                    </button>

                    {/* Image Section */}
                    <div className="w-full md:w-1/2 h-64 md:h-auto bg-gray-100 relative">
                        <img
                            src={project.img}
                            alt={project.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 left-4">
                            <span className="bg-[#800000] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                                {project.category}
                            </span>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="w-full md:w-1/2 p-8 overflow-y-auto bg-white custom-scrollbar">
                        <div className="mb-6">
                            <h2 className="text-3xl font-bold text-[#333] mb-2 leading-tight">{project.title}</h2>
                            <p className="text-[#800000] font-semibold">{project.date}</p>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Description</h4>
                                <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                                    {project.fullDescription || project.description}
                                </p>
                            </div>

                            {project.features && (
                                <div>
                                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Key Features</h4>
                                    <ul className="grid grid-cols-1 gap-2">
                                        {project.features.map((feature, i) => (
                                            <li key={i} className="flex items-center text-gray-600">
                                                <span className="w-2 h-2 bg-[#FFD700] rounded-full mr-3"></span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            <div>
                                <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-3">Skills & Tech</h4>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-md border border-gray-200">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {project.url && (
                                <div className="pt-4">
                                    <a
                                        href={project.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block bg-[#800000] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#600000] transition-colors shadow-lg"
                                    >
                                        View Live Project
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
