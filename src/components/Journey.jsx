import { FaBriefcase } from "react-icons/fa";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { journey } from "../data/content";

export default function Journey() {
  return (
    <section id="journey" className="section-shell py-24">
      <SectionHeading eyebrow="Professional Journey" title="Where I've worked and what I've built" />

      <div className="relative mx-auto max-w-3xl">
        <div className="absolute top-0 bottom-0 left-5 w-px bg-slate-200 dark:bg-slate-800 sm:left-6" />

        <div className="space-y-10">
          {journey.map((role, i) => (
            <Reveal key={`${role.company}-${role.role}`} delay={i * 0.08} className="relative pl-14 sm:pl-16">
              <span className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 text-white shadow-md shadow-brand-500/30 sm:h-12 sm:w-12">
                <FaBriefcase />
              </span>

              <div className="card p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">{role.role}</h3>
                  <span className="text-xs font-medium text-slate-400">{role.period}</span>
                </div>
                <p className="mt-1 text-sm font-semibold text-brand-600 dark:text-brand-400">
                  {role.company} · {role.location}
                </p>
                <ul className="mt-4 space-y-2">
                  {role.points.map((point, idx) => (
                    <li
                      key={idx}
                      className="flex gap-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
