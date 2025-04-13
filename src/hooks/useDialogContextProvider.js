import { createContext, useContext } from "react";

export const DialogContext = createContext();

export const useDialogContextProvider = () => {
  const context = useContext(DialogContext);

  if (context === undefined)
    throw new Error("Dialog context was used outside of DialogContextProvider");

  return context;
};
