import "./App.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

import { useEffect } from "react";

function App() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  return (
    <div className="App">
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Team />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;
