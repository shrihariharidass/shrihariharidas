import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { projects } from "../data/content";

export default function Projects() {
  return (
    <section id="projects" className="bg-slate-50 py-24 dark:bg-slate-900/40">
      <div className="section-shell">
        <SectionHeading eyebrow="Projects" title="Things I've built" />
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.06}>
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="card group flex h-full flex-col justify-between p-6"
              >
                <div>
                  <div className="mb-3 flex items-center justify-between">
                    <FaGithub className="text-xl text-slate-400" />
                    <FaExternalLinkAlt className="text-slate-300 transition-colors group-hover:text-brand-500" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {project.description}
                  </p>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-500 shadow-sm dark:bg-slate-800 dark:text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
