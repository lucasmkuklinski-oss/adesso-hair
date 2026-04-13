import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";

export const Route = createFileRoute("/visit")({
  head: () => ({
    meta: [
      { title: "Hours & Location — Adesso Hair & Beauty London, ON" },
      { name: "description", content: "Visit Adesso Hair & Beauty at 25 Base Line Rd W, London, Ontario N6J 1V1. Open Tuesday–Saturday. Call (519) 686-9999 for appointments." },
      { property: "og:title", content: "Hours & Location — Adesso Hair & Beauty London, ON" },
      { property: "og:description", content: "25 Base Line Rd W, London, Ontario. Open Tue–Sat. Call (519) 686-9999." },
    ],
    links: [
      { rel: "canonical", href: "https://adessohair.com/visit" },
    ],
  }),
  component: VisitPage,
});

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const hours = [
  { day: "Monday", time: "Closed" },
  { day: "Tuesday", time: "9:30 AM – 6:00 PM" },
  { day: "Wednesday", time: "9:30 AM – 6:00 PM" },
  { day: "Thursday", time: "9:30 AM – 6:00 PM" },
  { day: "Friday", time: "9:30 AM – 6:00 PM" },
  { day: "Saturday", time: "9:00 AM – 3:00 PM" },
  { day: "Sunday", time: "Closed" },
];

function VisitPage() {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="section-padding pb-12">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="accent-divider mx-auto mb-8" />
          <motion.h1 variants={fadeUp} className="text-display text-4xl md:text-6xl font-light mb-4">
            Visit Us
          </motion.h1>
          <motion.p variants={fadeUp} className="text-muted-foreground text-sm md:text-base">
            We'd love to see you
          </motion.p>
        </motion.div>
      </section>

      {/* Content */}
      <section className="section-padding pt-0">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Hours */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2 variants={fadeUp} className="text-display text-2xl md:text-3xl font-light mb-8">
              Hours
            </motion.h2>
            <div className="space-y-4">
              {hours.map((h) => (
                <motion.div
                  key={h.day}
                  variants={fadeUp}
                  className="flex justify-between items-center py-2 border-b border-border last:border-0"
                >
                  <span className="text-sm font-medium">{h.day}</span>
                  <span className={`text-sm ${h.time === "Closed" ? "text-muted-foreground" : "text-foreground"}`}>
                    {h.time}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Location */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2 variants={fadeUp} className="text-display text-2xl md:text-3xl font-light mb-8">
              Location
            </motion.h2>
            <motion.div variants={fadeUp} className="mb-6">
              <p className="text-sm leading-relaxed mb-1">25 Base Line Rd W</p>
              <p className="text-sm leading-relaxed mb-1">London, ON N6J 1V1</p>
              <p className="text-xs text-muted-foreground mt-2">Entrance from McGregor Ave</p>
            </motion.div>

            <motion.div variants={fadeUp} className="mb-8">
              <a
                href="tel:+15196869999"
                className="text-accent-pop hover:text-accent-pop-light transition-colors text-lg text-display"
              >
                (519) 686-9999
              </a>
            </motion.div>

            <motion.div variants={fadeUp} className="overflow-hidden rounded-sm">
              <iframe
                title="Adesso Hair & Beauty location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2919.2!2d-81.2573!3d42.9634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882ef20a3b2b47c3%3A0x7d8b41eb7c4a4e8a!2s25+Base+Line+Rd+W%2C+London%2C+ON+N6J+1V1!5e0!3m2!1sen!2sca!4v1"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>

            <motion.div variants={fadeUp} className="mt-6">
              <a
                href="https://maps.google.com/?q=25+Base+Line+Rd+W,+London,+ON+N6J+1V1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-body text-xs tracking-[0.2em] uppercase text-foreground hover:text-accent-pop transition-colors"
              >
                Get Directions
                <span className="text-base">→</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
