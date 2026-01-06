import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-spectra-bg text-white selection:bg-spectra-cyan/30">
      <Navbar />
      <Hero />

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
