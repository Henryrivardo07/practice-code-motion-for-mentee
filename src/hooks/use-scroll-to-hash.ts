'use client';

import { useEffect } from 'react';

export function useScrollToHash() {
  useEffect(() => {
    // Only needed for cross-page navigation with hash
    if (window.location.hash) {
      const elementId = window.location.hash.substring(1);
      // Small delay to ensure the page has rendered
      setTimeout(() => {
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ block: 'start' });
        }
      }, 100);
    }
  }, []);
}
