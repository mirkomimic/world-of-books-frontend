import { getAuthors } from "@/data/data-service";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

export const useGetAuthors = (page = 0) => {
  // const queryClient = useQueryClient();

  const { isPending, error, data, isPlaceholderData, isFetching } = useQuery({
    queryKey: ["authors", page],
    queryFn: () => getAuthors(page),
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
