import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import WhatIDo from "./components/WhatIDo";
import Journey from "./components/Journey";
import Achievements from "./components/Achievements";
import Certifications from "./components/Certifications";
import TechExpertise from "./components/TechExpertise";
import Writing from "./components/Writing";
import Projects from "./components/Projects";
import Community from "./components/Community";
import Philosophy from "./components/Philosophy";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhatIDo />
        <Journey />
        <Achievements />
        <Certifications />
        <TechExpertise />
        <Writing />
        <Projects />
        <Community />
        <Philosophy />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
