import { useState } from "react";
import { useInView } from "../hooks/useInView";
import { ChevronDown, Mail } from "lucide-react";

export default function FAQSection() {
  const { ref, isInView } = useInView();
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Default open first FAQ

  const faqs = [
    {
      question: "¿Necesito experiencia previa para unirme?",
      answer: "No, en lo absoluto. Todas nuestras clases están estructuradas para dar la bienvenida y desafiar a miembros de todos los niveles. Nuestros entrenadores expertos te guiarán con modificaciones, asegurando que trabajes a un ritmo seguro y retador.",
    },
    {
      question: "¿Cómo funciona la prueba gratuita?",
      answer: "Es simple. Selecciona 'Prueba Gratis', ingresa tu nombre y correo, elige cualquier clase en nuestro horario y asiste. No se requiere tarjeta de crédito para tu semana de prueba. Queremos que experimentes la diferencia TITANUS de primera mano.",
    },
    {
      question: "¿Puedo congelar mi membresía?",
      answer: "Sí. Sabemos que surgen imprevistos, ya sean viajes de negocios, vacaciones o recuperación. Puedes congelar tu membresía hasta por 2 meses por año calendario sin costo adicional. Solo contáctanos 7 días antes de tu ciclo de facturación.",
    },
    {
      question: "¿Tienen instalaciones con duchas?",
      answer: "Sí, las instalaciones de TITANUS están equipadas con vestuarios premium completos. Esto incluye duchas privadas, toallas limpias, jabón premium, secadores de cabello y casilleros de seguridad sin llave para que puedas entrenar duro y refrescarte antes de seguir con tu día.",
    },
    {
      question: "¿Ofrecen entrenamiento personalizado?",
      answer: "Sí, así es. Todas las membresías incluyen algún nivel de asesoramiento personal. Si buscas un entrenamiento individualizado más intensivo, nuestro plan Élite incluye 4 sesiones de entrenamiento personal mensuales dedicadas, o puedes adquirir sesiones individuales con cualquier coach.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      ref={ref}
      className="bg-[#0D0D0D] px-6 border-b border-white/5 scroll-mt-12 min-h-screen lg:min-h-screen py-16 lg:py-24 flex flex-col justify-center"
    >
      <div className="max-w-[90rem] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start w-full">
        
        {/* Left Column: Heading and Support */}
        <div
          className={`transition-all duration-700 delay-100 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <span className="text-accent text-xs font-semibold uppercase tracking-widest mb-3 block">
            PREGUNTAS FRECUENTES
          </span>
          <h2 className="bebas-font text-5xl md:text-6xl text-white tracking-wide leading-none">
            ¿Tienes<br />preguntas?
          </h2>
          <p className="text-white/40 text-sm mt-6 leading-relaxed max-w-xs">
            ¿No encuentras la respuesta que buscas? Escríbenos directamente y nuestro equipo te ayudará.
          </p>
          <a
            href="mailto:contacto@titanusgym.com"
            className="inline-flex items-center gap-2 mt-6 text-accent hover:text-white transition-colors text-sm font-semibold group"
          >
            <Mail className="w-4 h-4" />
            contacto@titanusgym.com
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>

        {/* Right Column: Interactive Accordion */}
        <div
          className={`space-y-1 transition-all duration-700 delay-250 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border-b border-white/8 py-5"
              >
                {/* Question row */}
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center text-left focus:outline-none cursor-pointer group py-1"
                  aria-expanded={isOpen}
                >
                  <span className={`font-medium text-base tracking-wide transition-colors duration-200 ${
                    isOpen ? "text-accent" : "text-white group-hover:text-white/80"
                  }`}>
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-white/40 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-accent" : "rotate-0"
                    }`}
                  />
                </button>

                {/* Animated Answer height container */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-56 opacity-100 mt-3" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-white/50 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
