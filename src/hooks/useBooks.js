import { getBooks } from "@/data/books-data-service";
import {
  keepPreviousData,
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { toast } from "sonner";

export const useGetBooks = () => {
  // const queryClient = useQueryClient();

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
    isLoading,
  } = useInfiniteQuery({
    queryKey: ["books"],
    queryFn: getBooks,
    staleTime: 1000 * 60,
    initialPageParam: 0,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    getNextPageParam: (lastPage, pages) => {
      return lastPage.books.next_cursor;
    },
  });

  return {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
    isLoading,
  };
};
// export const useGetBooks = (page = 0, textSearch = "") => {
//   // const queryClient = useQueryClient();

//   const { isPending, error, data, isPlaceholderData, isFetching } = useQuery({
//     queryKey: ["books", page, textSearch],
//     queryFn: () => getBooks(page, textSearch),
//     staleTime: 1000 * 60,
//     placeholderData: keepPreviousData,
//   });

//   return { isPending, error, data, isPlaceholderData, isFetching };
// };

// export const useAddAuthor = () => {
//   const queryClient = useQueryClient();

//   const mutation = useMutation({
//     mutationFn: addAuthor,
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ["authors"] });
//       toast.success("Author has been created");
//     },
//   });

//   return mutation;
// };

// export const useUpdateAuthor = () => {
//   const queryClient = useQueryClient();

//   const mutation = useMutation({
//     mutationFn: ({ data }) => updateAuthor(data),
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ["authors"] });
//       toast.success("Author has been updated");
//     },
//   });

//   return mutation;
// };

// export const useDeleteAuthor = () => {
//   const queryClient = useQueryClient();

//   const mutation = useMutation({
//     mutationFn: ({ data }) => deleteAuthor(data),
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ["authors"] });
//       toast.success("Author has been deleted");
//     },
//   });

//   return mutation;
// };
