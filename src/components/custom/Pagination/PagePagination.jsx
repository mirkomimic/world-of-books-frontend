import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
} from "@/components/ui/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";

const PagePagination = ({ page, setPage, last_page, isFetching }) => {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <Button
            className="cursor-pointer"
            variant="link"
            onClick={() => {
              if (page > 1) setPage(page - 1);
            }}
            disabled={page === 1 || isFetching}
          >
            <ChevronLeft /> Previous
          </Button>
        </PaginationItem>

        {page >= 3 && (
          <PaginationItem>
            <Button
              variant="link"
              onClick={() => setPage(1)}
              className="cursor-pointer"
              disabled={isFetching}
            >
              1
            </Button>
          </PaginationItem>
        )}

        {page >= 4 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}

        {page > 1 && (
          <PaginationItem>
            <Button
              variant="link"
              onClick={() => setPage(page - 1)}
              className="cursor-pointer"
              disabled={isFetching}
            >
              {page - 1}
            </Button>
          </PaginationItem>
        )}

        <PaginationItem>
          <Button
            variant="link"
            className="active cursor-pointer"
            disabled={isFetching}
          >
            {page}
          </Button>
        </PaginationItem>

        {page < last_page && (
          <PaginationItem>
            <Button
              variant="link"
              onClick={() => setPage(page + 1)}
              className="cursor-pointer"
              disabled={isFetching}
            >
              {page + 1}
            </Button>
          </PaginationItem>
        )}

        {page + 1 < last_page && (
          <>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <Button
                variant="link"
                onClick={() => setPage(last_page)}
                className="cursor-pointer"
                disabled={isFetching}
              >
                {last_page}
              </Button>
            </PaginationItem>
          </>
        )}

        <PaginationItem>
          <Button
            className="cursor-pointer"
            variant="link"
            onClick={() => {
              if (page < last_page) setPage(page + 1);
            }}
            disabled={page === last_page || isFetching}
          >
            Next <ChevronRight />
          </Button>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
export default PagePagination;
