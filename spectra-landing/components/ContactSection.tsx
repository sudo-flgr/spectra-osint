"use client";

import { Button } from "./ui/Button";
import { useState } from "react";

export function ContactSection() {
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
            <section id="contato" className="py-20 px-8 relative bg-[#050505]">
                <div className="max-w-4xl mx-auto border-2 border-green-500 p-1 md:p-2 bg-black/40 backdrop-blur-sm">
                    <div className="border border-green-500/20 p-12 md:p-24 relative overflow-hidden flex flex-col items-center justify-center text-center">
                        <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mb-6 border border-green-500 animate-[pulse_3s_ease-in-out_infinite]">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-black uppercase text-white mb-4 tracking-tighter">
                            TRANSMISSÃO SEGURA CONCLUÍDA
                        </h2>
                        <p className="text-green-400 font-mono text-sm mb-8">
                            // CANAL FECHADO. PACOTE ENTREGUE COM ENCRIPTAÇÃO DE PONTA-A-PONTA.
                        </p>
                        <Button
                            onClick={() => setStatus('idle')}
                            className="bg-green-500/10 border border-green-500 text-green-500 hover:bg-green-500 hover:text-black font-bold uppercase tracking-widest px-8 py-3 transition-all"
                        >
                            [ ENVIAR NOVA MENSAGEM ]
                        </Button>
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section id="contato" className="py-20 px-8 relative bg-[#050505]">
            <div className="max-w-4xl mx-auto border-2 border-spectra-pink/30 p-1 md:p-2 bg-black/40 backdrop-blur-sm">
                <div className="border border-spectra-pink/20 p-6 md:p-12 relative overflow-hidden">

                    {/* Header */}
                    <div className="mb-8 border-b border-spectra-pink/30 pb-4">
                        <h2 className="text-2xl md:text-3xl font-black uppercase text-white mb-2 tracking-tighter">
                            CANAL DE DENÚNCIA E APOIO
                        </h2>
                        <p className="text-spectra-pink/70 font-mono text-xs md:text-sm">
                            Espaço seguro para acolhimento e suporte.
                        </p>
                    </div>

                    {/* Form */}
                    <form
                        onSubmit={handleSubmit}
                        className="space-y-6 font-mono text-sm max-w-2xl"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-spectra-cyan uppercase tracking-widest text-xs font-bold block">
                                    Nome / Identificação (Opcional)
                                </label>
                                <input
                                    type="text"
                                    name="nome"
                                    className="w-full bg-black/50 border border-spectra-cyan/30 focus:border-spectra-cyan p-3 text-white outline-none transition-colors placeholder:text-gray-700 disabled:opacity-50"
                                    placeholder="Como prefere ser chamado..."
                                    disabled={status === 'submitting'}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-spectra-cyan uppercase tracking-widest text-xs font-bold block">
                                    Contato para Retorno
                                </label>
                                <input
                                    type="text"
                                    name="contato"
                                    className="w-full bg-black/50 border border-spectra-cyan/30 focus:border-spectra-cyan p-3 text-white outline-none transition-colors placeholder:text-gray-700 disabled:opacity-50"
                                    placeholder="E-mail, Telegram ou Signal..."
                                    disabled={status === 'submitting'}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-green-500 uppercase tracking-widest text-xs font-bold block">
                                Relato do Ocorrido
                            </label>
                            <textarea
                                rows={6}
                                name="mensagem"
                                className="w-full bg-black/50 border border-green-500/30 focus:border-green-500 p-3 text-green-400 outline-none transition-colors placeholder:text-green-900/50 disabled:opacity-50"
                                placeholder="Descreva o que aconteceu com o máximo de detalhes possível..."
                                disabled={status === 'submitting'}
                            ></textarea>
                        </div>

                        {/* Error Message */}
                        {status === 'error' && (
                            <div className="p-3 bg-red-950/40 border border-red-500 text-red-500 text-xs font-bold animate-pulse">
                                [ ! ] FALHA NO UPLINK. TENTE NOVAMENTE.
                            </div>
                        )}

                        {/* OPSEC Warning */}
                        <div className="border-t border-red-500/30 pt-6 mt-8">
                            <div className="flex items-start gap-3 bg-red-950/20 p-4 border border-red-500/20 mb-6">
                                <span className="text-red-500 font-bold text-lg">[!]</span>
                                <p className="text-red-400 text-xs md:text-sm">
                                    AVISO IMPORTANTE: Para sua segurança, evite enviar senhas ou dados bancários por este formulário. Se possível, utilize canais criptografados para informações sensíveis.
                                </p>
                            </div>

                            <Button
                                className="w-full bg-spectra-pink/10 border-2 border-spectra-pink text-spectra-pink hover:bg-spectra-pink hover:text-black font-bold uppercase tracking-widest py-4 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                                disabled={status === 'submitting'}
                            >
                                {status === 'submitting' ? 'TRANSMITINDO PACKETS...' : 'ENVIAR MENSAGEM'}
                            </Button>
                        </div>
                    </form>

                    {/* Decorative Corner Effects */}
                    <div className="absolute top-0 right-0 p-2">
                        <div className="w-20 h-[1px] bg-spectra-pink mb-1"></div>
                        <div className="w-[1px] h-20 bg-spectra-pink float-right"></div>
                    </div>
                    <div className="absolute bottom-0 left-0 p-2 transform rotate-180">
                        <div className="w-20 h-[1px] bg-spectra-cyan mb-1"></div>
                        <div className="w-[1px] h-20 bg-spectra-cyan float-right"></div>
                    </div>

                </div>
            </div>
        </section>
    );
}
