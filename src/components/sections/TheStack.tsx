"use client";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "../ui/button";

const stackItems = [
    { name: "Acceso EXCLUSIVO al Entrenamiento (3 Días)", value: "Incalculable" },
    { name: "Grabaciones Completas de por vida", value: "$197" },
    { name: "La Frecuencia de 'Nodriza'", value: "$97" },
    { name: "Comunidad de Almas Afines", value: "$47" },
];

export function TheStack() {
    return (
        <section className="py-24 bg-earth-cream relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-earth-clay/20 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-celestial-light/20 rounded-full blur-[100px]"></div>
            </div>

            <div className="max-w-4xl mx-auto px-4 relative z-10">

                <div className="text-center mb-12">
                    <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6 text-celestial-deep">
                        Esto Es Todo Lo Que Obtendrás (GRATIS)
                    </h2>
                    <p className="text-xl text-celestial-deep/70">
                        Cuando Te Registres Ahora
                    </p>
                </div>

                <div className="bg-white border border-earth-clay/20 rounded-3xl p-8 md:p-12 shadow-2xl shadow-earth-clay/10 relative overflow-hidden">
                    {/* Shine effect on card */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>

                    <ul className="space-y-6 mb-12 relative z-10">
                        {stackItems.map((item, idx) => (
                            <motion.li
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex items-start justify-between border-b border-earth-clay/10 pb-4 last:border-0 last:pb-0 gap-4"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="bg-green-100 p-1 rounded-full mt-1">
                                        <Check className="w-5 h-5 text-green-600" />
                                    </div>
                                    <span className="text-lg md:text-xl font-medium text-celestial-deep">
                                        {item.name}
                                    </span>
                                </div>
                                <span className="text-earth-clay font-bold whitespace-nowrap hidden md:block opacity-80 decoration-slice">
                                    {item.value}
                                </span>
                            </motion.li>
                        ))}
                    </ul>

                    <div className="text-center space-y-6 relative z-10">
                        <div className="flex flex-col items-center justify-center gap-2">
                            <span className="text-celestial-deep/50 text-lg line-through decoration-red-500 decoration-2">Precio Total: $997</span>
                            <span className="text-4xl md:text-6xl font-serif font-bold text-celestial-deep tracking-tight">
                                ¡GRATIS!
                            </span>
                        </div>

                        <a href="#registro" className="inline-block w-full md:w-auto">
                            <Button size="lg" className="w-full md:w-auto px-12 py-8 text-xl bg-celestial-deep hover:bg-celestial-deep/90 text-white font-bold shadow-xl shadow-celestial-deep/30 transition-all duration-300 hover:scale-105 active:scale-95">
                                ¡SÍ! QUIERO DESPLEGAR MI PROPÓSITO
                            </Button>
                        </a>

                        <p className="text-sm text-celestial-deep/40">
                            Solo necesitamos tu compromiso de aparecer y hacer el trabajo.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}
