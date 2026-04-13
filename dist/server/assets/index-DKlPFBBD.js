import { U as jsxRuntimeExports, r as reactExports } from "./worker-entry-DObN8Us4.js";
import { m as motion, L as Link } from "./router-C8lCCNMW.js";
import { c as createLucideIcon } from "./createLucideIcon-D9xtI4gc.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode = [
  [
    "path",
    {
      d: "M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
      key: "rib7q0"
    }
  ],
  [
    "path",
    {
      d: "M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
      key: "1ymkrd"
    }
  ]
];
const Quote = createLucideIcon("quote", __iconNode);
const hairImage = "/assets/services-hair-BnfDtnPw.jpg";
const nailsImage = "/assets/services-nails-C2_jraTj.jpg";
const cosmeticImage = "/assets/services-cosmetic-C_sq6eQi.jpg";
const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};
const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
};
function HomePage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative h-screen flex items-center justify-center overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/hero-salon.png", alt: "Adesso Hair & Beauty salon interior", className: "absolute inset-0 w-full h-full object-cover", width: 1200, height: 1231 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hero-overlay absolute inset-0" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { className: "relative z-10 text-center px-6", initial: "hidden", animate: "visible", variants: stagger, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: fadeUp, className: "accent-divider mx-auto mb-8" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.h1, { variants: fadeUp, className: "text-display text-5xl md:text-7xl lg:text-8xl font-light tracking-[0.15em] text-primary-foreground mb-6", children: "ADESSO" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { variants: fadeUp, className: "text-body text-xs md:text-sm tracking-[0.3em] uppercase text-primary-foreground/70 mb-10", children: "Hair & Beauty" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeUp, className: "flex flex-col sm:flex-row items-center justify-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+15196869999", className: "inline-flex items-center justify-center px-8 py-3 border border-primary-foreground/30 text-primary-foreground text-body text-xs tracking-[0.2em] uppercase hover:bg-primary-foreground/10 transition-all duration-300", children: "Call Now" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/services", className: "inline-flex items-center justify-center px-8 py-3 bg-accent-pop text-primary text-body text-xs tracking-[0.2em] uppercase hover:bg-accent-pop-light transition-all duration-300", children: "Our Services" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-padding", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { className: "max-w-3xl mx-auto text-center", initial: "hidden", whileInView: "visible", viewport: {
      once: true,
      margin: "-100px"
    }, variants: stagger, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: fadeUp, className: "accent-divider mx-auto mb-8" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.h2, { variants: fadeUp, className: "text-display text-3xl md:text-5xl font-light mb-6", children: "Where Beauty Meets Artistry" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { variants: fadeUp, className: "text-muted-foreground leading-relaxed text-sm md:text-base", children: "Nestled in the heart of London, Ontario, Adesso has been the destination for those who appreciate expert craftsmanship and personalized care. From precision cuts to rejuvenating treatments, every visit is an experience." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-padding bg-cream-dark", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { className: "max-w-6xl mx-auto", initial: "hidden", whileInView: "visible", viewport: {
      once: true,
      margin: "-100px"
    }, variants: stagger, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeUp, className: "text-center mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "accent-divider mx-auto mb-8" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-display text-3xl md:text-5xl font-light", children: "Our Services" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: [{
        img: hairImage,
        title: "Hair",
        desc: "Cuts, colour, styling & treatments",
        w: 800,
        h: 1e3
      }, {
        img: nailsImage,
        title: "Hands & Feet",
        desc: "Manicures, pedicures & nail art",
        w: 800,
        h: 1e3
      }, {
        img: cosmeticImage,
        title: "Cosmetic & Facial",
        desc: "Skincare, makeup & rejuvenation",
        w: 800,
        h: 1e3
      }].map((service) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: fadeUp, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/services", className: "group block", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: service.img, alt: service.title, className: "w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105", loading: "lazy", width: service.w, height: service.h }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-display text-2xl font-light mb-2", children: service.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: service.desc })
      ] }) }, service.title)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: fadeUp, className: "text-center mt-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/services", className: "inline-flex items-center gap-2 text-body text-xs tracking-[0.2em] uppercase text-foreground hover:text-accent-pop transition-colors", children: [
        "View All Services",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base", children: "→" })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ReviewsSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-padding", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { className: "max-w-3xl mx-auto text-center", initial: "hidden", whileInView: "visible", viewport: {
      once: true,
      margin: "-100px"
    }, variants: stagger, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: fadeUp, className: "accent-divider mx-auto mb-8" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.h2, { variants: fadeUp, className: "text-display text-3xl md:text-5xl font-light mb-6", children: "Book Your Visit" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { variants: fadeUp, className: "text-muted-foreground mb-8 text-sm md:text-base", children: "Request an appointment online or give us a call. Walk-ins are also welcome." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeUp, className: "flex flex-col sm:flex-row items-center justify-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/book", className: "inline-flex items-center justify-center px-10 py-4 bg-accent-pop text-accent-foreground text-body text-xs tracking-[0.2em] uppercase hover:bg-accent-pop-light transition-all duration-300", children: "Request Appointment" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+15196869999", className: "inline-flex items-center justify-center px-10 py-4 border border-foreground/20 text-foreground text-body text-xs tracking-[0.2em] uppercase hover:bg-foreground/5 transition-all duration-300", children: "(519) 686-9999" })
      ] })
    ] }) })
  ] });
}
const reviews = [{
  name: "Tim",
  text: "The stylists at Adesso are professional and always provide friendly, attentive service, taking the time to understand exactly what you want. I highly recommend Adesso!"
}, {
  name: "Shelly",
  text: "Very happy I finally found my girl, I hope she never leaves!"
}, {
  name: "Monika",
  text: "Had such a great experience. Friendly staff and clean, modern atmosphere!"
}, {
  name: "Karen",
  text: "I've been to Adesso many times and have always had a great experience! Whether I was coming in for a cut, highlights or full colour, the stylists were always professional and very welcoming."
}];
function ReviewsSection() {
  const [active, setActive] = reactExports.useState(0);
  const next = reactExports.useCallback(() => {
    setActive((prev) => (prev + 1) % reviews.length);
  }, []);
  reactExports.useEffect(() => {
    const timer = setInterval(next, 5e3);
    return () => clearInterval(timer);
  }, [next]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-padding bg-primary text-primary-foreground overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { className: "max-w-4xl mx-auto text-center", initial: "hidden", whileInView: "visible", viewport: {
    once: true,
    margin: "-100px"
  }, variants: stagger, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: fadeUp, className: "flex justify-center mb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { className: "w-10 h-10 text-accent-pop-light opacity-60" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.h2, { variants: fadeUp, className: "text-display text-3xl md:text-5xl font-light mb-12", children: "What Our Clients Say" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: fadeUp, className: "relative min-h-[180px] flex items-center justify-center", children: reviews.map((review, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 ${i === active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-display text-lg md:text-2xl font-light leading-relaxed italic mb-8 max-w-2xl px-4", children: [
        '"',
        review.text,
        '"'
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-body text-xs tracking-[0.2em] uppercase text-primary-foreground/60", children: [
        "— ",
        review.name
      ] })
    ] }, review.name)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: fadeUp, className: "flex items-center justify-center gap-3 mt-10", children: reviews.map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setActive(i), className: `w-2 h-2 rounded-full transition-all duration-300 ${i === active ? "bg-accent-pop-light w-6" : "bg-primary-foreground/30 hover:bg-primary-foreground/50"}`, "aria-label": `View review ${i + 1}` }, i)) })
  ] }) });
}
export {
  HomePage as component
};
