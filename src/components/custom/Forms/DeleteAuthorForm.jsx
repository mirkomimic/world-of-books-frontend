import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useDeleteAuthor } from "@/hooks/useAuthors";
import { useDialogContextProvider } from "@/hooks/useDialogContextProvider";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";

const DeleteAuthorForm = ({ data }) => {
  const { setOpen } = useDialogContextProvider();

  const { mutate, isPending } = useDeleteAuthor();

  const form = useForm({
    defaultValues: {
      id: data.id,
      first_name: data.first_name,
      last_name: data.last_name,
      year_of_birth: data.year_of_birth,
      place_of_birth: data.place_of_birth,
    },
  });

  const onSubmit = (data) => {
    mutate(
      { data },
      {
        onSuccess: () => setOpen(false),
      },
    );
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mx-auto w-2/3 space-y-6"
      >
        <div>
          Confirm deleting author ({data.id}) {data.first_name} {data.last_name}
          .
        </div>

        <Button
          onClick={(e) => {
            e.preventDefault();
            setOpen(false);
          }}
          variant="outline"
          disabled={isPending}
          className="me-2 cursor-pointer"
        >
          Close
        </Button>
        <Button type="submit" disabled={isPending}>
          {isPending && <Loader2 className="animate-spin cursor-pointer" />}
          Confirm
        </Button>
      </form>
    </Form>
  );
};

export default DeleteAuthorForm;
