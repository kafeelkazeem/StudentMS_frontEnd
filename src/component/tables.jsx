import React, { useMemo, useState, useEffect } from "react";
import { useTable } from "react-table";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { useLocation, useNavigate } from "react-router-dom";
import { darkBlue, white } from "../util/colors";

const Table = ({ cls, nodes, loading }) => {
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const isLoading = () => {
      
    };

    isLoading();
  }, []); 

  const filteredData = useMemo(
    () =>
      nodes.filter((item) => {
        if (filter === "all") return true;
        if (filter === "Paid") return item.status === "paid";
        if (filter === "Owing") return item.status === "owing";
        if (filter === "Not Paid") return item.status === "not paid";
        return true;
      }),
    [filter, nodes]
  );

  const data = useMemo(() => filteredData, [filteredData]);

  const columns = useMemo(
    () => [
      { Header: "First Name", accessor: "firstName" },
      { Header: "Last Name", accessor: "lastName" },
      { Header: "Gender", accessor: "gender" },
      { Header: "Payment Status", accessor: "status" },
      { Header: "Paid", accessor: "paid" },
      { Header: "Owing", accessor: "owing" },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  });

  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  // State to track selected row
  const [selectedRowId, setSelectedRowId] = useState(null);

  // Handle row click to select
  const handleRowClick = (row) => {
    const newRowId = row.original.id;
    if (selectedRowId === newRowId) {
      // Deselect if the same row is clicked again
      setSelectedRowId(null);
    } else {
      setSelectedRowId(newRowId);
      navigate(`${pathname}/profile/${newRowId}`);
    }
  };

  return (
    <>
      <div className="w-full mb-2">
        <h1 className="text-center xl:text-xl font-bold -mt-5">{cls}</h1>
        <div className="flex justify-center my-1">
          <FormControl component="fieldset">
            <RadioGroup
              row
              aria-label="filter"
              name="filter"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <FormControlLabel value="all" control={<Radio />} label="View all" />
              <FormControlLabel
                value="Paid"
                control={<Radio sx={{ "&.Mui-checked": { color: "#00897b" } }} />}
                label="Paid"
              />
              <FormControlLabel
                value="Owing"
                control={<Radio sx={{ "&.Mui-checked": { color: "#ffa726" } }} />}
                label="Owing"
              />
              <FormControlLabel
                value="Not Paid"
                control={<Radio sx={{ "&.Mui-checked": { color: "#e64a19" } }} />}
                label="Not Paid"
              />
            </RadioGroup>
          </FormControl>
        </div>
      </div>
      <table
        {...getTableProps()}
        style={{ backgroundColor: white, width: "100%", borderCollapse: "collapse" }}
      >
        <thead
          className="text-white text-lg tracking-widest rounded-2xl"
          style={{ backgroundColor: darkBlue, color: "#fff" }}
        >
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  style={{ padding: "10px", borderBottom: "1px solid black" }}
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {loading ? (
            <tr>
              <td colSpan={columns.length} style={{ textAlign: "center", padding: "20px" }}>
                Loading...
              </td>
            </tr>
          ) : (
            rows.map((row) => {
              prepareRow(row);
              const isSelected = row.original.id === selectedRowId;
              return (
                <tr
                  className="text-base tracking-wider hover:bg-slate-700"
                  {...row.getRowProps()}
                  style={{
                    cursor: "pointer",
                    backgroundColor: isSelected ? "grey" : "inherit",
                  }}
                  onClick={() => handleRowClick(row)}
                >
                  {row.cells.map((cell) => (
                    <td
                      {...cell.getCellProps()}
                      style={{ padding: "10px", borderBottom: "1px solid #415a77" }}
                    >
                      {cell.render("Cell")}
                    </td>
                  ))}
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </>
  );
};

export default Table;
