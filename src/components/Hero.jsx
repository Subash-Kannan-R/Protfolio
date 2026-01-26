import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, MapPin, Code2 } from 'lucide-react';
import photo from '../assets/photo.jpg';

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
        <section id="home" className="min-h-screen flex items-center justify-center bg-[#0F172A]">
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
                            className="inline-flex items-center gap-3 text-white/90"
                        >
                            <span className="hidden sm:inline-block w-12 h-px bg-[#F97366]/70"></span>
                            <span className="text-sm tracking-wide">Hello</span>
                            <span className="inline-block w-2 h-2 rounded-full bg-[#F97366]"></span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-5xl md:text-6xl font-extrabold text-white"
                        >
                            I’m <span className="text-white">SubashKannan R</span>
                        </motion.h1>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.35 }}
                            className="text-4xl md:text-5xl font-extrabold text-white mt-2"
                        >
                            <span className="text-[#F97366]">FullStack</span> Developer
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-lg text-gray-300 leading-relaxed"
                        >
                            Full Stack Developer with expertise in building responsive, high-performance web applications.
                            Specializing in the MERN stack and delivering scalable solutions in dynamic team environments.
                        </motion.p>

                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="flex flex-wrap gap-4 text-gray-600 dark:text-gray-400"
                        >
                            <div className="flex items-center gap-2">
                                <MapPin size={18} className="text-blue-600" />
                                <span>Chennai</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Phone size={18} className="text-blue-600" />
                                <span>+91 8838506695</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Mail size={18} className="text-blue-600" />
                                <span>subashkannan0309@gmail.com</span>
                            </div>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.55 }}
                            className="flex gap-4"
                        >
                            <a
                                href="#contact"
                                className="px-5 py-3 rounded-lg bg-[#F97366] text-white font-medium shadow hover:opacity-90 transition"
                            >
                                Got a project?
                            </a>
                            <a
                                href="/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-5 py-3 rounded-lg border border-[#F97366] text-white font-medium hover:bg-[#F97366]/10 transition"
                            >
                                My resume
                            </a>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.65 }}
                            className="flex gap-4"
                        >
                            <a
                                href="https://github.com/Subash-Kannan-R"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-white border border-gray-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-600 rounded-lg transition-all duration-300 group"
                            >
                                <Github size={24} className="text-gray-700 group-hover:text-white" />
                            </a>
                            <a
                                href="https://linkedin.com/in/subashkannan-r"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-white border border-gray-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-600 rounded-lg transition-all duration-300 group"
                            >
                                <Linkedin size={24} className="text-gray-700 group-hover:text-white" />
                            </a>
                            <a
                                href="mailto:subashkannan0309@gmail.com"
                                className="p-3 bg-white border border-gray-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-600 rounded-lg transition-all duration-300 group"
                            >
                                <Mail size={24} className="text-gray-700 group-hover:text-white" />
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Right Content - Photo */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative flex justify-center"
                    >
                        {/* Concentric coral rings behind avatar */}
                        <div className="absolute -z-10 inset-0 flex items-center justify-center">
                            <div className="absolute w-56 h-56 md:w-80 md:h-80 rounded-full border-4 border-[#F97366]/40"></div>
                            <div className="absolute w-40 h-40 md:w-64 md:h-64 rounded-full border-4 border-[#F97366]/60"></div>
                        </div>

                        {/* Coral angle brackets */}
                        <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-4 md:px-8">
                            <span className="text-[#F97366] text-5xl md:text-6xl opacity-80 select-none">&lt;</span>
                            <span className="text-[#F97366] text-5xl md:text-6xl opacity-80 select-none">&gt;</span>
                        </div>

                        {/* Avatar with soft ring */}
                        <div className="relative">
                            <img
                                src={photo}
                                alt="Profile"
                                className="w-40 h-40 md:w-64 md:h-64 rounded-full object-cover ring-2 ring-white/70"
                                loading="eager"
                            />
                        </div>
                    </motion.div>
                </div>
                {/* Bottom skills strip (full-width) */}
                <div className="mt-16 relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen">
                    <div className="mx-auto px-0">
                        <div className="w-full rounded-none bg-[#0B1224]/80 border-t border-b border-white/5 px-4 sm:px-8 py-4">
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 lg:grid-cols-9 gap-x-8 md:gap-x-10 gap-y-3 text-sm tracking-wide justify-items-center">
                                <span className="text-white text-center">HTML</span>
                                <span className="text-gray-400 text-center">CSS</span>
                                <span className="text-gray-400 text-center">JavaScript</span>
                                <span className="text-gray-400 text-center">React</span>
                                <span className="text-gray-400 text-center">Node.js</span>
                                <span className="text-gray-400 text-center">Express.js</span>
                                <span className="text-gray-400 text-center">MongoDB</span>
                                <span className="text-gray-400 text-center">Git</span>
                                <span className="text-gray-400 text-center">Github</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
