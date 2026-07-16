'use client';
import Link from 'next/link';

function SpaceTierCard({ tag, title, description, amenities, imageSrc }) {
  return (
    <div className="group relative border border-[#EAEAEA] bg-white rounded-sm hover:border-[#6D28D9]/30 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-500 flex flex-col justify-between min-h-[520px] overflow-hidden">
      
      {/* Premium Purple Edge Line - Scaled on Hover */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#6D28D9] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20" />

      <div>
        {/* Architectural Image Container - Refined */}
        <div className="w-full h-48 overflow-hidden relative border-b border-[#EAEAEA] bg-[#FAFAFA]">
          <div className="absolute inset-0 bg-[#18181B]/5 group-hover:bg-transparent transition-colors duration-500 z-10" />
          <img 
            src={imageSrc} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-700 ease-out transform group-hover:scale-105"
          />
        </div>

        {/* Content Padding Wrapper - Refined */}
        <div className="p-6 space-y-4">
          <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-[#71717A] block group-hover:text-[#6D28D9] transition-colors duration-300">
            {tag}
          </span>
          <h3 className="font-serif text-2xl font-light text-[#18181B] tracking-tight group-hover:text-[#6D28D9] transition-colors duration-300">
            {title}
          </h3>
          <p className="text-[#52525B] text-sm font-light leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      {/* Amenities & Action Triggers pinned to bottom - Refined */}
      <div className="p-6 pt-0 space-y-5">
        <ul className="space-y-2.5 border-t border-[#EAEAEA] pt-5">
          {amenities.map((item, idx) => (
            <li key={idx} className="text-sm text-[#52525B] font-light flex items-start gap-3 leading-tight">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6D28D9] mt-1.5 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* Action Tray: Refined & Clean */}
        <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <Link
            href="/contact"
            className="flex items-center text-[11px] font-medium text-[#18181B] tracking-[0.15em] uppercase group-hover:text-[#6D28D9] transition-colors duration-300 cursor-pointer"
          >
            Request Access{" "}
            <span className="transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300 ml-2.5 text-[#6D28D9] text-sm font-light">
              →
            </span>
          </Link>

          <Link 
            href="/contact"
            className="w-full sm:w-auto px-6 py-2.5 border border-[#EAEAEA] text-[#18181B] hover:border-[#6D28D9] hover:bg-[#6D28D9] hover:text-white text-[10px] uppercase tracking-[0.2em] font-medium rounded-sm transition-all duration-300 text-center"
          >
            Book A Space
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function OfferingsGrid() {
  const tiers = [
    {
      tag: "01 / Corporate Enterprise",
      title: "Private Office Suites",
      description: "Fully acoustic-insulated, bespoke turnkey offices engineered for multinational branches and elite executive teams in Abuja.",
      imageSrc: "/pri.jpg",
      amenities: ["Biometric secure access structures", "Dedicated ultra-high-speed fiber pipeline", "Custom luxury interior branding"]
    },
    {
      tag: "02 / Dedicated Agility",
      title: "Reserved Desks & Hubs",
      description: "Ergonomic command stations nested within an exceptionally quiet, high-focus architectural layout.",
      imageSrc: "/re.jpg",
      amenities: ["24/7 personalized keycard access", "Premium ergonomic seating profiles", "Inclusive executive boardroom hours"]
    },
    {
      tag: "03 / Elite Borderless",
      title: "Virtual Office Identity",
      description: "Establish absolute market credibility with a premium corporate business address in Abuja's high-brow zones.",
      imageSrc: "/vir.jpg",
      amenities: ["CAC-compliant commercial address", "Dedicated mail management & handling", "Complimentary drop-in access credits"]
    }
  ];

  return (
    <section className="py-32 px-6 lg:px-16 border-t border-[#EAEAEA] bg-[#FAFAFA] relative">
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#6D28D9]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-20">
        
        <div className="max-w-2xl space-y-5">
          <span className="text-[10px] uppercase tracking-[0.35em] text-[#6D28D9] font-medium block">
            Bespoke Infrastructures
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-light tracking-tight text-[#18181B] leading-tight">
            Workspaces curated to optimize capital, talent, and output.
          </h2>
          {/* Subtle brand accent line */}
          <div className="w-12 h-[1px] bg-[#6D28D9]/30" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <SpaceTierCard key={index} {...tier} />
          ))}
        </div>

      </div>
    </section>
  );
}