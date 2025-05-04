import { createContext, useContext } from "react";

export const AnimationContext = createContext();

export const useAnimationContextProvider = () => {
  const context = useContext(AnimationContext);

  if (context === undefined)
    throw new Error("Animation context was used outside of AnimationContextProvider");

  return context;
};
