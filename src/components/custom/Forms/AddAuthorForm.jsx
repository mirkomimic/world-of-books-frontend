import TextInput from "@/components/custom/Forms/Inputs/TextInput";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useAddAuthor } from "@/hooks/useAuthors";
import { useDialogContextProvider } from "@/hooks/useDialogContextProvider";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const AddAuthorForm = () => {
  const { setOpen } = useDialogContextProvider();

  const { mutate, isPending } = useAddAuthor();

  const formSchema = z.object({
    first_name: z.string().min(2),
    last_name: z.string().min(2),
    year_of_birth: z.coerce
      .number()
      .int()
      .gte(1901)
      .lte(new Date().getFullYear()),
    place_of_birth: z.string().min(2),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      year_of_birth: "",
      place_of_birth: "",
    },
  });

  const onSubmit = (data) => {
    mutate(data, {
      onSuccess: () => setOpen(false),

      onError: (error) => {
        const backendErrors = error.response.data.errors;

        if (backendErrors.first_name?.length > 0)
          form.setError("first_name", {
            type: "manual",
            message: backendErrors.first_name[0],
          });
        if (backendErrors.last_name?.length > 0)
          form.setError("last_name", {
            type: "manual",
            message: backendErrors.last_name[0],
          });
        if (backendErrors.year_of_birth?.length > 0)
          form.setError("year_of_birth", {
            type: "manual",
            message: backendErrors.year_of_birth[0],
          });
        if (backendErrors.place_of_birth?.length > 0)
          form.setError("place_of_birth", {
            type: "manual",
            message: backendErrors.place_of_birth[0],
          });
      },
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mx-auto w-2/3 space-y-6"
      >
        <TextInput
          form={form}
          name="first_name"
          placeholder="First name"
          label="First name"
        />
        <TextInput
          form={form}
          name="last_name"
          placeholder="Last name"
          label="Last name"
        />
        <TextInput
          form={form}
          name="year_of_birth"
          placeholder="Year of birth"
          label="Year of birth"
          type="number"
        />
        <TextInput
          form={form}
          name="place_of_birth"
          placeholder="Place of birth"
          label="Place of birth"
        />

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
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default AddAuthorForm;
