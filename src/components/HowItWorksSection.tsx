import { useInView } from "../hooks/useInView";
import { ClipboardList, Calendar, Trophy } from "lucide-react";

export default function HowItWorksSection() {
  const { ref, isInView } = useInView();

  const steps = [
    {
      number: "01",
      icon: ClipboardList,
      title: "Reserva una Clase Gratis",
      description: "Elige una clase que se adapte a tu horario. Sin compromisos ni tarjetas de crédito. Solo ven y experimenta el poder de TITANUS.",
    },
    {
      number: "02",
      icon: Calendar,
      title: "Entrena con Expertos",
      description: "Nuestros entrenadores certificados guían cada sesión. Tú te enfocas en el trabajo; nosotros nos encargamos del resto, asegurando que tu técnica y motivación estén al máximo.",
    },
    {
      number: "03",
      icon: Trophy,
      title: "Monitorea tu Progreso",
      description: "Medimos tus resultados desde el primer día. Mira cómo crece tu fuerza, resistencia y confianza a través de métricas basadas en datos.",
    },
  ];

  return (
    <section
      id="how-it-works"
      ref={ref}
      className="bg-[#0D0D0D] px-6 border-b border-white/5 scroll-mt-12 min-h-screen lg:min-h-screen py-16 lg:py-24 flex flex-col justify-center"
    >
      <div className="max-w-[90rem] mx-auto w-full">
        {/* Header Row */}
        <div
          className={`mb-16 transition-all duration-700 delay-100 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <span className="text-accent text-xs font-semibold uppercase tracking-widest mb-3 block">
            EL PROCESO
          </span>
          <h2 className="bebas-font text-5xl md:text-6xl text-white leading-none">
            Comenzar es<br />simple.
          </h2>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className={`bg-[#1A1A1A] rounded-2xl p-8 border border-white/5 hover:border-accent/30 transition-all duration-500 group flex flex-col justify-between ${
                  isInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-5"
                }`}
                style={{ transitionDelay: `${200 + index * 150}ms` }}
              >
                <div>
                  {/* Step Number */}
                  <div className="bebas-font text-6xl text-white/5 group-hover:text-accent/15 transition-colors leading-none mb-6">
                    {step.number}
                  </div>

                  {/* Icon Row */}
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>

                  {/* Heading */}
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-accent transition-colors">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/50 text-sm leading-relaxed">
                    {step.description}
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
