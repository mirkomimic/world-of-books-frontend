import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const TextInput = ({
  form,
  name,
  label,
  placeholder,
  type = "text",
  defaultValue,
  isDisabled = false,
}) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input
              {...field}
              placeholder={placeholder}
              type={type}
              defaultValue={defaultValue}
              disabled={isDisabled}
            />
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  );
};
export default TextInput;
