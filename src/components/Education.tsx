import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const Education = () => {
    const education = {
        institution: 'Karpagam College of Engineering',
        degree: 'Bachelor of Engineering',
        field: 'Electronics and Communication Engineering',
        duration: 'Sept 2021 – May 2025',
        gpa: '7.5/10',
    };

    const certifications = [
        {
            title: 'Front-End Development',
            provider: 'Udemy',
            date: 'Jun 2024',
            description: 'Completed hands-on projects using HTML, CSS, JavaScript, and React.js. Gained experience building responsive web apps.',
        },
        {
            title: 'Certified MERN Stack Developer',
            provider: 'Softlogic Systems',
            date: 'Jun 2025 – Nov 2025',
            description: 'Hands-on experience in developing responsive full-stack web applications using React.js, Node.js, Express, and MongoDB.',
        },
    ];

    return (
        <section id="education" className="min-h-screen bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Education & <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Certifications</span>
                    </h2>
                    <p className="text-slate-400 text-lg">My academic background and professional certifications</p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Education Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg">
                                <GraduationCap size={32} className="text-white" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white">{education.degree}</h3>
                                <p className="text-cyan-400">{education.institution}</p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-slate-300">
                                <Calendar size={20} className="text-cyan-400" />
                                <span>{education.duration}</span>
                            </div>

                            <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/50">
                                <p className="text-slate-400 text-sm mb-2">Field of Study</p>
                                <p className="text-white font-medium">{education.field}</p>
                            </div>

                            <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/50">
                                <p className="text-slate-400 text-sm mb-2">GPA</p>
                                <p className="text-white font-bold text-2xl">{education.gpa}</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Certifications */}
                    <div className="space-y-6">
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 hover:border-cyan-500/30"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-lg">
                                        <Award size={24} className="text-cyan-400" />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-xl font-bold text-white mb-2">{cert.title}</h4>
                                        <div className="flex items-center gap-2 mb-3">
                                            <span className="text-cyan-400 font-medium">{cert.provider}</span>
                                            <span className="text-slate-500">•</span>
                                            <span className="text-slate-400 text-sm">{cert.date}</span>
                                        </div>
                                        <p className="text-slate-400 text-sm leading-relaxed">{cert.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
