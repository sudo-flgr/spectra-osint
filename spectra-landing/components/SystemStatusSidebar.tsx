"use client";

import { useEffect, useState } from "react";

const logs = [
    "[MONITOR] RASTREANDO DISCURSO DE ÓDIO...",
    "[DEFESA] ESCUDO ATIVO: PROTEÇÃO DE MINORIAS",
    "[ALERTA] TENTATIVA DE DOXXING BLOQUEADA",
    "[REDE] NÓS DE SOLIDARIEDADE: CONECTADOS",
    "[SYS] INICIANDO PROTOCOLO DE CUIDADO MÚTUO",
    "[CPU] PROCESSAMENTO ÉTICO: 100%",
    "[MEM] MEMÓRIA COLETIVA: PRESERVADA",
    "[LOG] SESSÃO SEGURA INICIADA",
    "[SCAN] VARREDURA DE AMEAÇAS...",
    "[STATUS] VIGILÂNCIA CONSTANTE"
];

export function SystemStatusSidebar() {
    const [scrollPos, setScrollPos] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setScrollPos((prev) => (prev + 1) % 100);
        }, 50);
        return () => clearInterval(interval);
    }, []);

    return (
        <aside className="fixed left-0 top-0 bottom-0 w-80 bg-black/90 border-r-2 border-spectra-cyan z-40 hidden lg:flex flex-col font-mono text-xs text-spectra-cyan p-4 overflow-hidden">
            <div className="mb-4 text-sm font-bold border-b border-spectra-cyan pb-2">
                SYSTEM_STATUS_PANEL_V.9.0
            </div>

            {/* Rolling Logs - Marquee Style */}
            <div className="flex-1 overflow-hidden relative">
                <div className="absolute inset-0 flex flex-col gap-2 animate-[scrollUp_10s_linear_infinite]">
                    {[...logs, ...logs, ...logs].map((log, i) => (
                        <div key={i} className="whitespace-nowrap opacity-70 hover:opacity-100 hover:bg-spectra-cyan/10 px-2 cursor-crosshair">
                            <span className="text-spectra-pink mr-2">{">"}</span>
                            {log}
                        </div>
                    ))}
                </div>
            </div>

            {/* CPU/Mem Fake Stats */}
            <div className="mt-4 border-t border-spectra-cyan pt-4 flex flex-col gap-4">
                <div>
                    <div className="flex justify-between mb-1">
                        <span>CPU_LOAD</span>
                        <span>{Math.floor(Math.random() * 30 + 40)}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-900 border border-spectra-cyan">
                        <div className="h-full bg-spectra-cyan w-[65%] animate-pulse"></div>
                    </div>
                </div>
                <div>
                    <div className="flex justify-between mb-1">
                        <span>MEM_USAGE</span>
                        <span>{Math.floor(Math.random() * 20 + 20)}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-900 border border-spectra-pink">
                        <div className="h-full bg-spectra-pink w-[32%] animate-pulse"></div>
                    </div>
                </div>
            </div>

            <div className="mt-8 text-[10px] text-gray-500 text-center">
                COORD: 13.9012° N, 120.9458° E
                <br />
                UPTIME: 420:69:00
            </div>
        </aside>
    );
}
