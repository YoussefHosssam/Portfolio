"use client";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import JSONBlock from '@/components/JSONBlock';
import EndpointCard from '@/components/EndpointCard';
import { about } from '@/utils/data';
import { motion } from "framer-motion";
import { GraduationCap, Award, Shield, Code, Clock } from 'lucide-react';

export default function About() {
  // Create the JSON response with status and message
  const aboutResponse = {
    status: "200 OK",
    message: "About information retrieved successfully",
    data: about,
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
              <GraduationCap className="h-10 w-10 text-json-key" />
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-json-bracket mb-4">
              About Me
            </h1>
            
            <p className="text-xl text-json-string max-w-3xl mx-auto leading-relaxed">
              Backend Developer with a passion for building secure, scalable systems 
              and a strong foundation in cybersecurity.
            </p>
          </motion.div>
        </section>

        {/* About Data */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <EndpointCard
            method="GET"
            endpoint="/youssef/about"
            description="Education, certifications, and professional background"
          >
            <JSONBlock data={aboutResponse} />
          </EndpointCard>
        </section>

        {/* Detailed Sections */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-dev-card border border-dev-border rounded-lg p-8"
            >
              <div className="flex items-center space-x-3 mb-6">
                <GraduationCap className="h-8 w-8 text-json-key" />
                <h2 className="text-2xl font-bold text-json-bracket">Education</h2>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-json-key mb-2">
                    Faculty of Computers & AI
                  </h3>
                  <p className="text-json-string">Cairo University</p>
                  <p className="text-json-bracket text-sm mt-1">
                    Computer Science & Artificial Intelligence
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-dev-card border border-dev-border rounded-lg p-8"
            >
              <div className="flex items-center space-x-3 mb-6">
                <Clock className="h-8 w-8 text-json-number" />
                <h2 className="text-2xl font-bold text-json-bracket">Experience</h2>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-json-key mb-2">
                    3+ Years
                  </h3>
                  <p className="text-json-string">Backend Development</p>
                  <p className="text-json-bracket text-sm mt-1">
                    Building APIs, microservices, and database systems
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-json-key mb-2">
                    Specialization
                  </h3>
                  <p className="text-json-string">Backend APIs & Cybersecurity</p>
                  <p className="text-json-bracket text-sm mt-1">
                    Focus on secure, scalable backend solutions
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Certifications Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-json-bracket mb-4">Professional Certifications</h2>
            <p className="text-json-string text-lg">
              Industry-recognized credentials in networking, security, and development
            </p>
          </motion.div>

          
        </section>

        {/* Skills Preview */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-json-bracket mb-4">Technical Expertise</h2>
            <p className="text-json-string text-lg">
              Core technologies and frameworks I work with
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-json-string/10 rounded-full mb-4">
                <Code className="h-8 w-8 text-json-string" />
              </div>
              <h3 className="text-xl font-semibold text-json-bracket mb-3">Backend Development</h3>
              <p className="text-json-string text-sm">
                .NET Core, Entity Framework, REST APIs, Microservices
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-json-number/10 rounded-full mb-4">
                <Shield className="h-8 w-8 text-json-number" />
              </div>
              <h3 className="text-xl font-semibold text-json-bracket mb-3">Cybersecurity</h3>
              <p className="text-json-string text-sm">
                Network Security, Penetration Testing, Security Auditing
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-json-key/10 rounded-full mb-4">
                <Code className="h-8 w-8 text-json-key" />
              </div>
              <h3 className="text-xl font-semibold text-json-bracket mb-3">Modern Web</h3>
              <p className="text-json-string text-sm">
                React, TypeScript, Cloud Services, DevOps
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}