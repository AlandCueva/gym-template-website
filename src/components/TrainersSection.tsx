import { useInView } from "../hooks/useInView";
import { Instagram, Twitter } from "lucide-react";

export default function TrainersSection() {
  const { ref, isInView } = useInView();

  const trainers = [
    {
      name: "Marcus \"Titán\" Reid",
      role: "Powerlifting & Fuerza Extrema",
      bio: "15 años de trayectoria · Campeón Nacional de Powerlifting · Especialista en cargas máximas.",
      image: "https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?w=400&q=80",
      instagram: "#",
      twitter: "#",
    },
    {
      name: "Sofía Vega",
      role: "Culturismo & Hipertrofia",
      bio: "10 años · Atleta IFBB Pro · Especialista en biomecánica y simetría muscular.",
      image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&q=80",
      instagram: "#",
      twitter: "#",
    },
    {
      name: "Viktor Park",
      role: "Fuerza Industrial & HIIT",
      bio: "Exmilitar y coach de atletas de élite. Especialista en disciplina implacable.",
      image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&q=80",
      instagram: "#",
      twitter: "#",
    },
    {
      name: "Anya Torres",
      role: "Halterofilia & Fuerza Máxima",
      bio: "9 años · Competidora de Levantamientos Olímpicos · Técnica y potencia pura.",
      image: "https://images.unsplash.com/photo-1546483875-ad9014c88eba?w=400&q=80",
      instagram: "#",
      twitter: "#",
    },
  ];

  return (
    <section
      id="trainers"
      ref={ref}
      className="bg-[#1A1A1A] px-6 border-b border-white/5 scroll-mt-12 min-h-screen lg:min-h-screen py-16 lg:py-24 flex flex-col justify-center"
    >
      <div className="max-w-[90rem] mx-auto w-full">
        
        {/* Header Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-end mb-14 transition-all duration-700 delay-100 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <div>
            <span className="text-accent text-xs font-semibold uppercase tracking-widest mb-3 block">
              EL EQUIPO
            </span>
            <h2 className="bebas-font text-5xl text-white tracking-wide leading-none">
              Conoce a tus<br />Coaches.
            </h2>
          </div>
          <div>
            <p className="text-white/50 text-base max-w-sm md:ml-auto md:text-right leading-relaxed">
              Cada entrenador de TITANUS está certificado, tiene experiencia y está obsesionado con tu progreso. Te exigen con rigor para garantizar tu máximo rendimiento.
            </p>
          </div>
        </div>

        {/* Trainers Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainers.map((trainer, index) => (
            <div
              key={trainer.name}
              className={`bg-[#0D0D0D] rounded-2xl overflow-hidden border border-white/5 hover:border-accent/20 transition-all duration-500 group cursor-pointer flex flex-col justify-between ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <div>
                {/* Photo Area */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 select-none"
                    loading="lazy"
                  />
                  {/* Subtle color highlight on hover */}
                  <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Floating Social Icons */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <a
                      href={trainer.instagram}
                      className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-accent hover:text-black text-white/80 transition-colors"
                      aria-label={`${trainer.name} Instagram`}
                    >
                      <Instagram className="w-4 h-4" />
                    </a>
                    <a
                      href={trainer.twitter}
                      className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-accent hover:text-black text-white/80 transition-colors"
                      aria-label={`${trainer.name} Twitter`}
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Information Area */}
                <div className="p-5">
                  <span className="text-accent text-xs font-semibold uppercase tracking-wider mb-1.5 block">
                    {trainer.role}
                  </span>
                  <h3 className="text-lg font-semibold text-white tracking-wide">
                    {trainer.name}
                  </h3>
                </div>
              </div>

              {/* Bio line aligned to the bottom */}
              <div className="px-5 pb-5 pt-3 border-t border-white/5">
                <p className="text-white/40 text-xs">
                  {trainer.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
