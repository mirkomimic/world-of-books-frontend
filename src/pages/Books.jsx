import BookCard from "@/components/custom/Cards/BookCard";
import { Button } from "@/components/ui/button";
import { useGetBooks } from "@/hooks/useBooks";
import MainLayout from "@/layouts/MainLayout";
import { Loader2 } from "lucide-react";
import { motion } from "motion/react";

const Books = () => {
  // if (isFetching) return <div>Loading...</div>;

  return (
    <MainLayout>
      <h1 className="my-5 text-center text-xl uppercase antialiased">Books</h1>

      <BooksList />
    </MainLayout>
  );
};

const BooksList = () => {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
    isLoading,
  } = useGetBooks();

  // const MotionBookCard = motion.create(BookCard);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;

  return (
    <>
      <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
        {data.pages
          .flatMap((group) => group.books.data)
          .map((book) => (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2 }}
              key={book.id}
            >
              <BookCard book={book} />
            </motion.div>
          ))}
      </div>

      <div className="flex">
        <Button
          className="mx-auto my-3 h-15 w-2xs cursor-pointer"
          variant="secondary"
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
        >
          {isFetchingNextPage ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              <span>Loading more...</span>
            </>
          ) : hasNextPage ? (
            <span>Load More</span>
          ) : (
            <span>No more data</span>
          )}
        </Button>
      </div>
    </>
  );
};

export default Books;
