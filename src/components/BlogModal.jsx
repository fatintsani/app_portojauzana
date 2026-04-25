import { motion, AnimatePresence } from 'framer-motion';
import { IoClose } from 'react-icons/io5';

const BlogModal = ({ post, onClose }) => {
    if (!post) return null;

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
                    className="bg-[var(--bg-color)] rounded-[32px] overflow-hidden max-w-3xl w-full max-h-[90vh] shadow-2xl relative flex flex-col border border-[var(--border-color)]"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 z-20 glass-card text-[var(--text-color)] p-2 rounded-xl hover:bg-[var(--primary-color)] hover:text-white transition-all duration-300"
                    >
                        <IoClose size={24} />
                    </button>

                    {/* Content Section */}
                    <div className="p-6 sm:p-10 overflow-y-auto custom-scrollbar">
                        <div className="mb-6 sm:mb-8">
                            <span className="inline-block px-3 py-1 mb-4 text-[10px] font-bold text-white bg-[var(--primary-color)] rounded-md uppercase tracking-widest shadow-sm">
                                {post.tag}
                            </span>
                            <span className="text-[var(--text-muted)] font-bold text-xs tracking-widest uppercase ml-4">{post.date}</span>
                            <h2 className="text-2xl sm:text-4xl font-bold text-[var(--text-color)] leading-tight mt-4">{post.title}</h2>
                        </div>

                        <div className="prose prose-invert max-w-none">
                            <p className="text-[var(--text-muted)] leading-relaxed text-lg whitespace-pre-line">
                                {post.content}
                            </p>
                        </div>
                        
                        <div className="mt-12 pt-8 border-t border-[var(--border-color)]">
                            <p className="text-sm text-[var(--text-muted)] italic">Thank you for reading! This is a featured article from Jauzana's 2026 Portfolio.</p>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default BlogModal;
