import { useEffect, useState } from "react";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import { useTheme } from "../hooks/useTheme";

const links = [
  { href: "#about", label: "About" },
  { href: "#journey", label: "Journey" },
  { href: "#achievements", label: "Achievements" },
  { href: "#expertise", label: "Expertise" },
  { href: "#writing", label: "Writing & Talks" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 shadow-sm backdrop-blur-md dark:bg-slate-950/80"
          : "bg-transparent"
      }`}
    >
      <nav className="section-shell flex h-16 items-center justify-between">
        <a href="#top" className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
          Shrihari<span className="glow-text">.</span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-slate-600 transition-colors hover:text-brand-600 dark:text-slate-300 dark:hover:text-brand-400"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition-colors hover:border-brand-400 hover:text-brand-600 dark:border-slate-700 dark:text-slate-300 dark:hover:text-brand-400"
          >
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </button>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 lg:hidden dark:border-slate-700 dark:text-slate-300"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-slate-200 bg-white px-6 py-4 lg:hidden dark:border-slate-800 dark:bg-slate-950">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-900"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
