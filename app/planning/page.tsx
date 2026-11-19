import type { Metadata } from "next";
import { stages } from "../content";
import { JourneyTabs, Reveal } from "../interactive";
import { EstimateLink, PageIntro } from "../site";

export const metadata: Metadata = { title: "Planning | The Sasongko" };

export default function PlanningPage() {
  return <>
    <PageIntro label="Planning" title="From the first consultation to your wedding day">
      Explore the planning process, from shaping your concept to finalizing the timeline with vendors and family.
    </PageIntro>
    <section className="panel journey" aria-labelledby="journey-title">
      <Reveal className="center"><h2 id="journey-title">Planning stages</h2></Reveal>
      <Reveal className="journey-content"><JourneyTabs /></Reveal>
    </section>
    <section className="panel" aria-labelledby="roadmap">
      <Reveal><h2 id="roadmap">Your <em>planning timeline</em></h2></Reveal>
      <ol className="roadmap">{stages.map(([title, description]) => <li key={title}>
        <Reveal><h3>{title}</h3><p>{description}</p></Reveal>
      </li>)}</ol>
      <Reveal><EstimateLink>Start a consultation</EstimateLink></Reveal>
    </section>
  </>;
}

