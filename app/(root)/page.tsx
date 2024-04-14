import About from "@/components/About/About";
import Hero from "@/components/Hero/Hero";
import LandingParallex from "@/components/Landingparallex/LandingParallex";
import Events from "@/components/Events/Events";
import Counter from "@/components/counter/Counter";
import Footer from "@/components/Footer/Footer";

export const revalidate = 86400; // 1 day

export default function HomePage() {
  return (
    <>
      <section className="flex-coloum-center gap-6 w-full ">
        <Hero />
        <Counter />
        <About />
        <LandingParallex />
        <Events />
      </section>
    </>
  );
}
