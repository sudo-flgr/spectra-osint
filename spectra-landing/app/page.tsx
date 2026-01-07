import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { PartnersSection } from "@/components/PartnersSection";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-spectra-bg text-white selection:bg-spectra-cyan/30">
      <Navbar />
      <Hero />
      <PartnersSection />
      <ContactSection />

      {/* Background Grid Effect - Optional for extra aesthetic */}
      <div className="fixed inset-0 pointer-events-none z-[-1] opacity-20"
        style={{
          backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}>
      </div>
    </main>
  );
}
