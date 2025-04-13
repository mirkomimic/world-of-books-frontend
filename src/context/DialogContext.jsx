import { DialogContext } from "@/hooks/useDialogContextProvider";
import { useState } from "react";

export const DialogContextProvider = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <DialogContext.Provider value={{ open, setOpen }}>
      {children}
    </DialogContext.Provider>
  );
};
