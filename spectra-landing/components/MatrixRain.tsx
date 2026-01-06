"use client";

import { useEffect, useRef } from 'react';

const characters = ['SPECTRA', 'OSINT', 'PROTECT', 'TRANS', 'RIGHTS', 'LGPD', '0', '1'];

export function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const fontSize = 14;
    const columns = Math.ceil(canvas.width / fontSize);
    const drops: number[] = new Array(columns).fill(0).map(() => Math.floor(Math.random() * canvas.height / fontSize)); // Start at random heights

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px "JetBrains Mono", monospace`;
      
      for (let i = 0; i < drops.length; i++) {
        // Randomly select a character/word
        const text = characters[Math.floor(Math.random() * characters.length)];
        
        // Random color variation for "glitch" feel
        const isCyan = Math.random() > 0.8;
        ctx.fillStyle = isCyan ? 'rgba(0, 243, 255, 0.3)' : 'rgba(0, 255, 65, 0.15)'; // Cyan or Classic Matrix Green, low opacity
        
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        
        drops[i]++;
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none opacity-20 mix-blend-screen"
    />
  );
}
