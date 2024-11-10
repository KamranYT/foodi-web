import { motion } from "framer-motion";

// Variants for the stair animation
const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

// Function to calculate the reverse index for staggered delay
const reverseIndex = (index: number): number => {
  const totalSteps = 6; // Number of steps
  return totalSteps - index - 1;
};

const Stairs: React.FC = () => {
  return (
    <>
      {/* Render 6 motion divs, each representing a step of the stairs */}
      {[...Array(6)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              delay: reverseIndex(index) * 0.1, // Staggered delay calculation
            }}
            className="h-full w-full bg-white relative"
          />
        );
      })}
    </>
  );
};

export default Stairs;
