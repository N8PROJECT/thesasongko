import type { Metadata } from "next";
import localFont from "next/font/local";
import "@fontsource/cormorant-garamond/400.css";
import "@fontsource/cormorant-garamond/400-italic.css";
import "./globals.css";
import { SiteFooter, SiteHeader } from "./site";

const dmSans = localFont({
  src: "../public/fonts/dm-sans-latin.woff2",
  weight: "400 800",
  display: "swap",
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "The Sasongko Wedding Planner & Organizer | Jakarta",
  description: "Planning, coordination, décor, and bridal styling for traditional Javanese, Sundanese, and modern weddings in Jakarta. Our bridal styling roots date to 1944.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={dmSans.variable}><body>
    <a className="skip" href="#main-content">Skip to content</a>
    <div className="shell">
      <SiteHeader />
      <main id="main-content" tabIndex={-1}>{children}</main>
      <SiteFooter />
    </div>
  </body></html>;
}

