"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import { brand, navigation, services, stages } from "./content";
import { budget, jakartaDate, rupiah, validateInquiry } from "./inquiry";

export function Reveal({ children, className, delay = 0 }: {
  children: ReactNode; className?: string; delay?: number;
}) {
  const reduce = useReducedMotion();
  return <motion.div className={className} data-reveal
    initial={false}
    animate={reduce ? "visible" : "rest"}
    whileInView="visible"
    viewport={{ once: false, amount: 0.12 }}
    variants={{ rest: { opacity: 1, y: 8 }, visible: { opacity: 1, y: 0 } }}
    transition={{ duration: reduce ? 0 : .3, delay: reduce ? 0 : delay, ease: [.22, 1, .36, 1] }}>
    {children}
  </motion.div>;
}

export function HeroBackgroundVideo() {
  const [enabled, setEnabled] = useState(false);
  const [playing, setPlaying] = useState(false);
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => {
      setEnabled(!media.matches);
      if (media.matches) setPlaying(false);
    };
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  return <div className="hero-media" aria-hidden="true">
    {enabled && <video autoPlay muted loop playsInline preload="metadata" tabIndex={-1}
      className={playing ? "playing" : undefined} onPlaying={() => setPlaying(true)}
      onError={() => setPlaying(false)} poster="/images/wedding-film-poster.webp" src="/videos/wedding-film.mp4" />}
    <div className="scrim" />
  </div>;
}

export function StickyHeader({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [pathname]);

  return <header className="site-header" data-home={isHome} data-scrolled={scrolled}>
    {children}
    <nav className="desktop-nav" aria-label="Main navigation">
      {navigation.map(([label, href]) =>
        <Link key={href} href={href} aria-current={pathname === href ? "page" : undefined}>{label}</Link>
      )}
    </nav>
    <Link href="/consultation" className="header-cta"
      aria-current={pathname === "/consultation" ? "page" : undefined}>Contact us</Link>
    <MobileMenu pathname={pathname} />
  </header>;
}

function MobileMenu({ pathname }: { pathname: string }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);
  return <div className="mobile-menu">
    <button className="menu-toggle" aria-label="Open menu" aria-haspopup="dialog" aria-expanded={open}
      onClick={() => { dialog.current?.showModal(); setOpen(true); }}>
      <span /><span />
    </button>
    <dialog ref={dialog} aria-label="Menu" onClose={() => setOpen(false)}>
      <button className="menu-close" aria-label="Close menu" onClick={() => dialog.current?.close()}>×</button>
      <nav aria-label="Mobile navigation">
        {navigation.map(([label, href]) => <Link key={href} href={href}
          aria-current={pathname === href ? "page" : undefined} onClick={() => dialog.current?.close()}>{label}</Link>)}
        <Link href="/consultation" aria-current={pathname === "/consultation" ? "page" : undefined}
          onClick={() => dialog.current?.close()}>Contact us</Link>
      </nav>
    </dialog>
  </div>;
}

export function ProcessAccordion() {
  const [active, setActive] = useState<number | null>(null);
  const reduce = useReducedMotion();
  return <div className="accordion">
    {services.map(([title, details], index) => <div className="accordion-item" key={title}>
      <h3><button id={`service-${index}`} type="button" aria-expanded={active === index}
        aria-controls={`details-${index}`} onClick={() => setActive(active === index ? null : index)}>
        {title}<span aria-hidden="true" className="plus">{active === index ? "−" : "+"}</span>
      </button></h3>
      <div id={`details-${index}`} aria-labelledby={`service-${index}`}>
        <AnimatePresence initial={false}>
          {active === index && <motion.div className="accordion-details"
            initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }} transition={{ duration: reduce ? 0 : .24 }}>
            <p>{details}</p>
          </motion.div>}
        </AnimatePresence>
      </div>
    </div>)}
  </div>;
}

export function JourneyTabs() {
  const [active, setActive] = useState(0);
  const tabs = useRef<Array<HTMLButtonElement | null>>([]);
  const reduce = useReducedMotion();
  const number = (index: number) => String(index + 1).padStart(2, "0");

  return <>
    <div role="tablist" aria-label="Wedding planning stages" className="stage-tabs">
      {stages.map(([title], index) => <button key={title} id={`stage-${index}`} role="tab"
        aria-label={`Stage ${number(index)}. ${title}`} aria-selected={active === index}
        aria-controls="stage-panel" type="button" tabIndex={active === index ? 0 : -1}
        ref={(node) => { tabs.current[index] = node; }}
        onClick={() => setActive(index)}
        onKeyDown={(event) => {
          const next = { ArrowLeft: (index - 1 + stages.length) % stages.length,
            ArrowRight: (index + 1) % stages.length, Home: 0, End: stages.length - 1,
          }[event.key];
          if (next === undefined) return;
          event.preventDefault();
          setActive(next);
          tabs.current[next]?.focus();
        }}>{number(index)}</button>)}
    </div>
    <div className="stage-stack">
      <div className="stage-card" role="tabpanel" id="stage-panel" aria-labelledby={`stage-${active}`} tabIndex={0}>
        <motion.div key={active} className="stage-copy" initial={{ opacity: reduce ? 1 : 0 }}
          animate={{ opacity: 1 }} transition={{ duration: reduce ? 0 : .2 }}>
          <span className="eyebrow">Stage {number(active)}</span>
          <h3>{stages[active][0]}</h3>
          <p>{stages[active][1]}</p>
        </motion.div>
        <img className="stage-cake" src="/images/journey-cake.webp" alt="" width="330" height="420" loading="lazy" />
      </div>
    </div>
  </>;
}

