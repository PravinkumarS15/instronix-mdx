"use client";

import { aboutContent } from "@/constants";
import { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import Image from "next/image";
import Container from "../common/Container";

export default function About() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-70%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className=" sticky top-10 h-screen flex items-center overflow-hidden ">
        <motion.div className="flex gap-4 " style={{ x }}>
          {aboutContent.map((content: IAboutContent, index: number) => {
            return (
              <div key={index} className="w-screen px-20">
                <div className=" max-w-7xl mx-auto">
                  <div className="w-full flex gap-7">
                    <div className="w-1/2 flex items-center justify-center">
                      <Image
                        src={content.image}
                        alt="about_image"
                        className="w-1/2"
                        width={200}
                        height={300}
                      />
                    </div>

                    <div className="w-1/2 flex flex-col justify-center text-left gap-2">
                      <p className="text-5xl font-semibold">{content.title}</p>
                      <p className="text-xl font-extralight">
                        {content.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function AboutTextCard({ title, description }: IAboutContent) {
  return (
    <div className="flex flex-col gap-3 text-left p-2 border-[2px] rounded-[5px] w-auto h-[500px]">
      <p className="text-xl font-medium">{title}</p>
      <p className="text-lg font-light">{description}</p>
    </div>
  );
}
