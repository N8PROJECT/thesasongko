import { brand, inclusions, portfolio } from "./content";
import { HeroBackgroundVideo, JourneyTabs, ProcessAccordion, Reveal, WeddingCostForm } from "./interactive";
import { EstimateLink } from "./site";

export default function HomePage() {
  return <>
  <section className="hero" aria-labelledby="hero-title">
    <HeroBackgroundVideo />
    <div className="hero-content">
      <Reveal>
        <p className="eyebrow">Wedding Planner &amp; Organizer · Jakarta</p>
        <h1 id="hero-title">Love Stories Told with Timeless Elegance</h1>
      </Reveal>
      <Reveal className="hero-aside" delay={.1}>
        <p>Celebrations planned with care, inspired by the beauty of tradition, and finished with a touch of luxury.</p>
        <EstimateLink hero href={brand.whatsapp}>Consult via WhatsApp</EstimateLink>
      </Reveal>
    </div>
  </section>

  <section className="panel process" id="tentang" aria-labelledby="process-title">
    <Reveal>
      <p className="eyebrow">About The Sasongko</p>
      <h2 id="process-title">Our roots in <em>bridal styling</em></h2>
    </Reveal>
    <div className="process-grid">
      <Reveal className="process-art">
        <img src="/images/process-calla.webp" alt="" width="600" height="760" loading="lazy" />
      </Reveal>
      <Reveal className="process-body" delay={.08}>
        <p>Following Ibu Sasongko’s work as a traditional Javanese bridal stylist in Jakarta, the family founded Sanggar Firma Melati Sasongko in the 1980s. The third generation expanded the studio’s work into planning Javanese, Sundanese, and modern weddings.</p>
        <ProcessAccordion />
      </Reveal>
    </div>
  </section>

  <section className="panel package" id="layanan" aria-labelledby="package-title">
    <Reveal className="center">
      <p className="eyebrow">Wedding Services</p>
      <h2 id="package-title">From the first plans<br />to <em>the wedding day</em></h2>
    </Reveal>
    <div className="package-grid">
      <Reveal className="package-list">
        <h3>Our services</h3>
        <ul>{inclusions.map((item) => <li key={item}><span aria-hidden="true">✓</span>{item}</li>)}</ul>
        <EstimateLink href="/services">Explore services</EstimateLink>
      </Reveal>
      <Reveal className="stationery" delay={.08}>
        <div className="envelope" aria-hidden="true"><div className="envelope-fold" />
          <div className="envelope-tag">
            <span className="rings" /><strong>The Sasongko</strong><small>WEDDING PLANNER &amp; ORGANIZER</small>
          </div>
        </div>
      </Reveal>
    </div>
  </section>

  <section className="journey panel" id="proses" aria-labelledby="journey-title">
    <Reveal className="center journey-heading">
      <p className="eyebrow">The Planning Process</p>
      <h2 id="journey-title">From the first consultation to your wedding day</h2>
    </Reveal>
    <Reveal className="journey-content" delay={.08}><JourneyTabs /></Reveal>
  </section>

  <section className="panel testimonials" id="portofolio" aria-labelledby="portfolio-title">
    <Reveal>
      <p className="eyebrow">Portfolio</p>
      <h2 id="portfolio-title">Weddings <em>we’ve helped bring to life</em></h2>
      <ul className="portfolio-grid">
        {portfolio.map((event) => <li key={event.couple}>
          <h3>{event.couple}</h3>
          <p>{event.venue}</p>
          {"detail" in event && <p>{event.detail}</p>}
          <a href={event.href}>{event.label}</a>
        </li>)}
      </ul>
      <div className="portfolio-links">
        <a href="https://www.youtube.com/watch?v=grEFI4_q2cc">Behind the scenes at AYANA Midplaza</a>
        <a href={brand.google}>Read reviews on Google</a>
        <a href={brand.instagram}>Explore Instagram</a>
      </div>
    </Reveal>
  </section>

  <div className="inquiry-grid">
    <section className="panel pricing" id="estimasi-biaya" aria-labelledby="pricing-title">
      <Reveal>
        <p className="eyebrow">Wedding Estimates</p>
        <h2 id="pricing-title">Request <em>an estimate</em></h2>
        <p>Share your wedding plans to prepare a consultation message. Pricing depends on your event and the services you need.</p>
      </Reveal>
      <Reveal><WeddingCostForm /></Reveal>
    </section>
    <section className="panel consultation" aria-labelledby="consultation-title">
      <Reveal className="portrait-composition">
        <img className="portrait" src="/images/consultation-bride.webp" alt="Illustrative photo of a newlywed couple in a garden" width="400" height="500" loading="lazy" />
        <img className="portrait-flower" src="/images/process-calla.webp" alt="" width="130" height="165" loading="lazy" />
      </Reveal>
      <Reveal className="center">
        <p className="eyebrow">Wedding Consultation</p>
        <h2 id="consultation-title">Tell us what <em>you’re planning</em></h2>
        <p>Discuss your date, venue, and wedding plans with The Sasongko team in South Jakarta.</p>
        <EstimateLink>Start a consultation</EstimateLink>
      </Reveal>
    </section>
  </div>
  </>;
}
