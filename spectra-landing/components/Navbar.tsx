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
        <Image
          src="/logo.jpg"
          alt="SPECTRA Logo"
          fill
          className="object-contain object-left mix-blend-screen"
          priority
        />
      </div>
      <div className="flex gap-8 text-sm font-mono tracking-wider">
        <Link
          href="/ferramentas/retificacao"
          className="hover:text-pink-500 hover:drop-shadow-[0_0_5px_rgba(236,72,153,0.8)] transition-all duration-300"
        >
          [ FERRAMENTAS ]
        </Link>
        <Link
          href="#"
          className="hover:text-pink-500 hover:drop-shadow-[0_0_5px_rgba(236,72,153,0.8)] transition-all duration-300"
        >
          [ GUIAS ]
        </Link>
        <Link
          href="#contato"
          className="hover:text-pink-500 hover:drop-shadow-[0_0_5px_rgba(236,72,153,0.8)] transition-all duration-300"
        >
          [ CANAL_SEGURO ]
        </Link>
      </div>
    </motion.nav>
  );
}
