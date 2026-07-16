import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Infrastructure from '../components/Infrastructure';
import OfferingsGrid from '../components/OfferingsGrid';
import Amenities from '../components/Amenities';
import CommunityCTA from '../components/CommunityCTA';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="bg-white min-h-screen text-zinc-800 selection:bg-[#6110B1] selection:text-white">
      {/* 1. Header Navigation Wrapper */}
      <Navbar />

      {/* 2. Hero Presentation Engine */}
      <Hero />

      {/* 3. Core Structural Value Blocks */}
      <Infrastructure />

      {/* 4. Product Catalog Grid Tiers */}
      <OfferingsGrid />

      {/* 5. Lifestyle Feature Ecosystem List */}
      <Amenities />

      {/* 6. Closing Business Access Trigger */}
      <CommunityCTA />

      {/* 7. Bottom Brand Information Line */}
      <Footer />
    </main>
  );
}