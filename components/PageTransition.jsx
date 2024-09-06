'use client';
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const PageTransition = ({ children }) => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <div key={pathname}>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: [0.9, 0.7, 0.3, 0], // Glitchy effect with steps
            filter: [
              "blur(0px) contrast(100%)",
              "blur(2px) contrast(150%)",
              "blur(1px) contrast(120%)",
              "blur(0px) contrast(100%)"
            ], // Glitchy blur effect
            transition: { delay: 0.6, duration: 0.6, ease: "easeInOut" }
          }}
          className="h-screen w-screen fixed bg-black top-0 pointer-events-none"
        />
        {children}
      </div>
    </AnimatePresence>
  );
};

export default PageTransition;
