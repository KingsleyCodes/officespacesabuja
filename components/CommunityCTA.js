'use client';
import Link from 'next/link';

export default function CommunityCTA() {
  return (
    <section className="py-32 px-6 lg:px-16 bg-[#FAFAFA] border-t border-[#EAEAEA] relative overflow-hidden text-center">
      {/* Background architectural soft accent halo - Refined */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#6D28D9]/5 blur-[140px] pointer-events-none" />

      {/* Floating White Card - Premium CTA Container */}
      <div className="max-w-3xl mx-auto bg-white border border-[#EAEAEA] rounded-sm shadow-[0_8px_30px_rgba(0,0,0,0.04)] p-12 sm:p-16 relative z-10 space-y-8">
        <span className="text-[10px] uppercase tracking-[0.35em] text-[#6D28D9] font-medium block">
          Private Invitation
        </span>
        
        <h2 className="font-serif text-4xl sm:text-6xl font-light tracking-tight text-[#18181B] leading-tight">
          Elevate Your Enterprise <br />
          <span className="text-[#6D28D9] italic">
            Operational Standard.
          </span>
        </h2>
        
        <p className="text-[#52525B] text-sm font-light max-w-lg mx-auto leading-relaxed">
          Join our curated network of multinational teams, sovereign directors, and industry-shaping operators in Abuja. Private gate-passes are issued exclusively upon scheduled request.
        </p>

        <div className="pt-4">
          <Link 
            href="/book-a-tour" 
            className="px-10 py-4 bg-[#6D28D9] hover:bg-[#7C3AED] text-white font-medium text-[11px] uppercase tracking-[0.2em] rounded-sm transition-all duration-300 shadow-[0_4px_20px_rgba(109,40,217,0.15)] hover:shadow-[0_8px_30px_rgba(109,40,217,0.25)] inline-block"
          >
            Arrange A Private Walkthrough
          </Link>
        </div>
      </div>
    </section>
  );
}