import React from "react";

export default function TickerSection() {
  const items = [
    "ENTRENAMIENTO DE FUERZA",
    "COMUNIDAD DE TITANES",
    "CLASES DE HIIT",
    "DISCIPLINA IMPLACABLE",
    "COACHES DE ÉLITE",
    "ABIERTO 24/7",
    "TECNOLOGÍA INDUSTRIAL-FUTURISTA",
    "DONDE ENTRENAN LOS TITANES",
  ];

  return (
    <section className="bg-[#0D0D0D] py-12 lg:py-8 overflow-hidden relative">
      {/* Top glowing LED linear lighting accent */}
      <div className="absolute top-0 left-0 right-0 led-line-yellow opacity-85" />
      
      <div className="flex relative w-full overflow-hidden">
        {/* Animated marquee track (repeated list for seamless infinitely looping layout) */}
        <div className="flex animate-marquee gap-8 md:gap-16 items-center whitespace-nowrap">
          {/* First loop of items */}
          {items.map((item, index) => (
            <div key={`loop-1-${index}`} className="flex items-center gap-3 mx-4 md:mx-8">
              <span className="w-2 h-2 rounded-full bg-accent led-glow-yellow" />
              <span className="text-cool-white font-bold tracking-widest uppercase text-xs sm:text-sm drop-shadow-[0_0_6px_rgba(204,255,0,0.15)]">
                {item}
              </span>
            </div>
          ))}
          {/* Second loop of items */}
          {items.map((item, index) => (
            <div key={`loop-2-${index}`} className="flex items-center gap-3 mx-4 md:mx-8">
              <span className="w-2 h-2 rounded-full bg-accent led-glow-yellow" />
              <span className="text-cool-white font-bold tracking-widest uppercase text-xs sm:text-sm drop-shadow-[0_0_6px_rgba(204,255,0,0.15)]">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom glowing LED linear lighting accent */}
      <div className="absolute bottom-0 left-0 right-0 led-line-yellow opacity-85" />
    </section>
  );
}
