import Breadcrumbs from "@/components/custom/Breadcrumbs";
import PagePagination from "@/components/custom/Pagination/PagePagination";
import { columns } from "@/components/custom/Tables/AuthorsTable/columns";
import { AuthorsDataTable } from "@/components/custom/Tables/AuthorsTable/AuthorsDataTable";
import { useGetAuthors } from "@/hooks/useAuthors";
import DashboardLayout from "@/layouts/DashboardLayout";
import { useDeferredValue, useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import { useDebounce } from "@/hooks/useDebounce";

const Authors = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(() => Number(searchParams.get("page")) || 1);
  const [textSearch, setTextSearch] = useState(
    () => searchParams.get("search") || "",
  );

  const debouncedSearch = useDebounce(textSearch, 500);
  const { isPending, data, isFetching } = useGetAuthors(page, debouncedSearch);

  useEffect(() => {
    const params = { page };

    if (textSearch.trim() !== "") {
      params.search = textSearch;
    }

    setSearchParams(params);
  }, [page, textSearch, setSearchParams]);

  const { last_page, data: authors = [] } = data?.authors || {};
  const deferredAuthors = useDeferredValue(authors);

  if (isPending) return <div>Loading...</div>;

  return (
    <DashboardLayout>
      <Breadcrumbs items={["dashboard", "authors"]} />

      <h1 className="mb-5 text-center text-xl uppercase antialiased">
        Authors
      </h1>

      <AuthorsDataTable
        data={deferredAuthors}
        columns={columns}
        page={page}
        setPage={setPage}
        last_page={last_page}
        isFetching={isFetching}
        textSearch={textSearch}
        setTextSearch={setTextSearch}
      />
    </DashboardLayout>
  );
};

export default Authors;
