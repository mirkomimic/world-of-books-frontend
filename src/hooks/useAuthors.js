import {
  addAuthor,
  deleteAuthor,
  getAuthors,
  updateAuthor,
} from "@/data/authors-data-service";
import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { toast } from "sonner";

export const useGetAuthors = (page = 0, textSearch = "") => {
  // const queryClient = useQueryClient();

  const { isPending, error, data, isPlaceholderData, isFetching } = useQuery({
    queryKey: ["authors", page, textSearch],
    queryFn: () => getAuthors(page, textSearch),
    staleTime: 1000 * 60,
    // cacheTime: 1000 * 60 * 10,
    // keepPreviousData: true, // Prevents flashing loading states
    placeholderData: keepPreviousData,
  });

  // if (page < data?.authors.last_page)
  //   queryClient.prefetchQuery({
  //     queryKey: ["authors", page + 1],
  //     queryFn: () => getAuthors(page + 1),
  //   });

  return { isPending, error, data, isPlaceholderData, isFetching };
};

export const useAddAuthor = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: addAuthor,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["authors"] });
      toast.success("Author has been created");
    },
  });

  return mutation;
};

export const useUpdateAuthor = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: ({ data }) => updateAuthor(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["authors"] });
      toast.success("Author has been updated");
    },
  });

  return mutation;
};

export const useDeleteAuthor = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: ({ data }) => deleteAuthor(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["authors"] });
      toast.success("Author has been deleted");
    },
  });

  return mutation;
};
