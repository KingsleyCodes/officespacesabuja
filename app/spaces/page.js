'use client';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function SpacesPage() {
  const tiers = [
    {
      id: "private-suites",
      tag: "Tier 01 / Enterprise",
      title: "Private Office Suites",
      subtitle: "Bespoke Turnkey Sovereignty",
      description: "Engineered for international branches, sovereign consultancies, and executive groups requiring absolute focus. These completely enclosed corporate environments feature independent layout structures tailored entirely to your firm's administrative profile.",
      images: {
        main: "/1.jpg", 
        detail: "/11.jpg"
      },
      specs: [
        { label: "Capacity", val: "4 – 25+ Operators" },
        { label: "Acoustics", val: "Double-Glazed 45dB Shielding" },
        { label: "Access", val: "Biometric Matrix Logged" },
        { label: "Connectivity", val: "Dedicated Layer-2 Fiber Line" }
      ],
      features: ["Custom corporate door plates & branding configurations", "Dedicated interior executive meeting annex", "Independent climate management arrays"]
    },
    {
      id: "dedicated-hubs",
      tag: "Tier 02 / Flex Agility",
      title: "Reserved Desks & Hubs",
      subtitle: "High-Focus Command Stations",
      description: "An ergonomic haven nested within an exceptionally quiet, architectural open layout. Designed specifically for corporate innovators, consultants, and teams that balance fluid networking with targeted task execution blocks.",
      images: {
        main: "/2.jpg",
        detail: "/22.jpg"
      },
      specs: [
        { label: "Capacity", val: "Individual / Small Groups" },
        { label: "Ergonomics", val: "Premium Task Chairs" },
        { label: "Allocation", val: "Fixed 24/7 Desk Assignment" },
        { label: "Inclusions", val: "10 Free Boardroom Hours / Mo" }
      ],
      features: ["Secure personal locked storage credenzas", "Integrated high-density data ports", "Immediate proximity to acoustic focus phone booths"]
    },
    {
      id: "virtual-identity",
      tag: "Tier 03 / Corporate Presence",
      title: "Virtual Office Identity",
      subtitle: "Instant Institutional Credibility",
      description: "Establish an undeniable corporate market footing in Nigeria's commercial high-brow core without the overhead of physical square footage. Complete infrastructure handling ensures compliance with local CAC registration standards.",
      images: {
        main: "/3.jpg",
        detail: "/33.jpg"
      },
      specs: [
        { label: "Compliance", val: "CAC & FIRS Approved Address" },
        { label: "Mail Logistics", val: "Real-time Scan & Forward alerts" },
        { label: "Drop-In Allocation", val: "3 Gallery Lounge Passes / Mo" },
        { label: "Reception", val: "Dedicated Concierge Call Routing" }
      ],
      features: ["Premium K protocols", "Professional greeting frameworks for visiting auditors", "Discounted structural rates on boardroom bookings"]
    }
  ];

  return (
    <main className="min-h-screen bg-white text-[#18181B] selection:bg-[#6D28D9] selection:text-white flex flex-col justify-between">
      {/* Sticky Navigation Bar */}
      <Navbar />

      {/* Header Context Title Section - Refined & Lighter */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-20 px-4 sm:px-6 lg:px-16 overflow-hidden border-b border-[#EAEAEA] bg-white">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#6D28D9]/5 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[400px] h-[400px] rounded-full bg-[#6D28D9]/3 blur-[100px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto space-y-6 relative z-10">
          <span className="text-[10px] uppercase tracking-[0.35em] text-[#6D28D9] font-medium block">
            Workspace Catalog
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-light tracking-tight text-[#18181B] leading-tight">
            Our Architectural <br />
            <span className="text-[#6D28D9] italic">
              Spatial Inventory.
            </span>
          </h1>
          <p className="text-[#52525B] text-sm font-light max-w-xl leading-relaxed">
            Select a tier calculated precisely to match your firm's talent deployment, operational footprint, and privacy mandates in Nigeria's capital.
          </p>
        </div>
      </section>

      {/* Interactive Products Showcase Loop Container - Clean & Airy */}
      <section className="py-12 lg:py-24 px-4 sm:px-6 lg:px-16 bg-white space-y-32">
        <div className="max-w-7xl mx-auto space-y-36">
          {tiers.map((tier, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={tier.id} 
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
              >
                
                {/* Visual Imagery Panel Group - Refined */}
                <div className={`grid grid-cols-12 gap-4 lg:col-span-6 relative ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  
                  {/* Subtle ambient accent card halo - Lighter */}
                  <div className="absolute -inset-4 bg-[#FAFAFA] rounded-sm -z-10 transform scale-95 opacity-60" />
                  
                  {/* Primary Large Image Frame - Clean */}
                  <div className="col-span-8 h-[260px] sm:h-[380px] overflow-hidden rounded-sm shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-[#EAEAEA] bg-white">
                    <img 
                      src={tier.images.main} 
                      alt={`${tier.title} Primary View`} 
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                  
                  {/* Secondary Architectural Accent Image Frame */}
                  <div className="col-span-4 h-[180px] sm:h-[260px] overflow-hidden rounded-sm shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-[#EAEAEA] bg-white mt-12 sm:mt-20 transform translate-x-2">
                    <img 
                      src={tier.images.detail} 
                      alt={`${tier.title} Detail Component`} 
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                </div>

                {/* Technical Specification Typography Panel - Refined */}
                <div className={`lg:col-span-6 space-y-8 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="space-y-3">
                    <span className="text-[10px] font-medium tracking-[0.3em] text-[#6D28D9] uppercase block">
                      {tier.tag}
                    </span>
                    <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#18181B] tracking-tight">
                      {tier.title}
                    </h2>
                    <p className="text-[#71717A] text-xs uppercase tracking-[0.2em] italic font-light">
                      {tier.subtitle}
                    </p>
                  </div>

                  <p className="text-[#52525B] text-sm font-light leading-relaxed">
                    {tier.description}
                  </p>

                  {/* Technical Parameters Matrix Box - Cleaner */}
                  <div className="grid grid-cols-2 gap-4 py-5 border-t border-b border-[#EAEAEA] bg-[#FAFAFA] px-4 rounded-sm">
                    {tier.specs.map((spec, sIdx) => (
                      <div key={sIdx} className="space-y-0.5">
                        <p className="text-[9px] uppercase tracking-[0.25em] text-[#71717A] font-medium">{spec.label}</p>
                        <p className="text-[#18181B] text-xs font-medium font-serif">{spec.val}</p>
                      </div>
                    ))}
                  </div>

                  {/* Premium Bullet Array Checklist - Refined */}
                  <ul className="space-y-2.5 pt-1">
                    {tier.features.map((feat, fIdx) => (
                      <li key={fIdx} className="text-sm text-[#52525B] font-light flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#6D28D9] mt-1.5 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Interactive Target Access Routing CTA Button - Refined */}
                  <div className="pt-6 border-t border-[#EAEAEA]">
                    <Link 
                      href="/contact"
                      className="inline-flex items-center text-[11px] font-medium text-[#18181B] tracking-[0.15em] uppercase hover:text-[#6D28D9] transition-all duration-300 group"
                    >
                      Secure Access Pass
                      <span className="transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300 ml-3 text-[#6D28D9] font-light text-sm">
                        →
                      </span>
                    </Link>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </section>

      {/* Global Brand Footer Block */}
      <Footer />
    </main>
  );
}