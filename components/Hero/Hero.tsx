"use client";

import Image from "next/image";
import Container from "../common/Container";
import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Hero() {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e: any) => (direction = e.direction * -1),
      },
      x: "-300px",
    });
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    xPercent += 0.1 * direction;
    requestAnimationFrame(animate);
  };

  return (
    <section className="h-screen overflow-hidden relative pt-10  bg-gradient-to-b from-gray-900 to-[#009871] ">
      <Container className=" flex items-center justify-center flex-col">
        <div className="w-full flex flex-row max-w-6xl mx-auto">
          <div className="w-1/2 flex flex-col gap-4 justify-center text-white overflow-hidden">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="text-7xl font-extrabold text-transparent gradient-text overflow-hidden"
            >
              Instronix 2024
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="text-2xl font-medium"
            >
              National Level Technical Symposium
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="text-2xl font-medium"
            >
              Dept. of EIE - PTU
            </motion.p>
          </div>
          <motion.div
            className="w-1/2 h-full flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35, ease: "easeIn" }}
          >
            <Image
              src="/assets/svg/logo.svg"
              alt="logo"
              className="drop-shadow-md"
              priority
              width={600}
              height={400}
            />
          </motion.div>
        </div>
      </Container>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.38, ease: "easeIn" }}
        className="absolute top-[calc(100%-160px)] overflow-hidden "
      >
        <div
          className="relative whitespace-nowrap text-gray-300 opacity-25 text-[120px] font-medium"
          ref={slider}
        >
          <p className="relative m-0 pr-9" ref={firstText}>
            Instronix 2024 - EIE - PTU -
          </p>
          <p className="absolute left-full top-0" ref={secondText}>
            Instronix 2024 - EIE - PTU -
          </p>
        </div>
      </motion.div>
    </section>
  );
}
