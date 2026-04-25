import { useState } from 'react';
import Masonry from './Masonry';
import ProjectModal from './ProjectModal';
import { portfolioData } from '../data/portfolioData';

const Experience = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const items = portfolioData.map((item, index) => ({
        ...item,
        height: [400, 300, 500, 350, 450][index % 5], // Varying heights for masonry effect
    }));

    return (
        <section id="experience" className="py-20 bg-[var(--bg-color)] transition-colors duration-300 overflow-hidden">
            <div className="container mx-auto px-6 mb-12 text-center">
                <h2 className="section-title">Portfolio & Experience</h2>
                <p className="text-[var(--text-color)] opacity-60 max-w-2xl mx-auto mt-4">
                    A collection of my academic projects, organizational experiences, and technical explorations in networking, IoT, and software development.
                </p>
            </div>

            <div className="w-screen relative left-1/2 -translate-x-1/2">
                <Masonry
                    items={items}
                    ease="power3.out"
                    duration={0.6}
                    stagger={0.05}
                    animateFrom="bottom"
                    scaleOnHover={true}
                    hoverScale={0.95}
                    blurToFocus={true}
                    colorShiftOnHover={false}
                    onItemClick={(item) => setSelectedProject(item)}
                />
            </div>

            <ProjectModal
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </section>
    );
};

export default Experience;


