"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-spectra-bg/80 backdrop-blur-md border-b border-white/10"
    >
      <div className="relative h-10 w-40">
        <Link href="/">
          <Image
            src="/spectra-logo.png"
            alt="SPECTRA Logo"
            fill
            className="object-contain object-left mix-blend-screen cursor-pointer"
            priority
          />
        </Link>
      </div>
      <div className="hidden md:flex items-center gap-8 h-full text-sm font-mono tracking-wider">
        <Link
          href="/"
          className="hover:text-pink-500 hover:drop-shadow-[0_0_5px_rgba(236,72,153,0.8)] transition-all duration-300"
        >
          [ INÍCIO ]
        </Link>
        <div className="group relative h-full flex items-center">
          <Link
            href="/ferramentas/retificacao"
            className="hover:text-pink-500 hover:drop-shadow-[0_0_5px_rgba(236,72,153,0.8)] transition-all duration-300 block"
          >
            [ FERRAMENTAS ]
          </Link>
          <div className="absolute top-full left-0 hidden group-hover:block w-64 bg-black border border-spectra-cyan p-2 shadow-[0_0_15px_rgba(0,243,255,0.2)]">
            <Link
              href="/ferramentas/retificacao"
              className="block p-3 text-spectra-cyan hover:bg-spectra-cyan/10 hover:text-white transition-colors text-xs font-bold"
            >
              {">"} GERADOR DE RETIFICAÇÃO
            </Link>
            <div className="block p-3 text-gray-700 cursor-not-allowed text-xs">
              {">"} EM BREVE...
            </div>
          </div>
        </div>
        <Link
          href="#"
          className="hover:text-pink-500 hover:drop-shadow-[0_0_5px_rgba(236,72,153,0.8)] transition-all duration-300"
        >
          [ GUIAS ]
        </Link>
        <Link
          href="/#contato"
          className="hover:text-pink-500 hover:drop-shadow-[0_0_5px_rgba(236,72,153,0.8)] transition-all duration-300"
        >
          [ CANAL_SEGURO ]
        </Link>
      </div>
    </motion.nav>
  );
}
