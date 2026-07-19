import { profile } from "../data/content";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 py-8 text-center text-sm text-slate-400 dark:border-slate-800">
      <p>
        &copy; {new Date().getFullYear()} {profile.name}. Built with React &amp; Tailwind.
      </p>
    </footer>
  );
}
