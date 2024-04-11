import About from "@/components/About/About";
import Hero from "@/components/Hero/Hero";
import LandingParallex from "@/components/Landingparallex/LandingParallex";
import Events from "@/components/Events/Events";
import Footer from "@/components/Footer/Footer";

export default function HomePage() {
  return (
    <>
      <section className="flex-coloum-center gap-6 mt-20  w-full ">
        <Hero />
        <About />
        <LandingParallex />
        <Events />
      </section>
    </>
  );
}
