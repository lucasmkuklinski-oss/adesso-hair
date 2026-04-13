import { Link, useLocation } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${isHome ? "bg-transparent" : "bg-background/95 backdrop-blur-sm border-b border-border"}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
        <Link to="/" className="text-display text-2xl tracking-[0.15em] font-light">
          <span className={isHome ? "text-primary-foreground" : "text-foreground"}>
            ADESSO
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          <Link to="/" className={`nav-link ${isHome ? "nav-link-light" : ""}`}>Home</Link>
          <Link to="/services" className={`nav-link ${isHome ? "nav-link-light" : ""}`}>Services</Link>
          <Link to="/book" className={`nav-link ${isHome ? "nav-link-light" : ""}`}>Book</Link>
          <Link to="/visit" className={`nav-link ${isHome ? "nav-link-light" : ""}`}>Visit</Link>
          <a href="tel:+15196869999" className={`nav-link ${isHome ? "nav-link-light" : ""}`}>
            (519) 686-9999
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden flex flex-col gap-1.5 ${isHome ? "text-primary-foreground" : "text-foreground"}`}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-px bg-current transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-[3.5px]" : ""}`} />
          <span className={`block w-6 h-px bg-current transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-px bg-current transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-[3.5px]" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <nav className="flex flex-col items-center gap-6 py-8">
              <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>Home</Link>
              <Link to="/services" className="nav-link" onClick={() => setMenuOpen(false)}>Services</Link>
              <Link to="/book" className="nav-link" onClick={() => setMenuOpen(false)}>Book</Link>
              <Link to="/visit" className="nav-link" onClick={() => setMenuOpen(false)}>Visit</Link>
              <a href="tel:+15196869999" className="nav-link">(519) 686-9999</a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
