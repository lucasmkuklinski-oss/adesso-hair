import { Link } from "@tanstack/react-router";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-display text-3xl tracking-[0.15em] font-light mb-4">ADESSO</h3>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Hair &amp; Beauty
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-body text-xs tracking-[0.2em] uppercase mb-6 text-primary-foreground/40">Navigate</h4>
            <nav className="flex flex-col gap-3">
              <Link to="/" className="text-sm text-primary-foreground/70 hover:text-accent-pop-light transition-colors">Home</Link>
              <Link to="/services" className="text-sm text-primary-foreground/70 hover:text-accent-pop-light transition-colors">Services</Link>
              <Link to="/book" className="text-sm text-primary-foreground/70 hover:text-accent-pop-light transition-colors">Book Appointment</Link>
              <Link to="/visit" className="text-sm text-primary-foreground/70 hover:text-accent-pop-light transition-colors">Hours &amp; Location</Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-body text-xs tracking-[0.2em] uppercase mb-6 text-primary-foreground/40">Contact</h4>
            <div className="flex flex-col gap-3 text-sm text-primary-foreground/70">
              <a href="tel:+15196869999" className="hover:text-accent-pop-light transition-colors">(519) 686-9999</a>
              <p>25 Base Line Rd W<br />London, ON N6J 1V1</p>
              <p className="text-primary-foreground/40 text-xs mt-2">Entrance from McGregor Ave</p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-primary-foreground/10 text-center">
          <p className="text-xs text-primary-foreground/30 tracking-wider">
            © {new Date().getFullYear()} Adesso Hair &amp; Beauty. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
