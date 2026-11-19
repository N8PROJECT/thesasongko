import Link from "next/link";
import { brand, navigation } from "./content";
import { Reveal, StickyHeader } from "./interactive";

function Brand() {
  return <Link href="/" className="brand" aria-label={brand.name + ", home"}>
    <span>THE SASONGKO</span><small>WEDDING PLANNER &amp; ORGANIZER</small>
  </Link>;
}

export function SiteHeader() {
  return <StickyHeader><Brand /></StickyHeader>;
}

export function SiteFooter() {
  const socialLinks = [
    { label: "Contact us on WhatsApp", href: brand.whatsapp, icon: "whatsapp" },
    { label: "Find us on Instagram", href: brand.instagram, icon: "instagram" },
    { label: "Read our Google reviews", href: brand.google, icon: "google" },
  ];

  return <footer className="site-footer">
    <Reveal>
      <div className="footer-main">
        <Brand />
        <nav className="footer-nav" aria-label="Footer navigation">
          {navigation.slice(1).map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
        </nav>
        <ul className="footer-social">
          {socialLinks.map(({ label, href, icon }) => <li key={icon}>
            <a href={href} aria-label={label} title={label}>
              <img src={`/icons/${icon}.svg`} alt="" width="18" height="18" />
            </a>
          </li>)}
        </ul>
      </div>
      <div className="footer-bottom">
        <small>© The Sasongko · South Jakarta</small>
        <Link href="/privacy">Privacy</Link>
      </div>
    </Reveal>
  </footer>;
}

export function EstimateLink({ children, hero = false, href = "/consultation" }: {
  children: React.ReactNode; hero?: boolean; href?: string;
}) {
  return <Link className={hero ? "button hero-button" : "button"} href={href}>
    {children}
  </Link>;
}

export function PageIntro({ label, title, children }: { label: string; title: string; children: React.ReactNode }) {
  return <section className="panel page-intro" aria-labelledby="page-title">
    <Reveal>
      <p className="eyebrow">{label}</p>
      <h1 id="page-title">{title}</h1>
      <p>{children}</p>
    </Reveal>
  </section>;
}

