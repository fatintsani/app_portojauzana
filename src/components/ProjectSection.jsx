import { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

const ProjectSection = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section id="projects" className="py-32 bg-[var(--bg-color)]">
            <div className="container mx-auto px-8 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="section-title">
                        Selected <span>Projects.</span>
                    </h2>
                    <p className="text-[var(--text-muted)] max-w-2xl mx-auto text-lg mt-4">
                        A showcase of my work in Networking, IoT, and Software Development.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolioData.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group relative cursor-pointer"
                            onClick={() => setSelectedProject(project)}
                        >
                            <div className="glass-card overflow-hidden h-full flex flex-col p-4">
                                {/* Image Container */}
                                <div className="relative aspect-video overflow-hidden rounded-[16px] mb-6">
                                    <img 
                                        src={project.img} 
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
                                    <div className="absolute top-4 right-4 bg-white bg-opacity-90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold text-[var(--primary-color)] uppercase tracking-wider shadow-sm">
                                        {project.category}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1 px-2 pb-2">
                                    <h3 className="text-xl font-bold mb-3 group-hover:text-[var(--primary-color)] transition-colors line-clamp-1">
                                        {project.title}
                                    </h3>
                                    <p className="text-[var(--text-muted)] text-sm leading-relaxed line-clamp-2 mb-6">
                                        {project.description}
                                    </p>
                                    
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tags.slice(0, 3).map((tag, i) => (
                                            <span key={i} className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 bg-[var(--primary-color)] text-white rounded-md shadow-sm">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="w-full py-3 border border-[var(--border-color)] rounded-[12px] text-sm font-bold text-center group-hover:bg-[var(--primary-color)] group-hover:text-white group-hover:border-[var(--primary-color)] transition-all duration-300">
                                    View Details
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            <ProjectModal 
                project={selectedProject} 
                onClose={() => setSelectedProject(null)} 
            />
        </section>
    );
};

export default ProjectSection;
