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
            <span className="text-[#f7a8b8]">const</span> <span className="text-[#55cdfc]">SPECTRA_PROTOCOL</span> <span className="text-white">=</span> {"{"}
            {"\n"}  <span className="text-[#55cdfc]">mission</span>: <span className="text-[#f7a8b8]">&apos;PROTECT_VULNERABLE_GROUPS&apos;</span>,
            {"\n"}  <span className="text-[#55cdfc]">target</span>: [
            {"\n"}    <span className="text-[#f7a8b8]">&apos;MINORIAS&apos;</span>,
            {"\n"}    <span className="text-[#f7a8b8]">&apos;DISSIDENTES&apos;</span>,
            {"\n"}    <span className="text-[#f7a8b8]">&apos;ALVOS_POLITICOS&apos;</span>
            {"\n"}  ],
            {"\n"}  <span className="text-[#55cdfc]">status</span>: <span className="text-[#f7a8b8] animate-pulse">&apos;ACTIVE_DEFENSE&apos;</span>,
            {"\n"}  <span className="text-[#55cdfc]">intro</span>: <span className="text-purple-400">() =&gt;</span> {"{"}
            {"\n"}    <span className="text-gray-400">return</span> <span className="text-[#f7a8b8]">&quot;A vigilância não é igual para todos.&quot;</span>;
            {"\n"}  {"},"}
            {"\n"}  <span className="text-[#55cdfc]">reality</span>: <span className="text-purple-400">() =&gt;</span> {"{"}
            {"\n"}    <span className="text-gray-400">return</span> <span className="text-[#f7a8b8]">&quot;Grupos vulneráveis são os primeiros alvos &quot;</span> +
            {"\n"}           <span className="text-[#f7a8b8]">&quot;da exploração de dados e do ódio digital. &quot;</span> +
            {"\n"}           <span className="text-[#f7a8b8]">&quot;Nossa segurança não é um produto. É sobrevivência.&quot;</span>;
            {"\n"}  {"},"}
            {"\n"}  <span className="text-[#55cdfc]">execution</span>: <span className="text-red-500">&apos;DECENTRALIZE_AND_PROTECT&apos;</span>
            {"\n"}{"};"}
            <span className="inline-block w-3 h-5 bg-[#55cdfc] animate-pulse ml-1 align-middle"></span>
          </code>
        </pre>
      </div>
    </div>
  );
}
