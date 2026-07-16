'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState, useRef } from 'react';

export default function PageTransition({ children }) {
  const pathname = usePathname();
  
  // Transition States
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [activePath, setActivePath] = useState(pathname);
  const [displayChildren, setDisplayChildren] = useState(children);
  
  // Typewriter States
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = 'OFFICE SPACES ABUJA';

  // Locks the transition sequence to prevent redundant triggers
  const transitionInProgress = useRef(false);

  // Helper: Reset and trigger typewriter animation
  const triggerTypewriter = () => {
    setCurrentText('');
    setCurrentIndex(0);
    setIsTransitioning(true);
    transitionInProgress.current = true;
    
    // Lock background scroll behavior during transition
    document.body.style.overflow = 'hidden';
    window.scrollTo(0, 0);
  };

  // 1. Initial Load - Runs typing transition on first mount
  useEffect(() => {
    triggerTypewriter();
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  // 2. Page Navigation - Runs typing transition on route change
  useEffect(() => {
    if (pathname !== activePath && !transitionInProgress.current) {
      triggerTypewriter();
      
      // Swap page content behind the scenes at the halfway mark (1.0s)
      const swapTimer = setTimeout(() => {
        setActivePath(pathname);
        setDisplayChildren(children);
      }, 1000);

      return () => clearTimeout(swapTimer);
    } else if (pathname === activePath) {
      // Keep static child elements reactive to context updates
      setDisplayChildren(children);
    }
  }, [pathname, children, activePath]);

  // 3. Sequential Typewriter Loop (Guaranteed to finish at exactly 2.0s)
  useEffect(() => {
    if (!isTransitioning) return;

    if (currentIndex < fullText.length) {
      // Step through character-by-character (typing finishes in ~850ms)
      const timeout = setTimeout(() => {
        setCurrentText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 50);

      return () => clearTimeout(timeout);
    } else {
      // Hold complete text, then fade transition screen out to reach exactly 2.0s (2000ms)
      const holdTimeout = setTimeout(() => {
        setIsTransitioning(false);
        transitionInProgress.current = false;
        
        // Restore page interactions
        document.body.style.overflow = 'unset';
      }, 850);

      return () => clearTimeout(holdTimeout);
    }
  }, [currentIndex, isTransitioning]);

  return (
    <div className="relative min-h-screen">
      {/* Page Content Viewport */}
      <div 
        className="transition-all duration-700 ease-out"
        style={{
          opacity: isTransitioning ? 0.8 : 1,
          transform: isTransitioning ? 'scale(0.99)' : 'scale(1)',
        }}
      >
        {displayChildren}
      </div>

      {/* Screen Loader Cover Overlay */}
      {isTransitioning && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0a0a0a] transition-opacity duration-500 ease-in-out">
          {/* Animated Ambient Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-violet-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
          </div>

          {/* Main Content */}
          <div className="relative z-10 text-center px-4">
            {/* Animated Typewriter Title */}
            <div className="mb-8">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-wider text-white">
                {currentText}
                <span className="ml-1 inline-block w-1.5 h-12 md:h-16 bg-purple-400 animate-pulse"></span>
              </h1>
            </div>

            {/* Loading Bar */}
            <div className="w-64 md:w-96 h-[2px] bg-white/10 rounded-full overflow-hidden mx-auto">
              <div 
                className="h-full bg-gradient-to-r from-purple-400 to-violet-400 transition-all duration-300 ease-out"
                style={{ width: `${(currentIndex / fullText.length) * 100}%` }}
              ></div>
            </div>

            {/* Tagline */}
            <p className="mt-6 text-white/50 text-xs font-light tracking-[0.3em] animate-pulse uppercase">
              MODERN AND AFFORDABLE CO-WORKING SPACE
            </p>
          </div>

          {/* Core Brand Accent Bounce Dots */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="flex space-x-2">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"
                  style={{ animationDelay: `${i * 0.2}s` }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}