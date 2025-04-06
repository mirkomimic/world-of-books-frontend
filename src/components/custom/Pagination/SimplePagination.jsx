import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SimplePagination = ({
  page,
  setPage,
  last_page,
  isPlaceholderData,
  isFetching,
}) => {
  return (
    <div className="mx-auto flex max-w-full items-center gap-2 md:max-w-10/12">
      <span className="w-[36px]">
        {page} / {last_page}
      </span>
      <div className="flex gap-2">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setPage((old) => Math.max(old - 1, 0))}
          disabled={page === 1}
        >
          <ChevronLeft />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() => {
            if (!isPlaceholderData && last_page > page) {
              setPage((old) => old + 1);
            }
          }}
          disabled={isPlaceholderData || last_page === page}
        >
          <ChevronRight />
        </Button>
      </div>
      {isFetching ? <span> Loading...</span> : null}
    </div>
  );
};
export default SimplePagination;
