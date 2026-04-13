import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { Quote } from "lucide-react";
import hairImage from "@/assets/services-hair.jpg";
import nailsImage from "@/assets/services-nails.jpg";
import cosmeticImage from "@/assets/services-cosmetic.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Adesso Hair & Beauty — Premium Salon in London, Ontario" },
      { name: "description", content: "Adesso Hair & Beauty is a premier salon in London, Ontario offering expert haircuts, colour, styling, manicures, pedicures, waxing, cosmetic and facial treatments. Call (519) 686-9999." },
      { property: "og:title", content: "Adesso Hair & Beauty — Premium Salon in London, Ontario" },
      { property: "og:description", content: "Expert hair styling, nail care, waxing, and beauty treatments in London, Ontario. Book your appointment today." },
    ],
    links: [
      { rel: "canonical", href: "https://adessohair.com" },
    ],
  }),
  component: HomePage,
});

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <img
          src="/images/hero-salon.png"
          alt="Adesso Hair & Beauty salon interior"
          className="absolute inset-0 w-full h-full object-cover"
          width={1200}
          height={1231}
        />
        <div className="hero-overlay absolute inset-0" />
        <motion.div
          className="relative z-10 text-center px-6"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="accent-divider mx-auto mb-8" />
          <motion.h1
            variants={fadeUp}
            className="text-display text-5xl md:text-7xl lg:text-8xl font-light tracking-[0.15em] text-primary-foreground mb-6"
          >
            ADESSO
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-body text-xs md:text-sm tracking-[0.3em] uppercase text-primary-foreground/70 mb-10"
          >
            Hair &amp; Beauty
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+15196869999"
              className="inline-flex items-center justify-center px-8 py-3 border border-primary-foreground/30 text-primary-foreground text-body text-xs tracking-[0.2em] uppercase hover:bg-primary-foreground/10 transition-all duration-300"
            >
              Call Now
            </a>
            <Link
              to="/services"
              className="inline-flex items-center justify-center px-8 py-3 bg-accent-pop text-primary text-body text-xs tracking-[0.2em] uppercase hover:bg-accent-pop-light transition-all duration-300"
            >
              Our Services
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Intro */}
      <section className="section-padding">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="accent-divider mx-auto mb-8" />
          <motion.h2
            variants={fadeUp}
            className="text-display text-3xl md:text-5xl font-light mb-6"
          >
            Where Beauty Meets Artistry
          </motion.h2>
          <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed text-sm md:text-base">
            Nestled in the heart of London, Ontario, Adesso has been the destination for those who appreciate expert craftsmanship and personalized care. From precision cuts to rejuvenating treatments, every visit is an experience.
          </motion.p>
        </motion.div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-cream-dark">
        <motion.div
          className="max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="text-center mb-16">
            <div className="accent-divider mx-auto mb-8" />
            <h2 className="text-display text-3xl md:text-5xl font-light">Our Services</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { img: hairImage, title: "Hair", desc: "Cuts, colour, styling & treatments", w: 800, h: 1000 },
              { img: nailsImage, title: "Hands & Feet", desc: "Manicures, pedicures & nail art", w: 800, h: 1000 },
              { img: cosmeticImage, title: "Cosmetic & Facial", desc: "Skincare, makeup & rejuvenation", w: 800, h: 1000 },
            ].map((service) => (
              <motion.div key={service.title} variants={fadeUp}>
                <Link to="/services" className="group block">
                  <div className="overflow-hidden mb-6">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                      width={service.w}
                      height={service.h}
                    />
                  </div>
                  <h3 className="text-display text-2xl font-light mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.desc}</p>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeUp} className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-body text-xs tracking-[0.2em] uppercase text-foreground hover:text-accent-pop transition-colors"
            >
              View All Services
              <span className="text-base">→</span>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Reviews */}
      <ReviewsSection />


      <section className="section-padding">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="accent-divider mx-auto mb-8" />
          <motion.h2 variants={fadeUp} className="text-display text-3xl md:text-5xl font-light mb-6">
            Book Your Visit
          </motion.h2>
          <motion.p variants={fadeUp} className="text-muted-foreground mb-8 text-sm md:text-base">
            Request an appointment online or give us a call. Walk-ins are also welcome.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/book"
              className="inline-flex items-center justify-center px-10 py-4 bg-accent-pop text-accent-foreground text-body text-xs tracking-[0.2em] uppercase hover:bg-accent-pop-light transition-all duration-300"
            >
              Request Appointment
            </Link>
            <a
              href="tel:+15196869999"
              className="inline-flex items-center justify-center px-10 py-4 border border-foreground/20 text-foreground text-body text-xs tracking-[0.2em] uppercase hover:bg-foreground/5 transition-all duration-300"
            >
              (519) 686-9999
            </a>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}

const reviews = [
  {
    name: "Tim",
    text: "The stylists at Adesso are professional and always provide friendly, attentive service, taking the time to understand exactly what you want. I highly recommend Adesso!",
  },
  {
    name: "Shelly",
    text: "Very happy I finally found my girl, I hope she never leaves!",
  },
  {
    name: "Monika",
    text: "Had such a great experience. Friendly staff and clean, modern atmosphere!",
  },
  {
    name: "Karen",
    text: "I've been to Adesso many times and have always had a great experience! Whether I was coming in for a cut, highlights or full colour, the stylists were always professional and very welcoming.",
  },
];

function ReviewsSection() {
  const [active, setActive] = useState(0);

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % reviews.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="section-padding bg-primary text-primary-foreground overflow-hidden">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
      >
        <motion.div variants={fadeUp} className="flex justify-center mb-8">
          <Quote className="w-10 h-10 text-accent-pop-light opacity-60" />
        </motion.div>
        <motion.h2
          variants={fadeUp}
          className="text-display text-3xl md:text-5xl font-light mb-12"
        >
          What Our Clients Say
        </motion.h2>

        <motion.div variants={fadeUp} className="relative min-h-[180px] flex items-center justify-center">
          {reviews.map((review, i) => (
            <div
              key={review.name}
              className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 ${
                i === active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
              }`}
            >
              <p className="text-display text-lg md:text-2xl font-light leading-relaxed italic mb-8 max-w-2xl px-4">
                "{review.text}"
              </p>
              <p className="text-body text-xs tracking-[0.2em] uppercase text-primary-foreground/60">
                — {review.name}
              </p>
            </div>
          ))}
        </motion.div>

        <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 mt-10">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === active ? "bg-accent-pop-light w-6" : "bg-primary-foreground/30 hover:bg-primary-foreground/50"
              }`}
              aria-label={`View review ${i + 1}`}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
