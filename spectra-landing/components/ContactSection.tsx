"use client";

import { Button } from "./ui/Button";

export function ContactSection() {
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
                    <form className="space-y-6 font-mono text-sm max-w-2xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-spectra-cyan uppercase tracking-widest text-xs font-bold block">
                                    Nome / Identificação (Opcional)
                                </label>
                                <input
                                    type="text"
                                    className="w-full bg-black/50 border border-spectra-cyan/30 focus:border-spectra-cyan p-3 text-white outline-none transition-colors placeholder:text-gray-700"
                                    placeholder="Como prefere ser chamado..."
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-spectra-cyan uppercase tracking-widest text-xs font-bold block">
                                    Contato para Retorno
                                </label>
                                <input
                                    type="text"
                                    className="w-full bg-black/50 border border-spectra-cyan/30 focus:border-spectra-cyan p-3 text-white outline-none transition-colors placeholder:text-gray-700"
                                    placeholder="E-mail, Telegram ou Signal..."
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-green-500 uppercase tracking-widest text-xs font-bold block">
                                Relato do Ocorrido
                            </label>
                            <textarea
                                rows={6}
                                className="w-full bg-black/50 border border-green-500/30 focus:border-green-500 p-3 text-green-400 outline-none transition-colors placeholder:text-green-900/50"
                                placeholder="Descreva o que aconteceu com o máximo de detalhes possível..."
                            ></textarea>
                        </div>

                        {/* OPSEC Warning */}
                        <div className="border-t border-red-500/30 pt-6 mt-8">
                            <div className="flex items-start gap-3 bg-red-950/20 p-4 border border-red-500/20 mb-6">
                                <span className="text-red-500 font-bold text-lg">[!]</span>
                                <p className="text-red-400 text-xs md:text-sm">
                                    AVISO IMPORTANTE: Para sua segurança, evite enviar senhas ou dados bancários por este formulário. Se possível, utilize canais criptografados para informações sensíveis.
                                </p>
                            </div>

                            <Button className="w-full bg-spectra-pink/10 border-2 border-spectra-pink text-spectra-pink hover:bg-spectra-pink hover:text-black font-bold uppercase tracking-widest py-4 transition-all">
                                ENVIAR MENSAGEM
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
