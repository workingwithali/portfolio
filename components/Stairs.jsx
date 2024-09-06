import { motion } from "framer-motion";

// Hacker-style animation with pixel-like transitions
const stairAnimation = {
  initial: {
    top: "0%",
    opacity: 0,
  },
  animate: {
    top: "100%",
    opacity: 1,
  },
  exit: {
    top: "0%",
    opacity: 0,
  },
};

const reverseIndex = (index) => {
  const totalSteps = 6;
  return totalSteps - index - 1;
};

const Stairs = () => {
  return (
    <>
      {[...Array(6)].map((_, index) => (
        <motion.div
          key={index}
          variants={stairAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.2, // Shorter duration for abrupt transitions
            ease: "linear", // Linear easing for a "pixelated" effect
            delay: reverseIndex(index) * 0.05, // Slightly faster delays
          }}
          className="h-full w-full bg-primary relative pixelated-effect" // Add a custom CSS class for pixelation effect
        />
      ))}
    </>
  );
};

export default Stairs;
