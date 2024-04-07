// "use client";

// import { motion } from "framer-motion";
// import { AnimatePresence } from "framer-motion";

// export default function NavFooter() {

//   return (
//     <>
//       <motion.nav
//         variants={{
//           visible: {
//             opacity: 1,
//           },
//           hidden: {
//             opacity: 0,
//           },
//         }}
//         animate="visible"
//         initial="hidden"
//         transition={{ duration: 0.35, ease: "linear" }}
//         className="text-white fixed top-0 w-full z-50 py-1 bg-black"
//       >
//         <Container className="flex flex-row justify-between items-center">
//           <p className="font-semibold text-4xl ">Neura 2024</p>
//           <div
//             className="group flex h-16 w-16 cursor-pointer items-center justify-center rounded-full  hover:bg-slate-700"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             <div className="space-y-2">
//               <span
//                 className={twMerge(
//                   "block h-1 w-10 origin-center rounded-full bg-white transition-transform ease-in-out",
//                   isOpen ? "translate-y-1.5 rotate-45" : ""
//                 )}
//               ></span>
//               <span
//                 className={twMerge(
//                   "block h-[2px] w-10 origin-center rounded-full bg-white transition-transform ease-in-out ",
//                   isOpen ? "-translate-y-1.5 -rotate-45" : ""
//                 )}
//               ></span>
//             </div>
//           </div>
//         </Container>
//       </motion.nav>
//       <AnimatePresence mode="wait">{isOpen && <NavSheet />}</AnimatePresence>
//     </>
//   );
// }
