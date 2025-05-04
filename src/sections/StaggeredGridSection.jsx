// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

const containerVariant = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const childrenVariant = {
  initial: {
    scale: 0,
  },
  animate: {
    scale: 1,
    transition: {
      type: "spring",
    },
  },
};

const StaggeredGridSection = () => {
  return (
    <section className="min-h-screen relative">
      <motion.div
        variants={containerVariant}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="grid grid-cols-3 grid-rows-3 w-full min-h-screen"
      >
        {[...Array(9)].map((_, i) => (
          <motion.div
            key={i}
            className="flex items-center justify-center text-5xl"
            variants={childrenVariant}
          >
            <span>Lorem</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default StaggeredGridSection;
