import { useState } from "react";
import { ArrowRight, Play, X } from "lucide-react";
import { motion } from "motion/react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { y: "110%", opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function HeroSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="relative min-h-[calc(100vh-73px)] lg:h-[calc(100vh-73px)] overflow-y-visible lg:overflow-hidden flex flex-col justify-center py-12 lg:py-10 px-6 md:px-12 bg-cinematic">

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover select-none"
      >
        <source src="https://res.cloudinary.com/du3y0n9fx/video/upload/v1782348071/videotitanus.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay for readability */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Vignette and Radial Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/40 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(204,255,0,0.06)_0%,transparent_50%)]" />

      {/* Hero Content Area */}
      <div className="relative z-10 max-w-5xl mx-auto w-full animate-fade-up">

        {/* Content Container */}
        <div className="flex flex-col items-start">
          {/* Rating Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/10 rounded-full px-4 py-1.5 mb-4 lg:mb-5">
            <div className="flex gap-0.5 text-accent text-xs">
              ★★★★★
            </div>
            <span className="text-white/80 text-xs font-medium tracking-wide uppercase">
              4.9 · EL TEMPLO DEL RENDIMIENTO EXTREMO EN LOJA
            </span>
          </div>

          {/* Cinematic Header Typography */}
          <motion.h1
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="bebas-font text-5xl sm:text-7xl lg:text-[80px] xl:text-[90px] leading-[0.85] tracking-wide text-white max-w-4xl select-none mb-4 lg:mb-5"
          >
            <span className="block overflow-hidden py-1">
              <motion.span variants={itemVariants} className="block">
                DONDE ENTRENAN
              </motion.span>
            </span>
            <span className="block overflow-hidden py-1">
              <motion.span variants={itemVariants} className="block text-accent">
                LOS TITANES.
              </motion.span>
            </span>
            <span className="block overflow-hidden py-1">
              <motion.span variants={itemVariants} className="block">
                DISCIPLINA IMPLACABLE.
              </motion.span>
            </span>
          </motion.h1>

          {/* Subheadline */}
          <p className="text-base lg:text-lg text-white/60 font-medium max-w-md mb-5 lg:mb-6 leading-relaxed">
            Sin excusas. Sin atajos. Solo fuerza bruta, disciplina implacable y transformación de nivel élite. Únete al club más selecto de Loja.
          </p>

          {/* CTA Row */}
          <div className="flex gap-4 lg:gap-6 items-center flex-wrap">
            <a
              href="#pricing"
              className="bg-accent text-black font-extrabold text-base lg:text-lg px-8 py-4 lg:px-9 lg:py-4.5 rounded-full hover:bg-white hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 inline-flex items-center gap-3 group cursor-pointer uppercase tracking-wider"
            >
              Prueba Gratis 1 Semana
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform stroke-[3px]" />
            </a>

            <button
              onClick={() => setIsVideoOpen(true)}
              className="inline-flex items-center gap-3 lg:gap-4 text-white/70 hover:text-white text-sm font-semibold tracking-wider uppercase transition-colors group cursor-pointer"
            >
              <span className="w-11 h-11 lg:w-12 lg:h-12 rounded-full border border-white/30 group-hover:border-accent flex items-center justify-center transition-all bg-black/20 backdrop-blur-sm">
                <Play className="w-4 h-4 text-white fill-white translate-x-0.5" />
              </span>
              Ver Nuestra Historia
            </button>
          </div>

          {/* Stats Row */}
          <div className="mt-8 lg:mt-10 flex gap-8 lg:gap-12 flex-wrap">
            <div className="flex flex-col">
              <span className="bebas-font text-3xl lg:text-4xl text-accent tracking-wider">
                2,400+
              </span>
              <span className="text-[10px] text-white/50 uppercase tracking-widest mt-1 font-semibold">
                Miembros Activos
              </span>
            </div>
            <div className="flex flex-col">
              <span className="bebas-font text-3xl lg:text-4xl text-accent tracking-wider">
                38
              </span>
              <span className="text-[10px] text-white/50 uppercase tracking-widest mt-1 font-semibold">
                Clases Semanales
              </span>
            </div>
            <div className="flex flex-col">
              <span className="bebas-font text-3xl lg:text-4xl text-accent tracking-wider">
                12
              </span>
              <span className="text-[10px] text-white/50 uppercase tracking-widest mt-1 font-semibold">
                Coaches de Élite
              </span>
            </div>
          </div>
        </div>

      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden aspect-video border border-white/10">
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-white/80 hover:text-white hover:bg-black transition-colors cursor-pointer"
              aria-label="Close video story"
            >
              <X className="w-5 h-5" />
            </button>
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="Titanus Gym - Watch Our Story"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
}