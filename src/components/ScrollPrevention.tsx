'use client';

import { useEffect } from 'react';

const ScrollPrevention = () => {
  useEffect(() => {
    // Additional runtime checks for horizontal scroll prevention
    const preventHorizontalScroll = () => {
      document.documentElement.style.overflowX = 'hidden';
      document.body.style.overflowX = 'hidden';
    };

    preventHorizontalScroll();

    // Re-apply on resize
    window.addEventListener('resize', preventHorizontalScroll);
    
    return () => {
      window.removeEventListener('resize', preventHorizontalScroll);
    };
  }, []);

  return (
    <style jsx global>{`
      html, body {
        overflow-x: hidden !important;
        max-width: 100vw !important;
      }
      
      * {
        box-sizing: border-box !important;
      }
      
      /* Ensure all flex containers don't overflow horizontally */
      .flex, .flex-col, .flex-row {
        min-width: 0 !important;
        max-width: 100% !important;
      }
      
      /* Fix for grid layouts */
      .grid {
        min-width: 0 !important;
        max-width: 100% !important;
      }
      
      /* Prevent text overflow horizontally */
      p, h1, h2, h3, h4, h5, h6, span, div {
        word-wrap: break-word !important;
        overflow-wrap: break-word !important;
        max-width: 100% !important;
      }
      
      /* Fix for long URLs and code blocks */
      pre, code {
        word-break: break-all !important;
        white-space: pre-wrap !important;
        overflow-wrap: break-word !important;
        max-width: 100% !important;
      }
      
      /* Ensure images don't overflow horizontally */
      img {
        max-width: 100% !important;
        height: auto !important;
      }
      
      /* Fix for buttons and links */
      button, a {
        max-width: 100% !important;
        overflow: hidden !important;
        text-overflow: ellipsis !important;
      }
    `}</style>
  );
};

export default ScrollPrevention;
