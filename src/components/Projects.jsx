import { motion } from 'framer-motion';
import { Code, ShoppingCart, User, Lock } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: 'E-Commerce Web Application',
            subtitle: 'T-Shirt Store',
            date: 'Sept 2025 – Dec 2025',
            description: 'Built a React.js-based e-commerce web app with product catalog, shopping cart, and secure checkout.',
            features: [
                'Integrated payment gateway and authentication',
                'Order tracking system',
                'Responsive UI using React Hooks',
                'Cross-browser compatibility',
            ],
            tech: ['React.js', 'HTML', 'CSS', 'JavaScript'],
            tools: ['VS Code', 'Windsurf AI', 'GitHub'],
            icon: ShoppingCart,
            gradient: 'from-cyan-500 to-blue-500',
        },
        {
            title: 'Personal Portfolio',
            subtitle: 'Mini Project',
            date: 'Oct 2025',
            description: 'Developed a responsive personal portfolio using React.js to showcase skills, projects, and contact information.',
            features: [
                'Smooth navigation using React Router',
                'Integrated animations for enhanced UX',
                'Responsive design for all devices',
                'Modern UI/UX principles',
            ],
            tech: ['React.js', 'CSS', 'JavaScript'],
            tools: ['VS Code', 'Windsurf AI', 'GitHub'],
            icon: User,
            gradient: 'from-purple-500 to-pink-500',
        },
        {
            title: 'RFID Door Locking System',
            subtitle: 'IoT Project',
            date: 'Dec 2024 – Feb 2025',
            description: 'Developed an RFID-based door locking system for secure residential/commercial access.',
            features: [
                'Arduino-based cryptographic key storage',
                'AES-256 encryption for data security',
                'Protected 12 critical systems against data theft',
                'Optimized performance via caching',
            ],
            tech: ['Arduino UNO', 'Embedded C', 'AES-256'],
            tools: ['Arduino IDE'],
            icon: Lock,
            gradient: 'from-green-500 to-emerald-500',
        },
    ];

    return (
        <section id="projects" className="min-h-screen py-12 md:py-20 bg-gradient-to-br from-[#0F172A] to-[#1E293B]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-8 md:mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        Featured <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">Projects</span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg">Showcasing my recent work and technical expertise</p>
                </motion.div>

                <div className="space-y-6 md:space-y-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="glass bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-300 dark:border-gray-700 rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl hover:shadow-blue-500/10 transition-all duration-300 hover:border-blue-500/30"
                        >
                            <div className="grid md:grid-cols-3 gap-4 md:gap-8">
                                {/* Left - Icon & Title */}
                                <div className="md:col-span-1">
                                    <div className={`inline-flex p-3 sm:p-4 bg-gradient-to-r ${project.gradient} rounded-xl mb-4`}>
                                        <project.icon size={32} className="sm:w-[40px] sm:h-[40px] text-white" />
                                    </div>
                                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{project.title}</h3>
                                    <p className="text-blue-400 font-medium mb-2 text-sm sm:text-base">{project.subtitle}</p>
                                    <p className="text-gray-400 text-xs sm:text-sm flex items-center gap-2">
                                        <Code size={16} />
                                        {project.date}
                                    </p>
                                </div>

                                {/* Middle - Description & Features */}
                                <div className="md:col-span-2 space-y-3 sm:space-y-4">
                                    {project.image && (
                                        <img src={project.image} alt={project.title} className="w-full h-40 sm:h-48 object-cover rounded-lg" />
                                    )}
                                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{project.description}</p>

                                    <div className="space-y-1.5 sm:space-y-2">
                                        {project.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-start gap-2">
                                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0"></div>
                                                <p className="text-gray-300 text-xs sm:text-sm">{feature}</p>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Tech Stack */}
                                    <div>
                                        <p className="text-gray-400 text-xs sm:text-sm mb-2">Technologies:</p>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tech.map((tech, idx) => (
                                                <span
                                                    key={idx}
                                                    className="px-2 sm:px-3 py-1 bg-blue-900/50 border border-blue-700 rounded-full text-blue-300 text-xs sm:text-sm font-medium"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Tools */}
                                    <div>
                                        <p className="text-gray-400 text-xs sm:text-sm mb-2">Tools:</p>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tools.map((tool, idx) => (
                                                <span
                                                    key={idx}
                                                    className="px-2 sm:px-3 py-1 bg-gray-700 border border-gray-600 rounded-full text-gray-300 text-xs sm:text-sm"
                                                >
                                                    {tool}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Images */}
                                    {project.images && project.images.length > 0 && (
                                        <div>
                                            <p className="text-gray-400 text-xs sm:text-sm mb-2">Project Images:</p>
                                            <div className="grid grid-cols-2 gap-2">
                                                {project.images.map((img, idx) => (
                                                    <img key={idx} src={img} alt={`${project.title} ${idx + 1}`} className="w-full h-24 sm:h-32 object-cover rounded-lg" />
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
