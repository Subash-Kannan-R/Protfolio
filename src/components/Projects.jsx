import { motion } from 'framer-motion';
import { Code, ShoppingCart, User, Lock } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: 'E-Commerce Web Application',
            subtitle: 'T-Shirt Store',
            date: 'Sept 2025 – Present',
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
        <section id="projects" className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Featured <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">Projects</span>
                    </h2>
                    <p className="text-gray-600 text-lg">Showcasing my recent work and technical expertise</p>
                </motion.div>

                <div className="space-y-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="glass bg-white/80 backdrop-blur-sm border border-gray-300 rounded-2xl p-8 shadow-xl hover:shadow-blue-500/10 transition-all duration-300 hover:border-blue-500/30"
                        >
                            <div className="grid md:grid-cols-3 gap-8">
                                {/* Left - Icon & Title */}
                                <div className="md:col-span-1">
                                    <div className={`inline-flex p-4 bg-gradient-to-r ${project.gradient} rounded-xl mb-4`}>
                                        <project.icon size={40} className="text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
                                    <p className="text-blue-600 font-medium mb-2">{project.subtitle}</p>
                                    <p className="text-gray-600 text-sm flex items-center gap-2">
                                        <Code size={16} />
                                        {project.date}
                                    </p>
                                </div>

                                {/* Middle - Description & Features */}
                                <div className="md:col-span-2 space-y-4">
                                    <p className="text-gray-700 leading-relaxed">{project.description}</p>

                                    <div className="space-y-2">
                                        {project.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-start gap-2">
                                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                                                <p className="text-gray-600 text-sm">{feature}</p>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Tech Stack */}
                                    <div>
                                        <p className="text-gray-500 text-sm mb-2">Technologies:</p>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tech.map((tech, idx) => (
                                                <span
                                                    key={idx}
                                                    className="px-3 py-1 bg-blue-50 border border-blue-200 rounded-full text-blue-600 text-sm font-medium"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Tools */}
                                    <div>
                                        <p className="text-gray-500 text-sm mb-2">Tools:</p>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tools.map((tool, idx) => (
                                                <span
                                                    key={idx}
                                                    className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-gray-700 text-sm"
                                                >
                                                    {tool}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
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
