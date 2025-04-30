import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DialogContextProvider } from "@/context/DialogContext";
import CustomDialog from "@/components/custom/CustomDialog";
import { Button } from "@/components/ui/button";
import AddAuthorForm from "@/components/custom/Forms/AddAuthorForm";
import { Plus, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import PagePagination from "@/components/custom/Pagination/PagePagination";
import { useQueryClient } from "@tanstack/react-query";

export const AuthorsDataTable = ({
  data,
  columns,
  page,
  setPage,
  last_page,
  isFetching,
  textSearch,
  setTextSearch,
}) => {
  const queryClient = useQueryClient();

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <>
      <div className="mx-auto mb-2 min-h-full max-w-full rounded-md border md:max-w-10/12">
        <div className="flex items-center gap-3 border-b p-2">
          <DialogContextProvider>
            <CustomDialog
              title="Add new author"
              button={
                <Button className="cursor-pointer" size="sm">
                  <Plus /> Add
                </Button>
              }
            >
              <AddAuthorForm />
            </CustomDialog>
          </DialogContextProvider>

          <div className="relative w-full">
            <Search className="absolute top-1/2 right-3 h-5 w-5 -translate-y-1/2 text-gray-500" />
            <Input
              className="ms-auto max-w-1/2"
              placeholder="Search"
              value={textSearch}
              onChange={(e) => setTextSearch(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  setTextSearch(e.target.value);
                  queryClient.invalidateQueries({ queryKey: ["authors"] });
                }
              }}
            />
          </div>
        </div>

        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="antialiased">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <PagePagination
        page={page}
        setPage={setPage}
        last_page={last_page}
        isFetching={isFetching}
      />
    </>
  );
};
