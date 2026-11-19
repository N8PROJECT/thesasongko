import type { Metadata } from "next";
import { ProcessAccordion, Reveal } from "../interactive";
import { EstimateLink, PageIntro } from "../site";

export const metadata: Metadata = { title: "About | The Sasongko" };

export default function AboutPage() {
  return <>
    <PageIntro label="About The Sasongko" title="Three generations of wedding expertise">
      Our story began in 1944 with Ibu Sasongko’s work as a traditional Javanese bridal stylist in Jakarta.
    </PageIntro>
    <section className="panel editorial-split" aria-labelledby="approach">
      <Reveal>
        <img className="editorial-photo" src="/images/consultation-bride.webp" alt="Illustrative photo of a newlywed couple in a garden" width={720} height={900} />
      </Reveal>
      <Reveal className="editorial-copy">
        <h2 id="approach">From bridal styling <em>to wedding planning</em></h2>
        <p>The family founded Sanggar Firma Melati Sasongko in the 1980s. The third generation built on that legacy with The Sasongko Wedding Planner & Organizer, serving couples planning traditional Javanese, Sundanese, and modern weddings.</p>
        <ProcessAccordion />
        <EstimateLink href="/planning">Explore the planning process</EstimateLink>
      </Reveal>
    </section>
  </>;
}

