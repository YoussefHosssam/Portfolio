"use client";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EndpointCard from '@/components/EndpointCard';
import ProjectCard from '@/components/ProjectCard';
import JSONBlock from '@/components/JSONBlock';
import { projects } from '@/utils/data';
import { motion } from "framer-motion";import { FolderOpen, Code, Database, Shield } from 'lucide-react';

export default function Projects() {
  // Create the JSON response with status and message
  const projectsResponse = {
    status: "200 OK",
    message: "Projects retrieved successfully",
    data: projects,
    count: projects.length,
    timestamp: new Date().toISOString()
  };

  return (
    <div className="min-h-screen bg-dev-bg">
      <Header />
      
      <main className="pt-20 pb-8">
        {/* Page Header */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 260, damping: 20 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-json-key/10 rounded-full mb-6"
            >
              <FolderOpen className="h-10 w-10 text-json-key" />
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-json-bracket mb-4">
              Projects
            </h1>
            
            <p className="text-xl text-json-string max-w-3xl mx-auto leading-relaxed">
              A collection of backend systems, APIs, and web applications 
              showcasing my expertise in .NET, databases, and cybersecurity.
            </p>
          </motion.div>
        </section>

        {/* Projects Endpoint */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <EndpointCard
            method="GET"
            endpoint="/youssef/projects"
            description="Collection of completed projects and applications"
          >
            <JSONBlock data={projectsResponse} />
          </EndpointCard>
        </section>

        {/* Projects Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-json-bracket mb-4">Featured Projects</h2>
            <p className="text-json-string text-lg">
              Each project demonstrates different aspects of backend development and security
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </section>

        {/* Project Categories */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-json-bracket mb-4">Project Categories</h2>
            <p className="text-json-string text-sm leading-relaxed">
              Areas of expertise demonstrated through my work
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-dev-card border border-dev-border rounded-lg p-8 text-center hover:border-json-key/50 transition-all duration-300 group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-json-string/10 rounded-full mb-4 group-hover:bg-json-string/20 transition-colors">
                <Code className="h-8 w-8 text-json-string" />
              </div>
              <h3 className="text-xl font-semibold text-json-bracket mb-3">Backend APIs</h3>
              <p className="text-json-string text-sm leading-relaxed">
                RESTful APIs, microservices architecture, and scalable backend systems built with .NET Core
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-dev-card border border-dev-border rounded-lg p-8 text-center hover:border-json-key/50 transition-all duration-300 group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-json-number/10 rounded-full mb-4 group-hover:bg-json-number/20 transition-colors">
                <Database className="h-8 w-8 text-json-number" />
              </div>
              <h3 className="text-xl font-semibold text-json-bracket mb-3">Database Systems</h3>
              <p className="text-json-string text-sm leading-relaxed">
                Complex database designs, Entity Framework implementations, and data optimization strategies
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-dev-card border border-dev-border rounded-lg p-8 text-center hover:border-json-key/50 transition-all duration-300 group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-json-key/10 rounded-full mb-4 group-hover:bg-json-key/20 transition-colors">
                <Shield className="h-8 w-8 text-json-key" />
              </div>
              <h3 className="text-xl font-semibold text-json-bracket mb-3">Security & Auth</h3>
              <p className="text-json-string text-sm leading-relaxed">
                JWT authentication, OAuth implementation, and security best practices in web applications
              </p>
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-json-bracket mb-6">Interested in Working Together?</h2>
            <p className="text-json-string text-lg mb-8 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, collaborations, or interesting projects. 
              Let's build something amazing together!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-json-key text-dev-bg font-semibold rounded-lg hover:bg-json-key/80 transition-colors"
              >
                <Code className="h-5 w-5" />
                <span>Get In Touch</span>
              </a>
              <a
                href="https://github.com/YoussefHosssam"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-6 py-3 border border-json-key text-json-key font-semibold rounded-lg hover:bg-json-key hover:text-dev-bg transition-colors"
              >
                <FolderOpen className="h-5 w-5" />
                <span>View GitHub</span>
              </a>
            </div>
          </motion.div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
} 