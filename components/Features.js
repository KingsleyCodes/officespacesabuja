export default function Features() {
  const items = [
    { title: "Uninterrupted Operations", desc: "Dual-grid commercial power lines coupled with a dedicated automatic solar matrix ensure zero microsecond drops." },
    { title: "Acoustic Insulation", desc: "Every office suite features specialized multi-layer sound dampening to maintain complete confidentiality." },
    { title: "Tier-1 Redundant Fiber", desc: "Dual upstream internet service providers with automated failover handling high-bandwidth local and international operations." }
  ];

  return (
    <section className="py-24 px-6 lg:px-16 bg-[#121214]/30 border-t border-zinc-950">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
        {items.map((feat, i) => (
          <div key={i} className="space-y-4 border-l border-zinc-800 pl-6 hover:border-[#6110B1] transition-colors duration-500">
            <h3 className="font-serif text-xl text-zinc-100 font-light">{feat.title}</h3>
            <p className="text-zinc-400 text-sm font-light leading-relaxed">{feat.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}