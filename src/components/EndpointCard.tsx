'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronRight } from 'lucide-react';

interface EndpointCardProps {
  method: string;
  endpoint: string;
  description: string;
  children: React.ReactNode;
}

const EndpointCard = ({ method, endpoint, description, children }: EndpointCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getMethodColor = (method: string) => {
    switch (method) {
      case 'GET':
        return 'bg-green-100 text-green-800 dark:bg-emerald-900/40 dark:text-emerald-300 border-green-200 dark:border-emerald-800';
      case 'POST':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-300 border-orange-200 dark:border-orange-800';
      case 'PUT':
        return 'bg-yellow-100 text-yellow-800 dark:bg-amber-900/40 dark:text-amber-300 border-yellow-200 dark:border-amber-800';
      case 'DELETE':
        return 'bg-red-100 text-red-800 dark:bg-rose-900/40 dark:text-rose-300 border-red-200 dark:border-rose-800';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-slate-800 dark:text-slate-300 border-gray-200 dark:border-slate-700';
    }
  };

  return (
    <div className="glass-card rounded-2xl overflow-hidden">
      {/* Header */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-6 text-left hover:bg-white/20 dark:hover:bg-slate-700/20 transition-colors"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <span className={`px-3 py-1 rounded-lg text-sm font-bold border ${getMethodColor(method)}`}>
              {method}
            </span>
            <code className="text-lg font-mono text-slate-700 dark:text-slate-300">
              {endpoint}
            </code>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-sm text-slate-600 dark:text-slate-400">
              {description}
            </span>
            {isExpanded ? (
              <ChevronDown className="h-5 w-5 text-slate-500 dark:text-slate-400 transition-transform" />
            ) : (
              <ChevronRight className="h-5 w-5 text-slate-500 dark:text-slate-400 transition-transform" />
            )}
          </div>
        </div>
      </button>

      {/* Content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden border-t border-white/20 dark:border-slate-700/60"
          >
            <div className="p-6">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EndpointCard; 