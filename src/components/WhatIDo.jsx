import {
  FaCloud,
  FaTools,
  FaRocket,
  FaDharmachakra,
  FaLayerGroup,
  FaRobot,
  FaChartLine,
  FaShieldAlt,
  FaPenNib,
  FaMicrophone,
} from "react-icons/fa";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { whatIDo } from "../data/content";

const iconMap = {
  FaCloud,
  FaTools,
  FaRocket,
  FaDharmachakra,
  FaLayerGroup,
  FaRobot,
  FaChartLine,
  FaShieldAlt,
  FaPenNib,
  FaMicrophone,
};

export default function WhatIDo() {
  return (
    <section className="bg-slate-50 py-24 dark:bg-slate-900/40">
      <div className="section-shell">
        <SectionHeading eyebrow="What I Do" title="Where I spend my time and energy" />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {whatIDo.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <Reveal key={item.label} delay={i * 0.04}>
                <div className="card flex h-full flex-col items-center gap-3 p-6 text-center">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-xl text-brand-600 dark:bg-brand-500/10 dark:text-brand-400">
                    <Icon />
                  </span>
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-200">
                    {item.label}
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
