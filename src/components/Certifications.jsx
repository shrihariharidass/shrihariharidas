import { FaCertificate } from "react-icons/fa";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { certifications } from "../data/content";

export default function Certifications() {
  return (
    <section className="section-shell py-24">
      <SectionHeading eyebrow="Certifications" title="Credentials that back it up" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, i) => (
          <Reveal key={cert.name} delay={i * 0.05}>
            <div className="card flex items-start gap-4 p-6">
              <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-400">
                <FaCertificate />
              </span>
              <div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">{cert.name}</h3>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{cert.issuer}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
