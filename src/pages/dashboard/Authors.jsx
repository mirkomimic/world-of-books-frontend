import PagePagination from "@/components/custom/Pagination/PagePagination";
import { columns } from "@/components/custom/Tables/AuthorsTable/columns";
import { DataTable } from "@/components/custom/Tables/AuthorsTable/DataTable";
import { useGetAuthors } from "@/hooks/useAuthors";
import DashboardLayout from "@/layouts/DashboardLayout";
import { useState } from "react";

const Authors = () => {
  const [page, setPage] = useState(1);
  const { isPending, data, isFetching } = useGetAuthors(page);

  if (isPending) return <div>Loading...</div>;

  const { last_page, data: authors } = data.authors;

  return (
    <DashboardLayout>
      <h1 className="mb-5 text-center text-xl uppercase">Authors</h1>

      <DataTable data={authors} columns={columns} />

      <PagePagination
        page={page}
        setPage={setPage}
        last_page={last_page}
        isFetching={isFetching}
      />
    </DashboardLayout>
  );
};

export default Authors;
