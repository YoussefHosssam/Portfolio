"use client";

import { motion } from 'framer-motion';
import { useApp } from './providers';
import { t } from '../utils/i18n';
import { personalInfo, about, projects, skills, contactForm } from '../utils/data';
import EndpointCard from '../components/EndpointCard';
import JSONBlock from '../components/JSONBlock';
import ProjectCard from '../components/ProjectCard';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import ScrollPrevention from '../components/ScrollPrevention';

export default function Home() {
  const { theme } = useApp();

  // API Response Data
  const aboutResponse = {
    status: "200 OK",
    message: "About information retrieved successfully",
    data: about
  };

  const skillsResponse = {
    status: "200 OK",
    message: "Skills information retrieved successfully",
    data: skills
  };

  const projectsResponse = {
    status: "200 OK",
    message: "Projects information retrieved successfully",
    data: projects
  };

  const experienceResponse = {
    status: "200 OK",
    message: "Experience information retrieved successfully",
    data: [
      {
        position: "Full-stack Developer Trainee",
        company: "DEPI",
        duration: "2025Jun - 2025Dec",
        highlights: [
          "Developed scalable REST APIs using .NET Core MVC",
          "Gained hands-on experience in developing RESTful APIs, working with Entity Framework, and integrating frontend with backend logic",
          "Projects include user authentication systems, role-based APIs, and database-driven services with SQL Server"
        ]
      },
      {
        position: "Backend Developer Intern",
        company: "Innovitics",
        duration: "2025Aug - 2025Sep",
        highlights: [
          "Developed scalable REST APIs using .NET Core",
          "Designed and optimized database schemas for high performance",
          "Collaborated with cross-functional teams to deliver quality software"
        ]
      }
    ]
  };

  const educationResponse = {
    status: "200 OK",
    message: "Education information retrieved successfully",
    data: {
      degree: "Bachelor of Computer Science",
      institution: "Faculty of Computers & AI, Cairo University",
      duration: "2019 - 2023",
      certifications: [
        "Microsoft Certified: Azure Developer Associate",
        "AWS Certified Developer - Associate",
        "MongoDB Certified Developer",
        "Node.js Certification"
      ]
    }
  };

  return (
    <>
      <ScrollPrevention />
      <main className="min-h-screen">
        {/* 🔹 1. Header / Introduction */}
        <section id="home" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 flex items-center justify-center min-h-screen">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
                             className="mb-12 sm:mb-16"
            >
                             <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6">
                <span className="gradient-text">Youssef Hossam</span>
              </h1>
              
                             <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-700 dark:text-slate-300 mb-3 sm:mb-4">
                Jr Backend Developer | .NET & Node.js
              </h2>
              
                             <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed px-4">
                Building scalable APIs & real-time apps with .NET and Node.js.
              </p>

                             <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-6 sm:mb-8 px-4">
                <a href={`mailto:${personalInfo.email}`} className="glass-card px-6 py-3 rounded-xl hover:shadow-lg transition-all hover:-translate-y-1">
                  <span className="text-slate-700 dark:text-slate-200 font-medium">{personalInfo.email}</span>
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="glass-card px-6 py-3 rounded-xl hover:shadow-lg transition-all hover:-translate-y-1">
                  <span className="text-slate-700 dark:text-slate-200 font-medium">LinkedIn</span>
                </a>
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="glass-card px-6 py-3 rounded-xl hover:shadow-lg transition-all hover:-translate-y-1">
                  <span className="text-slate-700 dark:text-slate-200 font-medium">GitHub</span>
                </a>
                <a href={`tel:${personalInfo.phone}`} className="glass-card px-6 py-3 rounded-xl hover:shadow-lg transition-all hover:-translate-y-1">
                  <span className="text-slate-700 dark:text-slate-200 font-medium">{personalInfo.phone}</span>
                </a>
              </div>

                             <div className="flex flex-wrap justify-center gap-3 sm:gap-4 px-4">
                <a href="#projects" className="gradient-bg text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all hover:-translate-y-1">
                  View Projects
                </a>
                <a href="#contact" className="glass-card px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all hover:-translate-y-1">
                  Get In Touch
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 🔹 2. About Me */}
        <section id="about" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-br from-white/50 to-blue-50/50 dark:from-slate-900/50 dark:to-slate-800/50">
          <div className="max-w-6xl mx-auto">
                         <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8 }}
               viewport={{ once: true }}
               className="text-center mb-12 sm:mb-16"
             >
               <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                 About Me
               </h2>
               <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto leading-relaxed px-4">
                 I'm a backend developer specialized in .NET Core and Node.js, passionate about designing scalable APIs, real-time systems, and clean architectures. I enjoy building products that combine performance with simplicity.
               </p>
             </motion.div>

                         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
              {/* About Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                                 className="space-y-6 sm:space-y-8"
              >
                {/* API Response */}
                <EndpointCard
                  method="GET"
                  endpoint="/about"
                  description="Retrieve about information"
                >
                  <JSONBlock data={aboutResponse} />
                </EndpointCard>

                {/* Personal Details */}
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100">
                      Background & Education
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      {about.education}
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100">
                      Specialization
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      {about.specialty}
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100">
                      Current Role
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      {about.experience}
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100">
                      What Drives Me
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      {about.passion}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Profile Visual */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative">
                                     {/* Main Profile Photo */}
                   <div className="w-80 h-80 mx-auto rounded-3xl overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 p-2 shadow-2xl">
                     <img
                       src="/profile-photo.jpg"
                       alt="Youssef Hossam Profile Photo"
                       className="w-full h-full object-cover rounded-2xl"
                       onError={(e) => {
                         const target = e.target as HTMLImageElement;
                         target.style.display = 'none';
                         target.nextElementSibling?.classList.remove('hidden');
                       }}
                     />
                     <div className="hidden w-full h-full flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl">
                       <span className="text-white font-bold text-6xl">YH</span>
                     </div>
                   </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-80 animate-pulse"></div>
                  <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-60 animate-pulse" style={{ animationDelay: '1s' }}></div>
                  <div className="absolute top-1/2 -right-12 w-6 h-6 bg-gradient-to-r from-pink-400 to-red-500 rounded-full opacity-70 animate-pulse" style={{ animationDelay: '2s' }}></div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
                         <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8 }}
               viewport={{ once: true }}
               className="text-center mb-12 sm:mb-16"
             >
               <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 dark:text-slate-100 mb-3 sm:mb-4">
                 {t('en', 'projects_title')}
               </h2>
               <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto px-4">
                 Explore my latest projects showcasing backend development, API design, and cloud solutions.
               </p>
             </motion.div>

                         <div className="space-y-12 sm:space-y-16">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                                     className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 sm:gap-12 lg:gap-16`}
                >
                  {/* Project Content */}
                                     <div className="flex-1 space-y-4 sm:space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        {project.year && (
                          <span className="text-sm text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">
                            {project.year}
                          </span>
                        )}
                      </div>
                      
                      <h3 className="text-3xl lg:text-4xl font-bold text-slate-800 dark:text-slate-100 leading-tight">
                        {project.name}
                      </h3>
                      
                      <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Stack */}
                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-200 uppercase tracking-wider">
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {project.stack.map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: techIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="px-4 py-2 bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 text-slate-700 dark:text-slate-200 rounded-lg text-sm font-medium hover:from-blue-100 hover:to-blue-200 dark:hover:from-blue-900/40 dark:hover:to-blue-800/40 hover:text-blue-700 dark:hover:text-blue-200 transition-all duration-200"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    {project.features && project.features.length > 0 && (
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-200 uppercase tracking-wider">
                          Key Features
                        </h4>
                        <ul className="space-y-2">
                          {project.features.map((feature, featureIndex) => (
                            <motion.li
                              key={featureIndex}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: featureIndex * 0.1 }}
                              viewport={{ once: true }}
                              className="flex items-start space-x-3"
                            >
                              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0" />
                              <span className="text-slate-600 dark:text-slate-400">{feature}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Project Links */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-6">
                      {project.repo && (
                        <a
                          href={project.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center space-x-2 px-6 py-3 bg-slate-800 dark:bg-slate-200 text-white dark:text-slate-800 rounded-lg hover:bg-slate-700 dark:hover:bg-slate-300 transition-all duration-200 font-medium"
                        >
                          <span>📁</span>
                          <span>View Code</span>
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg transition-all duration-200 font-medium transform hover:scale-105"
                        >
                          <span>🚀</span>
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Project Visual */}
                                     <div className="flex-1 w-full max-w-sm sm:max-w-lg">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                      viewport={{ once: true }}
                      className="relative group"
                    >
                      {project.photo ? (
                                                 <div className="w-full rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                                                     <img
                             src={project.photo}
                             alt={`${project.name} Project Screenshot`}
                             className="w-full h-auto max-h-80 object-contain group-hover:scale-105 transition-transform duration-300"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                              target.nextElementSibling?.classList.remove('hidden');
                            }}
                          />
                                                     <div className="hidden w-full h-80 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 flex items-center justify-center">
                            <div className="text-center space-y-4">
                              <div className="w-20 h-20 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                                <span className="text-3xl">💻</span>
                              </div>
                              <h4 className="text-xl font-semibold text-slate-700 dark:text-slate-200">
                                {project.name}
                              </h4>
                              <p className="text-slate-600 dark:text-slate-400 text-sm">
                                {project.stack.slice(0, 3).join(' • ')}
                              </p>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="w-full h-80 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 rounded-2xl p-8 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300">
                          <div className="text-center space-y-4">
                            <div className="w-20 h-20 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                              <span className="text-3xl">💻</span>
                            </div>
                            <h4 className="text-xl font-semibold text-slate-700 dark:text-slate-200">
                              {project.name}
                            </h4>
                            <p className="text-slate-600 dark:text-slate-400 text-sm">
                              {project.stack.slice(0, 3).join(' • ')}
                            </p>
                          </div>
                        </div>
                      )}
                      
                      {/* Decorative Elements */}
                      <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
                         <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8 }}
               viewport={{ once: true }}
               className="text-center mb-12 sm:mb-16"
             >
               <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 dark:text-slate-100 mb-3 sm:mb-4">
                 {t('en', 'skills_title')}
               </h2>
               <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto px-4">
                 Technical expertise across modern backend technologies and cloud platforms.
               </p>
             </motion.div>

            {/* API Response */}
            <EndpointCard
              method="GET"
              endpoint="/skills"
              description="Retrieve skills information"
            >
              <JSONBlock data={skillsResponse} />
            </EndpointCard>

                         <div className="space-y-8 sm:space-y-12 mt-12 sm:mt-16">
              {skills.map((category, categoryIndex) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 text-center">
                    {category.name}
                  </h3>
                                     <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
                    {category.items.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: skillIndex * 0.05 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05, y: -5 }}
                                                 className="group flex flex-col items-center p-3 sm:p-4 rounded-xl bg-white/60 dark:bg-slate-800/60 hover:bg-white/80 dark:hover:bg-slate-700/80 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 dark:hover:shadow-blue-400/20 border border-white/20 dark:border-slate-700/50 hover:border-blue-300/50 dark:hover:border-blue-500/50"
                      >
                                                 <div className="w-10 h-10 sm:w-12 sm:h-12 mb-2 sm:mb-3 flex items-center justify-center text-2xl sm:text-3xl group-hover:scale-110 transition-transform duration-200">
                          {skill.icon}
                        </div>
                                                 <span className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 text-center group-hover:text-slate-900 dark:group-hover:text-slate-100 transition-colors">
                          {skill.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
                         <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8 }}
               viewport={{ once: true }}
               className="text-center mb-12 sm:mb-16"
             >
               <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 dark:text-slate-100 mb-3 sm:mb-4">
                 {t('en', 'experience_title')}
               </h2>
               <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto px-4">
                 Professional journey in backend development and cybersecurity.
               </p>
             </motion.div>

            {/* API Response */}
            <EndpointCard
              method="GET"
              endpoint="/experience"
              description="Retrieve experience information"
            >
              <JSONBlock data={experienceResponse} />
            </EndpointCard>

                         <div className="mt-12 sm:mt-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline Line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500" style={{ height: 'calc(100% + 4rem)' }}></div>
                
                {/* Experience Card */}
                <div className="relative pl-20">
                  {/* Timeline Dot */}
                  <div className="absolute left-6 top-0 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-white dark:border-slate-900 shadow-lg"></div>
                  
                                     {/* Content Card */}
                   <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20 dark:border-slate-700/50 hover:shadow-xl transition-all duration-300">
                     <div className="space-y-4 sm:space-y-6">
                       {/* Header */}
                       <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
                         <div className="space-y-2">
                           <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-slate-100">
                             {experienceResponse.data[0].position}
                           </h3>
                           <h4 className="text-lg sm:text-xl font-semibold text-blue-600 dark:text-blue-400">
                             {experienceResponse.data[0].company}
                           </h4>
                         </div>
                         <span className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/40 dark:to-purple-900/40 px-3 sm:px-4 py-2 rounded-full font-medium">
                           {experienceResponse.data[0].duration}
                         </span>
                       </div>
                       
                       {/* Description */}
                       <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                         Building scalable APIs and backend systems using modern technologies.
                       </p>
                       
                       {/* Highlights */}
                       <div className="space-y-2 sm:space-y-3">
                         <h5 className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 uppercase tracking-wider">
                           Key Achievements
                         </h5>
                         <ul className="space-y-2 sm:space-y-3">
                           {experienceResponse.data[0].highlights.map((highlight, index) => (
                             <motion.li
                               key={index}
                               initial={{ opacity: 0, x: -20 }}
                               whileInView={{ opacity: 1, x: 0 }}
                               transition={{ duration: 0.5, delay: index * 0.1 }}
                               viewport={{ once: true }}
                               className="flex items-start space-x-3"
                             >
                               <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-3 flex-shrink-0" />
                               <span className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                                 {highlight}
                               </span>
                             </motion.li>
                           ))}
                         </ul>
                       </div>
                       
                       {/* Company Badge */}
                       <div className="pt-3 sm:pt-4 border-t border-slate-200/50 dark:border-slate-700/50">
                         <div className="inline-flex items-center space-x-2 sm:space-x-3 px-3 sm:px-4 py-2 sm:py-3 bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 rounded-lg">
                           <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg overflow-hidden bg-white p-1">
                             <img
                               src="/depi-logo.png"
                               alt="DEPI Logo"
                               className="w-full h-full object-contain"
                               onError={(e) => {
                                 const target = e.target as HTMLImageElement;
                                 target.style.display = 'none';
                                 target.nextElementSibling?.classList.remove('hidden');
                               }}
                             />
                             <div className="hidden w-full h-full flex items-center justify-center text-sm sm:text-lg">
                               🏢
                             </div>
                           </div>
                           <span className="text-sm sm:text-base text-slate-700 dark:text-slate-200 font-medium">
                             {experienceResponse.data[0].company}
                           </span>
                         </div>
                       </div>
                     </div>
                   </div>
                </div>

                {/* Second Experience Card */}
                <div className="relative pl-20 mt-16">
                  {/* Timeline Dot */}
                  <div className="absolute left-6 top-0 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-white dark:border-slate-900 shadow-lg"></div>
                  
                                     {/* Content Card */}
                   <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20 dark:border-slate-700/50 hover:shadow-xl transition-all duration-300">
                     <div className="space-y-4 sm:space-y-6">
                       {/* Header */}
                       <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
                         <div className="space-y-2">
                           <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-slate-100">
                             {experienceResponse.data[1].position}
                           </h3>
                           <h4 className="text-lg sm:text-xl font-semibold text-blue-600 dark:text-blue-400">
                             {experienceResponse.data[1].company}
                           </h4>
                         </div>
                         <span className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/40 dark:to-purple-900/40 px-3 sm:px-4 py-2 rounded-full font-medium">
                           {experienceResponse.data[1].duration}
                         </span>
                       </div>
                       
                       {/* Description */}
                       <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                         Building scalable APIs and backend systems using modern technologies.
                       </p>
                       
                       {/* Highlights */}
                       <div className="space-y-2 sm:space-y-3">
                         <h5 className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 uppercase tracking-wider">
                           Key Achievements
                         </h5>
                         <ul className="space-y-2 sm:space-y-3">
                           {experienceResponse.data[1].highlights.map((highlight, index) => (
                             <motion.li
                               key={index}
                               initial={{ opacity: 0, x: -20 }}
                               whileInView={{ opacity: 1, x: 0 }}
                               transition={{ duration: 0.5, delay: index * 0.1 }}
                               viewport={{ once: true }}
                               className="flex items-start space-x-3"
                             >
                               <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-3 flex-shrink-0" />
                               <span className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                                 {highlight}
                               </span>
                             </motion.li>
                           ))}
                         </ul>
                       </div>
                       
                       {/* Company Badge */}
                       <div className="pt-3 sm:pt-4 border-t border-slate-200/50 dark:border-slate-700/50">
                         <div className="inline-flex items-center space-x-2 sm:space-x-3 px-3 sm:px-4 py-2 sm:py-3 bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 rounded-lg">
                           <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg overflow-hidden bg-white p-1">
                             <img
                               src="/innovitics-logo.png"
                               alt="Innovitics Logo"
                               className="w-full h-full object-contain"
                               onError={(e) => {
                                 const target = e.target as HTMLImageElement;
                                 target.style.display = 'none';
                                 target.nextElementSibling?.classList.remove('hidden');
                               }}
                             />
                             <div className="hidden w-full h-full flex items-center justify-center text-sm sm:text-lg">
                               🏢
                             </div>
                           </div>
                           <span className="text-sm sm:text-base text-slate-700 dark:text-slate-200 font-medium">
                             {experienceResponse.data[1].company}
                           </span>
                         </div>
                       </div>
                     </div>
                   </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
                         <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8 }}
               viewport={{ once: true }}
               className="text-center mb-12 sm:mb-16"
             >
               <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                 Get In Touch
               </h2>
             </motion.div>

            <EndpointCard
              method="POST"
              endpoint="/contact"
              description="Send a contact message"
            >
              <ContactForm />
            </EndpointCard>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}