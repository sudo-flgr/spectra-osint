"use client";

import { useState, useRef } from "react";
import { Navbar } from "@/components/Navbar";
import { COMPANIES } from "@/data/companies-db";
import { Button } from "@/components/ui/Button";
import { Search, ShieldAlert, Download, FileText, ExternalLink } from "lucide-react";
import jsPDF from "jspdf";
import Link from "next/link";

export default function RectificationPage() {
    const [selectedCompany, setSelectedCompany] = useState("");
    const [dpoEmail, setDpoEmail] = useState("");
    const [formData, setFormData] = useState({
        civilName: "",
        cpf: "",
        deadname: "",
        returnEmail: "",
    });
    const [isGenerating, setIsGenerating] = useState(false);

    // Filter companies based on input
    const [filteredCompanies, setFilteredCompanies] = useState<typeof COMPANIES>([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    const handleCompanySearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSelectedCompany(value);

        if (value.length > 0) {
            const filtered = COMPANIES.filter(c =>
                c.name.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredCompanies(filtered);
            setShowSuggestions(true);
        } else {
            setShowSuggestions(false);
        }
    };

    const selectCompany = (company: typeof COMPANIES[0]) => {
        setSelectedCompany(company.name);
        setDpoEmail(company.email);
        setShowSuggestions(false);
    };

    const handleGeneratePDF = async () => {
        setIsGenerating(true);

        // Create PDF
        const doc = new jsPDF();

        // Config
        const margin = 20;
        let yPos = 20;
        const lineHeight = 7;

        // Helper to add text
        const addText = (text: string, fontSize = 12, fontStyle = "normal") => {
            doc.setFont("helvetica", fontStyle); // Standard font
            doc.setFontSize(fontSize);

            const splitText = doc.splitTextToSize(text, 170); // Max width 170
            doc.text(splitText, margin, yPos);
            yPos += (splitText.length * lineHeight);
        };

        // Header
        addText("NOTIFICAÇÃO EXTRAJUDICIAL", 16, "bold");
        addText("RETIFICAÇÃO DE DADOS PESSOAIS - LEI GERAL DE PROTEÇÃO DE DADOS", 12, "bold");
        yPos += 10;

        // Recipient
        addText(`À Atenção do Encarregado de Dados (DPO) da ${selectedCompany.toUpperCase()}`, 12, "bold");
        addText(`E-mail de Destino: ${dpoEmail}`);
        yPos += 15;

        // Body
        addText(`Eu, ${formData.civilName.toUpperCase()}, inscrito(a) no CPF ${formData.cpf}, venho por meio desta notificar formalmente esta instituição.`);
        yPos += 5;

        addText("Exerci meu direito à alteração de nome e gênero no registro civil, conforme garantido pelo Supremo Tribunal Federal (ADI 4275) e pela legislação vigente. Contudo, constatei que seus bancos de dados persistem em utilizar meu nome anterior, o que configura tratamento de dado inexato (LGPD, Art. 18, III) e violação ao princípio da veracidade (CDC, Art. 43).");
        yPos += 5;

        if (formData.deadname) {
            addText(`Nome Anterior (Para localização do cadastro): ${formData.deadname}`);
            yPos += 5;
        }

        yPos += 5;
        addText("DIANTE DO EXPOSTO, REQUEIRO:", 12, "bold");
        yPos += 5;

        addText("1. A IMEDIATA retificação dos meus dados cadastrais em todos os seus sistemas, substituindo o nome antigo pelo nome civil atual.");
        addText("2. A exclusão de quaisquer referências ao nome anterior em interfaces de atendimento, marketing ou cobrança.");
        addText("3. A confirmação do cumprimento desta solicitação no prazo legal de 5 (cinco) dias úteis (CDC, Art. 43, §3º).");

        yPos += 10;
        addText("A ausência de resposta ou a recusa injustificada ensejará denúncia à Autoridade Nacional de Proteção de Dados (ANPD) e medidas judiciais cabíveis para reparação por danos morais.");

        yPos += 15;
        addText(`Canal de Retorno: ${formData.returnEmail}`);

        yPos += 20;
        addText("___________________________________________________");
        addText(`${formData.civilName}`);
        addText(`Data: ${new Date().toLocaleDateString('pt-BR')}`);

        // Save
        doc.save(`Notificacao_Retificacao_${selectedCompany.replace(/\s/g, '_')}.pdf`);
        setIsGenerating(false);
    };

    const getDorkLink = (type: 'email' | 'privacy') => {
        if (!selectedCompany) return "#";
        const domainPart = selectedCompany.toLowerCase().replace(/\s/g, ''); // Simple approximation
        if (type === 'email') {
            return `https://www.google.com/search?q=${encodeURIComponent(`site:${domainPart}.com.br "encarregado" OR "DPO" email`)}`;
        }
        return `https://www.google.com/search?q=${encodeURIComponent(`site:${domainPart}.com.br filetype:pdf "política de privacidade"`)}`;
    };

    return (
        <main className="min-h-screen bg-spectra-bg text-white selection:bg-spectra-cyan/30 flex flex-col font-mono">
            <Navbar />

            <div className="flex-1 w-full max-w-4xl mx-auto px-6 py-32">

                {/* Header */}
                <div className="mb-12 border-b border-spectra-cyan/30 pb-6">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 bg-spectra-cyan/10 border border-spectra-cyan rounded-full">
                            <FileText className="w-8 h-8 text-spectra-cyan" />
                        </div>
                        <div>
                            <h1 className="text-2xl md:text-4xl font-black uppercase text-white tracking-tighter">
                                GERADOR DE NOTIFICAÇÃO
                            </h1>
                            <p className="text-spectra-cyan/70 text-sm md:text-lg">
                  // DIREITO À RETIFICAÇÃO LGPD/ADI 4275
                            </p>
                        </div>
                    </div>

                    <div className="bg-green-900/20 border border-green-500/30 p-4 rounded-lg flex items-start gap-3">
                        <ShieldAlert className="w-6 h-6 text-green-500 shrink-0" />
                        <p className="text-green-400 text-xs md:text-sm">
                            <strong>PRIVACIDADE ABSOLUTA:</strong> O PDF é gerado localmente no seu dispositivo. Nenhum dado digitado aqui é enviado para nossos servidores ou terceiros.
                        </p>
                    </div>
                </div>

                {/* Form Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Left Column: Personal Data */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold uppercase text-spectra-pink flex items-center gap-2">
                            <span className="w-2 h-2 bg-spectra-pink"></span>
                            SEUS DADOS
                        </h3>

                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-widest text-gray-400">Nome Civil (Atual)</label>
                            <input
                                type="text"
                                className="w-full bg-black/50 border border-spectra-cyan/30 focus:border-spectra-cyan p-3 rounded text-white outline-none transition-colors"
                                value={formData.civilName}
                                onChange={(e) => setFormData({ ...formData, civilName: e.target.value })}
                                placeholder="Nome social retificado"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-widest text-gray-400">CPF</label>
                            <input
                                type="text"
                                className="w-full bg-black/50 border border-spectra-cyan/30 focus:border-spectra-cyan p-3 rounded text-white outline-none transition-colors"
                                value={formData.cpf}
                                onChange={(e) => setFormData({ ...formData, cpf: e.target.value })}
                                placeholder="000.000.000-00"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-widest text-gray-400">Nome Anterior (Opcional)</label>
                            <input
                                type="text"
                                className="w-full bg-black/50 border border-spectra-cyan/30 focus:border-spectra-cyan p-3 rounded text-white outline-none transition-colors"
                                value={formData.deadname}
                                onChange={(e) => setFormData({ ...formData, deadname: e.target.value })}
                                placeholder="Nome que consta no sistema deles"
                            />
                            <p className="text-[10px] text-gray-500">* Informar apenas para ajudar a empresa a localizar o cadastro antigo a ser apagado.</p>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-widest text-gray-400">E-mail de Retorno</label>
                            <input
                                type="email"
                                className="w-full bg-black/50 border border-spectra-cyan/30 focus:border-spectra-cyan p-3 rounded text-white outline-none transition-colors"
                                value={formData.returnEmail}
                                onChange={(e) => setFormData({ ...formData, returnEmail: e.target.value })}
                                placeholder="Onde devem enviar a confirmação"
                            />
                        </div>
                    </div>

                    {/* Right Column: Company Data */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold uppercase text-spectra-cyan flex items-center gap-2">
                            <span className="w-2 h-2 bg-spectra-cyan"></span>
                            DADOS DA EMPRESA
                        </h3>

                        <div className="space-y-2 relative">
                            <label className="text-xs uppercase tracking-widest text-gray-400">Nome da Empresa</label>
                            <div className="relative">
                                <Search className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
                                <input
                                    type="text"
                                    className="w-full bg-black/50 border border-spectra-cyan/30 focus:border-spectra-cyan p-3 pl-10 rounded text-white outline-none transition-colors"
                                    value={selectedCompany}
                                    onChange={handleCompanySearch}
                                    placeholder="Busque por Vivo, Nubank, Itaú..."
                                />
                            </div>

                            {/* Autocomplete Dropdown */}
                            {showSuggestions && filteredCompanies.length > 0 && (
                                <div className="absolute z-10 w-full bg-black border border-spectra-cyan/50 mt-1 rounded shadow-xl max-h-60 overflow-y-auto">
                                    {filteredCompanies.map((company, idx) => (
                                        <button
                                            key={idx}
                                            className="w-full text-left p-3 hover:bg-spectra-cyan/20 text-sm border-b border-gray-800 last:border-0"
                                            onClick={() => selectCompany(company)}
                                        >
                                            <span className="font-bold text-white">{company.name}</span>
                                            <span className="block text-xs text-gray-400">{company.email}</span>
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-widest text-gray-400">E-mail do DPO (Encarregado)</label>
                            <input
                                type="email"
                                className="w-full bg-black/50 border border-spectra-cyan/30 focus:border-spectra-cyan p-3 rounded text-white outline-none transition-colors"
                                value={dpoEmail}
                                onChange={(e) => setDpoEmail(e.target.value)}
                                placeholder="dpo@empresa.com.br"
                            />
                        </div>

                        {/* OSINT Fallback */}
                        {selectedCompany && !dpoEmail && (
                            <div className="bg-gray-900/50 border border-gray-700 p-4 rounded space-y-3 animation-fade-in">
                                <p className="text-xs text-orange-400 font-bold flex items-center gap-2">
                                    <ShieldAlert className="w-4 h-4" />
                                    Contato não encontrado na base. Use OSINT:
                                </p>
                                <div className="grid grid-cols-2 gap-2">
                                    <Link
                                        href={getDorkLink('email')}
                                        target="_blank"
                                        className="flex items-center justify-center gap-2 text-[10px] md:text-xs bg-black border border-gray-600 hover:border-spectra-cyan text-gray-300 hover:text-spectra-cyan p-2 rounded transition-all"
                                    >
                                        <Search className="w-3 h-3" />
                                        BUSCAR EMAIL DPO
                                    </Link>
                                    <Link
                                        href={getDorkLink('privacy')}
                                        target="_blank"
                                        className="flex items-center justify-center gap-2 text-[10px] md:text-xs bg-black border border-gray-600 hover:border-spectra-cyan text-gray-300 hover:text-spectra-cyan p-2 rounded transition-all"
                                    >
                                        <ExternalLink className="w-3 h-3" />
                                        BUSCAR POLÍTICA
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Action Button */}
                <div className="mt-12 flex justify-end">
                    <Button
                        onClick={handleGeneratePDF}
                        className="w-full md:w-auto bg-spectra-cyan text-black hover:bg-white hover:text-black font-bold uppercase tracking-widest px-8 py-6 text-lg transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={!selectedCompany || !formData.civilName || !formData.cpf}
                    >
                        {isGenerating ? "GERANDO DOCUMENTO..." : (
                            <>
                                <Download className="w-6 h-6" />
                                BAIXAR NOTIFICAÇÃO (PDF)
                            </>
                        )}
                    </Button>
                </div>

            </div>
        </main>
    );
}
