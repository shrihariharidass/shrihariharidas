import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { techExpertise } from "../data/content";

export default function TechExpertise() {
  return (
    <section id="expertise" className="bg-slate-50 py-24 dark:bg-slate-900/40">
      <div className="section-shell">
        <SectionHeading eyebrow="Technical Expertise" title="Tools and technologies I work with" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {techExpertise.map((group, i) => (
            <Reveal key={group.category} delay={i * 0.05}>
              <div className="card h-full p-6">
                <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-brand-600 dark:text-brand-400">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-white px-3 py-1.5 text-xs font-medium text-slate-600 shadow-sm dark:bg-slate-800 dark:text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
