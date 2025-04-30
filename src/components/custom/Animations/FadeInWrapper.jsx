import { motion } from "motion/react";

const FadeInWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInWrapper;
