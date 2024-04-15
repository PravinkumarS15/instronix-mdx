"use client"

import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../ui/lampui";
import {CounterBlock}  from "./CounterBlock";
import { TextRevealCard } from "@/components/ui/text-reveal-card";

export default function Counter() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-5 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl overflow-auto"
      >
        <TextRevealCard
          text={<CounterBlock />}
          revealText="Mark the Date"
        >
        </TextRevealCard>
        <p className="text-slate-500 text-2xl font-medium">April 24, 25</p>
      </motion.h1>
    </LampContainer>
  );
}
