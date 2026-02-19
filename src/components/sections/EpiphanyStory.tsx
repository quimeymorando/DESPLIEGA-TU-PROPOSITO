"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function EpiphanyStory() {
    return (
        <section className="py-24 bg-white px-4 md:px-8 overflow-hidden">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                {/* VSL / Image Side */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative aspect-video md:aspect-[4/3] bg-earth-sand rounded-2xl overflow-hidden shadow-2xl shadow-earth-clay/20 group"
                >
                    {/* YouTube VSL Embed */}
                    <div className="absolute inset-0 bg-black">
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/-2nvDuOu5zs?rel=0&modestbranding=1&controls=1"
                            title="Despliega tu Propósito VSL"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full object-cover"
                        ></iframe>
                    </div>
                </motion.div>

                {/* Story Content Side */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="space-y-6"
                >
                    <div className="inline-block px-3 py-1 rounded-full bg-earth-cream border border-earth-clay/30 text-earth-clay font-semibold text-xs uppercase tracking-wider">
                        La Epifanía
                    </div>

                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-celestial-deep leading-tight">
                        "No estás roto, solo necesitas <span className="text-celestial-light">ordenarte</span>."
                    </h2>

                    <div className="space-y-4 text-celestial-deep/80 font-sans leading-relaxed text-lg">
                        <p>
                            Hola, soy <strong className="text-celestial-deep">Joaquín Afterman</strong>.
                        </p>
                        <p>
                            ¿Alguna vez has sentido que tu alma te grita que estás aquí para algo grande, pero tu mente te llena de dudas? Yo estuve ahí.
                        </p>
                        <p>
                            Durante años viajé por más de 15 países buscando respuestas afuera. Intenté cursos, terapias, caminos espirituales... pero nada hacía clic.
                        </p>
                        <p className="border-l-4 border-earth-clay pl-4 italic text-celestial-deep/90 my-6 bg-earth-cream/50 py-2 rounded-r-lg">
                            "Descubrí que el propósito no se encuentra afuera. Se <strong>RECUERDA</strong> adentro."
                        </p>
                        <p>
                            La mayoría vive en el <strong>"Síndrome de la Preparación Eterna"</strong>. Creen que necesitan un título más. Pero no viniste a prepararte por siempre; viniste a servir.
                        </p>
                        <p>
                            Por eso creé <strong>'Despliega tu Propósito'</strong>. No es teoría. Es la activación que te llevará de la confusión a la claridad.
                        </p>
                    </div>

                </motion.div>

            </div>
        </section>
    );
}
