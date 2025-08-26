"use client";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Github, Linkedin } from 'lucide-react';
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'yh55694@gmail.com',
      link: 'mailto:yh55694@gmail.com',
      color: 'text-json-string'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '01060758396',
      link: 'tel:01060758396',
      color: 'text-json-number'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Cairo, Egypt',
      link: null,
      color: 'text-json-key'
    },
    {
      icon: Clock,
      title: 'Response Time',
      value: 'Within 24 hours',
      link: null,
      color: 'text-json-boolean'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      title: 'GitHub',
      value: 'YoussefHosssam',
      link: 'https://github.com/YoussefHosssam',
      color: 'text-json-bracket'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: 'youssef-hossam-nz',
      link: 'https://www.linkedin.com/in/youssef-hossam-nz/',
      color: 'text-json-key'
    }
  ];

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
              <Mail className="h-10 w-10 text-json-key" />
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-json-bracket mb-4">
              Get In Touch
            </h1>
            
            <p className="text-xl text-json-string max-w-3xl mx-auto leading-relaxed">
              Ready to discuss your next project? I'm always interested in hearing about 
              new opportunities and exciting challenges.
            </p>
          </motion.div>
        </section>

        {/* Contact Form Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-json-bracket mb-6">Send a Message</h2>
              <p className="text-json-string text-lg mb-8">
                Fill out the form below and I'll get back to you as soon as possible. 
                All fields are required.
              </p>

              {/* ✅ Netlify Form */}
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                className="space-y-4 bg-dev-card border border-dev-border p-6 rounded-lg shadow"
                onSubmit={() => setStatus("Thanks! I’ll get back to you soon.")}
              >
                <input type="hidden" name="form-name" value="contact" />

                <div>
                  <label className="block text-sm font-medium mb-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full border border-dev-border rounded-lg p-2 bg-dev-bg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full border border-dev-border rounded-lg p-2 bg-dev-bg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Message</label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    className="w-full border border-dev-border rounded-lg p-2 bg-dev-bg"
                  />
                </div>

                <button
                  type="submit"
                  className="px-6 py-2 bg-json-key text-dev-bg font-semibold rounded-lg hover:bg-json-key/80 transition"
                >
                  Send
                </button>
              </form>

              {status && (
                <p className="text-green-600 mt-4">{status}</p>
              )}
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-json-bracket mb-6">Contact Information</h2>
                <p className="text-json-string text-lg mb-8">
                  Here are the best ways to reach me. I'm typically available during 
                  business hours and respond to all inquiries within 24 hours.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <motion.div
                    key={method.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4 p-4 bg-dev-card border border-dev-border rounded-lg hover:border-json-key/50 transition-all duration-300 group"
                  >
                    <div className={`inline-flex items-center justify-center w-12 h-12 bg-json-key/10 rounded-lg group-hover:bg-json-key/20 transition-colors`}>
                      <method.icon className={`h-6 w-6 ${method.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-json-key font-semibold">{method.title}</h3>
                      {method.link ? (
                        <a
                          href={method.link}
                          className="text-json-string hover:text-json-key transition-colors"
                        >
                          {method.value}
                        </a>
                      ) : (
                        <p className="text-json-string">{method.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-xl font-bold text-json-bracket mb-4">Social & Professional</h3>
                <div className="space-y-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.title}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-4 p-4 bg-dev-card border border-dev-border rounded-lg hover:border-json-key/50 transition-all duration-300 group"
                    >
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-json-key/10 rounded-lg group-hover:bg-json-key/20 transition-colors">
                        <social.icon className={`h-6 w-6 ${social.color}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-json-key font-semibold">{social.title}</h3>
                        <p className="text-json-string">{social.value}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Additional Info */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-json-bracket mb-6">What Happens Next?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-json-string/10 rounded-full mb-4">
                  <span className="text-2xl font-bold text-json-string">1</span>
                </div>
                <h3 className="text-xl font-semibold text-json-bracket mb-2">Initial Response</h3>
                <p className="text-json-string text-sm">
                  I'll respond to your message within 24 hours with initial thoughts and questions.
                </p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-json-number/10 rounded-full mb-4">
                  <span className="text-2xl font-bold text-json-number">2</span>
                </div>
                <h3 className="text-xl font-semibold text-json-bracket mb-2">Discussion</h3>
                <p className="text-json-string text-sm">
                  We'll schedule a call or meeting to discuss your project requirements in detail.
                </p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-json-key/10 rounded-full mb-4">
                  <span className="text-2xl font-bold text-json-key">3</span>
                </div>
                <h3 className="text-xl font-semibold text-json-bracket mb-2">Proposal</h3>
                <p className="text-json-string text-sm">
                  I'll provide a detailed proposal with timeline, deliverables, and pricing.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Call to Action */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center bg-dev-card border border-dev-border rounded-lg p-12"
          >
            <h2 className="text-3xl font-bold text-json-bracket mb-6">Ready to Start?</h2>
            <p className="text-json-string text-lg mb-8 max-w-2xl mx-auto">
              Whether you have a specific project in mind or just want to explore possibilities, 
              I'm here to help bring your ideas to life.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:yh55694@gmail.com"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-json-key text-dev-bg font-semibold rounded-lg hover:bg-json-key/80 transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span>Send Email</span>
              </a>
              <a
                href="tel:01060758396"
                className="inline-flex items-center space-x-2 px-6 py-3 border border-json-key text-json-key font-semibold rounded-lg hover:bg-json-key hover:text-dev-bg transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span>Call Now</span>
              </a>
            </div>
          </motion.div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}