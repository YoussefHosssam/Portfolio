'use client';

import { motion } from "framer-motion";
import { Github, ExternalLink, Code, Database, Shield, Calendar, Star } from 'lucide-react';
import { Project } from '../utils/data';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const getStackIcon = (tech: string) => {
    if (tech.toLowerCase().includes('.net') || tech.toLowerCase().includes('c#')) {
      return <Code className="h-4 w-4 text-blue-600 dark:text-blue-300" />;
    }
    if (tech.toLowerCase().includes('sql') || tech.toLowerCase().includes('mysql')) {
      return <Database className="h-4 w-4 text-green-600 dark:text-green-300" />;
    }
    if (tech.toLowerCase().includes('security') || tech.toLowerCase().includes('oauth')) {
      return <Shield className="h-4 w-4 text-red-600 dark:text-rose-300" />;
    }
    return <Code className="h-4 w-4 text-slate-600 dark:text-slate-300" />;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="group w-full h-full flex flex-col bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20 dark:border-slate-700/50 hover:border-blue-300/50 dark:hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-blue-400/20"
    >
      {/* Project Header */}
      <div className="mb-6 flex-1">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-800 dark:text-slate-100 group-hover:text-blue-600 transition-colors leading-tight">
            {project.name}
          </h3>
          {project.features && (
            <div className="flex items-center space-x-1 px-2 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full text-xs font-bold text-white">
              <Star className="h-3 w-3" />
              <span>Featured</span>
            </div>
          )}
        </div>
        
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          {project.description}
        </p>
      </div>

      {/* Tech Stack */}
      <div className="mb-6">
        <h4 className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 mb-3 uppercase tracking-wider">
          Tech Stack
        </h4>
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {project.stack.map((tech, techIndex) => (
            <motion.div
              key={techIndex}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: techIndex * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 px-2 sm:px-3 py-1.5 sm:py-2 bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 rounded-lg text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-200 hover:from-blue-100 hover:to-blue-200 dark:hover:from-blue-900/40 dark:hover:to-blue-800/40 hover:text-blue-700 dark:hover:text-blue-200 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              {getStackIcon(tech)}
              <span className="hidden sm:inline">{tech}</span>
              <span className="sm:hidden">{tech.length > 8 ? tech.substring(0, 8) + '...' : tech}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Features */}
      {project.features && project.features.length > 0 && (
        <div className="mb-6 flex-1">
          <h4 className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 mb-3 uppercase tracking-wider">
            Key Features
          </h4>
          <ul className="space-y-2 sm:space-y-3">
            {project.features.map((feature, featureIndex) => (
              <motion.li
                key={featureIndex}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: featureIndex * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-2 sm:space-x-3"
              >
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0" />
                <span className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{feature}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      )}

      {/* Project Meta */}
      {project.year && (
        <div className="mb-4 flex items-center space-x-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
          <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
          <span>{project.year}</span>
        </div>
      )}

      {/* Links */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 pt-4 border-t border-slate-200/50 dark:border-slate-700/50 mt-auto">
        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-none flex items-center justify-center space-x-2 px-4 py-2.5 sm:py-2 bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 text-slate-700 dark:text-slate-200 rounded-lg hover:from-slate-200 hover:to-slate-300 dark:hover:from-slate-600 dark:hover:to-slate-700 transition-all duration-200 group/link hover:shadow-md"
          >
            <Github className="h-4 w-4" />
            <span className="text-sm font-medium">Repository</span>
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-none flex items-center justify-center space-x-2 px-4 py-2.5 sm:py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg transition-all duration-200 group/link hover:shadow-lg hover:shadow-blue-500/25 transform hover:scale-105"
          >
            <ExternalLink className="h-4 w-4" />
            <span className="text-sm font-medium">Live Demo</span>
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard; 