import * as React from "react";
import { CompactTable } from "@table-library/react-table-library/compact";
import { useTheme } from "@table-library/react-table-library/theme";
import { getTheme } from "@table-library/react-table-library/baseline";
import { useRowSelect } from "@table-library/react-table-library/select";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

import { nodes } from "../util/data";

const Table = () => {
  const [filter, setFilter] = React.useState("all");

  const data = { nodes: nodes.filter((item) => {
    if (filter === "all") return true;
    if (filter === 'Paid') return item.Status === 'Paid';
    if (filter === "Owing") return item.Status === 'Owing';
    if (filter === "Not Paid") return item.Status === 'Not Paid';
    return true;
  }) };

  const theme = useTheme([
    getTheme(),
    {
       Table: `
        --data-table-library_grid-template-columns:  44px repeat(5, minmax(0, 1fr));
      `,
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
        <div className="flex justify-center my-4">
          <FormControl component="fieldset">
            <RadioGroup
              row
              aria-label="filter"
              name="filter"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <FormControlLabel value="all" control={<Radio />} label="View all"  />
              <FormControlLabel value="Paid"  control={<Radio sx={{'&.Mui-checked': { color: '#00897b' }}} />}  label="Paid" />
              <FormControlLabel value="Owing" control={<Radio sx={{'&.Mui-checked': { color: '#ffa726' }}} />} label="Owing" />
              <FormControlLabel value="Not Paid" control={<Radio sx={{'&.Mui-checked': { color: '#e64a19' }}} />} label="Not Paid" />
            </RadioGroup>
          </FormControl>
        </div>
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
