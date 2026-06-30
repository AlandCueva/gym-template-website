import { useState, useEffect } from "react";
import { useInView } from "../hooks/useInView";
import { Check } from "lucide-react";

export default function PricingSection() {
  const { ref, isInView } = useInView();
  const [isAnnual, setIsAnnual] = useState(false);
  const [animatePrice, setAnimatePrice] = useState(true);

  // Trigger a brief transition animation when billing cycle changes
  useEffect(() => {
    setAnimatePrice(false);
    const timer = setTimeout(() => setAnimatePrice(true), 150);
    return () => clearTimeout(timer);
  }, [isAnnual]);

  const plans = [
    {
      name: "Titán Base",
      priceMonthly: 49,
      priceAnnual: 39,
      description: "Ideal para iniciar tu transformación de fuerza.",
      features: [
        "3 clases guiadas por semana",
        "Acceso completo a racks y peso libre",
        "Acceso a la app de TITANUS",
        "Comunidad de Titanes en línea",
      ],
      cta: "Probar Gratis",
      popular: false,
    },
    {
      name: "Titán Élite",
      priceMonthly: 89,
      priceAnnual: 69,
      description: "Nuestra membresía insignia de alto rendimiento.",
      features: [
        "Clases ilimitadas (Powerlifting, HIIT, Culturismo)",
        "Evaluación de fuerza mensual con coach",
        "Guía de nutrición deportiva personalizada",
        "Reserva prioritaria en zonas de fuerza",
        "2 pases de invitado de cortesía al mes",
        "Métricas avanzadas y app de TITANUS",
      ],
      cta: "Comenzar",
      popular: true,
    },
    {
      name: "Titán Olimpo",
      priceMonthly: 149,
      priceAnnual: 119,
      description: "Acceso total y coaching individual de máximo nivel.",
      features: [
        "Todo lo de Titán Élite más:",
        "4 entrenamientos personalizados (1-a-1) al mes",
        "Análisis composición corporal quincenal",
        "Acceso preferencial VIP 24/7 en la sede",
        "Casillero VIP exclusivo con toalla premium",
      ],
      cta: "Contáctanos",
      popular: false,
    },
  ];

  return (
    <section
      id="pricing"
      ref={ref}
      className="bg-[#1A1A1A] px-6 border-b border-white/5 scroll-mt-12 min-h-screen lg:min-h-screen py-16 lg:py-24 flex flex-col justify-center"
    >
      <div className="max-w-[90rem] mx-auto w-full">
        
        {/* Header Row */}
        <div
          className={`flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-14 transition-all duration-700 delay-100 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <div>
            <span className="text-accent text-xs font-semibold uppercase tracking-widest mb-3 block">
              MEMBRESÍA
            </span>
            <h2 className="bebas-font text-5xl text-white tracking-wide leading-none">
              Precios simples.<br />Sin sorpresas.
            </h2>
            <p className="text-white/50 text-base mt-4 leading-relaxed max-w-sm">
              Comienza con una semana gratis. Sin tarjeta de crédito. Cancela en cualquier momento.
            </p>
          </div>

          {/* Pricing Toggle Switch */}
          <div className="flex md:self-end mt-4 md:mt-0 select-none">
            <div className="bg-[#0D0D0D] p-1 rounded-full border border-white/5 flex items-center">
              <button
                onClick={() => setIsAnnual(false)}
                className={`text-xs md:text-sm font-semibold px-5 py-2 rounded-full transition-all duration-300 cursor-pointer ${
                  !isAnnual
                    ? "bg-accent text-black"
                    : "text-white/50 hover:text-white"
                }`}
              >
                Mensual
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`text-xs md:text-sm font-semibold px-5 py-2 rounded-full transition-all duration-300 relative flex items-center gap-1.5 cursor-pointer ${
                  isAnnual
                    ? "bg-accent text-black"
                    : "text-white/50 hover:text-white"
                }`}
              >
                Anual
                <span className={`text-[9px] font-black uppercase px-1.5 py-0.5 rounded-full ${
                  isAnnual ? "bg-black text-accent" : "bg-accent/10 text-accent"
                }`}>
                  -20%
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, index) => {
            const currentPrice = isAnnual ? plan.priceAnnual : plan.priceMonthly;
            const savingsText = isAnnual ? `Facturado anualmente ($${currentPrice * 12}/año)` : "Facturado mensualmente";

            return (
              <div
                key={plan.name}
                className={`rounded-2xl p-8 transition-all duration-500 relative flex flex-col justify-between ${
                  plan.popular
                    ? "bg-accent text-black shadow-2xl shadow-accent/10 scale-100 md:scale-[1.03] z-10 border border-accent"
                    : "bg-[#0D0D0D] text-white border border-white/5 hover:border-white/15"
                } ${
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                }`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <span className="absolute top-4 right-4 bg-black text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider">
                    MÁS POPULAR
                  </span>
                )}

                <div>
                  {/* Plan Name */}
                  <h3 className={`text-xl font-bold uppercase tracking-wider mb-2 ${
                    plan.popular ? "text-black" : "text-white"
                  }`}>
                    {plan.name}
                  </h3>
                  <p className={`text-xs mb-6 max-w-xs ${
                    plan.popular ? "text-black/60" : "text-white/50"
                  }`}>
                    {plan.description}
                  </p>

                  {/* Pricing Value */}
                  <div className="mb-2 flex items-baseline">
                    <span className={`bebas-font text-6xl tracking-wide pricing-transition ${
                      animatePrice ? "scale-100 opacity-100" : "scale-95 opacity-0"
                    } ${plan.popular ? "text-black" : "text-accent"}`}>
                      ${currentPrice}
                    </span>
                    <span className={`text-sm font-semibold ml-2 ${
                      plan.popular ? "text-black/60" : "text-white/40"
                    }`}>
                      / mes
                    </span>
                  </div>

                  {/* Savings Subtext */}
                  <p className={`text-xs mb-8 font-medium ${
                    plan.popular ? "text-black/70" : "text-white/40"
                  }`}>
                    {savingsText}
                  </p>

                  {/* Divider Line */}
                  <div className={`border-b mb-8 ${
                    plan.popular ? "border-black/10" : "border-white/10"
                  }`} />

                  {/* Features List */}
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-3">
                        <Check className={`w-4 h-4 shrink-0 mt-0.5 ${
                          plan.popular ? "text-black" : "text-accent"
                        }`} />
                        <span className={`text-sm leading-none ${
                          plan.popular ? "text-black/85 font-medium" : "text-white/70"
                        }`}>
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pricing CTA Button */}
                <button className={`w-full py-4 rounded-full text-sm font-bold tracking-wide hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer ${
                  plan.popular
                    ? "bg-black text-white hover:bg-[#1A1A1A]"
                    : "bg-transparent text-white border border-white/20 hover:border-white/60 hover:bg-white/5"
                }`}>
                  {plan.cta}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
