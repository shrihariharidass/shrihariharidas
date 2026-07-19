import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { community, gallery } from "../data/content";

export default function Community() {
  return (
    <section className="section-shell py-24">
      <SectionHeading
        eyebrow="Community"
        title="Technology grows stronger when knowledge is shared"
        subtitle="Whether it's writing an article, delivering a technical session, or mentoring aspiring engineers, I enjoy helping others learn and grow in cloud technologies."
      />

      <Reveal className="mb-14 flex flex-wrap justify-center gap-3">
        {community.map((item) => (
          <span
            key={item}
            className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 dark:border-slate-700 dark:text-slate-300"
          >
            {item}
          </span>
        ))}
      </Reveal>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {gallery.map((item, i) => (
          <Reveal key={item.caption} delay={i * 0.05}>
            <div className="card flex aspect-square items-center justify-center bg-gradient-to-br from-brand-100 to-accent-400/20 p-4 text-center dark:from-brand-500/10 dark:to-accent-500/10">
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                {item.caption}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
