import { U as jsxRuntimeExports } from "./worker-entry-DObN8Us4.js";
import { m as motion } from "./router-C8lCCNMW.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const fadeUp = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};
const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};
const hours = [{
  day: "Monday",
  time: "Closed"
}, {
  day: "Tuesday",
  time: "9:30 AM – 6:00 PM"
}, {
  day: "Wednesday",
  time: "9:30 AM – 6:00 PM"
}, {
  day: "Thursday",
  time: "9:30 AM – 6:00 PM"
}, {
  day: "Friday",
  time: "9:30 AM – 6:00 PM"
}, {
  day: "Saturday",
  time: "9:00 AM – 3:00 PM"
}, {
  day: "Sunday",
  time: "Closed"
}];
function VisitPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-padding pb-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { className: "max-w-3xl mx-auto text-center", initial: "hidden", animate: "visible", variants: stagger, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: fadeUp, className: "accent-divider mx-auto mb-8" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.h1, { variants: fadeUp, className: "text-display text-4xl md:text-6xl font-light mb-4", children: "Visit Us" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { variants: fadeUp, className: "text-muted-foreground text-sm md:text-base", children: "We'd love to see you" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-padding pt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: "hidden", whileInView: "visible", viewport: {
        once: true
      }, variants: stagger, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.h2, { variants: fadeUp, className: "text-display text-2xl md:text-3xl font-light mb-8", children: "Hours" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: hours.map((h) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeUp, className: "flex justify-between items-center py-2 border-b border-border last:border-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium", children: h.day }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-sm ${h.time === "Closed" ? "text-muted-foreground" : "text-foreground"}`, children: h.time })
        ] }, h.day)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: "hidden", whileInView: "visible", viewport: {
        once: true
      }, variants: stagger, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.h2, { variants: fadeUp, className: "text-display text-2xl md:text-3xl font-light mb-8", children: "Location" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeUp, className: "mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-relaxed mb-1", children: "25 Base Line Rd W" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-relaxed mb-1", children: "London, ON N6J 1V1" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-2", children: "Entrance from McGregor Ave" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: fadeUp, className: "mb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+15196869999", className: "text-accent-pop hover:text-accent-pop-light transition-colors text-lg text-display", children: "(519) 686-9999" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: fadeUp, className: "overflow-hidden rounded-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx("iframe", { title: "Adesso Hair & Beauty location", src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2919.2!2d-81.2573!3d42.9634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882ef20a3b2b47c3%3A0x7d8b41eb7c4a4e8a!2s25+Base+Line+Rd+W%2C+London%2C+ON+N6J+1V1!5e0!3m2!1sen!2sca!4v1", width: "100%", height: "300", style: {
          border: 0
        }, allowFullScreen: true, loading: "lazy", referrerPolicy: "no-referrer-when-downgrade" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: fadeUp, className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://maps.google.com/?q=25+Base+Line+Rd+W,+London,+ON+N6J+1V1", target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 text-body text-xs tracking-[0.2em] uppercase text-foreground hover:text-accent-pop transition-colors", children: [
          "Get Directions",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base", children: "→" })
        ] }) })
      ] })
    ] }) })
  ] });
}
export {
  VisitPage as component
};
