import React, { useState } from "react";
import { useInView } from "../hooks/useInView";
import { ArrowRight, Sparkles, X, CheckCircle } from "lucide-react";

export default function CTABannerSection() {
  const { ref, isInView } = useInView();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && name) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setIsModalOpen(false);
        setName("");
        setEmail("");
      }, 3000);
    }
  };

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-accent px-6 select-none min-h-screen lg:min-h-screen py-16 lg:py-24 flex flex-col justify-center"
    >
      {/* Massive Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden select-none">
        <span className="bebas-font text-[20vw] text-black/5 leading-none font-bold">
          TITANUS
        </span>
      </div>

      {/* Foreground Content */}
      <div
        className={`relative z-10 text-center max-w-2xl mx-auto flex flex-col items-center transition-all duration-700 delay-100 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        <h2 className="bebas-font text-5xl md:text-7xl text-black leading-tight mb-4 tracking-wide">
          ¿Listo para despertar<br />al Titán que llevas dentro?
        </h2>
        
        <p className="text-base md:text-lg text-black/60 font-medium mb-10 max-w-md">
          Únete a la comunidad más selecta de Loja que dejó atrás las excusas. Obtén acceso inmediato a entrenadores de clase mundial y a un entorno industrial de rendimiento extremo.
        </p>

        {/* Action Buttons */}
        <div className="flex gap-4 items-center justify-center flex-wrap">
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-black text-white font-bold text-base px-10 py-4 rounded-full hover:bg-black/85 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 inline-flex items-center gap-2 group cursor-pointer"
          >
            Reclama tu Semana Gratis
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <a
            href="mailto:entrenadores@titanusgym.com?subject=Hablar%20con%20un%20Entrenador"
            className="bg-transparent text-black/70 font-semibold text-base hover:text-black transition-colors underline underline-offset-4 cursor-pointer"
          >
            Habla con un Entrenador
          </a>
        </div>
      </div>

      {/* Claim Free Week Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm animate-fade-up">
          <div className="relative w-full max-w-md bg-[#1A1A1A] text-white rounded-2xl p-8 border border-white/10 shadow-2xl">
            <button
              onClick={() => {
                setIsModalOpen(false);
                setIsSubmitted(false);
              }}
              className="absolute top-4 right-4 text-white/50 hover:text-white cursor-pointer p-1"
              aria-label="Cerrar formulario"
            >
              <X className="w-5 h-5" />
            </button>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="text-center">
                  <div className="inline-flex p-3 rounded-full bg-accent/10 border border-accent/20 mb-3">
                    <Sparkles className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="bebas-font text-3xl text-white tracking-wide">
                    Reclama tu Pase
                  </h3>
                  <p className="text-white/50 text-xs mt-1.5 leading-relaxed">
                    Ingresa tus datos a continuación para activar tu pase de prueba de 7 días con acceso total. No requiere pago.
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label htmlFor="modal-name" className="text-xs uppercase tracking-widest font-semibold text-white/60 block mb-1.5">
                      Nombre Completo
                    </label>
                    <input
                      id="modal-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ej. Juan Pérez"
                      className="w-full bg-[#0D0D0D] border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="modal-email" className="text-xs uppercase tracking-widest font-semibold text-white/60 block mb-1.5">
                      Correo Electrónico
                    </label>
                    <input
                      id="modal-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Ej. juan@example.com"
                      className="w-full bg-[#0D0D0D] border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-accent text-black font-bold py-4 rounded-xl hover:bg-white active:scale-[0.98] transition-all duration-200 cursor-pointer text-sm uppercase tracking-wider"
                >
                  Activar mi Semana Gratis
                </button>
              </form>
            ) : (
              <div className="text-center py-8 space-y-4 animate-fade-up">
                <div className="inline-flex p-4 rounded-full bg-accent/20 border border-accent/35 mb-2">
                  <CheckCircle className="w-10 h-10 text-accent animate-pulse" />
                </div>
                <h3 className="bebas-font text-3xl text-accent tracking-wide">
                  ¡PASE ACTIVADO!
                </h3>
                <p className="text-white/80 text-sm max-w-xs mx-auto leading-relaxed">
                  ¡Felicidades, <strong>{name}</strong>! Tu pase de acceso total de 7 días ha sido enviado a <strong>{email}</strong>.
                </p>
                <p className="text-white/40 text-xs">
                  Muestra tu código de barras en recepción para comenzar. ¡A trabajar!
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
