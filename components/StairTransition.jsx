"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Stairs from "./Stairs";

const StairTransition = () => {
  const pathname = usePathname();

  return (
    <>
      <AnimatePresence mode="wait">
        <div key={pathname}>
          <div className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex">
            <Stairs />
          </div>

          <motion.div
            className="h-screen w-screen fixed bg-black top-0 pointer-events-none"
            initial={{ opacity: 1 }}
            animate={{
              opacity: [1, 0.5, 0.2, 0], // Step-based opacity for glitch effect
              filter: [
                "blur(0px)",
                "blur(2px)",
                "blur(4px)",
                "blur(0px)"
              ], // Add glitchy blur
              transition: { delay: 0.5, duration: 0.6, ease: "easeInOut" },
            }}
          />
        </div>
      </AnimatePresence>
    </>
  );
};

export default StairTransition;
