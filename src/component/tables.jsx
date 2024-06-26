import * as React from "react";

import { CompactTable } from "@table-library/react-table-library/compact";
import { useTheme } from "@table-library/react-table-library/theme";
import { getTheme } from "@table-library/react-table-library/baseline";
import { useRowSelect } from "@table-library/react-table-library/select";

import { nodes } from "../util/data";

const Table = () => {
  const data = { nodes };

  const theme = useTheme([
    getTheme(),
    {
       Table: `
        --data-table-library_grid-template-columns:  44px repeat(5, minmax(0, 1fr));
      `
    },
  ]);

  const select = useRowSelect(data, {
    onChange: onSelectChange,
  });

  function onSelectChange(action, state) {
    console.log(state);
  }

  const COLUMNS = [
    { label: "First Name", renderCell: (item) => item.FirstName, select: true },
    { label: "Last Name", renderCell: (item) => item.LastName },
    { label: "Gender", renderCell: (item) => item.Gender },
    { label: "Status", renderCell: (item) => item.Status },
    { label: "Paid", renderCell: (item) => item.Paid },
    { label: "Owing", renderCell: (item) => item.Owing },
  ];

  return (
    <>
      <div className="w-full mb-4">
        <h1 className="text-center xl:text-xl font-bold">PRIMARY 1</h1>
      </div>
      <CompactTable
        columns={COLUMNS}
        data={data}
        theme={theme}
        layout={{ custom: true }}
        select={select}
      />
    </>
  );
};

export default Table;
