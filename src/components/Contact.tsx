import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';

const Contact = () => {
    const contactInfo = [
        {
            icon: Mail,
            label: 'Email',
            value: 'subashkannan0309@gmail.com',
            href: 'mailto:subashkannan0309@gmail.com',
            gradient: 'from-cyan-500 to-blue-500',
        },
        {
            icon: Phone,
            label: 'Phone',
            value: '+91 8838506695',
            href: 'tel:+918838506695',
            gradient: 'from-green-500 to-emerald-500',
        },
        {
            icon: MapPin,
            label: 'Location',
            value: 'Chennai, India',
            href: null,
            gradient: 'from-purple-500 to-pink-500',
        },
    ];

    const socialLinks = [
        {
            icon: Github,
            label: 'GitHub',
            href: 'https://github.com/Subash-Kannan-R',
            color: 'hover:text-white',
        },
        {
            icon: Linkedin,
            label: 'LinkedIn',
            href: 'https://linkedin.com/in/subashkannan-r',
            color: 'hover:text-blue-400',
        },
    ];

    return (
        <section id="contact" className="min-h-screen bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Get In <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Touch</span>
                    </h2>
                    <p className="text-slate-400 text-lg">Let's connect and discuss opportunities</p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 shadow-2xl">
                            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>

                            <div className="space-y-4">
                                {contactInfo.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        {item.href ? (
                                            <a
                                                href={item.href}
                                                className="flex items-center gap-4 p-4 bg-slate-900/50 border border-slate-700/50 rounded-lg hover:border-cyan-500/50 transition-all duration-300 group"
                                            >
                                                <div className={`p-3 bg-gradient-to-r ${item.gradient} rounded-lg`}>
                                                    <item.icon size={24} className="text-white" />
                                                </div>
                                                <div>
                                                    <p className="text-slate-400 text-sm">{item.label}</p>
                                                    <p className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                                                        {item.value}
                                                    </p>
                                                </div>
                                            </a>
                                        ) : (
                                            <div className="flex items-center gap-4 p-4 bg-slate-900/50 border border-slate-700/50 rounded-lg">
                                                <div className={`p-3 bg-gradient-to-r ${item.gradient} rounded-lg`}>
                                                    <item.icon size={24} className="text-white" />
                                                </div>
                                                <div>
                                                    <p className="text-slate-400 text-sm">{item.label}</p>
                                                    <p className="text-white font-medium">{item.value}</p>
                                                </div>
                                            </div>
                                        )}
                                    </motion.div>
                                ))}
                            </div>

                            {/* Social Links */}
                            <div className="mt-8 pt-8 border-t border-slate-700/50">
                                <h4 className="text-white font-semibold mb-4">Connect with me</h4>
                                <div className="flex gap-4">
                                    {socialLinks.map((social, index) => (
                                        <motion.a
                                            key={index}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                            className={`p-4 bg-slate-900/50 border border-slate-700/50 rounded-lg hover:border-cyan-500/50 transition-all duration-300 group ${social.color}`}
                                        >
                                            <social.icon size={24} className="text-slate-400 group-hover:scale-110 transition-transform" />
                                        </motion.a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* CTA Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex items-center"
                    >
                        <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-8 shadow-2xl w-full">
                            <div className="text-center space-y-6">
                                <div className="inline-flex p-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full">
                                    <Send size={40} className="text-white" />
                                </div>

                                <h3 className="text-3xl font-bold text-white">Ready to collaborate?</h3>

                                <p className="text-slate-300 leading-relaxed">
                                    I'm currently looking for new opportunities and exciting projects.
                                    Whether you have a question or just want to say hi, I'll try my best to get back to you!
                                </p>

                                <div className="space-y-4 pt-4">
                                    <a
                                        href="mailto:subashkannan0309@gmail.com"
                                        className="block w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
                                    >
                                        Send me an email
                                    </a>

                                    <a
                                        href="https://linkedin.com/in/subashkannan-r"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block w-full px-8 py-4 bg-slate-800 border border-slate-700 text-white font-semibold rounded-lg hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
                                    >
                                        Connect on LinkedIn
                                    </a>
                                </div>
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-2xl"></div>
                            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-2xl"></div>
                        </div>
                    </motion.div>
                </div>

                {/* Footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-16 pt-8 border-t border-slate-700/50 text-center"
                >
                    <p className="text-slate-400">
                        © 2025 Subash Kannan R. Built with React & TailwindCSS
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
