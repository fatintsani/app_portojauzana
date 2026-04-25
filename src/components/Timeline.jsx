import { motion } from 'framer-motion';

const TimelineItem = ({ title, company, date, description, index }) => (
    <motion.div
        initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="relative pl-8 sm:pl-12 pb-12 border-l-2 border-[var(--border-color)] last:pb-0"
    >
        {/* Dot */}
        <div className="absolute left-[-9px] top-0 w-4 h-4 bg-[var(--primary-color)] rounded-full border-4 border-[var(--bg-color)]"></div>
        
        <div className="glass-card p-6 sm:p-8 hover:-translate-y-1 transition-transform duration-300">
            <span className="inline-block px-3 py-1 mb-4 text-[10px] font-bold text-white bg-[var(--primary-color)] rounded-full shadow-sm tracking-wider uppercase">
                {date}
            </span>
            <h3 className="text-xl font-bold text-[var(--text-color)] mb-1">{title}</h3>
            <p className="text-[var(--primary-color)] font-medium mb-4">{company}</p>
            <p className="text-[var(--text-muted)] text-sm leading-relaxed">{description}</p>
        </div>
    </motion.div>
);

const Timeline = () => {
    const education = [
        {
            title: "Computer Technology",
            company: "Telkom University",
            date: "2024 - Present",
            description: "Focusing on Network Infrastructure, IoT, and Computer Systems. GPA: 3.75/4.0."
        },
        {
            title: "Science Major",
            company: "SMAN 3 Kota Sukabumi",
            date: "2021 - 2024",
            description: "Participated in various science and technology competitions."
        }
    ];

    const experience = [
        {
            title: "Art Division Member",
            company: "UKM Daerah Bogor",
            date: "2026",
            description: "Coordinated stage concepts and decorations for cultural events and concerts."
        },
        {
            title: "Youth Engagement Participant",
            company: "AIESEC",
            date: "2024",
            description: "Developed leadership and global communication skills through youth programs."
        }
    ];

    return (
        <section id="experience" className="py-32 bg-[var(--bg-color)]">
            <div className="container mx-auto px-8 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    
                    {/* Education */}
                    <div>
                        <motion.h2 
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl font-bold mb-12 flex items-center gap-4"
                        >
                            <span className="w-12 h-0.5 bg-[var(--primary-color)]"></span>
                            Education
                        </motion.h2>
                        <div className="ml-4">
                            {education.map((item, i) => (
                                <TimelineItem key={i} {...item} index={i} />
                            ))}
                        </div>
                    </div>

                    {/* Experience */}
                    <div>
                        <motion.h2 
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl font-bold mb-12 flex items-center gap-4"
                        >
                            <span className="w-12 h-0.5 bg-[var(--primary-color)]"></span>
                            Experience
                        </motion.h2>
                        <div className="ml-4">
                            {experience.map((item, i) => (
                                <TimelineItem key={i} {...item} index={i + 2} />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Timeline;
