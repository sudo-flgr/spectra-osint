"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-spectra-bg/80 backdrop-blur-md border-b border-white/10"
    >
      <div className="text-xl font-bold tracking-tighter text-spectra-cyan">
        SPECTRA
      </div>
      <div className="flex gap-6 text-sm">
        <Link href="#about" className="hover:text-spectra-pink transition-colors">
          Sobre
        </Link>
        <Link href="#tools" className="hover:text-spectra-pink transition-colors">
          Ferramentas
        </Link>
        <Link href="#contact" className="hover:text-spectra-pink transition-colors">
          Contato
        </Link>
      </div>
    </motion.nav>
  );
}
