'use client';

export default function Infrastructure() {
  const specs = [
    { number: "01", title: "Dual-Grid & Solar Array", desc: "Constant uptime. Automated cross-switching between two commercial power grids backed by an independent solar energy footprint." },
    { number: "02", title: "Acoustic Shielding", desc: "Engineered isolation. Every wall profile features professional acoustic dampening to ensure absolute corporate privacy." },
    { number: "03", title: "Multi-Provider Fiber Pipeline", desc: "Redundant pathways. Automated failover channels running across Tier-1 internet providers handle seamless global calls." }
  ];

  return (
    <section className="py-28 px-6 lg:px-16 bg-[#FAFAFA] border-t border-[#EAEAEA] relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Column Label Panel - Refined */}
        <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-32">
          <span className="text-[10px] uppercase tracking-[0.35em] text-[#6D28D9] font-medium block">
            Uncompromising Uptime
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-light tracking-tight text-[#18181B] leading-tight">
            Engineered for <br className="hidden lg:block"/> Continuous Output.
          </h2>
          <p className="text-[#52525B] text-sm font-light leading-relaxed max-w-sm">
            We bypass Abuja's infrastructural variables so your enterprise can operate with absolute, microsecond reliability.
          </p>
          {/* Subtle brand accent line */}
          <div className="w-12 h-[1px] bg-[#6D28D9]/30" />
        </div>

        {/* Right Column Specifications List - Refined */}
        <div className="lg:col-span-7 divide-y divide-[#EAEAEA]">
          {specs.map((spec, index) => (
            <div key={index} className="py-8 first:pt-0 last:pb-0 flex gap-6 sm:gap-10 items-start group">
              <span className="font-serif text-2xl font-light text-[#6D28D9] tracking-wider mt-1 transition-all duration-300 group-hover:scale-105">
                {spec.number}
              </span>
              <div className="space-y-3">
                <h3 className="text-lg font-light text-[#18181B] group-hover:text-[#6D28D9] transition-colors duration-300">
                  {spec.title}
                </h3>
                <p className="text-[#52525B] text-sm font-light leading-relaxed">
                  {spec.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}