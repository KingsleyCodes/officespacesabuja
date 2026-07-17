"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function PageTransition({ children }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show loader on every page change
    setLoading(true);

    // Prevent scrolling while loading
    document.body.style.overflow = "hidden";

    // Always start from top
    window.scrollTo(0, 0);

    // Hide loader after 2 seconds
    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "auto";
    }, 2000);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      {/* Page */}
      {children}

      {/* Loader */}
      <div
        className={`fixed inset-0 z-[99999] flex items-center justify-center bg-[#050505] transition-opacity duration-500 ${
          loading
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Purple Glow */}
        <div className="absolute w-[500px] h-[500px] rounded-full bg-purple-600/10 blur-[140px] animate-pulse"></div>

        {/* Logo */}
        <div className="animate-logo">
          <Image
            src="/logo.png"
            alt="Logo"
            width={180}
            height={180}
            priority
          />
        </div>
      </div>
    </>
  );
}