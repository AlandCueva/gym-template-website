import { useState } from "react";
import { APIProvider, Map, AdvancedMarker, Pin, InfoWindow } from "@vis.gl/react-google-maps";
import { MapPin, Phone, Clock, Sparkles, Navigation, Layers, ShieldCheck } from "lucide-react";
import { useInView } from "../hooks/useInView";

const API_KEY =
  process.env.GOOGLE_MAPS_PLATFORM_KEY ||
  (import.meta as any).env?.VITE_GOOGLE_MAPS_PLATFORM_KEY ||
  (globalThis as any).GOOGLE_MAPS_PLATFORM_KEY ||
  "";

const hasValidKey = Boolean(API_KEY) && API_KEY !== "YOUR_API_KEY" && API_KEY.trim() !== "";

export default function LocationSection() {
  const { ref, isInView } = useInView();
  const [isInfoWindowOpen, setIsInfoWindowOpen] = useState(true);

  // Avenida Orillas del Zamora y Segundo Puertas Moreno, Loja, Ecuador
  const locationCoordinates = { lat: -3.981812, lng: -79.201712 };

  return (
    <section
      id="location"
      ref={ref}
      className="bg-[#0D0D0D] px-6 border-b border-white/5 scroll-mt-12 min-h-screen py-16 lg:py-24 flex flex-col justify-center relative overflow-hidden"
    >
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(232,255,71,0.03)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-[90rem] mx-auto w-full relative z-10">
        {/* Header Row */}
        <div
          className={`mb-12 transition-all duration-700 delay-100 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <span className="text-accent text-xs font-semibold uppercase tracking-widest mb-3 block">
            NUESTRO TEMPLO EN LOJA
          </span>
          <h2 className="bebas-font text-5xl md:text-6xl text-white tracking-wide">
            Sede Central Loja.
          </h2>
          <p className="text-white/50 text-sm mt-3 leading-relaxed max-w-xl">
            Visítanos en la zona norte de la ciudad. Un complejo de alto rendimiento de varias plantas con arquitectura industrial y ventanales panorámicos.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Branch Information */}
          <div
            className={`lg:col-span-5 flex flex-col justify-between gap-6 transition-all duration-700 delay-200 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5"
            }`}
          >
            {/* Cards wrapper */}
            <div className="space-y-4">
              {/* Card 1: Address */}
              <div className="bg-[#1A1A1A] border border-white/5 rounded-2xl p-6 hover:border-accent/20 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 border border-accent/20">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg mb-1">Dirección</h4>
                    <p className="text-white/60 text-sm leading-relaxed">
                      Avenida Orillas del Zamora y Segundo Puertas Moreno, Loja, Ecuador.
                    </p>
                    <span className="inline-block text-[10px] text-accent font-semibold tracking-wider uppercase mt-2">
                      Frente al Sendero Ecológico
                    </span>
                  </div>
                </div>
              </div>

              {/* Card 2: Hours & Phone */}
              <div className="bg-[#1A1A1A] border border-white/5 rounded-2xl p-6 hover:border-accent/20 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 border border-accent/20">
                    <Clock className="w-5 h-5 text-accent" />
                  </div>
                  <div className="w-full">
                    <h4 className="text-white font-semibold text-lg mb-1">Horarios y Contacto</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm mt-2 text-white/60">
                      <div>
                        <span className="text-white/40 text-xs block uppercase tracking-wider">Lunes a Viernes</span>
                        <span className="font-medium text-white/90">05:00 - 23:00</span>
                      </div>
                      <div>
                        <span className="text-white/40 text-xs block uppercase tracking-wider">Sábados</span>
                        <span className="font-medium text-white/90">07:00 - 18:00</span>
                      </div>
                      <div className="col-span-2 mt-2 pt-2 border-t border-white/5 flex items-center gap-2">
                        <Phone className="w-3.5 h-3.5 text-accent" />
                        <span className="text-white/75">+593 98 765 4321</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3: Features */}
              <div className="bg-[#1A1A1A] border border-white/5 rounded-2xl p-6 hover:border-accent/20 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 border border-accent/20">
                    <Layers className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg mb-1">Instalaciones Destacadas</h4>
                    <ul className="text-white/60 text-sm space-y-1.5 mt-2 list-none">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        3 Plantas con vistas panorámicas
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        Zona de Fuerza Extrema y Racks de Alta Gama
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        Iluminación LED Cyberpunk de alta energía
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        Estacionamiento exclusivo y privado
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick action button to external maps */}
            <a
              href="https://maps.google.com/?q=Avenida+Orillas+del+Zamora+y+Segundo+Puertas+Moreno+Loja+Ecuador"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-black font-extrabold text-sm py-4 px-6 rounded-xl hover:bg-white hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 inline-flex items-center justify-center gap-2 uppercase tracking-wider text-center"
            >
              <Navigation className="w-4 h-4 fill-black" />
              Ver en Google Maps
            </a>
          </div>

          {/* Right Column: Map Block */}
          <div
            className={`lg:col-span-7 rounded-2xl overflow-hidden border border-white/10 min-h-[400px] lg:min-h-0 relative bg-[#1A1A1A] flex flex-col justify-center transition-all duration-700 delay-350 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-5"
            }`}
          >
            {hasValidKey ? (
              <div className="w-full h-full min-h-[450px]">
                <APIProvider apiKey={API_KEY} version="weekly">
                  <Map
                    defaultCenter={locationCoordinates}
                    defaultZoom={15}
                    mapId="DEMO_MAP_ID"
                    gestureHandling="cooperative"
                    disableDefaultUI={false}
                    internalUsageAttributionIds={["gmp_mcp_codeassist_v1_aistudio"]}
                    style={{ width: "100%", height: "100%" }}
                  >
                    <AdvancedMarker position={locationCoordinates} onClick={() => setIsInfoWindowOpen(true)}>
                      <Pin background="#ffe202" glyphColor="#000" borderColor="#000" />
                    </AdvancedMarker>

                    {isInfoWindowOpen && (
                      <InfoWindow position={locationCoordinates} onCloseClick={() => setIsInfoWindowOpen(false)}>
                        <div className="p-2 text-black max-w-[180px]">
                          <strong className="text-sm block font-bold mb-0.5">TITANUS GYM LOJA</strong>
                          <span className="text-xs text-black/70">Donde entrenan los Titanes. Av. Orillas del Zamora.</span>
                        </div>
                      </InfoWindow>
                    )}
                  </Map>
                </APIProvider>
              </div>
            ) : (
              /* High-fidelity custom map placeholder with exact API configuration guide */
              <div className="absolute inset-0 p-8 flex flex-col items-center justify-center text-center bg-[#0D0D0D]/90 relative overflow-hidden">
                {/* Background grid overlay representing a styled map */}
                <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
                
                {/* Visual marker inside the placeholder map */}
                <div className="w-16 h-16 rounded-full bg-accent/10 border-2 border-accent flex items-center justify-center mb-6 relative animate-pulse">
                  <MapPin className="w-8 h-8 text-accent" />
                  <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-accent"></span>
                  </span>
                </div>

                <div className="max-w-md relative z-10 space-y-4">
                  <h3 className="bebas-font text-3xl text-white tracking-wide">
                    Mapa de Sede Central Loja
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Para activar la vista interactiva del mapa satelital y de calles, por favor añade tu clave de Google Maps en los Secretos del espacio de trabajo.
                  </p>

                  <div className="bg-[#1A1A1A] border border-white/5 rounded-xl p-5 text-left space-y-3 shadow-xl">
                    <div className="flex items-center gap-2 text-accent text-xs font-semibold uppercase tracking-widest border-b border-white/5 pb-2">
                      <ShieldCheck className="w-4 h-4" />
                      Instrucciones de Activación
                    </div>
                    <ol className="text-xs text-white/50 space-y-2.5 list-decimal pl-4 leading-relaxed">
                      <li>
                        Consigue una clave de API: <a href="https://console.cloud.google.com/google/maps-apis/start?utm_campaign=gmp-code-assist-ais" target="_blank" rel="noopener noreferrer" className="text-accent underline hover:text-white">Google Cloud Console</a>
                      </li>
                      <li>
                        Abre los <strong>Ajustes</strong> (icono de engranaje ⚙️ en la esquina superior derecha de AI Studio).
                      </li>
                      <li>
                        Selecciona <strong>Secrets</strong> del menú de configuración.
                      </li>
                      <li>
                        Crea una variable llamada <code>GOOGLE_MAPS_PLATFORM_KEY</code>, pega tu clave como valor y presiona <strong>Enter</strong>.
                      </li>
                    </ol>
                  </div>
                  
                  <p className="text-[10px] text-white/40">
                    La aplicación se compilará automáticamente al ingresar la clave secreta.
                  </p>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
