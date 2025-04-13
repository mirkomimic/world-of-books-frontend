import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useDialogContextProvider } from "@/hooks/useDialogContextProvider";

const CustomDialog = ({ title, description, button, children }) => {
  const { open, setOpen } = useDialogContextProvider();

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{button}</DialogTrigger>

      <DialogContent
        onInteractOutside={(e) => e.preventDefault()}
        className="bg-secondary"
      >
        <DialogHeader>
          <DialogTitle className="text-primary uppercase">{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>

        {children}
      </DialogContent>
    </Dialog>
  );
};
export default CustomDialog;
