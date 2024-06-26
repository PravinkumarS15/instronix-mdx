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

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-70%"]);

  return (
    <section
      ref={targetRef}
      className="relative h-[300vh] text-white"
      id="about-us"
    >
      <div className=" sticky top-10 h-screen pt-10 my-20">
        <p className="text-3xl lg:text-5xl text-center font-medium mb-5">
          About Us
        </p>
        <div className=" flex items-center overflow-hidden">
          <motion.div className="flex gap-4" style={{ x }}>
            {aboutContent.map((content: IAboutContent, index: number) => {
              return (
                <div
                  key={index}
                  className="w-screen px-5 lg:px-20 flex items-center justify-center"
                >
                  <div className=" max-w-7xl mx-auto">
                    <div className="w-full flex gap-5 flex-col lg:flex-row items-center justify-center">
                      <div className="w-full lg:w-1/2 flex items-center justify-center">
                        <Image
                          src={content.image}
                          alt="about_image"
                          className="object-cover"
                          width={550}
                          height={300}
                        />
                      </div>

                      <div className="max-w-2xl mx-auto lg:w-1/2 flex flex-col justify-center text-left gap-4">
                        <p className="text-3xl font-light text-center lg:text-left">
                          {content.title}
                        </p>
                        <p className=" text-lg lg:text-xl font-thin">
                          {content.description}
                        </p>
                        {content?.link && (
                          <a href={content?.link}>
                            <p className="text-left px-5 py-4 mx-auto lg:mx-0  text-white max-w-max bg-[#009871] hover:bg-[#009871]/85 rounded-[40px]">
                              Know more
                            </p>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
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
