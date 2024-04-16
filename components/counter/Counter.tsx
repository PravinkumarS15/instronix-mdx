"use client";

import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../ui/lampui";
import { CounterBlock } from "./CounterBlock";
import { TextRevealCard } from "@/components/ui/text-reveal-card";

export default function Counter() {
  return (
    <div className="flex flex-col mt-20 items-center justify-center ">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.3,
          ease: "easeIn",
        }}
        className=" flex flex-col gap-5 mt-5 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl overflow-auto"
      >
        <p className="text-3xl lg:text-4xl font-semibold overflow-hidden text-white">
          The Party begins in
        </p>
        <CounterBlock />
        <p className="text-3xl lg:text-4xl font-semibold overflow-hidden text-white">
          April 24, 25
        </p>
      </motion.div>
    </div>
  );
}
