'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useApp } from '../app/providers';

const ContactForm = () => {
  const { theme } = useApp();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [response, setResponse] = useState<{
    type: 'success' | 'error';
    message: string;
    data?: any;
  } | null>(null);

  useEffect(() => {
    if (response?.type === 'success') {
      const timer = setTimeout(() => {
        setResponse(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [response]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    if (formData.name && formData.email && formData.message) {
      setResponse({
        type: 'success',
        message: 'Message sent successfully! I will get back to you soon.',
        data: {
          status: '200 OK',
          message: 'Message sent successfully',
          data: {
            name: formData.name,
            email: formData.email,
            message: formData.message,
            timestamp: new Date().toISOString()
          }
        }
      });
      setFormData({ name: '', email: '', message: '' });
    } else {
      setResponse({
        type: 'error',
        message: 'Please fill in all fields.'
      });
    }
    
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="space-y-6">
      {response?.type === 'success' ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-6 rounded-xl border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20"
        >
          <div className="flex items-start space-x-3 mb-4">
            <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400 mt-0.5" />
            <div>
              <h4 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-2">
                Success!
              </h4>
              <p className="text-green-700 dark:text-green-300">
                {response.message}
              </p>
            </div>
          </div>
          
          <div className="bg-white/80 dark:bg-slate-900/60 border border-green-200 dark:border-green-800 rounded-lg p-4">
            <h5 className="text-sm font-medium text-green-800 dark:text-green-300 mb-3">API Response:</h5>
            <pre className="text-xs text-slate-700 dark:text-slate-300 font-mono overflow-x-auto bg-slate-50 dark:bg-slate-800/50 p-3 rounded border border-slate-200 dark:border-slate-700">
              {JSON.stringify(response.data, null, 2)}
            </pre>
          </div>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-slate-700 dark:text-slate-200 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 glass-card rounded-xl border-0 focus:ring-2 focus:ring-blue-500/50 transition-all"
                placeholder="Your full name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-slate-700 dark:text-slate-200 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 glass-card rounded-xl border-0 focus:ring-2 focus:ring-blue-500/50 transition-all"
                placeholder="your.email@example.com"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-slate-700 dark:text-slate-200 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 glass-card rounded-xl border-0 focus:ring-2 focus:ring-blue-500/50 transition-all resize-none"
              placeholder="Tell me about your project or how I can help you..."
            />
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full gradient-bg text-white py-4 px-6 rounded-xl font-semibold hover:shadow-lg transition-all hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                <span>Sending...</span>
              </>
            ) : (
              <>
                <Send className="h-5 w-5" />
                <span>Send Message</span>
              </>
            )}
          </button>
        </form>
      )}

      {/* Error Display */}
      {response?.type === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 rounded-xl border border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20"
        >
          <div className="flex items-center space-x-3">
            <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
            <span className="text-red-700 dark:text-red-300 font-medium">
              {response.message}
            </span>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ContactForm; 