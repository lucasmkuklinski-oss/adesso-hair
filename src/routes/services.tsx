import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Hair & Beauty Services — Adesso Salon London, ON" },
      { name: "description", content: "Browse our full menu of services: haircuts, colour, balayage, manicures, pedicures, waxing, facials, and cosmetic treatments at Adesso Hair & Beauty in London, Ontario." },
      { property: "og:title", content: "Hair & Beauty Services — Adesso Salon London, ON" },
      { property: "og:description", content: "Haircuts, colour, nails, waxing, facials and more at Adesso Hair & Beauty in London, Ontario." },
    ],
    links: [
      { rel: "canonical", href: "https://adessohair.com/services" },
    ],
  }),
  component: ServicesPage,
});

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const services = [
  {
    category: "Hair",
    items: [
      { name: "Woman's Shampoo & Cut", price: "$40+" },
      { name: "Woman's Shampoo & Style", price: "$35+" },
      { name: "Woman's Cut & Style", price: "$50+" },
      { name: "Man's Cut", price: "$30+" },
      { name: "Children's Cut (Under 10 Years)", price: "$20+" },
      { name: "Children's Cut & Style", price: "$25+" },
      { name: "Highlights (Full)", price: "$120+" },
      { name: "Highlights (Partial)", price: "$90+" },
      { name: "Ombre / Balayage", price: "$150+" },
      { name: "Toner", price: "$20+" },
      { name: "Colour Roots", price: "$70+" },
      { name: "Colour, Cut & Style", price: "$120+" },
      { name: "Perm (Cut & Style Inc.)", price: "$100+" },
      { name: "Conditioning Treatment", price: "$20+" },
      { name: "Up Do", price: "$75+" },
    ],
  },
  {
    category: "Hand & Feet",
    items: [
      { name: "Classic Manicure", price: "$30" },
      { name: "Paraffin Treatment — Hands", price: "$10" },
      { name: "Gel Polish Manicure", price: "$40" },
      { name: "Gel Polish Removal", price: "$15" },
      { name: "Signature Pedicure", price: "$57" },
      { name: "Gel Polish Add-On", price: "$10" },
      { name: "Paraffin Treatment — Feet", price: "$12" },
    ],
  },
  {
    category: "Waxing",
    items: [
      { name: "Lip or Chin", price: "$12" },
      { name: "Eyebrow", price: "$15" },
      { name: "Eyebrow & Lip", price: "$25" },
      { name: "Cheeks", price: "$10 – $15" },
      { name: "Underarms", price: "$15 – $18" },
      { name: "Half Arms", price: "$25" },
      { name: "Full Arms", price: "$35" },
      { name: "Half Leg", price: "$35 – $40" },
      { name: "Full Leg", price: "$50 – $70" },
      { name: "Half Leg & Bikini", price: "$60 – $80" },
      { name: "Full Leg & Bikini", price: "$75 – $95" },
      { name: "Bikini Line", price: "$35 – $45" },
      { name: "Chest", price: "$40 – $60" },
      { name: "Back", price: "$50 – $60" },
    ],
  },
  {
    category: "Cosmetic",
    items: [
      { name: "Lash Tint", price: "$20" },
      { name: "Brow Tint", price: "$15" },
      { name: "Eyebrow Henna", price: "$35" },
    ],
  },
  {
    category: "Facial",
    subtitle: "Yonka Paris Treatments",
    items: [
      { name: "Beauty Flash Facial", price: "$50", duration: "30 – 45 min", desc: "Quick introduction to a facial. A great way to discover Yon-Ka products. All skin types." },
      { name: "The Grand Classique Facial", price: "$130", duration: "90 min", desc: "Deep pore cleansing with extractions. Products matched to your specific skin type. Face, décolleté, hand & arm massage for relaxation benefits. All skin types." },
      { name: "Hydralessence Facial", price: "$100", duration: "60 min", desc: "Deep hydrating treatment. Botanical extracts & hyaluronic acid will restore moisture & soften the skin. All skin types." },
      { name: "Optimizer Facial", price: "$120", duration: "60 min", desc: "Firming, contouring facial. Algae peel-off mask with marine collagen or bio-cellulose mask to smooth & plump fine wrinkles and soften expression lines. Mature skin." },
      { name: "Resurfacing & Brightening", price: "$75 / 4 for $255", desc: "Facial treatment with AHA/BHA acids, vitamin C. Designed to boost cell turnover and reduce the appearance of hyper-pigmentation." },
      { name: "Purify", price: "$80", duration: "45 min", desc: "Purifying, balancing treatment for blemished, acne-prone skin." },
    ],
  },
];

function ServicesPage() {
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
            Our Services
          </motion.h1>
          <motion.p variants={fadeUp} className="text-muted-foreground text-sm md:text-base">
            Prices are starting rates and may vary. Call for details.
          </motion.p>
        </motion.div>
      </section>

      {/* Service Categories */}
      <section className="section-padding pt-0">
        <div className="max-w-4xl mx-auto">
          {services.map((group, i) => (
            <motion.div
              key={group.category}
              className={`py-12 ${i > 0 ? "border-t border-border" : ""}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={stagger}
            >
              <motion.h2 variants={fadeUp} className="text-display text-2xl md:text-4xl font-light mb-2">
                {group.category}
              </motion.h2>
              {"subtitle" in group && group.subtitle && (
                <motion.p variants={fadeUp} className="text-muted-foreground text-xs tracking-[0.15em] uppercase mb-8">
                  {group.subtitle}
                </motion.p>
              )}
              {!("subtitle" in group) && <div className="mb-8" />}
              <div className="space-y-1">
                {group.items.map((item) => (
                  <motion.div
                    key={item.name}
                    variants={fadeUp}
                    className={`py-3 border-b border-border/50 last:border-0 ${"desc" in item ? "pb-4" : ""}`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-pop mr-4 shrink-0" />
                        <span className="text-sm text-foreground/80">{item.name}</span>
                        {"duration" in item && (
                          <span className="text-xs text-muted-foreground ml-2">({item.duration})</span>
                        )}
                      </div>
                      {"price" in item && (
                        <span className="text-sm text-accent-pop font-medium ml-4 shrink-0">{item.price}</span>
                      )}
                    </div>
                    {"desc" in item && (
                      <p className="text-xs text-muted-foreground mt-2 ml-[1.625rem] leading-relaxed">{item.desc}</p>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-cream-dark text-center">
        <div className="accent-divider mx-auto mb-8" />
        <h2 className="text-display text-3xl md:text-4xl font-light mb-4">Ready to Book?</h2>
        <p className="text-muted-foreground mb-8 text-sm">Call us to schedule your appointment</p>
        <a
          href="tel:+15196869999"
          className="inline-flex items-center justify-center px-10 py-4 bg-primary text-primary-foreground text-body text-xs tracking-[0.2em] uppercase hover:bg-primary/90 transition-all duration-300"
        >
          (519) 686-9999
        </a>
      </section>
    </div>
  );
}
