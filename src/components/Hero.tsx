import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, MapPin, Code2 } from 'lucide-react';

const Hero = () => {
    const skills = [
        'React.js',
        'Node.js',
        'Express.js',
        'MongoDB',
        'JavaScript',
        'HTML5',
        'CSS3',
        'TailwindCSS',
    ];

    return (
        <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-block"
                        >
                            <span className="px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium">
                                MERN Stack Developer
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-5xl md:text-6xl font-bold text-white"
                        >
                            Hi, I'm{' '}
                            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                                Subash Kannan R
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-lg text-slate-300 leading-relaxed"
                        >
                            Full Stack Developer with expertise in building responsive, high-performance web applications.
                            Specializing in the MERN stack and delivering scalable solutions in dynamic team environments.
                        </motion.p>

                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="flex flex-wrap gap-4 text-slate-400"
                        >
                            <div className="flex items-center gap-2">
                                <MapPin size={18} className="text-cyan-400" />
                                <span>Chennai</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Phone size={18} className="text-cyan-400" />
                                <span>+91 8838506695</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Mail size={18} className="text-cyan-400" />
                                <span>subashkannan0309@gmail.com</span>
                            </div>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="flex gap-4"
                        >
                            <a
                                href="https://github.com/Subash-Kannan-R"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-slate-800 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 rounded-lg transition-all duration-300 group"
                            >
                                <Github size={24} className="text-slate-300 group-hover:text-white" />
                            </a>
                            <a
                                href="https://linkedin.com/in/subashkannan-r"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-slate-800 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 rounded-lg transition-all duration-300 group"
                            >
                                <Linkedin size={24} className="text-slate-300 group-hover:text-white" />
                            </a>
                            <a
                                href="mailto:subashkannan0309@gmail.com"
                                className="p-3 bg-slate-800 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 rounded-lg transition-all duration-300 group"
                            >
                                <Mail size={24} className="text-slate-300 group-hover:text-white" />
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Right Content - Skills */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 shadow-2xl">
                            <div className="flex items-center gap-3 mb-6">
                                <Code2 className="text-cyan-400" size={28} />
                                <h3 className="text-2xl font-bold text-white">Technical Skills</h3>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                {skills.map((skill, index) => (
                                    <motion.div
                                        key={skill}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.7 + index * 0.1 }}
                                        className="bg-slate-900/50 border border-slate-700/50 rounded-lg p-4 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 group"
                                    >
                                        <p className="text-slate-300 font-medium group-hover:text-cyan-400 transition-colors">
                                            {skill}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-2xl"></div>
                            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-2xl"></div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
