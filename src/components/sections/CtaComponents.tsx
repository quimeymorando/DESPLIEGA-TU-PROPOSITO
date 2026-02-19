"use client";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Button } from "../ui/button";

const testimonials = [
    {
        quote: "No es un curso, es un antes y un después. Por primera vez sentí mi propósito en el cuerpo, no en la mente.",
        author: "Marina A."
    },
    {
        quote: "Pensé que venía a aprender, pero entendí que el propósito se recuerda. Hoy tengo un rumbo claro.",
        author: "Diego R."
    },
    {
        quote: "Este curso me mostró que no estoy rota, solo estaba desconectada. Hoy sé cuál es mi próximo paso.",
        author: "Lucía P."
    }
];

export function Testimonials() {
    return (
        <section className="py-20 bg-celestial-deep relative">
            <div className="max-w-6xl mx-auto px-4 relative z-10">
                <h2 className="text-center font-serif text-3xl font-bold text-white mb-12">
                    No Solo Me Creas A Mí...
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.2 }}
                            className="bg-white/5 backdrop-blur-md p-8 rounded-2xl relative border border-white/10 transition-all duration-500 hover:bg-white/10 hover:border-celestial-light/30 hover:shadow-2xl hover:shadow-celestial-light/10 hover:-translate-y-2 group overflow-hidden"
                        >
                            {/* Gradient Shine Effect */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-celestial-light/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                            <Quote className="w-10 h-10 text-celestial-light/40 absolute top-6 left-6 group-hover:text-celestial-light/60 transition-colors" />
                            <p className="text-earth-sand/90 italic mb-6 relative z-10 pt-4">
                                "{t.quote}"
                            </p>
                            <div className="font-bold text-white relative z-10 flex items-center gap-3">
                                <div className="h-[1px] w-8 bg-celestial-light/50"></div>
                                {t.author}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export function CallToAction() {
    return (
        <section id="registro" className="py-24 bg-earth-cream text-center px-4">
            <div className="max-w-3xl mx-auto space-y-8">
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-celestial-deep leading-tight">
                    Estás A Una Sola Decisión De Cambiar Tu Vida...
                </h2>
                <p className="text-lg text-celestial-deep/70">
                    El mundo necesita tu medicina. No nos hagas esperar más.
                </p>

                <div className="w-full max-w-md mx-auto bg-white rounded-2xl shadow-xl overflow-hidden min-h-[500px]">
                    <iframe
                        src="https://api.funnelup.io/widget/form/Co85fMoUA7Y1Z3e4uXj0"
                        style={{ width: '100%', height: '100%', border: 'none', minHeight: '500px' }}
                        id="inline-Co85fMoUA7Y1Z3e4uXj0"
                        data-layout="{'id':'INLINE'}"
                        data-trigger-type="alwaysShow"
                        data-trigger-value=""
                        data-activation-type="alwaysActivated"
                        data-activation-value=""
                        data-deactivation-type="neverDeactivate"
                        data-deactivation-value=""
                        data-form-name="Formulario Despliega tu Propósito"
                        data-height="500"
                        data-layout-iframe-id="inline-Co85fMoUA7Y1Z3e4uXj0"
                        data-form-id="Co85fMoUA7Y1Z3e4uXj0"
                        title="Formulario de Inscripción"
                    ></iframe>
                </div>
            </div>
        </section>
    );
}
