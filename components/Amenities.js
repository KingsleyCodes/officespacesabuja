'use client';

export default function Amenities() {
  const items = [
    { label: "Artisan Coffee & Tea Lounge", category: "Hospitality" },
    { label: "Private Acoustic Phone Booths", category: "Focus" },
    { label: "Bespoke Reception & Mail Curators", category: "Operations" },
    { label: "Secure Under-Structure Parking", category: "Access" },
    { label: "On-Demand Executive Boardrooms", category: "Collaboration" },
    { label: "Biometric Access Control Logs", category: "Security" }
  ];

  return (
    <section className="py-28 px-6 lg:px-16 bg-white border-t border-[#EAEAEA]">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Simple Section Header - Refined */}
        <div className="text-center max-w-xl mx-auto space-y-4">
          <span className="text-[10px] uppercase tracking-[0.35em] text-[#6D28D9] font-medium block">
            Bespoke Elements
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-light tracking-tight text-[#18181B]">
            The officespacesabuja Ecosystem
          </h2>
          {/* Subtle brand accent line */}
          <div className="w-12 h-[1px] bg-[#6D28D9]/30 mx-auto" />
        </div>

        {/* Grid System - Refined */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4">
          {items.map((item, index) => (
            <div 
              key={index} 
              className="flex items-center justify-between py-5 border-b border-[#EAEAEA] group hover:border-[#6D28D9]/30 transition-colors duration-300"
            >
              <div className="flex items-center space-x-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4D4D8] group-hover:bg-[#6D28D9] transition-colors duration-300" />
                <span className="text-sm font-light text-[#18181B] group-hover:translate-x-1 transition-transform duration-300">
                  {item.label}
                </span>
              </div>
              <span className="text-[9px] uppercase tracking-[0.25em] text-[#71717A] font-medium group-hover:text-[#6D28D9] transition-colors duration-300">
                {item.category}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}