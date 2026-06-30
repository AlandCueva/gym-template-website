import { useInView } from "../hooks/useInView";
import { Dumbbell, Zap, Heart, Users, ArrowRight } from "lucide-react";

export default function ClassesSection() {
  const { ref, isInView } = useInView();

  const classCards = [
    {
      id: "b",
      icon: Dumbbell,
      name: "Entrenamiento de Fuerza",
      duration: "60 min",
    },
    {
      id: "c",
      icon: Zap,
      name: "Yoga de Poder",
      duration: "75 min",
    },
    {
      id: "d",
      icon: Heart,
      name: "Ciclismo",
      duration: "45 min",
    },
    {
      id: "e",
      icon: Users,
      name: "Boxeo",
      duration: "60 min",
    },
  ];

  return (
    <section
      id="classes"
      ref={ref}
      className="bg-[#0D0D0D] px-6 border-b border-white/5 scroll-mt-12 min-h-screen lg:min-h-screen py-16 lg:py-24 flex flex-col justify-center"
    >
      <div className="max-w-[90rem] mx-auto w-full">
        
        {/* Header Row */}
        <div
          className={`flex flex-col sm:flex-row justify-between sm:items-end gap-4 mb-10 transition-all duration-700 delay-100 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <div>
            <span className="text-accent text-xs font-semibold uppercase tracking-widest mb-3 block">
              LO QUE OFRECEMOS
            </span>
            <h2 className="bebas-font text-5xl text-white tracking-wide">
              Nuestras Clases.
            </h2>
          </div>
          <div>
            <a
              href="#pricing"
              className="text-accent text-sm font-medium inline-flex items-center gap-1 hover:gap-2 transition-all group"
            >
              Ver Horario Completo
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          
          {/* Card A (col-span-2, row-span-2) - High Intensity Bootcamp */}
          <div
            className={`sm:col-span-2 sm:row-span-2 bg-[#1A1A1A] rounded-2xl overflow-hidden relative min-h-[380px] border border-white/5 hover:border-accent/20 transition-all duration-500 group flex flex-col justify-end ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            {/* Background Image */}
            <img
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80"
              alt="Clase de HIIT Bootcamp"
              className="absolute inset-0 object-cover w-full h-full opacity-40 group-hover:scale-[1.03] transition-transform duration-700"
            />
            {/* Dark vignette gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

            {/* Content Overlay */}
            <div className="relative z-10 p-8">
              <span className="inline-block text-[10px] bg-accent text-black font-extrabold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
                MÁS POPULAR
              </span>
              <h3 className="bebas-font text-4xl text-white mb-2 tracking-wide">
                Bootcamp de HIIT
              </h3>
              <p className="text-white/60 text-sm max-w-md mb-6 leading-relaxed">
                Sesiones de cuerpo completo de 45 min que queman hasta 800 cal. Alta intensidad, cero aburrimiento. Coaching enfocado en la técnica para superar tus límites.
              </p>
              <button className="bg-white text-black text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-accent hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer">
                Reservar Clase
              </button>
            </div>
          </div>

          {/* Cards B, C, D, E (each col-span-1) */}
          {classCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className={`bg-[#1A1A1A] rounded-2xl p-6 border border-white/5 hover:border-accent/30 hover:bg-[#222222] transition-all duration-500 min-h-[200px] flex flex-col justify-between group ${
                  isInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-5"
                }`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                {/* Top Row: Icon in accent circle & Class Name */}
                <div>
                  <div className="w-12 h-12 rounded-xl bg-accent/5 border border-white/5 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-accent/10 transition-all duration-300">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <h4 className="text-lg font-semibold text-white tracking-wide group-hover:text-accent transition-colors">
                    {card.name}
                  </h4>
                </div>

                {/* Bottom Row: Duration Badge & Arrow */}
                <div className="flex justify-between items-center pt-4 border-t border-white/5">
                  <span className="text-white/40 text-xs uppercase tracking-widest font-medium">
                    {card.duration}
                  </span>
                  <span className="text-accent text-lg font-bold opacity-75 group-hover:translate-x-1 group-hover:opacity-100 transition-all duration-200">
                    →
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
