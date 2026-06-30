import { useState } from "react";
import TitanusIcon from "./TitanusIcon";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Clases", href: "#classes" },
    { name: "Entrenadores", href: "#trainers" },
    { name: "Precios", href: "#pricing" },
    { name: "Comunidad", href: "#testimonials" },
    { name: "Ubicación", href: "#location" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#0D0D0D]/85 backdrop-blur-md border-b border-white/6">
      <div className="max-w-[90rem] mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left Side: Logo + Wordmark */}
        <a href="#" className="flex items-center gap-3 group">
          <TitanusIcon className="w-8 h-8 text-white group-hover:text-accent transition-colors" />
          <span className="bebas-font text-2xl text-white tracking-widest">
            TITANUS
          </span>
        </a>

        {/* Center Side: Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/60 hover:text-white transition-colors uppercase tracking-wider"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right Side: CTA Actions */}
        <div className="hidden md:flex items-center gap-3">
          <button className="border border-white/20 text-white/70 text-sm font-medium px-5 py-2 rounded-full hover:border-white/50 hover:text-white transition-all duration-200 cursor-pointer">
            Ingresar
          </button>
          <a
            href="#pricing"
            className="bg-accent text-black text-sm font-semibold px-6 py-2 rounded-full hover:bg-white hover:scale-[1.02] transition-all duration-200 cursor-pointer"
          >
            Prueba Gratis
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white/80 hover:text-white focus:outline-none p-1"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-[100%] left-0 w-full bg-[#0D0D0D] border-b border-white/10 flex flex-col px-6 py-8 gap-6 animate-fade-up z-40">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-semibold text-white/70 hover:text-accent transition-colors uppercase tracking-wider py-1 border-b border-white/5"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-3 mt-2">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full text-center border border-white/20 text-white py-3 rounded-full hover:border-white/50 transition-colors"
            >
              Ingresar
            </button>
            <a
              href="#pricing"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full text-center bg-accent text-black font-semibold py-3 rounded-full hover:bg-white transition-colors"
            >
              Prueba Gratis
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
