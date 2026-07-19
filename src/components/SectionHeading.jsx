import Reveal from "./Reveal";

export default function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <Reveal className="mx-auto mb-14 max-w-2xl text-center">
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand-500 dark:text-brand-400">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base text-slate-500 dark:text-slate-400">{subtitle}</p>
      )}
    </Reveal>
  );
}
