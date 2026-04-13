import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";
import { format } from "date-fns";
import { CalendarIcon, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book an Appointment — Adesso Hair & Beauty" },
      { name: "description", content: "Request a booking at Adesso Hair & Beauty in London, Ontario. Choose your stylist, preferred date, and service." },
      { property: "og:title", content: "Book an Appointment — Adesso Hair & Beauty" },
      { property: "og:description", content: "Request a booking at Adesso Hair & Beauty. Choose your stylist and preferred date." },
    ],
    links: [
      { rel: "canonical", href: "https://adessohair.com/book" },
    ],
  }),
  component: BookPage,
});

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const stylists = ["Anna", "Barbara", "Debbie", "Leah", "Joe", "Agnes", "Ewa"];

function BookPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState<Date>();
  const [stylist, setStylist] = useState("");
  const [service, setService] = useState("");
  const [notes, setNotes] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [state, submitToFormspree] = useForm("xpqkzqdv");

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!name.trim()) newErrors.name = "Name is required";
    if (!phone.trim()) newErrors.phone = "Phone number is required";
    if (!date) newErrors.date = "Please select a preferred date";
    if (!service.trim()) newErrors.service = "Please describe the service you'd like";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});

    // Inject the hidden fields so Formspree receives all data
    const form = e.target as HTMLFormElement;
    submitToFormspree(e);
    // suppress unused-var warning — form is used by Formspree internally
    void form;
  };

  // Disable Sundays and Mondays (closed days)
  const disabledDays = (day: Date) => {
    const dayOfWeek = day.getDay();
    return dayOfWeek === 0 || dayOfWeek === 1 || day < new Date();
  };

  if (state.succeeded) {
    return (
      <div className="pt-24">
        <section className="section-padding">
          <motion.div
            className="max-w-xl mx-auto text-center"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="flex justify-center mb-6">
              <CheckCircle2 className="w-16 h-16 text-accent-pop" />
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-display text-4xl md:text-5xl font-light mb-4">
              Request Received
            </motion.h1>
            <motion.p variants={fadeUp} className="text-muted-foreground mb-2">
              Thank you, {name}! We've received your booking request.
            </motion.p>
            <motion.p variants={fadeUp} className="text-muted-foreground text-sm mb-8">
              We'll call you at <span className="text-foreground font-medium">{phone}</span> to confirm your appointment
              {date && <> for <span className="text-foreground font-medium">{format(date, "EEEE, MMMM d, yyyy")}</span></>}
              {stylist && stylist !== "no-preference" && <> with <span className="text-foreground font-medium">{stylist}</span></>}.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+15196869999"
                className="inline-flex items-center justify-center px-8 py-3 bg-accent-pop text-accent-foreground text-body text-xs tracking-[0.2em] uppercase hover:bg-accent-pop-light transition-all duration-300"
              >
                Call Us Now
              </a>
              <button
                onClick={() => {
                  setName("");
                  setPhone("");
                  setEmail("");
                  setDate(undefined);
                  setStylist("");
                  setService("");
                  setNotes("");
                  window.location.reload();
                }}
                className="inline-flex items-center justify-center px-8 py-3 border border-foreground/20 text-foreground text-body text-xs tracking-[0.2em] uppercase hover:bg-foreground/5 transition-all duration-300"
              >
                New Request
              </button>
            </motion.div>
          </motion.div>
        </section>
      </div>
    );
  }

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="section-padding pb-8">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="accent-divider mx-auto mb-8" />
          <motion.h1 variants={fadeUp} className="text-display text-4xl md:text-6xl font-light mb-4">
            Request a Booking
          </motion.h1>
          <motion.p variants={fadeUp} className="text-muted-foreground text-sm md:text-base">
            Fill out the form below and we'll call you to confirm your appointment
          </motion.p>
        </motion.div>
      </section>

      {/* Form */}
      <section className="section-padding pt-4 pb-16">
        <motion.form
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto space-y-6"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          {/* Hidden fields so Formspree receives all values */}
          <input type="hidden" name="name" value={name} />
          <input type="hidden" name="phone" value={phone} />
          <input type="hidden" name="email" value={email} />
          <input type="hidden" name="date" value={date ? format(date, "EEEE, MMMM d, yyyy") : ""} />
          <input type="hidden" name="stylist" value={stylist === "no-preference" || !stylist ? "No preference" : stylist} />
          <input type="hidden" name="service" value={service} />
          <input type="hidden" name="notes" value={notes} />

          {/* Name */}
          <motion.div variants={fadeUp}>
            <label htmlFor="name" className="block text-body text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">
              Name <span className="text-accent-pop">*</span>
            </label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your full name"
              className="bg-card border-border text-foreground placeholder:text-muted-foreground/50 rounded-none h-12 text-sm"
              maxLength={100}
            />
            {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
          </motion.div>

          {/* Phone */}
          <motion.div variants={fadeUp}>
            <label htmlFor="phone" className="block text-body text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">
              Phone <span className="text-accent-pop">*</span>
            </label>
            <Input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="(519) 000-0000"
              className="bg-card border-border text-foreground placeholder:text-muted-foreground/50 rounded-none h-12 text-sm"
              maxLength={20}
            />
            {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone}</p>}
          </motion.div>

          {/* Email (optional) */}
          <motion.div variants={fadeUp}>
            <label htmlFor="email" className="block text-body text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">
              Email <span className="text-muted-foreground/50 normal-case">(optional)</span>
            </label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@email.com"
              className="bg-card border-border text-foreground placeholder:text-muted-foreground/50 rounded-none h-12 text-sm"
              maxLength={255}
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} className="text-destructive text-xs mt-1" />
          </motion.div>

          {/* Preferred Date */}
          <motion.div variants={fadeUp}>
            <label className="block text-body text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">
              Preferred Date <span className="text-accent-pop">*</span>
            </label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal rounded-none h-12 text-sm bg-card border-border",
                    !date && "text-muted-foreground/50"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4 text-accent-pop" />
                  {date ? format(date, "EEEE, MMMM d, yyyy") : "Select a date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  disabled={disabledDays}
                  initialFocus
                  className={cn("p-3 pointer-events-auto")}
                />
              </PopoverContent>
            </Popover>
            {errors.date && <p className="text-destructive text-xs mt-1">{errors.date}</p>}
          </motion.div>

          {/* Stylist */}
          <motion.div variants={fadeUp}>
            <label className="block text-body text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">
              Preferred Stylist <span className="text-muted-foreground/50 normal-case">(optional)</span>
            </label>
            <Select value={stylist} onValueChange={setStylist}>
              <SelectTrigger className="w-full rounded-none h-12 text-sm bg-card border-border">
                <SelectValue placeholder="No preference" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="no-preference">No preference</SelectItem>
                {stylists.map((s) => (
                  <SelectItem key={s} value={s}>{s}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </motion.div>

          {/* Service */}
          <motion.div variants={fadeUp}>
            <label htmlFor="service" className="block text-body text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">
              Service Requested <span className="text-accent-pop">*</span>
            </label>
            <Input
              id="service"
              value={service}
              onChange={(e) => setService(e.target.value)}
              placeholder="e.g. Haircut & colour, balayage, manicure..."
              className="bg-card border-border text-foreground placeholder:text-muted-foreground/50 rounded-none h-12 text-sm"
              maxLength={200}
            />
            {errors.service && <p className="text-destructive text-xs mt-1">{errors.service}</p>}
          </motion.div>

          {/* Notes */}
          <motion.div variants={fadeUp}>
            <label htmlFor="notes" className="block text-body text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">
              Additional Notes <span className="text-muted-foreground/50 normal-case">(optional)</span>
            </label>
            <Textarea
              id="notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Anything else we should know?"
              className="bg-card border-border text-foreground placeholder:text-muted-foreground/50 rounded-none min-h-[100px] text-sm resize-none"
              maxLength={500}
            />
          </motion.div>

          {/* Formspree error fallback */}
          <ValidationError errors={state.errors} className="text-destructive text-xs" />

          {/* Submit */}
          <motion.div variants={fadeUp} className="pt-4">
            <button
              type="submit"
              disabled={state.submitting}
              className="w-full inline-flex items-center justify-center px-10 py-4 bg-accent-pop text-accent-foreground text-body text-xs tracking-[0.2em] uppercase hover:bg-accent-pop-light transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {state.submitting ? "Sending…" : "Submit Request"}
            </button>
            <p className="text-center text-muted-foreground text-xs mt-4">
              This is a request — we'll confirm your appointment by phone.
            </p>
          </motion.div>
        </motion.form>
      </section>

      {/* Call CTA */}
      <section className="section-padding bg-cream-dark text-center">
        <div className="accent-divider mx-auto mb-8" />
        <h2 className="text-display text-2xl md:text-3xl font-light mb-4">Prefer to call?</h2>
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