export function WeddingCostForm() {
  const [amount, setAmount] = useState(150_000_000);
  const [whatsappUrl, setWhatsappUrl] = useState("");
  const [fields, setFields] = useState<Record<string, string>>({});
  const [message, setMessage] = useState("");
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const values = new FormData(form);
    const result = validateInquiry({ ...Object.fromEntries(values), consent: values.has("consent") });
    setFields(result.fields);
    setMessage("");
    setWhatsappUrl("");
    if (Object.keys(result.fields).length) {
      const first = form.elements.namedItem(Object.keys(result.fields)[0]);
      if (first instanceof HTMLElement) first.focus();
      return;
    }

    const { name, phone, date, guests, preferences, estimatedBudget } = result.data;
    const text = [
      "Hello The Sasongko, I’d like to discuss my wedding plans.",
      `Name: ${name}`,
      `Phone number: ${phone}`,
      `Wedding date: ${date}`,
      `Estimated guest count: ${guests}`,
      `Budget: ${rupiah.format(estimatedBudget)}`,
      ...(preferences ? [`Location and wedding style: ${preferences}`] : []),
    ].join("\n");
    setWhatsappUrl(`${brand.whatsapp}?text=${encodeURIComponent(text)}`);
    setMessage("Your message is ready. Open WhatsApp to review and send it.");
  }

  const errorProps = (name: string) => ({
    "aria-invalid": !!fields[name], "aria-describedby": fields[name] ? `error-${name}` : undefined,
  });
  const error = (name: string) => fields[name] && <span className="field-error" id={`error-${name}`}>{fields[name]}</span>;

  return <form className="estimate-form" onSubmit={submit} noValidate onChange={() => {
    setWhatsappUrl("");
    setMessage("");
  }}>
    <fieldset>
      <label htmlFor="name">Full name</label>
      <input id="name" name="name" placeholder="Your name" autoComplete="name" maxLength={100} required {...errorProps("name")} />
      {error("name")}
      <label htmlFor="phone">Phone number</label>
      <input id="phone" name="phone" placeholder="08…" autoComplete="tel" type="tel" required {...errorProps("phone")} />
      {error("phone")}
      <label htmlFor="date">Wedding date</label>
      <input id="date" name="date" type="date" min={jakartaDate()} required {...errorProps("date")} />
      {error("date")}
      <label htmlFor="guests">Guest count</label>
      <input id="guests" name="guests" type="number" min="1" step="1" placeholder="Estimated guest count" required {...errorProps("guests")} />
      {error("guests")}
      <label htmlFor="preferences">Location and wedding style <span>(optional)</span></label>
      <textarea id="preferences" name="preferences" rows={3} maxLength={1000}
        placeholder="City, venue, or wedding style" {...errorProps("preferences")} />
      {error("preferences")}
      <div className="budget-label"><label htmlFor="estimatedBudget">Estimated budget</label>
        <output htmlFor="estimatedBudget">{rupiah.format(amount)}</output></div>
      <input id="estimatedBudget" name="estimatedBudget" type="range" {...budget} value={amount}
        aria-valuetext={rupiah.format(amount)} onChange={(event) => setAmount(event.currentTarget.valueAsNumber)}
        {...errorProps("estimatedBudget")} />
      <div className="budget-scale"><span>{rupiah.format(budget.min)}</span><span>{rupiah.format(budget.max)}</span></div>
      {error("estimatedBudget")}
      <label className="consent"><input type="checkbox" name="consent" required {...errorProps("consent")} />
        <span>I agree to use these details to prepare a WhatsApp message.</span>
      </label>
      {error("consent")}
      <Link className="privacy-link" href="/privacy">How your information is used</Link>
      <button className="button" type="submit">Prepare WhatsApp message</button>
    </fieldset>
    <p className="form-message" role="status">{message}</p>
    {whatsappUrl && <a className="button" href={whatsappUrl}>Open WhatsApp</a>}
  </form>;
}




