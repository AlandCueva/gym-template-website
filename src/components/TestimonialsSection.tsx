import { useInView } from "../hooks/useInView";
import { Star } from "lucide-react";

export default function TestimonialsSection() {
  const { ref, isInView } = useInView();

  const testimonials = [
    {
      initials: "DK",
      name: "David K.",
      meta: "Miembro desde 2022 · Incrementó 40% de Fuerza Máxima",
      quote: "He probado varios gimnasios en Loja. TITANUS es el único con un entorno industrial-futurista y racks de alta gama que realmente te inspiran a superarte. Mi fuerza se ha disparado.",
    },
    {
      initials: "RM",
      name: "Rachel M.",
      meta: "Miembro desde 2023 · Atleta de Fitness",
      quote: "Los entrenadores aquí están en otro nivel. Sofía cambió por completo mi forma de enfocar la biomecánica y el culturismo. El ambiente de respeto y disciplina es único en la ciudad.",
    },
    {
      initials: "TB",
      name: "Tom B.",
      meta: "Miembro desde 2024 · Levantador de Powerlifting",
      quote: "Me registré para la prueba gratuita en la sede Loja. La iluminación cyberpunk, las barras olímpicas calibradas y la comunidad de titanes te empujan a dar tu 100% todos los días.",
    },
  ];

  return (
    <section
      id="testimonials"
      ref={ref}
      className="bg-[#0D0D0D] px-6 border-b border-white/5 scroll-mt-12 min-h-screen lg:min-h-screen py-16 lg:py-24 flex flex-col justify-center"
    >
      <div className="max-w-[90rem] mx-auto w-full">
        
        {/* Header Row */}
        <div
          className={`mb-14 transition-all duration-700 delay-100 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <span className="text-accent text-xs font-semibold uppercase tracking-widest mb-3 block">
            RESULTADOS REALES
          </span>
          <h2 className="bebas-font text-5xl text-white tracking-wide leading-none">
            Los miembros<br />no mienten.
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((test, index) => (
            <div
              key={test.name}
              className={`bg-[#1A1A1A] rounded-2xl p-7 border border-white/5 hover:border-accent/20 transition-all duration-500 flex flex-col justify-between relative group ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              <div>
                {/* Quotes Background mark */}
                <div className="absolute top-4 right-6 bebas-font text-[80px] text-accent/10 select-none pointer-events-none leading-none leading-0 h-0">
                  “
                </div>

                {/* Rating Row */}
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-accent fill-accent"
                    />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-white/80 text-base leading-relaxed italic mb-6">
                  "{test.quote}"
                </p>
              </div>

              {/* Author Info Row */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/5 mt-auto">
                <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent font-bold text-sm tracking-wide select-none group-hover:scale-105 transition-transform duration-300">
                  {test.initials}
                </div>
                <div>
                  <h4 className="text-white text-sm font-semibold tracking-wide">
                    {test.name}
                  </h4>
                  <p className="text-white/40 text-xs mt-0.5">
                    {test.meta}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
