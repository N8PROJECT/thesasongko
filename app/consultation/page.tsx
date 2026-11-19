import type { Metadata } from "next";
import { Reveal, WeddingCostForm } from "../interactive";
import { brand } from "../content";
import { EstimateLink, PageIntro } from "../site";

export const metadata: Metadata = { title: "Consultation | The Sasongko" };

export default function ConsultationPage() {
  return <>
    <PageIntro label="Consultation" title="Tell us about your wedding plans">
      Share your wedding date, guest count, and estimated budget to start a consultation via WhatsApp.
    </PageIntro>
    <section className="panel editorial-split consultation-page" aria-labelledby="inquiry-title">
      <Reveal>
        <h2 id="inquiry-title">Request <em>an estimate</em></h2>
        <WeddingCostForm />
      </Reveal>
      <Reveal className="editorial-copy">
        <img className="editorial-photo" src="/images/consultation-bride.webp" alt="Illustrative photo of a newlywed couple in a garden" width={720} height={900} />
        <h3>What to share</h3>
        <p>If you’re still deciding on a venue or style, tell us what you’re considering. An estimated budget helps guide the first conversation.</p>
        <EstimateLink href={brand.whatsapp}>Chat directly on WhatsApp</EstimateLink>
      </Reveal>
    </section>
  </>;
}

