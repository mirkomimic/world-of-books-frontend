import { AnimationContext } from "@/hooks/useAnimationContextProvider";
import { useScroll } from "motion/react";

export const AnimationContextProvider = ({ children }) => {
  const { scrollYProgress } = useScroll();

  return (
    <AnimationContext.Provider value={{ scrollYProgress }}>
      {children}
    </AnimationContext.Provider>
  );
};
