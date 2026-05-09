import { Download, FileText, Terminal } from 'lucide-react';

export default function MaterialsSection() {
  return (
    <section id="materiais" className="py-20 bg-black border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-spectra-cyan mb-8 uppercase tracking-widest flex items-center gap-3">
          <Terminal className="w-6 h-6 text-pink-500" />
          Acervo Tático
        </h2>
        <p className="text-gray-400 mb-12 max-w-2xl font-mono text-sm">
          Arquivos, apresentações e documentações disponibilizados pelo SPECTRA para uso comunitário, estudo e multiplicação do conhecimento em autodefesa digital.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card da Palestra Cryptorave */}
          <div className="bg-zinc-900/50 border border-zinc-800 hover:border-spectra-cyan/50 transition-colors p-6 rounded-lg group flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-black font-bold bg-spectra-cyan px-2 py-1 rounded">CRYPTORAVE 2026</span>
                <FileText className="w-5 h-5 text-gray-500 group-hover:text-spectra-cyan transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-gray-200 mb-2 uppercase">Do Doxxing à Retificação</h3>
              <p className="text-sm text-gray-400 mb-6 font-sans">
                Slides oficiais da oficina. Estratégias práticas para mapear exposição, identificar data brokers e remover dados expostos na internet utilizando a LGPD.
              </p>
            </div>
            <a
              href="/slides-cryptorave-2026.pdf" 
              download
              className="flex items-center justify-center gap-2 w-full bg-transparent text-spectra-cyan border border-spectra-cyan hover:bg-spectra-cyan hover:text-black py-3 rounded font-bold transition-all uppercase text-sm"
            >
              <Download className="w-4 h-4" />
              Baixar Material (PDF)
            </a>
          </div>

          {/* Espaço reservado para futuros uploads */}
          <div className="bg-black border border-zinc-800 border-dashed p-6 rounded-lg flex flex-col items-center justify-center text-center opacity-50">
            <Terminal className="w-8 h-8 text-zinc-600 mb-3" />
            <p className="text-sm text-zinc-500 font-mono">NOVOS ARQUIVOS EM BREVE...</p>
          </div>
        </div>
      </div>
    </section>
  );
}