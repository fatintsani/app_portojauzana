import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-20 bg-[var(--bg-color)] transition-colors duration-300">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="border-l-4 border-[var(--primary-color)] pl-8 bg-[var(--card-bg)] p-8 rounded-r-lg shadow-sm"
                >
                    <h2 className="text-3xl font-bold text-[var(--primary-color)] mb-6">About Me</h2>
                    <p className="text-lg text-[var(--text-color)] leading-relaxed">
                        I am Jauzana Zahira, a 20-year-old Computer Technology student with a strong passion for learning and exploring innovative solutions in technology. Currently based in Malang City, I enjoy developing my skills in <span className="font-bold text-[var(--primary-color)]">Computing</span>, <span className="font-bold text-[var(--primary-color)]">Problem-solving</span>, and creative digital projects. I am an enthusiastic learner who actively participates in various activities, including <span className="font-bold text-[var(--primary-color)]">Volunteer</span>, teamwork, and self-development opportunities. With a curious mindset and adaptability, I strive to contribute positively to any environment I am part of.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
