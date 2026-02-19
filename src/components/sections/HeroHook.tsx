"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowDown, CheckCircle } from "lucide-react";
import { Button } from "../ui/button";
import { StarBackground } from "../ui/star-background";

export function HeroHook() {
    return (
        <section className="relative min-h-[95vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden pt-20 pb-12 bg-celestial-deep text-earth-cream">

            {/* Background Elements */}
            <StarBackground />
            <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-blue-900/20 to-transparent -z-10"></div>

            {/* "New Opportunity" Tag */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-celestial-light/20 text-earth-sand text-sm font-semibold tracking-wide uppercase mb-6 border border-celestial-light/30 backdrop-blur-sm"
            >
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-celestial-light opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-celestial-light"></span>
                </span>
                Entrenamiento Gratuito - 3 Días
            </motion.div>

            {/* Headline */}
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="font-serif text-4xl md:text-5xl lg:text-7xl leading-[1.1] md:leading-tight text-white max-w-5xl mx-auto mb-8 font-bold"
            >
                <span className="block text-celestial-light text-2xl md:text-3xl mb-4 italic font-medium">
                    ¿Cómo Recordar Quién Eres Realmente y...
                </span>
                Activar Tu "Misión Divina" <br className="hidden md:block" /> En Solo 3 Días
            </motion.h1>

            {/* Sub-Headline */}
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="font-sans text-lg md:text-xl text-earth-sand/90 max-w-3xl mx-auto mb-10 leading-relaxed"
            >
                Descubre el "Mapa de Ruta de 3 Días" que ha permitido a miles de almas
                <span className="font-semibold text-white block md:inline"> dejar de postergar su vida y finalmente asumir el servicio para el que nacieron.</span>
            </motion.p>

            {/* Benefit Bullets (Mobile Optimized) */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="flex flex-col md:flex-row gap-4 mb-10 text-sm md:text-base text-earth-sand/80"
            >
                <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-earth-clay" /> Sin años de terapia
                </div>
                <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-earth-clay" /> Sin síndrome del impostor
                </div>
                <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-earth-clay" /> 100% Online y Gratis
                </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
                initial={{ opacity: 0, filter: 'blur(10px)' }}
                animate={{ opacity: 1, filter: 'blur(0px)' }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="w-full max-w-md relative z-10"
            >
                <a href="#registro" className="block w-full">
                    <Button size="lg" className="w-full text-lg h-16 bg-earth-clay text-celestial-deep font-bold rounded-xl group relative overflow-hidden transition-all duration-300 hover:scale-105 hover:bg-[#D4B494] hover:shadow-[0_0_40px_rgba(196,164,132,0.6)] hover:ring-4 hover:ring-earth-clay/30 active:scale-95">
                        <span className="relative z-10 flex items-center justify-center gap-2">
                            QUIERO DESPLEGAR MI PROPÓSITO
                            <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] animate-shimmer-slide group-hover:animate-shimmer-active" />
                    </Button>
                </a>
                <p className="mt-4 text-xs text-earth-sand/50 uppercase tracking-widest font-semibold">
                    Plazas Limitadas - Acceso Inmediato
                </p>
            </motion.div>

        </section>
    );
}
