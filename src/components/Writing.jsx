import { FaArrowRight, FaMicrophone } from "react-icons/fa";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { blogs, talks, profile } from "../data/content";

export default function Writing() {
  return (
    <section id="writing" className="section-shell py-24">
      <SectionHeading
        eyebrow="Writing & Talks"
        title="Sharing what I learn, in public"
        subtitle="A mix of technical articles and conference/workshop sessions. More added as they happen."
      />

      <div className="grid gap-12 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <h3 className="mb-5 text-sm font-bold uppercase tracking-wide text-slate-400">
            Featured Blogs
          </h3>
          <div className="space-y-4">
            {blogs.map((post, i) => (
              <Reveal key={post.title} delay={i * 0.06}>
                <a
                  href={post.url}
                  target="_blank"
                  rel="noreferrer"
                  className="card group flex items-center justify-between gap-4 p-6"
                >
                  <div>
                    <span className="text-xs font-semibold text-brand-600 dark:text-brand-400">
                      {post.tag}
                    </span>
                    <h4 className="mt-1 text-base font-bold text-slate-900 dark:text-white">
                      {post.title}
                    </h4>
                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                      {post.excerpt}
                    </p>
                  </div>
                  <FaArrowRight className="shrink-0 text-slate-300 transition-transform group-hover:translate-x-1 group-hover:text-brand-500" />
                </a>
              </Reveal>
            ))}
          </div>
          <a
            href={profile.socials.medium}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:underline dark:text-brand-400"
          >
            Read more on Medium <FaArrowRight size={12} />
          </a>
        </div>

        <div className="lg:col-span-2">
          <h3 className="mb-5 text-sm font-bold uppercase tracking-wide text-slate-400">
            Talks & Workshops
          </h3>
          <div className="space-y-4">
            {talks.map((talk, i) => (
              <Reveal key={talk.title} delay={i * 0.06}>
                <div className="card flex items-start gap-4 p-6">
                  <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-400">
                    <FaMicrophone />
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                      {talk.title}
                    </h4>
                    <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                      {talk.event} · {talk.year}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
