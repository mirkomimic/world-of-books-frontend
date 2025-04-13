import CustomDialog from "@/components/custom/CustomDialog";
import { Button } from "@/components/ui/button";
import { DialogContextProvider } from "@/context/DialogContext";
import { Pencil, Trash2Icon } from "lucide-react";
import EditAuthorForm from "@/components/custom/Forms/EditAuthorForm";
import DeleteAuthorForm from "@/components/custom/Forms/DeleteAuthorForm";

export const columns = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "first_name",
    header: "First name",
  },
  {
    accessorKey: "last_name",
    header: "Last name",
  },
  {
    accessorKey: "year_of_birth",
    header: "Year of birth",
    cell: ({ row }) => new Date(row.getValue("year_of_birth")).getFullYear(),
  },
  {
    accessorKey: "place_of_birth",
    header: "Place of birth",
  },
  {
    id: "edit",
    cell: ({ row }) => (
      <>
        <DialogContextProvider>
          <CustomDialog
            title="Edit author"
            button={
              <Button
                className="me-1 cursor-pointer text-blue-500"
                size="sm"
                variant="ghost"
              >
                <Pencil />
              </Button>
            }
          >
            <EditAuthorForm data={row.original} />
          </CustomDialog>
        </DialogContextProvider>

        <DialogContextProvider>
          <CustomDialog
            title="Delete author"
            button={
              <Button
                className="cursor-pointer text-red-500"
                size="sm"
                variant="ghost"
              >
                <Trash2Icon />
              </Button>
            }
          >
            <DeleteAuthorForm data={row.original} />
          </CustomDialog>
        </DialogContextProvider>
      </>
    ),
  },
];
