"use client";
import { motion } from "framer-motion";
import { Lock, Sparkles, Zap } from "lucide-react";

const secrets = [
    {
        icon: Lock,
        title: "SECRETO #1: La Verdad Sobre Tu Origen",
        subtitle: "Día 1 - ASUMIR",
        description: "Por qué has buscado en los lugares equivocados. Rompe la creencia de que 'no eres suficiente' y cambia el '¿qué voy a obtener?' por '¿a quién voy a servir?'.",
        delay: 0.1
    },
    {
        icon: Sparkles,
        title: "SECRETO #2: La Alquimia de Tu Historia",
        subtitle: "Día 2 - ORDENAR",
        description: "Transforma tus heridas en tu mayor superpoder. Ordena las piezas para ver el 'hilo dorado' que siempre te guió hacia tu misión.",
        delay: 0.2
    },
    {
        icon: Zap,
        title: "SECRETO #3: El Método del Despliegue",
        subtitle: "Día 3 - DESPLEGAR",
        description: "Del salto teórico a la acción masiva. Pierde el miedo a mostrarte y permite que la abundancia fluya como resultado de tu servicio.",
        delay: 0.3
    }
];

export function ThreeSecrets() {
    return (
        <section className="py-24 bg-celestial-deep relative overflow-hidden">
            {/* Background Ambience */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-celestial-light/10 blur-[120px] rounded-full pointer-events-none -mr-32 -mt-32"></div>

            <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">

                <div className="text-center mb-16">
                    <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-4">
                        Lo Que Vas A Descubrir
                    </h2>
                    <p className="text-earth-cream/70 max-w-2xl mx-auto text-lg">
                        En este entrenamiento gratuito rompemos las 3 barreras principales que te impiden avanzar.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {secrets.map((secret, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: secret.delay }}
                            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-celestial-light/20 group cursor-default"
                        >
                            <div className="w-14 h-14 rounded-xl bg-celestial-light/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <secret.icon className="w-7 h-7 text-celestial-light" />
                            </div>

                            <div className="text-sm font-bold text-earth-clay mb-2 tracking-wide uppercase">
                                {secret.subtitle}
                            </div>

                            <h3 className="font-serif text-xl font-bold text-white mb-4 leading-snug">
                                {secret.title.split(":")[1] || secret.title}
                            </h3>

                            <p className="text-earth-sand/80 leading-relaxed">
                                {secret.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
