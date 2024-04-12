import Image from "next/image";
import Container from "../common/Container";

export default function Hero() {
  return (
    <section className="h-screen bg-gradient-to-b from-[#009871] to-white">
      <Container className="h-full flex items-center justify-center flex-col">
        <div className="w-full flex flex-row max-w-6xl mx-auto">
          <div className="w-1/2 flex flex-col gap-4 justify-center text-white">
            <p className="text-7xl font-bold">Instronix 2024</p>
            <p className="text-2xl">National Level Technical Symposium</p>
          </div>
          <div className="w-1/2 h-full flex items-center justify-center">
            <Image
              src="/assets/svg/logo.svg"
              alt="logo"
              width={600}
              height={400}
            />
          </div>
        </div>
        <div>explore</div>
      </Container>
    </section>
  );
}
