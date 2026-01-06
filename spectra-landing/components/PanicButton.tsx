"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export function PanicButton() {
    const router = useRouter();

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                window.location.href = "https://www.google.com";
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [router]);

    const triggerPanic = () => {
        window.location.href = "https://www.google.com";
    };

    return (
        <button
            onClick={triggerPanic}
            className="fixed bottom-6 right-6 z-[100] bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-none shadow-[0_0_20px_rgba(220,38,38,0.5)] border-2 border-red-500 uppercase tracking-widest text-xs md:text-sm transition-all hover:scale-105 active:scale-95"
        >
            SAÍDA RÁPIDA [ESC]
        </button>
    );
}
