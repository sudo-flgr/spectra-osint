"use client";

export function CodeBlock() {
  return (
    <div className="relative rounded-lg overflow-hidden bg-[#0d0d0d] border border-white/10 shadow-2xl font-mono text-sm md:text-base text-left">
      {/* Window Header */}
      <div className="flex items-center px-4 py-2 bg-[#1a1a1a] border-b border-white/5">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
        </div>
        <div className="ml-4 text-xs text-gray-500">mission_manifest.js</div>
      </div>

      {/* Code Content */}
      <div className="p-6 overflow-x-auto">
        <pre className="text-gray-300">
          <code>
            <span className="text-spectra-pink">const</span> <span className="text-blue-400">mission</span> <span className="text-white">=</span> {"{"}
            {"\n"}  <span className="text-spectra-cyan">target</span>: <span className="text-green-400">&apos;Protection&apos;</span>,
            {"\n"}  <span className="text-spectra-cyan">status</span>: <span className="text-green-400">&apos;Active&apos;</span>,
            {"\n"}  <span className="text-spectra-cyan">directives</span>: [
            {"\n"}    <span className="text-green-400">&apos;Democratize Access&apos;</span>,
            {"\n"}    <span className="text-green-400">&apos;Secure Infrastructure&apos;</span>,
            {"\n"}    <span className="text-green-400">&apos;Empower Users&apos;</span>
            {"\n"}  ],
            {"\n"}  <span className="text-spectra-cyan">origin</span>: <span className="text-green-400">&apos;SPECTRA_Collective&apos;</span>
            {"\n"}{"};"}
          </code>
        </pre>
      </div>

      {/* Glow Effect Background */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-spectra-cyan/5 to-spectra-pink/5 opacity-50"></div>
    </div>
  );
}
