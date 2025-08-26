'use client';

import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { personalInfo } from '../utils/data';

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: personalInfo.github, label: 'GitHub' },
    { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' },
    { icon: Phone, href: `tel:${personalInfo.phone}`, label: 'Phone' }
  ];

  const apiEndpoints = [
    { method: 'GET', path: '/', label: 'Home' },
    { method: 'GET', path: '/about', label: 'About' },
    { method: 'GET', path: '/experience', label: 'Experience' },
    { method: 'GET', path: '/projects', label: 'Projects' },
    { method: 'GET', path: '/skills', label: 'Skills' },
    { method: 'POST', path: '/contact', label: 'Contact' }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900 text-slate-800 dark:text-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Brand & Contact */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-xl">YH</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100">Youssef Hossam</h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm">Backend Developer</p>
              </div>
            </div>
            
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Building scalable APIs and robust backend systems with modern technologies.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <span className="text-slate-700 dark:text-slate-300">{personalInfo.email}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <span className="text-slate-700 dark:text-slate-300">{personalInfo.phone}</span>
              </div>
            </div>
          </div>

          {/* API Collection */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold mb-4 text-slate-800 dark:text-slate-100">
              API Collection
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {apiEndpoints.map((endpoint) => (
                <a
                  key={endpoint.path}
                  href={endpoint.path}
                  className="bg-white/60 dark:bg-slate-800/30 rounded-xl p-3 border border-slate-200 dark:border-slate-700/50 hover:bg-white/80 dark:hover:bg-slate-700/50 transition-all hover:shadow-lg cursor-pointer group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`px-2 py-1 rounded text-xs font-bold ${
                      endpoint.method === 'GET' 
                        ? 'bg-green-100 text-green-800 dark:bg-emerald-900/40 dark:text-emerald-300' 
                        : 'bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-300'
                    }`}>
                      {endpoint.method}
                    </span>
                    <code className="text-xs text-slate-600 dark:text-slate-300 font-mono">
                      {endpoint.path}
                    </code>
                  </div>
                  <span className="text-sm text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-slate-100 transition-colors">
                    {endpoint.label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold mb-4 text-slate-800 dark:text-slate-100">
              Connect
            </h4>
            <div className="space-y-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 bg-white/60 dark:bg-slate-800/30 rounded-xl hover:bg-white/80 dark:hover:bg-slate-700/50 transition-all group border border-slate-200 dark:border-slate-700/50"
                >
                  <social.icon className="h-5 w-5 text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors" />
                  <span className="text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                    {social.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700/50">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-slate-600 dark:text-slate-300 text-sm">
              © {new Date().getFullYear()} Youssef Hossam. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-6 text-sm text-slate-600 dark:text-slate-300">
              <span className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Available for work</span>
              </span>
              <span className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Open to opportunities</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
