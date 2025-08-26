"use client";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EndpointCard from '@/components/EndpointCard';
import JSONBlock from '@/components/JSONBlock';
import { skills } from '@/utils/data';
import { motion } from "framer-motion";
import { Wrench, Code, Database, Shield, GitBranch, Cloud } from 'lucide-react';

export default function Skills() {
  // Create the JSON response with status and message
  const skillsResponse = {
    status: "200 OK",
    message: "Skills information retrieved successfully",
    data: skills,
    timestamp: new Date().toISOString()
  };

  const skillCategories = skills.map((category) => {
    let icon = Code;
    let color = "text-json-string";
    let bgColor = "bg-json-string/10";
  
    switch (category.name) {
      case "Backend Technologies":
        icon = Code;
        color = "text-json-string";
        bgColor = "bg-json-string/10";
        break;
      case "Databases":
        icon = Database;
        color = "text-json-number";
        bgColor = "bg-json-number/10";
        break;
      case "Security & Certifications":
        icon = Shield;
        color = "text-json-boolean";
        bgColor = "bg-json-boolean/10";
        break;
      case "Development Tools":
        icon = GitBranch;
        color = "text-json-key";
        bgColor = "bg-json-key/10";
        break;
      case "Programming Languages":
        icon = Code;
        color = "text-json-string";
        bgColor = "bg-json-string/10";
        break;
      case "Frameworks":
        icon = Wrench;
        color = "text-json-number";
        bgColor = "bg-json-number/10";
        break;
    }
  
    return {
      title: category.name,
      icon,
      color,
      bgColor,
      // map items to just names (so UI stays the same)
      skills: category.items.map((item) => item.name),
    };
  });
  

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
              <Wrench className="h-10 w-10 text-json-key" />
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-json-bracket mb-4">
              Skills & Expertise
            </h1>
            
            <p className="text-xl text-json-string max-w-3xl mx-auto leading-relaxed">
              A comprehensive overview of my technical skills, from backend development 
              to cybersecurity and modern web technologies.
            </p>
          </motion.div>
        </section>

        {/* Skills Endpoint */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <EndpointCard
            method="GET"
            endpoint="/youssef/skills"
            description="Complete list of technical skills and expertise"
          >
            <JSONBlock data={skillsResponse} />
          </EndpointCard>
        </section>

        {/* Skills Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-json-bracket mb-4">Technical Skills</h2>
            <p className="text-json-string text-lg">
              Organized by category for easy navigation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-dev-card border border-dev-border rounded-lg p-6 hover:border-json-key/50 transition-all duration-300 group"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`inline-flex items-center justify-center w-12 h-12 ${category.bgColor} rounded-lg group-hover:bg-opacity-20 transition-all duration-300`}>
                    <category.icon className={`h-6 w-6 ${category.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-json-bracket">{category.title}</h3>
                </div>
                
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: skillIndex * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-2"
                    >
                      <div className={`w-2 h-2 ${category.color} rounded-full`}></div>
                      <span className="text-json-string text-sm">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Skill Levels */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-json-bracket mb-4">Skill Proficiency</h2>
            <p className="text-json-string text-lg">
              My experience level with different technologies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Core Skills */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-json-key mb-6">Core Technologies</h3>
              
              {[
                { skill: '.NET Core', level: 95, color: 'bg-json-string' },
                { skill: 'Entity Framework', level: 90, color: 'bg-json-string' },
                { skill: 'REST APIs', level: 95, color: 'bg-json-string' },
                { skill: 'MySQL/SQL Server', level: 88, color: 'bg-json-number' },
                { skill: 'C#', level: 92, color: 'bg-json-string' }
              ].map((item, index) => (
                <motion.div
                  key={item.skill}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-json-bracket font-medium">{item.skill}</span>
                    <span className="text-json-key text-sm">{item.level}%</span>
                  </div>
                  <div className="w-full bg-dev-border rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={`h-2 ${item.color} rounded-full transition-all duration-300`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Emerging Skills */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-json-key mb-6">Emerging Technologies</h3>
              
              {[
                { skill: 'Microservices', level: 85, color: 'bg-json-key' },
                { skill: 'Docker', level: 80, color: 'bg-json-key' },
                { skill: 'Kubernetes', level: 75, color: 'bg-json-key' },
                { skill: 'GraphQL', level: 78, color: 'bg-json-key' },
                { skill: 'React/TypeScript', level: 82, color: 'bg-json-key' }
              ].map((item, index) => (
                <motion.div
                  key={item.skill}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-json-bracket font-medium">{item.skill}</span>
                    <span className="text-json-key text-sm">{item.level}%</span>
                  </div>
                  <div className="w-full bg-dev-border rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={`h-2 ${item.color} rounded-full transition-all duration-300`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications Highlight */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-dev-card border border-dev-border rounded-lg p-8 text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-json-key/10 rounded-full mb-6">
              <Shield className="h-8 w-8 text-json-key" />
            </div>
            <h2 className="text-3xl font-bold text-json-bracket mb-4">Cybersecurity Focus</h2>
            <p className="text-json-string text-lg mb-6 max-w-3xl mx-auto">
              My background in cybersecurity enhances my ability to build secure, 
              robust backend systems. I prioritize security best practices in all my development work.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['CCNA', 'eJPTv1', 'Security+', 'Network+', 'HCIA-Security V4'].map((cert, index) => (
                <span
                  key={cert}
                  className="px-4 py-2 bg-json-key/10 text-json-key rounded-full text-sm font-medium"
                >
                  {cert}
                </span>
              ))}
            </div>
          </motion.div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
} 