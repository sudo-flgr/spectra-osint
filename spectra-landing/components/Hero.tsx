"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import { CodeBlock } from "./CodeBlock";
import { Button } from "./ui/Button";

const textToType = "> Initializing SPECTRA Protocol... // Democratizing Cyber-Defense.";

export function Hero() {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(textToType.substring(0, i + 1));
      i++;
      if (i === textToType.length) {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex flex-col lg:flex-row items-center justify-center min-h-[85vh] px-8 lg:px-16 pt-32 gap-12 max-w-[1600px] mx-auto relative">
      {/* --- FUNDO PROTAGONISTA V3 (FINAL) --- */}
      <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden pointer-events-none">
        <div className="relative w-[90vw] h-[90vh] md:w-[70vw] md:h-[70vh] opacity-20 mix-blend-screen select-none">
          <Image
            src="/spectra-logo.png"
            alt="SPECTRA Background Protocol"
            fill
            className="object-contain glitch-scramble"
            priority
          />
        </div>
      </div>

      {/* Left Content - Brutalist Typography */}
      <div className="flex-1 w-full text-left z-20">

        <div className="mb-4 inline-block px-2 py-1 bg-spectra-pink/20 border border-spectra-pink text-spectra-pink text-xs font-bold tracking-[0.2em] uppercase">
          System_Override_Initiated
        </div>

        <h1 className="text-5xl lg:text-7xl font-black uppercase text-white leading-[0.9] tracking-tighter mb-4 glitch-text" data-text="INICIALIZANDO PROTOCOLO SPECTRA_">
          INICIALIZANDO<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-spectra-cyan to-white">PROTOCOLO</span><br />
          SPECTRA_
        </h1>

        <div className="mb-8 text-xl md:text-2xl font-bold text-spectra-pink font-mono tracking-tight">
          {">"} OSINT4ALL // no masters no filters
        </div>

        <p className="text-lg md:text-xl text-gray-400 font-mono max-w-xl mb-10 border-l-4 border-spectra-cyan pl-6">
          // COLETIVO DE DEFESA CIBERNÉTICA E CONTRAVIGILÂNCIA.<br />
          // PROTEJA SUA INFRAESTRUTURA.<br />
          // BLINDE SUA COMUNIDADE.
        </p>

        <div className="flex flex-wrap gap-4">
          <Button className="bg-spectra-cyan text-black hover:bg-white hover:text-black rounded-none border-2 border-spectra-cyan font-bold uppercase tracking-widest px-8 py-6 text-lg transition-all hover:translate-x-1 hover:-translate-y-1 hover:shadow-[5px_5px_0px_rgba(255,255,255,1)]">
            [ INICIAR_PROTOCOLO ]
          </Button>
          <Button className="bg-transparent text-spectra-pink border-2 border-spectra-pink hover:bg-spectra-pink hover:text-black rounded-none font-bold uppercase tracking-widest px-8 py-6 text-lg transition-all">
            DADOS_DO_ALVO
          </Button>
        </div>
      </div>

      {/* Right Content - Floating Code Window */}
      <div className="flex-1 w-full max-w-2xl relative z-10 hidden lg:block">
        {/* Decorative elements behind */}
        <div className="absolute -top-10 -right-10 w-64 h-64 border-t-2 border-r-2 border-spectra-pink/30"></div>
        <div className="absolute -bottom-10 -left-10 w-64 h-64 border-b-2 border-l-2 border-spectra-cyan/30"></div>

        <CodeBlock />
      </div>
    </section>
  );
}
