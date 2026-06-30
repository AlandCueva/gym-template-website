import TitanusIcon from "./TitanusIcon";
import { Instagram, Twitter, Youtube, Facebook } from "lucide-react";

export default function Footer() {
  const socialIcons = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "Youtube" },
    { icon: Facebook, href: "#", label: "Facebook" },
  ];

  const directories = [
    {
      title: "Compañía",
      links: ["Acerca de", "Carreras", "Prensa", "Blog"],
    },
    {
      title: "Entrenamiento",
      links: ["Powerlifting", "Hipertrofia", "Fuerza Industrial", "HIIT Élite"],
    },
    {
      title: "Soporte",
      links: ["Preguntas Frecuentes", "Contacto", "App de Titanes", "Planes"],
    },
    {
      title: "Ubicación",
      links: ["Loja - Central", "Quito (Próximamente)", "Cuenca (Próximamente)"],
    },
  ];

  return (
    <footer id="footer" className="bg-[#0D0D0D] border-t border-white/5 px-6 pt-16 pb-8">
      <div className="max-w-[90rem] mx-auto">
        {/* Top Directory Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
          {/* Logo Column */}
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-3 group">
              <TitanusIcon className="w-8 h-8 text-white group-hover:text-accent transition-colors" />
              <span className="bebas-font text-2xl text-white tracking-widest">
                TITANUS
              </span>
            </a>
            
            <p className="text-white/40 text-sm max-w-xs mt-4 leading-relaxed">
              Donde entrenan los Titanes. Un templo de entrenamiento premium con disciplina implacable, diseñado para forjar tu mejor versión.
            </p>

            {/* Social Icons Row */}
            <div className="flex gap-4 mt-6">
              {socialIcons.map((soc, idx) => {
                const Icon = soc.icon;
                return (
                  <a
                    key={idx}
                    href={soc.href}
                    aria-label={soc.label}
                    className="w-9 h-9 rounded-full border border-white/10 hover:border-accent hover:text-accent flex items-center justify-center text-white/50 hover:scale-105 active:scale-95 transition-all duration-200"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Directory Columns */}
          {directories.map((dir) => (
            <div key={dir.title} className="col-span-1">
              <h4 className="text-white/30 text-xs font-bold uppercase tracking-widest mb-4">
                {dir.title}
              </h4>
              <ul className="space-y-2.5">
                {dir.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/50 text-sm hover:text-accent hover:translate-x-0.5 inline-block transition-all duration-150"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center flex-wrap gap-4 text-white/30 text-xs font-medium">
          <p>
            &copy; 2026 TITANUS Gym. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos de Servicio</a>
            <a href="#" className="hover:text-white transition-colors">Configuración de Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
