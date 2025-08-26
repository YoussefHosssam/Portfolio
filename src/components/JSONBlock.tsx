'use client';

import { motion } from "framer-motion";

interface JSONBlockProps {
  data: any;
  className?: string;
}

const JSONBlock = ({ data, className = '' }: JSONBlockProps) => {
  const renderValue = (value: any, depth: number = 0): React.ReactNode => {
    const indent = '  '.repeat(depth);
    
    if (value === null) {
      return <span className="text-violet-600 dark:text-violet-300 font-semibold">null</span>;
    }
    
    if (typeof value === 'boolean') {
      return <span className="text-sky-700 dark:text-sky-300 font-semibold">{value.toString()}</span>;
    }
    
    if (typeof value === 'number') {
      return <span className="text-amber-700 dark:text-amber-300 font-semibold">{value}</span>;
    }
    
    if (typeof value === 'string') {
      // URL detection
      if (value.startsWith('http://') || value.startsWith('https://')) {
        return (
          <a
            href={value}
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-700 dark:text-emerald-300 hover:underline font-medium"
          >
            "{value}"
          </a>
        );
      }
      return <span className="text-emerald-700 dark:text-emerald-300 font-medium">"{value}"</span>;
    }
    
    if (Array.isArray(value)) {
      if (value.length === 0) {
        return <span className="text-slate-500 dark:text-slate-400">[]</span>;
      }
      
      return (
        <div>
          <span className="text-slate-800 dark:text-slate-200">[</span>
          <div className="ml-4">
            {value.map((item, index) => (
              <div key={index} className="flex">
                <span className="text-slate-500 dark:text-slate-500">{indent}</span>
                {renderValue(item, depth + 1)}
                {index < value.length - 1 && <span className="text-slate-500 dark:text-slate-500">,</span>}
              </div>
            ))}
          </div>
          <span className="text-slate-500 dark:text-slate-500">{indent}</span>
          <span className="text-slate-800 dark:text-slate-200">]</span>
        </div>
      );
    }
    
    if (typeof value === 'object') {
      const keys = Object.keys(value);
      if (keys.length === 0) {
        return <span className="text-slate-500 dark:text-slate-400">{}</span>;
      }
      
      return (
        <div>
          <span className="text-slate-800 dark:text-slate-200">{'{'}</span>
          <div className="ml-4">
            {keys.map((key, index) => (
              <div key={key} className="flex">
                <span className="text-slate-500 dark:text-slate-500">{indent}</span>
                <span className="text-blue-700 dark:text-blue-300 font-semibold">"{key}"</span>
                <span className="text-slate-800 dark:text-slate-300 mx-2">:</span>
                {renderValue(value[key], depth + 1)}
                {index < keys.length - 1 && <span className="text-slate-500 dark:text-slate-500">,</span>}
              </div>
            ))}
          </div>
          <span className="text-slate-500 dark:text-slate-500">{indent}</span>
          <span className="text-slate-800 dark:text-slate-200">{'}'}</span>
        </div>
      );
    }
    
    return <span className="text-slate-600 dark:text-slate-400">{String(value)}</span>;
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className={`json-block font-mono text-sm bidi-ltr ${className}`}
      dir="ltr"
    >
      <pre className="whitespace-pre-wrap break-words">
        {renderValue(data)}
      </pre>
    </motion.div>
  );
};

export default JSONBlock; 