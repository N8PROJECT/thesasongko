import type { Metadata } from "next";
import { inclusions } from "../content";
import { Reveal } from "../interactive";
import { EstimateLink, PageIntro } from "../site";

export const metadata: Metadata = { title: "Services | The Sasongko" };

const questions = [
  ["What happens at the first consultation?", "We discuss your date, location, guest count, priorities, and budget to understand what you need."],
  ["What if we’ve already chosen our vendors?", "Tell us which vendors you’ve booked so we can discuss how everyone will work together."],
  ["How do we request an estimate?", "Fill out the consultation form and send your message via WhatsApp. Pricing depends on the location, guest count, vendors, and services you need."],
] as const;

export default function ServicesPage() {
  return <>
    <PageIntro label="Wedding Services" title="Wedding planning, décor, and bridal styling">
      Find the right support for a traditional Javanese, Sundanese, or modern wedding.
    </PageIntro>
    <section className="panel editorial-split" aria-labelledby="included">
      <Reveal className="package-list editorial-copy">
        <h2 id="included">Our <em>services</em></h2>
        <ul>{inclusions.map(item => <li key={item}><span aria-hidden="true">✓</span>{item}</li>)}</ul>
        <EstimateLink>Request an estimate</EstimateLink>
      </Reveal>
      <Reveal>
        <img className="editorial-photo botanical-photo" src="/images/process-calla.webp" alt="" width={720} height={900} />
      </Reveal>
    </section>
    <section className="panel" aria-labelledby="faq">
      <Reveal className="editorial-copy">
        <h2 id="faq">Frequently asked questions</h2>
        <div className="service-faq">{questions.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div>
      </Reveal>
    </section>
  </>;
}

