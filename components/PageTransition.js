'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

export default function PageTransition({ children }) {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [activePath, setActivePath] = useState(pathname);
  const [displayChildren, setDisplayChildren] = useState(children);
  
  // Enforces that only one transition sequence can execute at a time
  const transitionInProgress = useRef(false);

  // 1. Initial Load (First Mount) - Exact 2-second screen cover
  useEffect(() => {
    setIsTransitioning(true);
    transitionInProgress.current = true;

    const timer = setTimeout(() => {
      setIsTransitioning(false);
      transitionInProgress.current = false;
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // 2. Page Navigation - Synchronized 2-second sequence
  useEffect(() => {
    // Only run if the path has actually changed and we aren't already transitioning
    if (pathname !== activePath && !transitionInProgress.current) {
      setIsTransitioning(true);
      transitionInProgress.current = true;

      // Halfway Point (1.0s): Swap the child content while completely hidden
      const swapTimer = setTimeout(() => {
        setActivePath(pathname);
        setDisplayChildren(children);
      }, 1000);

      // Finish Point (2.0s): Remove the cover overlay and unlock
      const finishTimer = setTimeout(() => {
        setIsTransitioning(false);
        transitionInProgress.current = false;
      }, 2000);

      return () => {
        clearTimeout(swapTimer);
        clearTimeout(finishTimer);
      };
    } else if (pathname === activePath) {
      // Handles static context updates safely without triggering a screen block
      setDisplayChildren(children);
    }
  }, [pathname, children, activePath]);

  return (
    <div className="relative min-h-screen">
      {/* Main content viewport with clean fade-reveal */}
      <motion.div
        key={activePath}
        initial={{ opacity: 0.8, scale: 0.99 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {displayChildren}
      </motion.div>

      {/* Transition Overlay Screen */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: 0.3, // Faster fade transitions to strictly respect the 2s timeline
              ease: "easeInOut" 
            }}
            className="fixed inset-0 z-[9999] bg-[#0a0a0a] flex flex-col items-center justify-center pointer-events-auto overflow-hidden"
          >
            {/* Ambient Background Particles */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-sky-400/20 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    scale: [1, 2, 1],
                    opacity: [0.2, 0.8, 0.2],
                    x: [0, (Math.random() - 0.5) * 80, 0],
                    y: [0, (Math.random() - 0.5) * 80, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.1,
                  }}
                />
              ))}
            </div>

            {/* Morphing Logo & Branding Container */}
            <motion.div
              className="relative flex flex-col items-center z-10"
              initial={{ scale: 0.7, rotate: -5 }}
              animate={{ 
                scale: [0.7, 1.05, 1],
                rotate: [-5, 3, 0],
                opacity: [0, 1, 1]
              }}
              exit={{ 
                scale: [1, 0.8, 0.6],
                rotate: [0, -3, -10],
                opacity: [1, 0.5, 0]
              }}
              transition={{ 
                duration: 2,
                ease: [0.25, 1, 0.5, 1],
                times: [0, 0.5, 1]
              }}
            >
              {/* Outer sky-blue rotating ring */}
              <motion.div
                className="absolute inset-[-30px] rounded-full border border-sky-400/25"
                animate={{
                  rotate: 360,
                  scale: [1, 1.15, 1],
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{
                  rotate: { duration: 5, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                  opacity: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                }}
              />

              {/* Inner ambient rotating ring */}
              <motion.div
                className="absolute inset-[-15px] rounded-full border border-white/10"
                animate={{
                  rotate: -360,
                  scale: [0.9, 1.05, 0.9],
                }}
                transition={{
                  rotate: { duration: 4, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                }}
              />

              {/* Central Core Shape */}
              <motion.div
                className="relative w-24 h-24 flex items-center justify-center"
                animate={{
                  borderRadius: ["24%", "50%", "24%"],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  borderRadius: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 4.5, repeat: Infinity, ease: "linear" },
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-sky-500/20 via-purple-500/10 to-transparent rounded-full blur-xl" />
                <div className="absolute inset-0 bg-gradient-to-tr from-sky-400/15 to-transparent rounded-full" />
                <div className="absolute inset-[2px] bg-[#0a0a0a] rounded-full" />
                
                <div className="relative w-16 h-16 z-10 p-3">
                  <Image 
                    src="/logo.png" 
                    alt="officespacesabuja Logo" 
                    fill
                    priority
                    className="object-contain"
                  />
                </div>
              </motion.div>

              {/* Text Elements */}
              <motion.div 
                className="text-center mt-8 space-y-3"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <motion.h2 
                  className="text-sm uppercase tracking-[0.6em] text-white font-light"
                  animate={{
                    letterSpacing: ["0.6em", "0.75em", "0.6em"],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  officespacesabuja
                </motion.h2>
                
                <motion.p 
                  className="text-[11px] uppercase tracking-[0.4em] text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-purple-400 to-sky-400 font-light"
                  animate={{
                    backgroundPosition: ["0%", "100%", "0%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    backgroundSize: "200% 100%",
                  }}
                >
                  Infrastructural Harmony
                </motion.p>
              </motion.div>

              {/* Synchronized 2-Second Progress Indicator */}
              <motion.div 
                className="absolute bottom-12 left-1/2 -translate-x-1/2 w-48 h-[2px] bg-white/5 rounded-full overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <motion.div
                  className="h-full bg-gradient-to-r from-sky-400 via-purple-400 to-sky-400"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ 
                    duration: 2.0, // Matches overall animation lifecycle exactly
                    ease: "linear",
                  }}
                  style={{
                    backgroundSize: "200% 100%",
                  }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}