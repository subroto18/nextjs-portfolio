import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar/Index";
import About from "@/components/sections/About/Index";
import Contact from "@/components/sections/Contact/Contact";
import Hero from "@/components/sections/Hero/Index";
import Portfolio from "@/components/sections/Portfolio/Portfolio";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
