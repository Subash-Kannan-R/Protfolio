import { useState, useEffect } from 'react';
import { Home, GraduationCap, FolderGit2, Mail, Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDark]);

    const toggleTheme = () => {
        setIsDark(!isDark);
    };

    const navItems = [
        { name: 'Home', href: '#home', icon: Home },
        { name: 'Education', href: '#education', icon: GraduationCap },
        { name: 'Projects', href: '#projects', icon: FolderGit2 },
        { name: 'Contact', href: '#contact', icon: Mail },
    ];

    const scrollToSection = (href, name) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(name.toLowerCase());
        }
    };

    return (
        <motion.nav
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden md:block"
        >
            <div className="flex flex-col gap-4">
                {navItems.map((item, index) => {
                    const Icon = item.icon;
                    const isActive = activeSection === item.name.toLowerCase();

                    return (
                        <motion.button
                            key={item.name}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            onClick={() => scrollToSection(item.href, item.name)}
                            className="group relative"
                            aria-label={item.name}
                        >
                            {/* Circular button with glassmorphism */}
                            <div className={`
                                w-12 h-12 rounded-full flex items-center justify-center
                                backdrop-blur-md border transition-all duration-300
                                ${isActive
                                    ? 'bg-blue-500 border-blue-400 shadow-lg shadow-blue-500/50'
                                    : 'bg-white/80 border-gray-300 hover:bg-gray-100 hover:border-gray-400'
                                }
                            `}>
                                <Icon
                                    size={20}
                                    className={`transition-colors duration-300 ${isActive ? 'text-white' : 'text-gray-700 group-hover:text-blue-600'
                                        }`}
                                />
                            </div>

                            {/* Tooltip on hover */}
                            <div className="
                                absolute left-full ml-4 top-1/2 -translate-y-1/2
                                px-3 py-1.5 rounded-lg
                                bg-gray-800/95 backdrop-blur-md border border-gray-700/50
                                text-gray-100 text-sm font-medium whitespace-nowrap
                                opacity-0 group-hover:opacity-100 pointer-events-none
                                transition-all duration-300 group-hover:ml-6
                            ">
                                {item.name}
                                {/* Arrow */}
                                <div className="absolute right-full top-1/2 -translate-y-1/2 
                                    border-4 border-transparent border-r-gray-800/95">
                                </div>
                            </div>

                            {/* Active indicator */}
                            {isActive && (
                                <motion.div
                                    layoutId="activeIndicator"
                                    className="absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                        </motion.button>
                    );
                })}

                {/* Theme Toggle */}
                <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: navItems.length * 0.1 }}
                    onClick={toggleTheme}
                    className="group relative"
                    aria-label="Toggle theme"
                >
                    <div className="
                        w-12 h-12 rounded-full flex items-center justify-center
                        backdrop-blur-md border transition-all duration-300
                        bg-white/80 border-gray-300 hover:bg-gray-100 hover:border-gray-400
                    ">
                        {isDark ? (
                            <Sun size={20} className="text-gray-700 group-hover:text-yellow-500 transition-colors duration-300" />
                        ) : (
                            <Moon size={20} className="text-gray-700 group-hover:text-blue-600 transition-colors duration-300" />
                        )}
                    </div>

                    <div className="
                        absolute left-full ml-4 top-1/2 -translate-y-1/2
                        px-3 py-1.5 rounded-lg
                        bg-gray-800/95 backdrop-blur-md border border-gray-700/50
                        text-gray-100 text-sm font-medium whitespace-nowrap
                        opacity-0 group-hover:opacity-100 pointer-events-none
                        transition-all duration-300 group-hover:ml-6
                    ">
                        {isDark ? 'Light Mode' : 'Dark Mode'}
                        <div className="absolute right-full top-1/2 -translate-y-1/2 
                            border-4 border-transparent border-r-gray-800/95">
                        </div>
                    </div>
                </motion.button>
            </div>
        </motion.nav>
    );
};

export default Navbar;
