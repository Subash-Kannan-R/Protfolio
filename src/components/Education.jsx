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
            duration: 'Jun 2025 – Nov 2025',
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
        {
            title: 'Javascript',
            provider: 'IBM',
            date: 'NOV 2025',
            description: 'Completed hands-on projects using HTML, CSS, JavaScript, and React.js. Gained experience building responsive web apps.',
        }
    ];

    return (
        <section id="education" className="min-h-screen py-12 md:py-20 bg-gradient-to-br from-[#0F172A] to-[#1E293B]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-8 md:mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                        Education & <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">Certifications</span>
                    </h2>
                    <p className="text-gray-300 text-base sm:text-lg">My academic background and professional certifications</p>
                </motion.div>

                {/* Education Cards */}
                <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 md:mb-12">
                    {educationList.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="bg-gray-800/80 backdrop-blur-sm border border-gray-600 rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl hover:shadow-blue-500/10 transition-all duration-300"
                        >
                            <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                                <div className={`p-2 sm:p-3 bg-gradient-to-r ${edu.gradient} rounded-lg flex-shrink-0`}>
                                    <edu.icon size={28} className="sm:w-[32px] sm:h-[32px] text-white" />
                                </div>
                                <div className="min-w-0">
                                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">{edu.degree}</h3>
                                    <p className="text-blue-400 text-sm sm:text-base">{edu.institution}</p>
                                </div>
                            </div>

                            <div className="space-y-3 sm:space-y-4">
                                <div className="flex items-center gap-2 sm:gap-3 text-gray-300">
                                    <Calendar size={18} className="text-blue-400 flex-shrink-0" />
                                    <span className="text-sm sm:text-base">{edu.duration}</span>
                                </div>

                                <div className="bg-gray-700/50 rounded-lg p-3 sm:p-4 border border-gray-600">
                                    <p className="text-gray-400 text-xs sm:text-sm mb-2">Field of Study</p>
                                    <p className="text-white font-medium text-sm sm:text-base">{edu.field}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Certifications */}
                <div className="space-y-4 sm:space-y-6">
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6"
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
                            className="bg-gray-800/80 backdrop-blur-sm border border-gray-600 rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-blue-500/10 transition-all duration-300 hover:border-blue-500/30"
                        >
                            <div className="flex items-start gap-3 sm:gap-4">
                                <div className="p-2 bg-gradient-to-r from-blue-500/20 to-blue-600/20 border border-blue-500/30 rounded-lg flex-shrink-0">
                                    <Award size={20} className="sm:w-[24px] sm:h-[24px] text-blue-400" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h4 className="text-lg sm:text-xl font-bold text-white mb-2">{cert.title}</h4>
                                    <div className="flex flex-wrap items-center gap-2 mb-2 sm:mb-3 text-xs sm:text-sm">
                                        <span className="text-blue-400 font-medium">{cert.provider}</span>
                                        <span className="text-gray-500">•</span>
                                        <span className="text-gray-400">{cert.date}</span>
                                    </div>
                                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">{cert.description}</p>
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
