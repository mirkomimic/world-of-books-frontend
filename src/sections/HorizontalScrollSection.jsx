// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useRef } from "react";

const HorizontalScrollSection = () => {
  const targetSection = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetSection,
    offset: ["start start", "end start"],
  });

  const smoothY = useSpring(scrollYProgress, {
    stiffness: 50,
    // damping: 10,
    // restDelta: 0.001,
  });

  // const x = useTransform(smoothY, [0, 1], ["1%", "-500%"]);
  const x = useTransform(
    smoothY,
    [0, 0.25, 0.5, 0.75, 1],
    ["0%", "-200%", "-300%", "-400%", "-420%"]
  );

  return (
    <section ref={targetSection} className="left-0 h-[450vh] bg-neutral-900">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden ">
        <motion.div
          className="flex items-center gap-4 h-full min-w-full"
          style={{ x }}
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="min-w-full text-center text-5xl text-white"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 3 }}
            >
              Lorem ipsum dolor sit amet.
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
export default HorizontalScrollSection;
