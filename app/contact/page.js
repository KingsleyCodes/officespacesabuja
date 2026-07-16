'use client';
import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [interest, setInterest] = useState('private');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ingestion pipeline logic hooks in here
    setFormSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-white text-[#18181B] selection:bg-[#6D28D9] selection:text-white flex flex-col justify-between">
      {/* Sticky Navigation Bar */}
      <Navbar />

      {/* Main Content Wrapper - Lighter & Airier */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-16 flex-grow border-b border-[#EAEAEA] bg-white">
        {/* Soft, warm background halo - more subtle */}
        <div className="absolute top-[-5%] right-[-5%] w-[500px] h-[500px] rounded-full bg-[#6D28D9]/5 blur-[130px] pointer-events-none" />
        <div className="absolute bottom-[-5%] left-[-5%] w-[400px] h-[400px] rounded-full bg-[#6D28D9]/3 blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Typographic Branding & Hub Specifics - Refined */}
          <div className="lg:col-span-5 space-y-10 lg:sticky lg:top-32">
            <div className="space-y-6">
              <span className="text-[10px] uppercase tracking-[0.35em] text-[#6D28D9] font-medium block">
                Secure Enterprise Access
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-[#18181B] leading-tight">
                Connect with <br />
                <span className="text-[#6D28D9] italic">
                  officespacesabuja.
                </span>
              </h1>
              <p className="text-[#52525B] text-sm font-light leading-relaxed max-w-sm">
                Schedule private operations walkthroughs, register turnkey spatial needs, or authorize corporate entry permissions with our directors.
              </p>
            </div>

            {/* Hub Directory Blocks - Updated with new contact info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 pt-6 border-t border-[#EAEAEA]">
              {/* Main Office Location */}
              <div className="space-y-3 p-6 bg-[#FAFAFA] border border-[#EAEAEA] rounded-sm hover:border-[#6D28D9]/20 transition-all duration-300">
                <p className="text-[10px] uppercase tracking-[0.3em] font-medium text-[#18181B]">Main Office · Kubwa</p>
                <div className="space-y-1.5">
                  <p className="text-[#52525B] text-xs font-light leading-relaxed">
                    Blk 01 Folahan Alli Ave, Arab Rd,<br />
                    Kubwa, 901101, Abuja – Nigeria
                  </p>
                  <p className="text-[#52525B] text-xs font-light leading-relaxed">
                    <a href="tel:+2349034635740" className="text-[#6D28D9] hover:text-[#7C3AED] transition-colors">
                      +234 (0) 90 3463 5740
                    </a>
                  </p>
                  <p className="text-[#52525B] text-xs font-light leading-relaxed">
                    <a href="mailto:info@officespaceabuja.live" className="text-[#6D28D9] hover:text-[#7C3AED] transition-colors">
                      info@officespaceabuja.live
                    </a>
                  </p>
                  <p className="text-[#52525B] text-xs font-light leading-relaxed">
                    <a href="https://www.officespaceabuja.live" target="_blank" rel="noopener noreferrer" className="text-[#6D28D9] hover:text-[#7C3AED] transition-colors">
                      www.officespaceabuja.live
                    </a>
                  </p>
                </div>
              </div>
              
              {/* Additional Hub - Commented but ready */}
              {/* <div className="space-y-2 p-6 bg-[#FAFAFA] border border-[#EAEAEA] rounded-sm hover:border-[#6D28D9]/20 transition-all duration-300 opacity-60">
                <p className="text-[10px] uppercase tracking-[0.3em] font-medium text-[#18181B]">Wuse II Flagship Ecosystem</p>
                <p className="text-[#52525B] text-xs font-light leading-relaxed">
                  Adetokunbo Ademola Crescent, Abuja<br />
                  <a href="mailto:wuse2@officespaceabuja.live" className="text-[#6D28D9] hover:text-[#7C3AED] transition-colors">wuse2@officespaceabuja.live</a> · +234 (0) 90 3463 5741
                </p>
              </div> */}
            </div>
          </div>

          {/* Right Column: Premium Form Engine - Clean White Card */}
          <div className="lg:col-span-7 bg-white border border-[#EAEAEA] rounded-sm p-6 sm:p-10 relative shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
            {formSubmitted ? (
              <div className="py-20 text-center space-y-6 animate-fadeIn">
                <div className="w-14 h-14 rounded-full border-2 border-[#6D28D9] text-[#6D28D9] flex items-center justify-center text-2xl mx-auto font-serif">
                  ✓
                </div>
                <h3 className="font-serif text-2xl font-light text-[#18181B]">Request Logged</h3>
                <p className="text-[#52525B] text-sm font-light max-w-sm mx-auto leading-relaxed">
                  Our workspace directors will contact your team within two business hours via phone to confirm credentials and secure your private entry clearance.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                
                {/* Interest Tiers Selector - Refined */}
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.3em] text-[#71717A] block font-medium">
                    Core Operational Interest
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { id: 'private', name: 'Private Suites' },
                      { id: 'cowork', name: 'Dedicated Desks' },
                      { id: 'virtual', name: 'Virtual Identity' }
                    ].map((tier) => (
                      <button
                        key={tier.id}
                        type="button"
                        onClick={() => setInterest(tier.id)}
                        className={`py-3.5 px-4 rounded-sm border text-xs tracking-wide text-center transition-all duration-300 ${
                          interest === tier.id 
                            ? 'border-[#6D28D9] bg-[#FAFAFA] text-[#18181B] font-medium shadow-[0_4px_12px_rgba(109,40,217,0.08)]' 
                            : 'border-[#EAEAEA] bg-white text-[#71717A] hover:border-[#6D28D9]/30 hover:text-[#18181B]'
                        }`}
                      >
                        {tier.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Grid Inputs - Clean & Minimal */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.3em] text-[#71717A] block font-medium">Full Name</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="Aliyu Bello" 
                      className="w-full bg-white border border-[#EAEAEA] focus:border-[#6D28D9] text-[#18181B] text-sm rounded-sm px-4 py-3.5 outline-none transition-all duration-300 placeholder:text-[#71717A] focus:shadow-[0_0_0_3px_rgba(109,40,217,0.06)]"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.3em] text-[#71717A] block font-medium">Corporate Email</label>
                    <input 
                      type="email" 
                      required 
                      placeholder="name@firm.com" 
                      className="w-full bg-white border border-[#EAEAEA] focus:border-[#6D28D9] text-[#18181B] text-sm rounded-sm px-4 py-3.5 outline-none transition-all duration-300 placeholder:text-[#71717A] focus:shadow-[0_0_0_3px_rgba(109,40,217,0.06)]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.3em] text-[#71717A] block font-medium">Phone Contact</label>
                    <input 
                      type="tel" 
                      required 
                      placeholder="+234 ..." 
                      className="w-full bg-white border border-[#EAEAEA] focus:border-[#6D28D9] text-[#18181B] text-sm rounded-sm px-4 py-3.5 outline-none transition-all duration-300 placeholder:text-[#71717A] focus:shadow-[0_0_0_3px_rgba(109,40,217,0.06)]"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.3em] text-[#71717A] block font-medium">Target Hub Location</label>
                    <select 
                      className="w-full bg-white border border-[#EAEAEA] focus:border-[#6D28D9] text-[#18181B] text-sm rounded-sm px-4 py-3.5 outline-none transition-all duration-300 appearance-none cursor-pointer focus:shadow-[0_0_0_3px_rgba(109,40,217,0.06)]"
                    >
                      <option value="kubwa">Kubwa District Hub</option>
                    </select>
                  </div>
                </div>

                {/* Architectural Requirements Area - Clean */}
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.3em] text-[#71717A] block font-medium">
                    Spatial Customization Notes (Optional)
                  </label>
                  <textarea 
                    rows="4" 
                    placeholder="Provide notes on team size capacity, private connectivity requests, or scheduling parameters..." 
                    className="w-full bg-white border border-[#EAEAEA] focus:border-[#6D28D9] text-[#18181B] text-sm rounded-sm px-4 py-3.5 outline-none transition-all duration-300 resize-none leading-relaxed placeholder:text-[#71717A] focus:shadow-[0_0_0_3px_rgba(109,40,217,0.06)]"
                  />
                </div>

                {/* Premium Purple CTA - Refined */}
                <button 
                  type="submit" 
                  className="w-full py-4 bg-[#6D28D9] hover:bg-[#7C3AED] text-white text-[11px] uppercase tracking-[0.2em] font-medium rounded-sm transition-all duration-300 shadow-[0_4px_20px_rgba(109,40,217,0.15)] hover:shadow-[0_8px_30px_rgba(109,40,217,0.25)]"
                >
                  Authorize System Request
                </button>

                {/* Subtle Brand Accent */}
                <div className="flex justify-center pt-2">
                  <div className="w-12 h-[1px] bg-[#6D28D9]/30" />
                </div>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* Footnote Branding Integration */}
      <Footer />
    </main>
  );
}