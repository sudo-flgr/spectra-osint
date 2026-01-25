"use client";

import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Download } from "lucide-react";

export default function GuidesPage() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-spectra-cyan/30 flex flex-col font-mono relative">
            <Navbar />

            <div className="flex-1 w-full max-w-3xl mx-auto px-6 py-32 flex flex-col justify-center">

                {/* Header Document Style */}
                <div className="border border-white/20 p-8 md:p-12 relative bg-[#0a0a0a]">
                    <div className="absolute top-0 left-0 w-full h-1 bg-spectra-cyan"></div>

                    <header className="mb-10 text-center border-b border-white/10 pb-8">
                        <h1 className="text-3xl md:text-5xl font-black uppercase text-white tracking-tighter mb-4">
                            MANUAL DE CUIDADOS DIGITAIS
                        </h1>
                        <p className="text-spectra-cyan text-sm md:text-base font-bold tracking-[0.2em] uppercase">
                            VERSÃO FINAL OFICIAL
                        </p>
                    </header>

                    <div className="space-y-6 text-gray-300 leading-relaxed text-lg text-justify font-sans">
                        <p>
                            A segurança digital não é um luxo, é uma estratégia de sobrevivência. Este manual compila protocolos essenciais de autodefesa, desde a proteção de contas e prevenção contra doxxing até estratégias jurídicas para retificação de nome.
                        </p>
                        <p>
                            Esta é uma operação conjunta. O material foi desenvolvido através da união tática entre SPECTRA, IBRAT-SP (Instituto Brasileiro de Transmasculinidades), Pajubá Tech e Rede Transfeminista de Cuidados Digitais.
                        </p>
                        <p>
                            Iniciativa fomentada pela Ação Educativa (através do Edital 'No Corre!') e Artigo 19 Brasil e América do Sul. O conhecimento é livre. Distribua este arquivo.
                        </p>
                    </div>

                    <div className="mt-12 text-center">
                        <Link
                            href="/manual-seguranca-digital-trans.pdf"
                            target="_blank"
                            download
                            className="inline-block"
                        >
                            <Button className="bg-spectra-cyan text-black hover:bg-white hover:text-black font-bold uppercase tracking-widest px-8 py-4 text-lg transition-all flex items-center justify-center gap-3 w-full md:w-auto">
                                <Download className="w-6 h-6" />
                                [ BAIXAR MANUAL COMPLETO (PDF) ]
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
