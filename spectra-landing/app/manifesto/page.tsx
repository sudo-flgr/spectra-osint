"use client";

import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { VolunteerForm } from "@/components/VolunteerForm";

export default function ManifestoPage() {
    return (
        <main className="min-h-screen bg-spectra-bg text-white selection:bg-spectra-cyan/30 flex flex-col font-mono relative">
            <Navbar />

            <div className="flex-1 w-full max-w-5xl mx-auto px-6 py-32">

                {/* Header */}
                <header className="mb-12 text-center lg:text-left border-b border-white/10 pb-10">
                    <h1 className="text-4xl md:text-6xl font-black uppercase text-white tracking-tighter mb-4 glitch-text" data-text="MANIFESTO SPECTRA v1.0">
                        MANIFESTO SPECTRA v1.0
                    </h1>
                    <p className="text-spectra-cyan text-lg md:text-xl font-bold tracking-widest uppercase">
                        Protocolo de Proteção
                    </p>
                </header>

                {/* Section 1: Recruitment (Now Focus) */}
                <section className="mb-20">
                    <div className="text-center">
                        <h2 className="text-3xl md:text-4xl font-black uppercase text-white mb-6">
                            SUPORTE OPERACIONAL
                        </h2>
                        <p className="text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                            O SPECTRA é mantido por uma rede distribuída de especialistas voluntários. Para expandir nossa capacidade de resposta e desenvolvimento de ferramentas, buscamos colaboradores com competências técnicas e comprometimento com a privacidade.
                        </p>

                        <VolunteerForm />
                    </div>
                </section>

                {/* Section 2: Who We Are (Moved Down) */}
                <section className="mb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center border-t border-white/10 pt-20">
                    <div className="space-y-6">
                        <div className="inline-block px-2 py-1 bg-spectra-pink/20 border border-spectra-pink text-spectra-pink text-xs font-bold tracking-[0.2em] uppercase">
                            IDENTIDADE_NÚCLEO
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold uppercase text-white">
                            O Que Somos
                        </h2>
                        <div className="w-20 h-1 bg-spectra-cyan mb-6"></div>
                        <p className="text-gray-300 leading-relaxed text-lg text-justify border-l-4 border-gray-700 pl-6">
                            O SPECTRA é uma iniciativa de defesa cibernética descentralizada. Fornecemos tecnologia de ofuscação e proteção de dados para a comunidade trans e travesti.
                            <br /><br />
                            <strong className="text-white">Não somos uma ONG. Somos um protocolo de proteção digital.</strong>
                            <br /><br />
                            Entendemos que a privacidade é um direito humano fundamental, especialmente para corpos dissidentes que são alvos constantes de vigilância e violência. Nossos serviços são construídos para garantir autonomia e segurança.
                        </p>
                    </div>
                    <div className="relative h-64 lg:h-full min-h-[300px] border border-spectra-cyan/30 bg-black/50 flex items-center justify-center overflow-hidden">
                        {/* Placeholder Graphic */}
                        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,243,255,0.05)_25%,rgba(0,243,255,0.05)_50%,transparent_50%,transparent_75%,rgba(0,243,255,0.05)_75%,rgba(0,243,255,0.05)_100%)] bg-[length:20px_20px]"></div>
                        <div className="text-spectra-cyan/50 font-black text-6xl opacity-20 rotate-12 select-none">SPECTRA</div>
                    </div>
                </section>

                {/* Section 3: Archive */}
                <section className="mb-20">
                    <div className="border border-white/20 bg-[#0a0a0a] p-12 text-center relative overflow-hidden group">
                        <div className="absolute inset-0 bg-noise opacity-10 pointer-events-none"></div>
                        <h3 className="text-2xl font-bold text-gray-500 mb-2 group-hover:text-white transition-colors">
                            {">"} ARQUIVO DE OPERAÇÕES
                        </h3>
                        <p className="text-sm text-gray-600 font-mono tracking-widest uppercase mb-6">
                            [ ACESSO RESTRITO // CRIPTOGRAFIA EM ANDAMENTO ]
                        </p>
                        <div className="inline-block border border-gray-700 px-4 py-2 text-xs text-gray-500 rounded bg-black">
                            EM BREVE
                        </div>
                    </div>
                </section>

            </div>
        </main>
    );
}
