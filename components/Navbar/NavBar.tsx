"use client";

import Container from "../common/Container";
import { motion } from "framer-motion";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { AnimatePresence } from "framer-motion";
import NavSheet from "./NavSheet";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="text-white fixed top-0 w-full z-50 py-2 bg-transparent"
      >
        <Container className="flex flex-row justify-between items-center">
          <p className="font-light text-3xl ">Instronix</p>
          <div
            className="group flex h-16 w-16 cursor-pointer items-center justify-center rounded-full  hover:bg-slate-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="space-y-2">
              <span
                className={twMerge(
                  "block h-1 w-10 origin-center rounded-full bg-white transition-transform ease-in-out",
                  isOpen ? "translate-y-1.5 rotate-45" : ""
                )}
              ></span>
              <span
                className={twMerge(
                  "block h-[2px] w-10 origin-center rounded-full bg-white transition-transform ease-in-out ",
                  isOpen ? "-translate-y-1.5 -rotate-45" : ""
                )}
              ></span>
            </div>
          </div>
        </Container>
      </motion.nav>
      <AnimatePresence mode="wait">{isOpen && <NavSheet />}</AnimatePresence>
    </>
  );
}
