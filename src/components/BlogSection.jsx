import { useState } from 'react';
import { motion } from 'framer-motion';
import BlogModal from './BlogModal';

const BlogSection = () => {
    const [selectedPost, setSelectedPost] = useState(null);

    const posts = [
        {
            title: "Exploring the Future of IoT Security",
            excerpt: "How sensor networks and encryption are shaping the next generation of smart devices.",
            content: "The landscape of Internet of Things (IoT) is rapidly evolving, bringing both unprecedented convenience and significant security challenges. As we integrate more sensors into our daily lives—from smart homes to industrial infrastructure—the surface area for potential cyber attacks increases exponentially.\n\nKey strategies for the future include:\n1. Edge-to-Cloud Encryption: Ensuring data is protected from the moment it leaves the sensor until it reaches the cloud.\n2. Device Authentication: Implementing robust identity management for every connected node to prevent unauthorized access.\n3. Real-time Monitoring: Utilizing AI-driven analytics to detect anomalies in sensor data that might indicate a breach.\n\nIn 2026, the focus is shifting towards 'Zero Trust' architecture for IoT networks, where no device is trusted by default, regardless of its location within the network.",
            date: "April 2026",
            tag: "IoT"
        },
        {
            title: "Network Packet Analysis with Wireshark",
            excerpt: "Deep dive into ARP spoofing detection and mitigation strategies for secure local networks.",
            content: "Network security begins with visibility. Wireshark remains the gold standard for packet analysis, allowing engineers to peel back the layers of network communication to identify vulnerabilities and malicious activity.\n\nOne of the most common yet dangerous local network attacks is ARP Spoofing. By sending fake ARP messages onto a local area network, an attacker can link their MAC address with the IP address of a legitimate server or gateway. This allows them to intercept, modify, or stop traffic in transit.\n\nDetection Steps:\n- Monitoring ARP traffic for duplicate MAC addresses assigned to different IPs.\n- Analyzing packet timing and frequency.\n- Implementing Static ARP entries for critical systems.\n\nThrough hands-on analysis, we can build more resilient networks that are capable of withstanding modern man-in-the-middle (MITM) attacks.",
            date: "March 2026",
            tag: "Security"
        }
    ];

    return (
        <section id="blog" className="py-32 bg-[var(--bg-color)]">
            <div className="container mx-auto px-8 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="section-title">
                        Latest <span>Articles.</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {posts.map((post, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="glass-card p-8 group hover:-translate-y-2 transition-all duration-300 cursor-pointer"
                            onClick={() => setSelectedPost(post)}
                        >
                            <span className="inline-block px-3 py-1 mb-4 text-[10px] font-bold text-white bg-[var(--primary-color)] rounded-md uppercase tracking-widest shadow-sm">
                                {post.tag}
                            </span>
                            <h3 className="text-2xl font-bold mb-4 group-hover:text-[var(--primary-color)] transition-colors">{post.title}</h3>
                            <p className="text-[var(--text-muted)] mb-8 line-clamp-2">{post.excerpt}</p>
                            <div className="flex items-center justify-between">
                                <span className="text-xs text-[var(--text-muted)] font-medium">{post.date}</span>
                                <button className="text-sm font-bold text-[var(--primary-color)] hover:underline">Read Article</button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            <BlogModal 
                post={selectedPost} 
                onClose={() => setSelectedPost(null)} 
            />
        </section>
    );
};

export default BlogSection;
