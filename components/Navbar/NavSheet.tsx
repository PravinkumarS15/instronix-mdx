import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { footerLinks, navLinks } from "@/constants/index";
import Curve from "./Curve";
import { menuSlide, slide } from "./variants";
import Link from "next/link";

export default function NavSheet() {
  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="h-[100vh] fixed  right-0 top-0 text-white z-40 bg-black"
    >
      <div className="h-full p-20 flex flex-col justify-between">
        <div className="flex flex-col text-3xl md:text-4xl lg:text-5xl font-poppins font-extralight gap-6 mt-20">
          {navLinks.map((data, index) => {
            return (
              <motion.div>
                <motion.div
                  className="relative flex items-center"
                  custom={index}
                  variants={slide}
                  initial="initial"
                  animate="enter"
                  exit="exit"
                >
                  <Link href={data.href}>{data.title}</Link>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
        <div className="flex flex-row items-center justify-start gap-6 my-5">
          {footerLinks?.map((link: any, index: number) => (
            <a
              href={link?.mail ? `mailto:${link?.link}` : link?.link}
              key={index}
              type=""
            >
              <Image
                src={link?.icon}
                alt="icon"
                className="w-10 h-10 object-cover"
                width={40}
                height={40}
              />
            </a>
          ))}
        </div>
      </div>
      <Curve />
    </motion.div>
  );
}
