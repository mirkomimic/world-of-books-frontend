export const columns = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "full_name",
    header: "Full name",
  },

  {
    accessorKey: "dob",
    header: "Year of birth",
    cell: ({ row }) => new Date(row.getValue("dob")).getFullYear(),
  },
  {
    accessorKey: "pob",
    header: "Place of birth",
  },
];
