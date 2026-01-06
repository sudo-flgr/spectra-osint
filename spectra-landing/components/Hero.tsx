"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { CodeBlock } from "./CodeBlock";
import { Button } from "./ui/Button";

const textToType = "> Initializing SPECTRA Protocol... // Democratizing Cyber-Defense.";

export function Hero() {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(textToType.substring(0, i + 1));
      i++;
      if (i === textToType.length) {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex flex-col items-center justify-center min-h-screen pt-20 px-4 text-center">
      <div className="max-w-4xl w-full flex flex-col items-center gap-8">

        {/* Typewriter Effect */}
        <div className="h-16 md:h-20 flex items-center justify-center">
          <motion.h1
            className="text-2xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {displayText}
            <span className="animate-pulse text-spectra-cyan">_</span>
          </motion.h1>
        </div>

        {/* Code Block Feature */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.8 }}
          className="w-full max-w-2xl"
        >
          <CodeBlock />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex gap-4 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5, duration: 0.5 }}
        >
          <Button className="border-spectra-cyan text-spectra-cyan shadow-[0_0_15px_rgba(0,255,255,0.3)]">
            Join Protocol
          </Button>
          <Button className="border-spectra-pink text-spectra-pink hover:bg-spectra-pink/10 shadow-[0_0_15px_rgba(255,192,203,0.3)]">
            Learn More
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
