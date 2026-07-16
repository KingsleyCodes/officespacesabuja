'use client';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function InfrastructurePage() {
  const systems = [
    {
      index: "01",
      layer: "Power Architecture",
      title: "Dual-Grid Matrix & Dedicated Solar System",
      desc: "Our systems run via dynamic, automated physical failovers connected directly to two separate primary commercial grids. In case of localized infrastructure faults, a commercial-grade battery stack and independent hybrid solar fields engage instantly to guarantee uninterrupted current flow.",
      status: "Uptime: 99.99%",
      metrics: ["Zero-second automated generator cross-switching", "Independent back-up solar microgrids", "Dedicated power transformers assigned to each hub location"]
    },
    {
      index: "02",
      layer: "Data Redundancy",
      title: "Multi-Provider Layer-2 Fiber Pipelines",
      desc: "Communications are managed using simultaneous fiber lines drawn through separate physical paths into the districts by Tier-1 providers. Dynamic routing engines monitor data packets continuously; if jitter spikes or a line degrades, connections automatically switch routes without dropping live calls.",
      status: "Throughput: 1Gbps+",
      metrics: ["Automated multi-ISP failover networks", "Symmetric high-speed upload & download pipes", "Custom corporate VLAN partitioning capabilities"]
    },
    {
      index: "03",
      layer: "Acoustic Shielding",
      title: "Decibel Isolation & Secure Seals",
      desc: "Every executive office layout is enclosed with multi-layered drywall assemblies filled with dense sound-absorbent materials. Double-glazed perimeter partition walls and automatic mechanical drop-seals are integrated right into the doors to limit sound bleeding and prevent eavesdropping.",
      status: "Dampening: -45dB STC",
      metrics: ["Double-glazed glass wall structures", "Drop-down drop seals inside heavy wooden doors", "Acoustically soundproofed overhead HVAC duct pathways"]
    },
    {
      index: "04",
      layer: "Physical Defense",
      title: "Biometric Screening & Continuous Logging",
      desc: "Physical parameters are monitored around the clock by certified access security guards. Inner perimeters are accessed exclusively via facial recognition and encrypted biometric tracking systems, creating verifiable audit trails for compliant multinational branches.",
      status: "Monitoring: 24/7/365",
      metrics: ["Encrypted biometric entry sensors", "Continuous CCTV data storage backup systems", "Multi-tiered physical checking parameters at all perimeter entries"]
    }
  ];

  return (
    <main className="min-h-screen bg-white text-[#18181B] selection:bg-[#6D28D9] selection:text-white flex flex-col justify-between">
      {/* Sticky Navigation Bar */}
      <Navbar />

      {/* Hero Header Introduction - Refined & Lighter */}
      <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-24 px-4 sm:px-6 lg:px-16 overflow-hidden border-b border-[#EAEAEA] bg-white">
        <div className="absolute top-[-25%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[#6D28D9]/5 blur-[140px] pointer-events-none" />
        <div className="absolute top-1/2 right-[-10%] w-[400px] h-[400px] rounded-full bg-[#6D28D9]/3 blur-[100px] pointer-events-none" />
        
        <div className="max-w-5xl mx-auto space-y-6 relative z-10">
          <span className="text-[10px] uppercase tracking-[0.35em] text-[#6D28D9] font-medium block">
            System Specifications
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-light tracking-tight text-[#18181B] leading-tight">
            Engineered for <br />
            <span className="text-[#6D28D9] italic">
              Operational Continuity.
            </span>
          </h1>
          <p className="text-[#52525B] text-sm font-light max-w-xl leading-relaxed">
            We isolate your enterprise from regional infrastructure challenges. Read through the performance data driving our workspace.
          </p>
        </div>
      </section>

      {/* Main Specifications List Grid - Clean & Architectural */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-16 bg-white">
        <div className="max-w-6xl mx-auto divide-y divide-[#EAEAEA]">
          {systems.map((sys) => (
            <div 
              key={sys.index} 
              className="py-12 lg:py-16 first:pt-0 last:pb-0 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start group"
            >
              {/* Left Column: Index & System Type Designation */}
              <div className="lg:col-span-4 space-y-4">
                <div className="flex items-center space-x-4">
                  <span className="font-serif text-2xl font-light text-[#6D28D9] tracking-wider">
                    {sys.index}
                  </span>
                  <div className="h-[1px] flex-1 bg-[#EAEAEA] group-hover:bg-[#6D28D9] transition-colors duration-500" />
                  <span className="text-[10px] uppercase tracking-[0.25em] font-medium text-[#71717A] block whitespace-nowrap">
                    {sys.layer}
                  </span>
                </div>
                
                {/* Active Performance Pill Status - Refined */}
                <div className="pt-1">
                  <span className="inline-block text-[9px] uppercase tracking-[0.2em] font-mono text-[#52525B] bg-[#FAFAFA] border border-[#EAEAEA] rounded-full px-4 py-1.5 font-medium">
                    ● {sys.status}
                  </span>
                </div>
              </div>

              {/* Right Column: In-Depth Breakdown Technical Typography */}
              <div className="lg:col-span-8 space-y-6">
                <div className="space-y-4">
                  <h2 className="font-serif text-2xl sm:text-3xl font-light text-[#18181B] tracking-tight leading-tight">
                    {sys.title}
                  </h2>
                  <p className="text-[#52525B] text-sm font-light leading-relaxed">
                    {sys.desc}
                  </p>
                </div>

                {/* Micro Data Bullet Array - Refined */}
                <ul className="space-y-3 pt-4 border-t border-[#EAEAEA]">
                  {sys.metrics.map((metric, mIdx) => (
                    <li key={mIdx} className="text-sm text-[#52525B] font-light flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#6D28D9] shrink-0" />
                      <span>{metric}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* Closing Assurance CTA Section - Clean & Inviting */}
      <section className="py-24 px-4 sm:px-6 lg:px-16 bg-[#FAFAFA] border-t border-[#EAEAEA] relative overflow-hidden text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full bg-[#6D28D9]/5 blur-[120px] pointer-events-none" />
        <div className="absolute top-[-20%] right-[-10%] w-[300px] h-[300px] rounded-full bg-[#6D28D9]/3 blur-[80px] pointer-events-none" />
        
        <div className="max-w-2xl mx-auto space-y-8 relative z-10">
          <h3 className="font-serif text-2xl sm:text-4xl font-light text-[#18181B] tracking-tight">
            Looking for Custom System Integrations?
          </h3>
          <p className="text-[#52525B] text-sm font-light leading-relaxed max-w-md mx-auto">
            We regularly architect custom encrypted server arrays, private satellite links, and dedicated floor security controls for our corporate enterprise partners.
          </p>
          <div className="pt-2">
            <Link 
              href="/contact" 
              className="px-10 py-3.5 bg-[#6D28D9] hover:bg-[#7C3AED] text-white text-[11px] uppercase tracking-[0.2em] font-medium rounded-sm transition-all duration-300 shadow-[0_4px_20px_rgba(109,40,217,0.15)] hover:shadow-[0_8px_30px_rgba(109,40,217,0.25)] inline-block"
            >
              Consult Our System Director
            </Link>
          </div>
          {/* Subtle brand accent */}
          <div className="w-12 h-[1px] bg-[#6D28D9]/30 mx-auto" />
        </div>
      </section>

      {/* Global Footer Ribbon */}
      <Footer />
    </main>
  );
}