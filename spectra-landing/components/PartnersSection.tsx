"use client";

import { motion } from "framer-motion";

const partners = Array(8).fill(null);

export function PartnersSection() {
    return (
        <section className="py-20 px-8 border-t border-white/5 bg-black/50 relative">
            <div className="max-w-[1400px] mx-auto">
                <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-12 text-white flex items-center gap-4">
                    <span className="text-spectra-cyan">{">"}</span>
                    REDE DE APOIO
                    <span className="h-px flex-1 bg-spectra-cyan/30 ml-8"></span>
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                    {partners.map((_, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.02 }}
                            className="group relative h-24 md:h-32 bg-[#0a0a0a] border border-spectra-cyan/30 hover:border-spectra-cyan flex items-center justify-center overflow-hidden transition-all duration-300"
                        >
                            {/* Scanline overlay for each box */}
                            <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,243,255,0.05)_50%)] bg-[length:100%_4px] pointer-events-none"></div>

                            <div className="text-spectra-cyan/30 font-mono text-xs group-hover:text-spectra-cyan group-hover:font-bold transition-all duration-300 group-hover:animate-pulse">
                                PARCEIRO {i + 1}
                            </div>

                            {/* Glitch Effect on Hover */}
                            <div className="absolute inset-0 bg-spectra-cyan mix-blend-difference opacity-0 group-hover:opacity-10 transition-opacity duration-100"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
