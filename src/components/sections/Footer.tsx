"use client";
import React from "react";

export function Footer() {
    return (
        <footer className="py-12 bg-celestial-deep text-center border-t border-white/5 relative overflow-hidden">
            {/* Blue Glow Gradient - Intense Halos */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-celestial-light/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-celestial-light/20 rounded-full blur-[90px] pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-white/10 rounded-full blur-[60px] pointer-events-none mix-blend-overlay"></div>

            <div className="max-w-4xl mx-auto px-4 flex flex-col items-center justify-center space-y-3 relative z-10">

                {/* Logo Text */}
                <h3 className="font-serif text-xl md:text-2xl text-earth-clay tracking-[0.3em] uppercase font-semibold">
                    TIERRA DORADA
                </h3>

                {/* Values */}
                <div className="flex items-center gap-3 text-earth-clay/80 font-medium text-[11px] md:text-sm tracking-[0.1em] font-sans">
                    <span>Amor</span>
                    <span className="text-earth-clay/40 text-[10px]">•</span>
                    <span>Conciencia</span>
                    <span className="text-earth-clay/40 text-[10px]">•</span>
                    <span>Abundancia</span>
                </div>

                {/* Copyright */}
                <p className="text-[9px] text-white/20 mt-6 font-sans tracking-wider">
                    © {new Date().getFullYear()} Masterclass Abundancia. Todos los derechos reservados.
                </p>
            </div>
        </footer>
    );
}
