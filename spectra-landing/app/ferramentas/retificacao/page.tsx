"use client";

import React, { useState } from 'react';
import { Copy, FileText, Download, AlertTriangle, CheckCircle } from 'lucide-react';

export default function RetificacaoPage() {
  const [tipoAmeaca, setTipoAmeaca] = useState('retificacao');
  const [copiado, setCopiado] = useState(false);

  // Estado do Formulário
  const [formData, setFormData] = useState({
    nome: '',
    cpf: '',
    endereco: '',
    telefone: '',
    email: '',
    empresa: '',
    dpoEmail: '',
    urls: '',
    cidade: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Motor de Geração de Texto Jurídico
  const gerarTexto = () => {
    const dataAtual = new Date().toLocaleDateString('pt-BR');
    const { nome, cpf, endereco, telefone, email, empresa, dpoEmail, urls, cidade } = formData;

    const identificacao = `Eu, ${nome || '[SEU NOME COMPLETO]'}, portador(a) do CPF sob o nº ${cpf || '[SEU CPF]'}, residente e domiciliado(a) em ${endereco || '[SEU ENDEREÇO]'}, telefone ${telefone || '[SEU TELEFONE]'}, e-mail ${email || '[SEU E-MAIL]'}, venho por meio desta NOTIFICAR EXTRAJUDICIALMENTE a empresa ${empresa || '[NOME DA EMPRESA]'}, na figura de seu Encarregado de Proteção de Dados (DPO) através do contato ${dpoEmail || '[E-MAIL DO DPO]'}.`;

    let fundamentacao = '';
    let pedidos = '';
    let prazo = '';

    if (tipoAmeaca === 'retificacao') {
      fundamentacao = `A presente notificação fundamenta-se no direito constitucional ao nome civil, assegurado pela decisão do Supremo Tribunal Federal (ADI 4275), bem como no Artigo 18, inciso III, da Lei Geral de Proteção de Dados (Lei nº 13.709/2018 - LGPD), que garante a correção de dados incompletos, inexatos ou desatualizados. A manutenção do meu nome de registro anterior em seus sistemas configura violação continuada dos meus direitos de personalidade e expõe a requerente a constrangimentos injustificados.`;
      pedidos = `1. A IMEDIATA retificação dos meus dados cadastrais em todos os seus sistemas e bancos de dados, substituindo qualquer referência ao nome antigo pelo meu nome civil atual.\n2. A exclusão de quaisquer referências ao nome anterior em interfaces de atendimento, marketing ou cobrança.\n3. A confirmação por escrito do cumprimento desta solicitação.`;
      prazo = `5 (cinco) dias úteis`;
    } else if (tipoAmeaca === 'databroker') {
      fundamentacao = `A presente notificação fundamenta-se no Artigo 18, incisos IV e VI, da Lei Geral de Proteção de Dados (Lei nº 13.709/2018 - LGPD), que garante a anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade com a lei. Os meus dados pessoais ${urls ? `(atualmente indexados e encontrados em: ${urls})` : ''} foram coletados e indexados por sua empresa sem o meu consentimento explícito e estão sendo comercializados/distribuídos de forma lesiva à minha privacidade.`;
      pedidos = `1. A EXCLUSÃO IMEDIATA E DEFINITIVA de todos os meus dados pessoais de suas bases de dados e de quaisquer plataformas públicas que os senhores operem.\n2. A informação clara e completa sobre a origem (fonte original) de onde coletaram meus dados.\n3. A informação exata sobre QUAIS TERCEIROS (entidades públicas ou privadas) receberam o uso compartilhado dos meus dados a partir da base de vocês, conforme me garante o Art. 18, VII da LGPD.`;
      prazo = `5 (cinco) dias úteis`;
    } else if (tipoAmeaca === 'doxxing') {
      fundamentacao = `A presente notificação reveste-se de CARÁTER DE URGÊNCIA MÁXIMA, pois envolve exposição criminosa e risco iminente à minha integridade física e psicológica. Fundamenta-se na Lei Geral de Proteção de Dados (LGPD) e, subsidiariamente, no Art. 19 do Marco Civil da Internet (Lei nº 12.965/2014) no que tange à responsabilização imediata de provedores de aplicação.\n\nA exposição e vazamento dos meus dados ${urls ? `na URL: ${urls}` : ''} ocorre em claro contexto de ameaça, assédio direcionado (Doxxing) e potencial crime cibernético capitulado no Código Penal Brasileiro.`;
      pedidos = `1. A REMOÇÃO E BLOQUEIO IMEDIATO da URL citada e de quaisquer menções aos meus dados pessoais e imagens na plataforma administrada por esta corporação.\n2. A preservação imediata dos logs de acesso (IP, data, hora e porta lógica) do usuário que publicou tais informações para futura requisição de autoridades policiais e judiciais, conforme determina o Marco Civil da Internet.\n\nReservado o espaço logo abaixo, em anexo, para a devida comprovação material das evidências (capturas de tela com as respectivas URLs e data/hora do incidente).`;
      prazo = `48 (quarenta e oito) horas`;
    }

    const conclusao = `Ressalto de antemão que o descumprimento ou a resposta genérica a esta notificação implicará em denúncia formal e imediata à Autoridade Nacional de Proteção de Dados (ANPD). A inércia sujeitará a empresa às sanções do Art. 52 da LGPD, que incluem pesadas multas administrativas e bloqueio da base de dados, além do ajuizamento incontinenti das medidas judiciais cabíveis para reparação de todos os danos morais e materiais causados.

Certo(a) de sua estrita colaboração e competência para a resolução pacífica e legal desta infração, aguardo retorno no canal oficial providenciado.

${cidade || '[SUA CIDADE]'}, ${dataAtual}.

___________________________________________________
${nome || '[SEU NOME COMPLETO]'}
CPF: ${cpf || '[SEU CPF]'}`;

    return `NOTIFICAÇÃO EXTRAJUDICIAL - LEI GERAL DE PROTEÇÃO DE DADOS (LGPD)\n\n${identificacao}\n\nDOS FATOS E FUNDAMENTOS JURÍDICOS\n${fundamentacao}\n\nDOS PEDIDOS\nDiante de todo o exposto, REQUEIRO no prazo peremptório de ${prazo}:\n\n${pedidos}\n\n${conclusao}`;
  };

  // Funções de Exportação
  const handleCopy = async () => {
    await navigator.clipboard.writeText(gerarTexto());
    setCopiado(true);
    setTimeout(() => setCopiado(false), 2000);
  };

  const handlePrintPDF = () => {
    // Aciona a impressão do navegador, o Tailwind esconderá os painéis (print:hidden)
    window.print();
  };

  const handleDownloadWord = () => {
    const texto = gerarTexto();
    // HTML Wrapper legível pelo MS Word ou LibreOffice
    const html = `<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
    <head><meta charset='utf-8'><title>Notificacao Extrajudicial</title></head>
    <body style="font-family: Arial, sans-serif; font-size: 11pt; line-height: 1.6; padding: 20px; text-align: justify;">
      ${texto.replace(/\n/g, '<br>')}
    </body></html>`;
    
    // Converte para Blob e gera o Download
    const blob = new Blob(['\ufeff', html], { type: 'application/msword' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Notificacao_${tipoAmeaca}_SPECTRA.doc`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-black text-gray-300 p-4 md:p-8 font-mono">
      <div className="max-w-5xl mx-auto print:max-w-full print:p-0">
        
        <header className="mb-8 print:hidden">
          <h1 className="text-3xl font-bold text-spectra-cyan mb-2">{'>'} GERADOR DE NOTIFICAÇÃO_</h1>
          <p className="text-gray-500">
            [Protocolo OpSec ativado: O processamento ocorre 100% no seu navegador. Nenhum log ou dado inserido será enviado ou armazenado em nossos servidores.]
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* PAINEL DE CONTROLE - ESCONDIDO NA IMPRESSÃO */}
          <div className="space-y-6 print:hidden">
            
            {/* SELETOR DE AMEAÇA */}
            <div className="bg-zinc-900 border border-spectra-cyan/30 p-6 rounded-md shadow-[0_0_15px_rgba(0,255,255,0.05)]">
              <label className="block text-sm text-spectra-cyan mb-3 uppercase font-bold tracking-widest flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" /> 1. Classificação do Incidente
              </label>
              <select 
                value={tipoAmeaca}
                onChange={(e) => setTipoAmeaca(e.target.value)}
                className="w-full bg-black border border-zinc-700 text-gray-200 p-3 rounded focus:outline-none focus:border-spectra-cyan transition-colors cursor-pointer"
              >
                <option value="retificacao">Retificação de Nome/Gênero (ADI 4275)</option>
                <option value="databroker">Exclusão em Data Broker (Venda de Dados)</option>
                <option value="doxxing">Remoção Urgente (Doxxing / Exposição Crítica)</option>
              </select>
            </div>

            {/* FORMULÁRIO DE DADOS */}
            <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-md">
              <h2 className="text-pink-500 text-sm mb-4 uppercase font-bold tracking-widest">2. Inserção de Dados (Client-Side)</h2>
              
              <div className="space-y-4">
                <input type="text" name="nome" placeholder="Seu Nome Civil Atual" onChange={handleChange} className="w-full bg-black border border-zinc-700 p-3 rounded text-sm focus:border-pink-500 outline-none transition-colors" />
                
                <div>
                  <input type="text" name="cpf" placeholder="Seu CPF (Somente Números ou com Pontos)" onChange={handleChange} className="w-full bg-black border border-zinc-700 p-3 rounded text-sm focus:border-pink-500 outline-none transition-colors" />
                  <p className="text-xs text-rose-500/80 mt-2 flex items-start gap-1">
                    <AlertTriangle className="w-3 h-3 flex-shrink-0 mt-0.5" />
                    <span>Aviso Legal: A ferramenta não bloqueia seu uso, mas inserir um CPF irreal permite que a empresa recuse sua denúncia legalmente.</span>
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="text" name="telefone" placeholder="Telefone de Contato" onChange={handleChange} className="w-full bg-black border border-zinc-700 p-3 rounded text-sm focus:border-pink-500 outline-none transition-colors" />
                  <input type="text" name="cidade" placeholder="Sua Cidade - UF" onChange={handleChange} className="w-full bg-black border border-zinc-700 p-3 rounded text-sm focus:border-pink-500 outline-none transition-colors" />
                </div>

                <input type="text" name="endereco" placeholder="Endereço Completo (Rua, Nº, Bairro, CEP)" onChange={handleChange} className="w-full bg-black border border-zinc-700 p-3 rounded text-sm focus:border-pink-500 outline-none transition-colors" />
                <input type="email" name="email" placeholder="Seu E-mail (Para Retorno da Empresa)" onChange={handleChange} className="w-full bg-black border border-zinc-700 p-3 rounded text-sm focus:border-pink-500 outline-none transition-colors" />
                
                <hr className="border-zinc-800 my-6" />
                
                <h3 className="text-spectra-cyan text-xs mb-3 uppercase font-bold">Dados do Alvo (Controlador)</h3>
                
                <input type="text" name="empresa" placeholder="Nome da Empresa / Plataforma Alvo" onChange={handleChange} className="w-full bg-black border border-zinc-700 p-3 rounded text-sm focus:border-spectra-cyan outline-none transition-colors" />
                <input type="email" name="dpoEmail" placeholder="E-mail do DPO ou Setor Jurídico" onChange={handleChange} className="w-full bg-black border border-zinc-700 p-3 rounded text-sm focus:border-spectra-cyan outline-none transition-colors" />
                
                {tipoAmeaca !== 'retificacao' && (
                  <textarea name="urls" placeholder="Cole aqui os links (URLs) exatos de onde seus dados estão vazados..." onChange={handleChange} className="w-full bg-black border border-zinc-700 p-3 rounded text-sm h-24 focus:border-spectra-cyan outline-none resize-none transition-colors"></textarea>
                )}
              </div>
            </div>

            {/* AÇÕES DE EXPORTAÇÃO */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button onClick={handleCopy} className="flex-1 flex items-center justify-center gap-2 bg-transparent border border-spectra-cyan text-spectra-cyan hover:bg-spectra-cyan/10 p-3.5 rounded font-bold transition-all text-sm uppercase">
                {copiado ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                {copiado ? 'Copiado!' : 'Copiar Texto'}
              </button>
              
              <button onClick={handleDownloadWord} className="flex-1 flex items-center justify-center gap-2 bg-spectra-cyan/10 border border-spectra-cyan text-spectra-cyan hover:bg-spectra-cyan/20 p-3.5 rounded font-bold transition-all text-sm uppercase">
                <FileText className="w-4 h-4" />
                Baixar Word
              </button>
              
              <button onClick={handlePrintPDF} className="flex-1 flex items-center justify-center gap-2 bg-pink-500/10 border border-pink-500 text-pink-500 hover:bg-pink-500/20 p-3.5 rounded font-bold transition-all text-sm uppercase">
                <Download className="w-4 h-4" />
                Baixar PDF
              </button>
            </div>
          </div>

          {/* VISUALIZAÇÃO DO DOCUMENTO - IMPRESSA/PDF */}
          <div className="bg-zinc-100 text-black p-8 md:p-10 rounded-md shadow-lg min-h-[800px] whitespace-pre-wrap font-sans text-[13px] md:text-sm leading-relaxed print:m-0 print:p-0 print:shadow-none print:bg-white print:text-black">
            {gerarTexto()}
          </div>

        </div>
      </div>
    </div>
  );
}