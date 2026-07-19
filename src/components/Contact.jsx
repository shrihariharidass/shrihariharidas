import { FaLinkedin, FaGithub, FaMedium, FaTwitter, FaEnvelope } from "react-icons/fa";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { profile } from "../data/content";

const socialLinks = [
  { key: "linkedin", icon: FaLinkedin, label: "LinkedIn" },
  { key: "github", icon: FaGithub, label: "GitHub" },
  { key: "medium", icon: FaMedium, label: "Medium" },
  { key: "twitter", icon: FaTwitter, label: "Twitter" },
  { key: "email", icon: FaEnvelope, label: "Email" },
];

export default function Contact() {
  return (
    <section id="contact" className="section-shell py-24">
      <SectionHeading
        eyebrow="Let's Connect"
        title="Open to conversations, collaborations, and speaking opportunities"
      />
      <Reveal className="flex flex-col items-center gap-8">
        <a
          href={profile.socials.email}
          className="rounded-full bg-brand-600 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/30 transition-transform hover:-translate-y-0.5 hover:bg-brand-700"
        >
          {profile.email}
        </a>
        <div className="flex items-center gap-4">
          {socialLinks.map(({ key, icon: Icon, label }) => (
            <a
              key={key}
              href={profile.socials[key]}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-all hover:-translate-y-1 hover:border-brand-400 hover:text-brand-600 dark:border-slate-700 dark:text-slate-400 dark:hover:text-brand-400"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
