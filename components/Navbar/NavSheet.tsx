import React, { useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { navLinks } from "@/constants/index";
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
      className="h-[100vh] fixed bg-black right-0 top-0 text-white"
    >
      <div className="h-full p-20 flex flex-col justify-between">
        <div className="flex flex-col text-5xl font-poppins font-extralight gap-6 mt-20">
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
        {/* <Footer /> */}
      </div>
      <Curve />
    </motion.div>
  );
}
