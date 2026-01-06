"use client";

export function CodeBlock() {
  return (
    <div className="relative border-2 border-transparent bg-black w-full font-mono text-sm md:text-base text-left rounded-lg overflow-hidden animate-pulse-[border-color_4s_ease-in-out_infinite]" style={{ borderImage: 'linear-gradient(to right, #55cdfc, #f7a8b8, #ffffff, #f7a8b8, #55cdfc) 1' }}>
      {/* Window Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-gradient-to-r from-[#55cdfc] via-[#f7a8b8] to-[#ffffff] text-black font-bold uppercase tracking-wider">
        <span>MANIFESTO_SPECTRA.js</span>
        <div className="flex space-x-1">
          <div className="w-3 h-3 bg-black"></div>
          <div className="w-3 h-3 bg-black"></div>
        </div>
      </div>

      {/* Code Content */}
      <div className="p-6 overflow-x-auto relative min-h-[300px]">
        {/* Grid overlay inside code block */}
        <div className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(rgba(85,205,252,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(247,168,184,0.2)_1px,transparent_1px)] bg-[size:20px_20px]"></div>

        <pre className="text-gray-300 relative z-10">
          <code>
            <span className="text-[#f7a8b8]">const</span> <span className="text-[#55cdfc]">PROTOCOLO_SPECTRA</span> <span className="text-white">=</span> {"{"}
            {"\n"}  <span className="text-[#55cdfc]">missao</span>: <span className="text-[#f7a8b8]">&apos;Autodefesa_Digital&apos;</span>,
            {"\n"}  <span className="text-[#55cdfc]">status</span>: <span className="text-[#f7a8b8] animate-pulse">&apos;VIGILANTE&apos;</span>,
            {"\n"}  <span className="text-[#55cdfc]">protegendo</span>: [
            {"\n"}    <span className="text-[#f7a8b8]">&apos;Comunidade_Trans&apos;</span>,
            {"\n"}    <span className="text-[#f7a8b8]">&apos;Travestis&apos;</span>,
            {"\n"}    <span className="text-[#f7a8b8]">&apos;População_Periférica&apos;</span>
            {"\n"}  ],
            {"\n"}  <span className="text-[#55cdfc]">alvos_de_combate</span>: [
            {"\n"}    <span className="text-red-500">&apos;Hate_Groups&apos;</span>,
            {"\n"}    <span className="text-red-500">&apos;Vigilância_Corporativa&apos;</span>,
            {"\n"}    <span className="text-red-500">&apos;Transfobia_Digital&apos;</span>
            {"\n"}  ],
            {"\n"}  <span className="text-[#55cdfc]">aviso</span>: <span className="text-[#ffffff] bg-red-900/50 px-1">&apos;NENHUM_PASSO_ATRAS&apos;</span>
            {"\n"}{"};"}
            <span className="inline-block w-3 h-5 bg-[#55cdfc] animate-pulse ml-1 align-middle"></span>
          </code>
        </pre>
      </div>
    </div>
  );
}
