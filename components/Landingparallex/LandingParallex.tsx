"use client";

import lp1 from "@/public/assets/jpg/lp1.jpg";
import lp2 from "@/public/assets/jpg/lp2.jpg";
import lp3 from "@/public/assets/jpg/lp3.jpg";
import lp4 from "@/public/assets/jpg/lp4.jpg";
import lp5 from "@/public/assets/jpg/lp5.jpg";
import lp6 from "@/public/assets/jpg/lp6.jpg";
import lp7 from "@/public/assets/jpg/lp7.jpg";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function LandingParallex() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const pictures = [
    {
      src: lp1,
      scale: scale4,
    },
    {
      src: lp2,
      scale: scale5,
    },
    {
      src: lp3,
      scale: scale6,
    },
    {
      src: lp4,
      scale: scale5,
    },
    {
      src: lp5,
      scale: scale6,
    },
    {
      src: lp6,
      scale: scale8,
    },
    {
      src: lp7,
      scale: scale9,
    },
  ];

  return (
    <div ref={container} className="h-[300vh] relative">
      <div className="sticky overflow-hidden top-0 h-[100vh] bg-black/95">
        <motion.div
          style={{ scale: scale4 }}
          className="w-full h-full top-0 absolute flex items-center justify-center"
        >
          <div
            style={{
              position: "relative",
              width: "25vw",
              height: "25vh",
            }}
          >
            <Image
              src={pictures[0].src}
              fill
              alt="image"
              placeholder="blur"
              className="object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          style={{ scale: scale5 }}
          className="w-full h-full top-0 absolute flex items-center justify-center"
        >
          <div
            style={{
              position: "absolute",
              top: "5vh",
              left: "37vw",
              width: "35vw",
              height: "30vh",
            }}
          >
            <Image
              src={pictures[1].src}
              fill
              className="object-cover"
              alt="image"
              placeholder="blur"
            />
          </div>
        </motion.div>

        <motion.div
          style={{ scale: scale6 }}
          className="w-full h-full top-0 absolute flex items-center justify-center"
        >
          <div
            style={{
              position: "absolute",
              top: "17.5vh",
              left: "15vw",
              width: "20vw",
              height: "45vh",
            }}
          >
            <Image
              src={pictures[2].src}
              fill
              className="object-cover"
              alt="image"
              placeholder="blur"
            />
          </div>
        </motion.div>

        <motion.div
          style={{ scale: scale5 }}
          className="w-full h-full top-0 absolute flex items-center justify-center"
        >
          <div
            style={{
              position: "absolute",
              left: "64vw",
              width: "25vw",
              height: "25vh",
            }}
          >
            <Image
              src={pictures[3].src}
              fill
              alt="image"
              placeholder="blur"
              className="object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          style={{ scale: scale6 }}
          className="w-full h-full top-0 absolute flex items-center justify-center"
        >
          <div
            style={{
              position: "absolute",
              top: "66vh",
              left: "42vw",
              width: "25vw",
              height: "25vh",
            }}
          >
            <Image
              src={pictures[4].src}
              fill
              className="object-cover"
              alt="image"
              placeholder="blur"
            />
          </div>
        </motion.div>

        <motion.div
          style={{ scale: scale8 }}
          className="w-full h-full top-0 absolute flex items-center justify-center"
        >
          <div
            style={{
              position: "absolute",
              top: "65.5vh",
              left: "10vw",
              width: "30vw",
              height: "25vh",
            }}
          >
            <Image
              src={pictures[5].src}
              fill
              className="object-cover"
              alt="image"
              placeholder="blur"
            />
          </div>
        </motion.div>

        <motion.div
          style={{ scale: scale9 }}
          className="w-full h-full top-0 absolute flex items-center justify-center"
        >
          <div
            style={{
              position: "absolute",
              top: "66vh",
              left: "68vw",
              width: "15vw",
              height: "15vh",
            }}
          >
            <Image
              src={pictures[6].src}
              fill
              className="object-cover"
              alt="image"
              placeholder="blur"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
