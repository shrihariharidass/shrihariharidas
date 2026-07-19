import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { about } from "../data/content";

export default function About() {
  return (
    <section id="about" className="section-shell py-24">
      <SectionHeading eyebrow="About Me" title="Cloud engineer, writer, and community builder" />

      <div className="grid gap-12 lg:grid-cols-5">
        <Reveal className="lg:col-span-3 space-y-5 text-base leading-relaxed text-slate-600 dark:text-slate-300">
          {about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </Reveal>

        <Reveal delay={0.15} className="lg:col-span-2">
          <div className="grid grid-cols-2 gap-4">
            {about.stats.map((stat) => (
              <div key={stat.label} className="card p-6 text-center">
                <div className="text-3xl font-extrabold text-brand-600 dark:text-brand-400">
                  {stat.number}
                </div>
                <div className="mt-2 text-sm text-slate-500 dark:text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
