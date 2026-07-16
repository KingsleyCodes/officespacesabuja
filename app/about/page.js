'use client';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function AboutPage() {
  const pillars = [
    {
      metric: "01 / Spatial Engineering",
      title: "Absolute Acoustic Sovereignty",
      desc: "We build workspaces utilizing premium sound-dampening insulation compounds, acoustic seals, and specialized double-glazed perimeter walls. Your operational privacy remains uncompromised."
    },
    {
      metric: "02 / Operational Uptime",
      title: "Infrastructural Independence",
      desc: "By integrating automated dual-grid electricity lines with an advanced solar infrastructure panel, we have isolated officespacesabuja from external capital disruptions in Abuja entirely."
    },
    {
      metric: "03 / Elite Alliance",
      title: "A Curated Ecosystem",
      desc: "Our desks are populated strictly via selective access controls. We provide an environment tailored exclusively for corporate innovators, international delegations, and executive leaders."
    }
  ];

  return (
    <main className="min-h-screen bg-white text-[#18181B] selection:bg-[#6D28D9] selection:text-white flex flex-col justify-between">
      {/* Sticky Navigation Bar */}
      <Navbar />

      {/* Hero Narrative Canvas - Refined & Lighter */}
      <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 px-4 sm:px-6 lg:px-16 overflow-hidden border-b border-[#EAEAEA] bg-white">
        {/* Soft purple glow halo layer - More subtle */}
        <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-[#6D28D9]/5 blur-[140px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#6D28D9]/3 blur-[120px] pointer-events-none" />

        <div className="max-w-6xl mx-auto space-y-10 relative z-10">
          <span className="text-[10px] uppercase tracking-[0.35em] text-[#6D28D9] font-medium block">
            Our Institutional Standard
          </span>
          
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-[#18181B] leading-[1.1]">
            Architecting the future of <br />
            <span className="text-[#6D28D9] italic">
              Corporate Output.
            </span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-4 items-start">
            <div className="md:col-span-7">
              <p className="text-[#52525B] text-sm md:text-base font-light leading-relaxed max-w-2xl">
                officespacesabuja was founded on a simple, absolute truth: high-profile enterprise teams require infrastructure that handles operations silently. We create environments where corporate branches and market leaders can settle into deep focus without losing data, power, or momentum.
              </p>
            </div>
            <div className="md:col-span-5 md:pl-10 border-l border-[#EAEAEA] space-y-3">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#71717A] font-medium">Jurisdictions</p>
              <p className="font-serif text-xl text-[#18181B] font-light">Kubwa District · Abuja</p>
             
            </div>
          </div>
        </div>
      </section>

      {/* Asymmetric Core Values & Pillars Section - Lighter */}
      <section className="py-24 px-4 sm:px-6 lg:px-16 bg-[#FAFAFA] border-t border-b border-[#EAEAEA]">
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="max-w-xl space-y-4">
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#6D28D9] font-medium block">
              Core Principles
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-light text-[#18181B] tracking-tight leading-tight">
              Infrastructural metrics that redefine your operating leverage.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <div 
                key={index} 
                className="bg-white border border-[#EAEAEA] p-10 rounded-sm hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:border-[#6D28D9]/20 transition-all duration-500 relative overflow-hidden group"
              >
                {/* Purple Accent Top Bar - Refined */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#6D28D9] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                
                <div className="space-y-5">
                  <span className="text-[9px] font-medium tracking-[0.3em] text-[#71717A] uppercase block">
                    {pillar.metric}
                  </span>
                  <h3 className="font-serif text-2xl font-light text-[#18181B] group-hover:text-[#6D28D9] transition-colors duration-300 leading-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-[#52525B] text-sm font-light leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Corporate Statement / Vision Panel - Clean & Airy */}
      <section className="py-28 px-4 sm:px-6 lg:px-16 bg-white relative border-b border-[#EAEAEA]">
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-[#6D28D9]/3 blur-[120px] pointer-events-none" />
        <div className="absolute top-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-[#6D28D9]/3 blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Static Stat Blocks - Lighter Cards */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-5">
            <div className="p-8 bg-[#FAFAFA] border border-[#EAEAEA] rounded-sm transition-all duration-300 hover:border-[#6D28D9]/20 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
              <p className="font-serif text-3xl sm:text-4xl text-[#18181B] font-light">99.9%</p>
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#71717A] font-medium mt-2">Power Reliability</p>
            </div>
            <div className="p-8 bg-[#FAFAFA] border border-[#EAEAEA] rounded-sm transition-all duration-300 hover:border-[#6D28D9]/20 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
              <p className="font-serif text-3xl sm:text-4xl text-[#18181B] font-light">02</p>
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#71717A] font-medium mt-2">Capital Nodes</p>
            </div>
            <div className="p-8 bg-[#FAFAFA] border border-[#EAEAEA] rounded-sm transition-all duration-300 hover:border-[#6D28D9]/20 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
              <p className="font-serif text-3xl sm:text-4xl text-[#6D28D9] font-light">45dB</p>
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#71717A] font-medium mt-2">Acoustic Shielding</p>
            </div>
            <div className="p-8 bg-[#FAFAFA] border border-[#EAEAEA] rounded-sm transition-all duration-300 hover:border-[#6D28D9]/20 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
              <p className="font-serif text-3xl sm:text-4xl text-[#18181B] font-light">24/7</p>
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#71717A] font-medium mt-2">Secure Clearance</p>
            </div>
          </div>

          {/* Core Vision Statement Text Block - Refined Typography */}
          <div className="lg:col-span-7 lg:pl-8 space-y-8">
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#6D28D9] font-medium block">
              The Architecture of Prestige
            </span>
            <h3 className="font-serif text-2xl sm:text-4xl font-light text-[#18181B] tracking-tight leading-tight">
              An uncompromised premium habitat designed specifically around your operational prestige.
            </h3>
            <p className="text-[#52525B] text-sm font-light leading-relaxed max-w-xl">
              We look past the simple metrics of square footage. officespacesabuja views space as an asset that dictates enterprise focus. From high-grade ergonomic setups to biometric entrance logging tracks, our locations are designed to elevate output.
            </p>
            <div className="pt-2">
              <Link 
                href="/contact" 
                className="px-10 py-3.5 bg-[#6D28D9] hover:bg-[#7C3AED] text-white text-[11px] uppercase tracking-[0.2em] font-medium rounded-sm transition-all duration-300 shadow-[0_4px_20px_rgba(109,40,217,0.15)] hover:shadow-[0_8px_30px_rgba(109,40,217,0.25)] inline-block"
              >
                Connect With Us
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Global Brand Footer Block */}
      <Footer />
    </main>
  );
}