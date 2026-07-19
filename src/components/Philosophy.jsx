import { FaQuoteLeft } from "react-icons/fa";
import Reveal from "./Reveal";
import { philosophy } from "../data/content";

export default function Philosophy() {
  return (
    <section className="bg-gradient-to-br from-brand-600 to-accent-500 py-20 text-white">
      <div className="section-shell">
        <Reveal className="mx-auto max-w-3xl text-center">
          <FaQuoteLeft className="mx-auto mb-6 text-2xl opacity-70" />
          <p className="text-xl font-medium leading-relaxed sm:text-2xl">{philosophy}</p>
        </Reveal>
      </div>
    </section>
  );
}
