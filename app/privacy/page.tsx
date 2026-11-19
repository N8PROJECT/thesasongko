import type { Metadata } from "next";
import { Reveal } from "../interactive";
import { EstimateLink, PageIntro } from "../site";

export const metadata: Metadata = { title: "Privacy | The Sasongko" };

export default function PrivacyPage() {
  return <>
    <PageIntro label="Privacy" title="Your consultation details">
      The consultation form helps you prepare a message for The Sasongko.
    </PageIntro>
    <section className="panel" aria-labelledby="data-title">
      <Reveal className="editorial-copy">
        <h2 id="data-title">How your information <em>is used</em></h2>
        <p>The form prepares a message in your browser with the name, phone number, wedding date, guest count, preferences, and budget you enter.</p>
        <p>When you open WhatsApp, you can review the message before sending it. Messages sent through WhatsApp are subject to its privacy policy.</p>
        <EstimateLink>Back to the consultation form</EstimateLink>
      </Reveal>
    </section>
  </>;
}

