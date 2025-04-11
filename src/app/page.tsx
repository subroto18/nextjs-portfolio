import Navbar from "@/components/common/Navbar/Navbar";
import About from "@/components/sections/About/About";
import Hero from "@/components/sections/Hero";
import Portfolio from "@/components/sections/Portfolio/Portfolio";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
    </main>
  );
}
