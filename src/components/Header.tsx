'use client';

import { useState } from 'react';
import { motion } from "framer-motion";import { Menu, X, Code, User, FolderOpen, Wrench, Mail, GraduationCap, Clock } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/#home', icon: Code, endpoint: 'GET /' },
    { name: 'About', path: '/#about', icon: User, endpoint: 'GET /about' },
    { name: 'Education', path: '/#education', icon: GraduationCap, endpoint: 'GET /education' },
    { name: 'Experience', path: '/#experience', icon: Clock, endpoint: 'GET /experience' },
    { name: 'Projects', path: '/#projects', icon: FolderOpen, endpoint: 'GET /projects' },
    { name: 'Skills', path: '/#skills', icon: Wrench, endpoint: 'GET /skills' },
    { name: 'Contact', path: '/#contact', icon: Mail, endpoint: 'POST /contact' },
  ];

  return (
    <header className="fixed top-0 w-full z-50">
      <div className="absolute inset-0 bg-white/80 backdrop-blur-xl border-b border-white/20" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-3"
          >
            <div className="relative">
              <div className="w-12 h-12 gradient-bg rounded-2xl flex items-center justify-center shadow-lg animate-pulse-glow">
                <Code className="h-6 w-6 text-white" />
              </div>
              <div className="absolute -inset-1 gradient-bg rounded-2xl blur opacity-30 animate-pulse"></div>
            </div>
            <div>
              <span className="text-2xl font-bold gradient-text">Youssef</span>
              <span className="text-2xl font-bold text-slate-700">.dev</span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-2">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.path}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="nav-link group"
              >
                <span className="flex items-center space-x-2">
                  <item.icon className="h-4 w-4 group-hover:text-blue-600 transition-colors" />
                  <span>{item.name}</span>
                </span>
              </motion.a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl glass-card hover:shadow-lg transition-all duration-200"
            >
              {isOpen ? <X className="h-6 w-6 text-slate-700" /> : <Menu className="h-6 w-6 text-slate-700" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-white/20 bg-white/90 backdrop-blur-xl rounded-b-2xl shadow-xl"
          >
            <div className="px-4 py-6 space-y-3">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between p-3 rounded-xl hover:bg-blue-50 transition-all duration-200 group"
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-blue-100 group-hover:bg-blue-200 transition-colors">
                      <item.icon className="h-5 w-5 text-blue-600" />
                    </div>
                    <span className="font-medium text-slate-700 group-hover:text-blue-600 transition-colors">
                      {item.name}
                    </span>
                  </div>
                  <div className="text-xs text-blue-500 font-mono opacity-75">
                    {item.endpoint}
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header; 