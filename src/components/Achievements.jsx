import {
  FaAws,
  FaUsers,
  FaMicrophoneAlt,
  FaTrophy,
  FaChalkboardTeacher,
  FaFeatherAlt,
} from "react-icons/fa";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { achievements } from "../data/content";

const iconMap = {
  FaAws,
  FaUsers,
  FaMicrophoneAlt,
  FaTrophy,
  FaChalkboardTeacher,
  FaFeatherAlt,
};

export default function Achievements() {
  return (
    <section id="achievements" className="bg-slate-50 py-24 dark:bg-slate-900/40">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Recent Achievements"
          title="Recognition, awards, and milestones"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <Reveal key={item.title} delay={i * 0.06}>
                <div className="card flex h-full flex-col gap-4 p-6">
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 text-lg text-white">
                      <Icon />
                    </span>
                    <span className="text-xs font-semibold text-slate-400">{item.year}</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
