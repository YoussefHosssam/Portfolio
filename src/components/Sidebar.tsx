'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Home, 
  User, 
  Briefcase, 
  FolderOpen, 
  Code, 
  Mail, 
  Menu, 
  X, 
  Sun, 
  Moon,
  FileText
} from 'lucide-react';
import { useApp } from '../app/providers';
import { LocaleKey, t } from '../utils/i18n';

const Sidebar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { theme, toggleTheme } = useApp();

  const navItems: { href: string; icon: any; label: LocaleKey; method: string }[] = [
    { href: '#home', icon: Home, label: 'nav_home', method: 'GET' },
    { href: '#about', icon: User, label: 'nav_about', method: 'GET' },
    { href: '#skills', icon: Code, label: 'nav_skills', method: 'GET' },
    { href: '#projects', icon: FolderOpen, label: 'nav_projects', method: 'GET' },
    { href: '#experience', icon: Briefcase, label: 'nav_experience', method: 'GET' },
    { href: '#contact', icon: Mail, label: 'nav_contact', method: 'POST' },
  ];

  const toggleMobileMenu = () => setIsMobileOpen(!isMobileOpen);

  const handleCVDownload = () => {
    // You can either open in new tab or trigger download
    window.open('/cv.pdf', '_blank');
    // Alternative: trigger download
    // const link = document.createElement('a');
    // link.href = '/cv.pdf';
    // link.download = 'Youssef_Hossam_CV.pdf';
    // link.click();
  };

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 glass-sidebar border-b border-white/20 dark:border-slate-800/60">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center space-x-3">
            <div className="w-16 h-16 rounded-xl overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center shadow-lg">
              <img
                src="/profile-photo.jpg"
                alt="Youssef Hossam Profile Photo"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="hidden w-full h-full flex items-center justify-center">
                <span className="text-white font-bold text-2xl">YH</span>
              </div>
            </div>
            <div>
              <h1 className="text-lg font-bold text-slate-800 dark:text-slate-100">Youssef Hossam</h1>
              <p className="text-sm text-slate-600 dark:text-slate-400">Backend Developer</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-white/50 dark:bg-slate-800/50 hover:bg-white/80 dark:hover:bg-slate-700/80 transition-colors"
            >
              {theme === 'light' ? <Moon className="h-5 w-5 text-slate-700 dark:text-slate-300" /> : <Sun className="h-5 w-5 text-slate-700 dark:text-slate-300" />}
            </button>
            
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-lg bg-white/50 dark:bg-slate-800/50 hover:bg-white/80 dark:hover:bg-slate-700/80 transition-colors"
            >
              {isMobileOpen ? <X className="h-5 w-5 text-slate-700 dark:text-slate-300" /> : <Menu className="h-5 w-5 text-slate-700 dark:text-slate-300" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-black/20 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            className="absolute top-16 left-0 w-80 h-full glass-sidebar border-r border-white/20 dark:border-slate-800/60 p-6"
          >
            <div className="space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="flex items-center space-x-3 p-3 rounded-xl hover:bg-white/50 dark:hover:bg-slate-800/50 transition-colors group"
                >
                  <item.icon className="h-5 w-5 text-slate-600 dark:text-slate-400 group-hover:text-blue-600 transition-colors" />
                  <span className="text-slate-700 dark:text-slate-200 font-medium">{t('en', item.label as LocaleKey)}</span>
                  <span className={`ml-auto px-2 py-1 rounded text-xs font-bold ${
                    item.method === 'GET' 
                      ? 'bg-green-100 text-green-800 dark:bg-emerald-900/40 dark:text-emerald-300' 
                      : 'bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-300'
                  }`}>
                    {item.method}
                  </span>
                </a>
              ))}
              
              {/* CV Button in Mobile Menu */}
              <button
                onClick={() => {
                  handleCVDownload();
                  setIsMobileOpen(false);
                }}
                className="w-full flex items-center space-x-3 p-3 rounded-xl hover:bg-white/50 dark:hover:bg-slate-800/50 transition-colors group bg-gradient-to-r from-blue-500/20 to-purple-500/20 hover:from-blue-500/30 hover:to-purple-500/30"
              >
                <FileText className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <span className="text-blue-700 dark:text-blue-300 font-medium">Download CV</span>
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Desktop Sidebar */}
      <div className="hidden lg:block fixed top-0 left-0 h-full w-64 z-40 transition-all duration-300">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="h-full glass-sidebar p-4"
        >
          {/* Profile Section - Static, No Dropdown */}
          <div className="mb-6">
            <div className="w-full flex items-center space-x-3 mb-3 p-2 rounded-xl">
              <div className="w-16 h-16 rounded-xl overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center shadow-lg">
                <img
                  src="/profile-photo.jpg"
                  alt="Youssef Hossam Profile Photo"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <div className="hidden w-full h-full flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">YH</span>
                </div>
              </div>
              <div className="flex-1 text-left">
                <h1 className="text-lg font-bold text-slate-800 dark:text-slate-100">Youssef Hossam</h1>
                <p className="text-sm text-slate-600 dark:text-slate-400">Backend Developer</p>
              </div>
            </div>
            
            {/* Static Info Display */}
            <div className="space-y-2 text-sm bg-white/30 dark:bg-slate-800/30 rounded-xl p-3 backdrop-blur-sm">
              <p className="text-slate-600 dark:text-slate-400 flex items-center">
                <span className="mr-2">📍</span>
                Cairo, Egypt
              </p>
              <p className="text-slate-600 dark:text-slate-400 flex items-center">
                <span className="mr-2">💼</span>
                Available for work
              </p>
            </div>
            
            {/* CV Download Button */}
            <button
              onClick={handleCVDownload}
              className="w-full mt-3 flex items-center justify-center space-x-2 p-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <FileText className="h-4 w-4" />
              <span>Download CV</span>
            </button>
          </div>

          {/* Navigation */}
          <nav className="space-y-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="flex items-center space-x-3 p-3 rounded-xl hover:bg-white/30 dark:hover:bg-slate-800/30 transition-colors group"
              >
                <item.icon className="h-4 w-4 text-slate-600 dark:text-slate-400 group-hover:text-blue-600 transition-colors" />
                <span className="text-slate-700 dark:text-slate-200 font-medium group-hover:text-slate-900 dark:group-hover:text-slate-100 transition-colors flex-1 text-sm">
                  {t('en', item.label as LocaleKey)}
                </span>
                <span className={`px-2 py-1 rounded text-xs font-bold ${
                  item.method === 'GET' 
                    ? 'bg-green-100 text-green-800 dark:bg-emerald-900/40 dark:text-emerald-300' 
                    : 'bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-300'
                }`}>
                  {item.method}
                </span>
              </a>
            ))}
          </nav>
        </motion.div>
      </div>

      {/* Creative Dark Mode Toggle - Floating Action Button Style */}
      <div className="hidden lg:block fixed top-8 left-72 z-30">
        <motion.button
          onClick={toggleTheme}
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          className="group relative p-3 rounded-xl bg-gradient-to-br from-white/90 to-white/70 dark:from-slate-800/90 dark:to-slate-700/70 backdrop-blur-xl border border-white/30 dark:border-slate-600/50 shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden"
        >
          {/* Background Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-purple-400/20 to-pink-400/20 dark:from-blue-500/30 dark:via-purple-500/30 dark:to-pink-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
          
          {/* Icon Container */}
          <div className="relative z-10 flex items-center justify-center w-6 h-6">
            {theme === 'light' ? (
              <Moon className="h-5 w-5 text-slate-700 dark:text-slate-300 group-hover:text-blue-600 transition-all duration-300" />
            ) : (
              <Sun className="h-5 w-5 text-slate-700 dark:text-slate-300 group-hover:text-yellow-500 transition-all duration-300" />
            )}
          </div>
          
          {/* Subtle Border Glow */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-purple-500/0 dark:from-blue-400/0 dark:via-blue-400/30 dark:to-purple-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.button>
      </div>
    </>
  );
};

export default Sidebar;