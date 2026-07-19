import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaMedium, FaTwitter, FaEnvelope, FaDownload } from "react-icons/fa";
import { profile, heroIntro, heroSecondary } from "../data/content";

const socialIcons = [
  { key: "linkedin", icon: FaLinkedin, label: "LinkedIn" },
  { key: "github", icon: FaGithub, label: "GitHub" },
  { key: "medium", icon: FaMedium, label: "Medium" },
  { key: "twitter", icon: FaTwitter, label: "Twitter" },
  { key: "email", icon: FaEnvelope, label: "Email" },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-24 pt-36 sm:pt-44">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-100 via-white to-white dark:from-brand-950/40 dark:via-slate-950 dark:to-slate-950"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-1/4 -z-10 h-96 w-96 rounded-full bg-brand-400/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-20 left-1/4 -z-10 h-72 w-72 rounded-full bg-accent-400/20 blur-3xl"
      />

      <div className="section-shell flex flex-col items-center text-center">
        <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          src={profile.photoUrl}
          alt={profile.name}
          className="h-32 w-32 rounded-full border-4 border-white object-cover shadow-xl shadow-brand-500/20 sm:h-40 sm:w-40 dark:border-slate-800"
        />

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="mt-8 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl dark:text-white"
        >
          Hi, I'm {profile.name} <span className="inline-block">👋</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="glow-text mt-4 max-w-3xl text-lg font-semibold sm:text-xl"
        >
          {profile.roles.join(" · ")}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300"
        >
          {heroIntro}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
          className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-500 sm:text-base dark:text-slate-400"
        >
          {heroSecondary}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/30 transition-transform hover:-translate-y-0.5 hover:bg-brand-700"
          >
            <FaDownload /> Download Resume
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-brand-400 hover:text-brand-600 dark:border-slate-700 dark:text-slate-200 dark:hover:text-brand-400"
          >
            Get In Touch
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-8 flex items-center justify-center gap-4"
        >
          {socialIcons.map(({ key, icon: Icon, label }) => (
            <a
              key={key}
              href={profile.socials[key]}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-all hover:-translate-y-1 hover:border-brand-400 hover:text-brand-600 dark:border-slate-700 dark:text-slate-400 dark:hover:text-brand-400"
            >
              <Icon size={18} />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
