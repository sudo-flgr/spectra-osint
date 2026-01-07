"use client";

import { Button } from "./ui/Button";
import { useState } from "react";

export function VolunteerForm() {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('submitting');

        const form = e.currentTarget;
        const data = new FormData(form);

        try {
            const response = await fetch("https://formspree.io/f/mykzrkbk", {
                method: "POST",
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setStatus('success');
                form.reset();
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    if (status === 'success') {
        return (
            <div className="max-w-4xl mx-auto border-2 border-spectra-pink p-1 md:p-2 bg-black/40 backdrop-blur-sm mt-8">
                <div className="border border-spectra-pink/20 p-12 relative overflow-hidden flex flex-col items-center justify-center text-center">
                    <div className="w-16 h-16 rounded-full bg-spectra-pink/20 flex items-center justify-center mb-6 border border-spectra-pink animate-pulse">
                        <span className="text-2xl">★</span>
                    </div>
                    <h2 className="text-2xl font-black uppercase text-white mb-4 tracking-tighter">
                        PERFIL RECEBIDO
                    </h2>
                    <p className="text-spectra-pink font-mono text-sm mb-8">
                        // DADOS CRIPTOGRAFADOS E ARQUIVADOS. ENTRAREMOS EM CONTATO VIA CANAL SEGURO.
                    </p>
                    <Button
                        onClick={() => setStatus('idle')}
                        className="bg-spectra-pink/10 border border-spectra-pink text-spectra-pink hover:bg-spectra-pink hover:text-black font-bold uppercase tracking-widest px-8 py-3 transition-all"
                    >
                        [ ENVIAR OUTRO PERFIL ]
                    </Button>
                </div>
            </div>
        )
    }

    return (
        <div className="max-w-3xl mx-auto mt-12 border border-spectra-pink/30 bg-black/50 p-6 md:p-10 relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-spectra-pink to-transparent opacity-50"></div>

            <form onSubmit={handleSubmit} className="space-y-6 font-mono text-sm">
                <input type="hidden" name="subject" value="RECRUTAMENTO SPECTRA" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-spectra-pink uppercase tracking-widest text-xs font-bold block">
                            Codename / Identificação
                        </label>
                        <input
                            type="text"
                            name="codename"
                            required
                            className="w-full bg-black/50 border border-spectra-pink/30 focus:border-spectra-pink p-3 text-white outline-none transition-colors placeholder:text-gray-700 disabled:opacity-50"
                            placeholder="Seu aka..."
                            disabled={status === 'submitting'}
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-spectra-pink uppercase tracking-widest text-xs font-bold block">
                            Contato Seguro
                        </label>
                        <input
                            type="text"
                            name="contact"
                            required
                            className="w-full bg-black/50 border border-spectra-pink/30 focus:border-spectra-pink p-3 text-white outline-none transition-colors placeholder:text-gray-700 disabled:opacity-50"
                            placeholder="Email, Session, Signal..."
                            disabled={status === 'submitting'}
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-spectra-pink uppercase tracking-widest text-xs font-bold block">
                        Competências Técnicas
                    </label>
                    <div className="relative">
                        <select
                            name="skills"
                            required
                            className="w-full bg-black/50 border border-spectra-pink/30 focus:border-spectra-pink p-3 text-white outline-none transition-colors appearance-none cursor-pointer disabled:opacity-50"
                            disabled={status === 'submitting'}
                        >
                            <option value="" disabled selected>Selecione sua área principal...</option>
                            <option value="Dev Fullstack">Desenvolvimento (Fullstack)</option>
                            <option value="OSINT">OSINT / Investigação</option>
                            <option value="Design">Design & UI</option>
                            <option value="Legal">Jurídico / LGPD</option>
                            <option value="Community">Gestão de Comunidade</option>
                        </select>
                        <div className="absolute right-3 top-3 pointer-events-none text-spectra-pink/50">▼</div>
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-white uppercase tracking-widest text-xs font-bold block">
                        Motivação / Mensagem
                    </label>
                    <textarea
                        rows={4}
                        name="motivation"
                        className="w-full bg-black/50 border border-spectra-pink/30 focus:border-spectra-pink p-3 text-white outline-none transition-colors placeholder:text-gray-700 disabled:opacity-50"
                        placeholder="Por que você quer se juntar ao SPECTRA?"
                        disabled={status === 'submitting'}
                    ></textarea>
                </div>

                <Button
                    className="w-full bg-spectra-pink text-black hover:bg-white hover:text-black font-bold uppercase tracking-widest py-4 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                    disabled={status === 'submitting'}
                >
                    {status === 'submitting' ? 'ENVIANDO PERFIL...' : '[ ENVIAR PERFIL ]'}
                </Button>
            </form>
        </div>
    );
}
