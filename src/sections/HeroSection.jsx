import { Button } from "@/components/ui/button";
import { useAnimationContextProvider } from "@/hooks/useAnimationContextProvider";
import { motion, useSpring, useTransform } from "motion/react";

const cardsParentVariant = {
  hidden: {},
  show: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.5,
      staggerDirection: -1,
    },
  },
};

const cardsVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 18,
    },
  },
};

const HeroSection = () => {
  return (
    <section className="container mx-auto flex flex-col justify-around min-h-[calc(100vh-80px)] items-center">
      <ParallaxBg />

      <div className="flex flex-col items-center justify-center gap-8 rounded-2xl p-10 text-center text-2xl antialiased">
        <motion.span
          className="inline-block bg-gradient-to-r from-primary to-gray-300 bg-clip-text md:text-7xl text-transparent font-bold text-5xl sm:text-6xl antialiased"
          initial={{ x: -90 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          World of Books
        </motion.span>

        <motion.span
          className="block font-light italic"
          initial={{ x: 90 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          Discover timeless stories, hidden treasures, and new journeys — all
          waiting for you.
        </motion.span>

        <button className="relative cursor-pointer p-[3px]">
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-yellow-300 to-gray-300" />
          <div className="group relative rounded-[6px] bg-black px-8 py-2 text-white transition duration-200 hover:bg-transparent hover:text-black">
            Learn more
          </div>
        </button>
      </div>

      <Cards />
    </section>
  );
};

const Cards = () => {
  const MotionCard = motion.create(HeroCard);
  const { scrollYProgress } = useAnimationContextProvider();

  const smoothY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 10,
    restDelta: 0.001,
  });

  const rotateX = useTransform(smoothY, [0, 1], [0, -80]);

  return (
    <motion.div
      className="grid md:grid-cols-3 gap-5"
      variants={cardsParentVariant}
      initial="hidden"
      animate="show"
      style={{ perspective: "1000px" }}
    >
      {[...Array(3)].map((_, a) => (
        <MotionCard
          key={a}
          variants={cardsVariants}
          className="h-auto lg:h-64 w-auto lg:w-80"
          animateStyles={{ rotateX }}
        />
      ))}
    </motion.div>
  );
};

const HeroCard = ({ ref, className, animateStyles }) => {
  return (
    <motion.div
      ref={ref}
      className={`${className} backdrop-blur-lg bg-gray-400/10 rounded-lg text-center pt-3 flex flex-col`}
      style={{ ...animateStyles }}
    >
      <div className="mb-3">Lorem, ipsum.</div>
      <hr />
      <div className="my-auto font-thin">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi eius quo
        aliquam odit dolorum nostrum quas! Possimus natus nesciunt quae?
      </div>
      <Button
        className="mt-auto dark:text-primary text-black cursor-pointer rounded-t-none border-0 bg-gray-300"
        variant="outline"
      >
        Explore
      </Button>
    </motion.div>
  );
};

const ParallaxBg = () => {
  const { scrollYProgress } = useAnimationContextProvider();

  const smoothY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 10,
    restDelta: 0.001,
  });

  const y = useTransform(smoothY, [0, 1], [0, 100]);

  return (
    <motion.div
      className="w-full md:w-10/12  h-full absolute -z-9 top-0 overflow-hidden "
      initial={{ clipPath: `inset(10% 0% 15% 0%)` }}
      animate={{ clipPath: `inset(10% 0% 15% 0% round 15% 0)` }}
      transition={{ duration: 1, delay: 2 }}
    >
      <motion.div className="w-full  h-full absolute -z-9 top-0 bg-gradient-to-r from-yellow-950/70 to-gray-300/40" />

      <motion.img
        src="/open-book.jpg"
        alt="open-book"
        className="w-full h-full absolute -z-10 top-0 object-cover"
        style={{ y }}
      />
    </motion.div>
  );
};

export default HeroSection;
