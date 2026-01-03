import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, Code } from 'lucide-react';

const Education = () => {
    const educationList = [
        {
            institution: 'Karpagam College of Engineering',
            degree: 'Bachelor of Engineering',
            field: 'Electronics and Communication Engineering',
            duration: 'Sept 2021 – May 2025',
            icon: GraduationCap,
            gradient: 'from-blue-500 to-blue-600',
        },
        {
            institution: 'Softlogic Systems',
            degree: 'MERN Stack Developer',
            field: 'Full Stack Web Development',
            duration: 'Jun 2024 – Nov 2024',
            icon: Code,
            gradient: 'from-purple-500 to-pink-500',
        },
    ];

    const certifications = [
        {
            title: 'Front-End Development',
            provider: 'Udemy',
            date: 'Jun 2024',
            description: 'Completed hands-on projects using HTML, CSS, JavaScript, and React.js. Gained experience building responsive web apps.',
        },
    ];

    return (
        <section id="education" className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-50 to-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Education & <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">Certifications</span>
                    </h2>
                    <p className="text-gray-600 text-lg">My academic background and professional certifications</p>
                </motion.div>

                {/* Education Cards */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    {educationList.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="bg-white/80 backdrop-blur-sm border border-gray-300 rounded-2xl p-8 shadow-xl hover:shadow-blue-500/10 transition-all duration-300"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className={`p-3 bg-gradient-to-r ${edu.gradient} rounded-lg`}>
                                    <edu.icon size={32} className="text-white" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900">{edu.degree}</h3>
                                    <p className="text-blue-600">{edu.institution}</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center gap-3 text-gray-700">
                                    <Calendar size={20} className="text-blue-600" />
                                    <span>{edu.duration}</span>
                                </div>

                                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                                    <p className="text-gray-600 text-sm mb-2">Field of Study</p>
                                    <p className="text-gray-900 font-medium">{edu.field}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Certifications */}
                <div className="space-y-6">
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl font-bold text-gray-900 mb-6"
                    >
                        Additional Certifications
                    </motion.h3>
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="bg-white/80 backdrop-blur-sm border border-gray-300 rounded-2xl p-6 shadow-lg hover:shadow-blue-500/10 transition-all duration-300 hover:border-blue-500/30"
                        >
                            <div className="flex items-start gap-4">
                                <div className="p-2 bg-gradient-to-r from-blue-500/20 to-blue-600/20 border border-blue-500/30 rounded-lg">
                                    <Award size={24} className="text-blue-600" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-xl font-bold text-gray-900 mb-2">{cert.title}</h4>
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="text-blue-600 font-medium">{cert.provider}</span>
                                        <span className="text-gray-400">•</span>
                                        <span className="text-gray-600 text-sm">{cert.date}</span>
                                    </div>
                                    <p className="text-gray-700 text-sm leading-relaxed">{cert.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
