import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageSquare, ArrowRight, Sparkles } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
    const [hoveredItem, setHoveredItem] = useState(null);
    const [isEmailHovered, setIsEmailHovered] = useState(false);
    const [isLinkedInHovered, setIsLinkedInHovered] = useState(false);

    const contactInfo = [
        {
            icon: Mail,
            label: 'Email',
            value: 'subashkannan0309@gmail.com',
            href: 'mailto:subashkannan0309@gmail.com',
            gradient: 'from-cyan-500 to-blue-500',
            hoverGradient: 'from-cyan-600 to-blue-600',
        },
        {
            icon: Phone,
            label: 'Phone',
            value: '+91 8838506695',
            href: 'tel:+918838506695',
            gradient: 'from-green-500 to-emerald-500',
            hoverGradient: 'from-green-600 to-emerald-600',
        },
        {
            icon: MapPin,
            label: 'Location',
            value: 'Chennai, India',
            href: null,
            gradient: 'from-purple-500 to-pink-500',
            hoverGradient: 'from-purple-600 to-pink-600',
        },
    ];

    const socialLinks = [
        {
            icon: Github,
            label: 'GitHub',
            href: 'https://github.com/Subash-Kannan-R',
            gradient: 'from-gray-900 to-black',
            hoverGradient: 'from-gray-800 to-gray-900',
        },
        {
            icon: Linkedin,
            label: 'LinkedIn',
            href: 'https://linkedin.com/in/subashkannan-r',
            gradient: 'from-blue-700 to-blue-800',
            hoverGradient: 'from-blue-600 to-blue-700',
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 100 }
        }
    };

    return (
        <section id="contact" className="min-h-screen bg-gradient-to-br from-[#0F172A] to-[#1E293B] py-20 relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-blue-500/10 backdrop-blur-sm rounded-full border border-blue-500/20">
                        <Sparkles className="w-4 h-4 text-blue-400" />
                        <span className="text-blue-400 text-sm font-medium">Let's Connect</span>
                    </div>
                    
                    <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                        Get In <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent animate-gradient-x">Touch</span>
                    </h2>
                    <p className="text-gray-400 text-xl max-w-2xl mx-auto">
                        Ready to bring your ideas to life? Let's create something amazing together.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid lg:grid-cols-2 gap-8"
                >
                    {/* Contact Information Card */}
                    <motion.div
                        variants={itemVariants}
                        className="relative group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                        <div className="relative bg-gray-900/80 backdrop-blur-xl border border-gray-800 rounded-3xl p-8 shadow-2xl">
                            <motion.div
                                initial={{ scale: 0.95 }}
                                whileInView={{ scale: 1 }}
                                transition={{ type: "spring", stiffness: 100 }}
                                className="mb-8"
                            >
                                <h3 className="text-3xl font-bold text-white mb-2">Contact Information</h3>
                                <p className="text-gray-400">Feel free to reach out through any platform</p>
                            </motion.div>

                            <div className="space-y-4 mb-8">
                                {contactInfo.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        variants={itemVariants}
                                        whileHover={{ scale: 1.02, x: 10 }}
                                        onHoverStart={() => setHoveredItem(index)}
                                        onHoverEnd={() => setHoveredItem(null)}
                                        className="relative"
                                    >
                                        {item.href ? (
                                            <a
                                                href={item.href}
                                                className="flex items-center gap-6 p-5 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl hover:border-blue-500/50 hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-800/50 transition-all duration-300 group/item"
                                            >
                                                <motion.div
                                                    whileHover={{ rotate: 360 }}
                                                    transition={{ duration: 0.5 }}
                                                    className={`p-4 bg-gradient-to-r ${item.gradient} rounded-xl group-hover/item:bg-gradient-to-r ${item.hoverGradient}`}
                                                >
                                                    <item.icon className="w-6 h-6 text-white" />
                                                </motion.div>
                                                <div className="flex-1">
                                                    <p className="text-gray-400 text-sm mb-1">{item.label}</p>
                                                    <p className="text-white font-semibold text-lg group-hover/item:text-blue-400 transition-colors">
                                                        {item.value}
                                                    </p>
                                                </div>
                                                <ArrowRight className="w-5 h-5 text-gray-600 group-hover/item:text-blue-400 transform group-hover/item:translate-x-2 transition-all" />
                                            </a>
                                        ) : (
                                            <div className="flex items-center gap-6 p-5 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl">
                                                <div className={`p-4 bg-gradient-to-r ${item.gradient} rounded-xl`}>
                                                    <item.icon className="w-6 h-6 text-white" />
                                                </div>
                                                <div className="flex-1">
                                                    <p className="text-gray-400 text-sm mb-1">{item.label}</p>
                                                    <p className="text-white font-semibold text-lg">{item.value}</p>
                                                </div>
                                            </div>
                                        )}
                                    </motion.div>
                                ))}
                            </div>

                            {/* Social Links */}
                            <motion.div
                                variants={itemVariants}
                                className="pt-8 border-t border-gray-800"
                            >
                                <h4 className="text-white font-semibold text-xl mb-6">Connect with me</h4>
                                <div className="flex gap-4">
                                    {socialLinks.map((social, index) => (
                                        <motion.a
                                            key={index}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ y: -5 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="relative group flex-1"
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                            <div className="relative p-4 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl group-hover:border-transparent transition-all duration-300 flex items-center justify-center gap-3">
                                                <social.icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                                                <span className="text-white font-medium">{social.label}</span>
                                            </div>
                                        </motion.a>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* CTA Card */}
                    <motion.div
                        variants={itemVariants}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 via-transparent to-purple-500/30 rounded-3xl blur-2xl"></div>
                        <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 backdrop-blur-xl border border-gray-800 rounded-3xl p-8 shadow-2xl overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-500/20 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple-500/20 to-transparent rounded-full translate-y-16 -translate-x-16"></div>

                            <div className="relative space-y-8 text-center">
                                <motion.div
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.5 }}
                                    className="inline-flex p-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl shadow-lg shadow-blue-500/25"
                                >
                                    <Send className="w-8 h-8 text-white" />
                                </motion.div>

                                <div>
                                    <h3 className="text-3xl font-bold text-white mb-4">
                                        Let's Build Something <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Extraordinary</span>
                                    </h3>
                                    <p className="text-gray-400 text-lg leading-relaxed">
                                        I'm passionate about creating innovative solutions and currently exploring new opportunities. 
                                        Whether it's a project discussion or a creative collaboration, I'd love to hear from you!
                                    </p>
                                </div>

                                <motion.div 
                                    className="space-y-4 pt-4"
                                    variants={containerVariants}
                                >
                                    <motion.a
                                        href="mailto:subashkannan0309@gmail.com"
                                        variants={itemVariants}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        onHoverStart={() => setIsEmailHovered(true)}
                                        onHoverEnd={() => setIsEmailHovered(false)}
                                        className="relative group block w-full px-8 py-5 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold rounded-2xl overflow-hidden"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        <div className="relative flex items-center justify-center gap-3">
                                            <span>Send me an email</span>
                                            <motion.div
                                                animate={{ x: isEmailHovered ? 5 : 0 }}
                                                transition={{ type: "spring", stiffness: 400 }}
                                            >
                                                <Send className="w-5 h-5" />
                                            </motion.div>
                                        </div>
                                        <div className="absolute inset-0 border-2 border-blue-400 rounded-2xl opacity-0 group-hover:opacity-100 group-hover:animate-pulse"></div>
                                    </motion.a>

                                    <motion.a
                                        href="https://linkedin.com/in/subashkannan-r"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        variants={itemVariants}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        onHoverStart={() => setIsLinkedInHovered(true)}
                                        onHoverEnd={() => setIsLinkedInHovered(false)}
                                        className="relative group block w-full px-8 py-5 bg-gray-800/50 backdrop-blur-sm border-2 border-gray-700 text-white font-bold rounded-2xl hover:border-blue-500/50 transition-all duration-300"
                                    >
                                        <div className="flex items-center justify-center gap-3">
                                            <Linkedin className="w-5 h-5" />
                                            <span>Connect on LinkedIn</span>
                                            <motion.div
                                                animate={{ x: isLinkedInHovered ? 5 : 0 }}
                                                transition={{ type: "spring", stiffness: 400 }}
                                            >
                                                <ArrowRight className="w-5 h-5" />
                                            </motion.div>
                                        </div>
                                    </motion.a>

                                    <motion.button
                                        type="button"
                                        variants={itemVariants}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={() => window.dispatchEvent(new Event('open-chat'))}
                                        className="group block w-full px-8 py-5 bg-gradient-to-r from-gray-800 to-gray-900 border-2 border-gray-700 text-white font-bold rounded-2xl hover:border-cyan-500/50 transition-all duration-300"
                                    >
                                        <div className="flex items-center justify-center gap-3">
                                            <MessageSquare className="w-5 h-5 group-hover:text-cyan-400 transition-colors" />
                                            <span>Ask AI about my projects</span>
                                            <motion.div
                                                animate={{ rotate: 360 }}
                                                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                                className="w-5 h-5"
                                            >
                                                <Sparkles className="w-5 h-5 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            </motion.div>
                                        </div>
                                    </motion.button>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Footer */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-16 pt-8 border-t border-gray-800 text-center"
                >
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-gray-500">
                            © 2025 Subash Kannan R. Crafted with passion using React & TailwindCSS
                        </p>
                        <div className="flex items-center gap-2 text-gray-500">
                            <Sparkles className="w-4 h-4 text-blue-400" />
                            <span>Always learning, always building</span>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Floating Particles */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-blue-500/30 rounded-full"
                        initial={{ y: 0, x: Math.random() * 100 }}
                        animate={{
                            y: [0, -100, 0],
                            x: [0, Math.random() * 50 - 25, 0],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: i * 0.5,
                        }}
                        style={{
                            left: `${20 + i * 15}%`,
                            top: `${30 + i * 10}%`,
                        }}
                    />
                ))}
            </div>
        </section>
    );
};

export default Contact;