'use client';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#18181B] text-[#71717A] text-xs py-20 px-6 lg:px-16 relative z-10 border-t border-[#2A2A30]">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Core Structural Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Column 1: Brand Matrix Identity Brief (4 Columns wide on Desktop) */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="font-serif text-xl font-light tracking-wider text-white group inline-block">
              OFFICE <span className="text-[#6D28D9] font-normal group-hover:text-[#7C3AED] transition-colors duration-300">SPACES ABUJA</span>
            </Link>
            <p className="text-[#71717A] font-light leading-relaxed max-w-sm pt-1 text-[13px]">
              Abuja's premier enterprise workspace ecosystem. Architecting turnkey private suites, acoustic enclaves, and corporate operational infrastructure for international teams and executive leaders.
            </p>
            {/* Refined brand accent line */}
            <div className="w-12 h-[1px] bg-[#6D28D9]/40" />
          </div>

          {/* Column 2: Hub Locations Directory (2 Columns wide) */}
          <div className="lg:col-span-3 space-y-5">
            <p className="text-[10px] uppercase tracking-[0.3em] font-semibold text-[#52525B]">Physical Hubs</p>
            <ul className="space-y-4 font-light">
              <li>
                <p className="text-[#D4D4D8] font-medium text-[13px]">Kubwa District</p>
                <p className="text-[#71717A] text-[11px] mt-0.5 tracking-wide">Euphrates Street, Corporate Core</p>
              </li>
              
            </ul>
          </div>

          {/* Column 3: Navigational Destinations (2 Columns wide) */}
          <div className="lg:col-span-2 space-y-5">
            <p className="text-[10px] uppercase tracking-[0.3em] font-semibold text-[#52525B]">Navigation</p>
            <ul className="space-y-3 font-light">
              <li>
                <Link href="/spaces" className="text-[#71717A] hover:text-[#7C3AED] transition-colors duration-200 text-[13px]">Workspace Tiers</Link>
              </li>
              <li>
                <Link href="/infrastructure" className="text-[#71717A] hover:text-[#7C3AED] transition-colors duration-200 text-[13px]">Infrastructural Uptime</Link>
              </li>
              <li>
                <Link href="/about" className="text-[#71717A] hover:text-[#7C3AED] transition-colors duration-200 text-[13px]">Our Standard</Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#71717A] hover:text-[#7C3AED] transition-colors duration-200 text-[13px]">Private Gate-Pass</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Operations & Institutional Hours (3 Columns wide) */}
          <div className="lg:col-span-3 space-y-5">
            <p className="text-[10px] uppercase tracking-[0.3em] font-semibold text-[#52525B]">Institutional Availability</p>
            <ul className="space-y-3 font-light text-[#71717A]">
              <li className="flex justify-between border-b border-[#2A2A30] pb-2.5">
                <span className="text-[13px]">Member Access</span>
                <span className="text-[#D4D4D8] font-medium text-[13px]">24 / 7 / 365</span>
              </li>
              <li className="flex justify-between border-b border-[#2A2A30] pb-2.5">
                <span className="text-[13px]">Concierge Desk</span>
                <span className="text-[#D4D4D8] text-[13px]">08:00 – 18:00</span>
              </li>
              <li className="flex justify-between">
                <span className="text-[13px]">Network Operations</span>
                <span className="text-[#D4D4D8] text-[13px]">Remote Autonomous</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Closing Copyright & Legal Frame Ribbon */}
        <div className="border-t border-[#2A2A30] pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-[#52525B] font-light">
          <p>© {new Date().getFullYear()} officespacesabuja Limited. All engineering rights reserved across jurisdictions.</p>
          <div className="flex space-x-8">
            <Link href="/terms" className="hover:text-[#D4D4D8] transition-colors duration-200">Terms of Operations</Link>
            <Link href="/privacy" className="hover:text-[#D4D4D8] transition-colors duration-200">Privacy Protections</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}