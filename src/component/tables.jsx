import React, { useMemo, useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { darkBlue, white } from "../util/colors";
import { NigeriaNaira } from "../util/helper";

const Status = (props) =>{
  return(
    <div style={{backgroundColor: props.color}} className='w-20 h-8 p-1 flex justify-center items-center text-sm text-[100] text-white rounded-md shadow-sm'>
      {props.text}
    </div>
  )
}

const DataTable = ({ cls, nodes, loading }) => {
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const isLoading = () => {};

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

  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  // State to track selected row
  const [selectedRowId, setSelectedRowId] = useState(null);

  // Handle row click to select
  const handleRowClick = (row) => {
    const newRowId = row.id;
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
      <div className="w-full mb-2 my-4">
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
      <TableContainer component={Paper}>
        <Table style={{ minWidth: 650, backgroundColor: white }}>
          <TableHead style={{ backgroundColor: darkBlue, color: "#fff" }}>
            <TableRow>
              <TableCell sx={{ color: "#fff", fontSize: "1.1rem" }}>First Name</TableCell>
              <TableCell sx={{ color: "#fff", fontSize: "1.1rem" }}>Last Name</TableCell>
              <TableCell sx={{ color: "#fff", fontSize: "1.1rem" }}>Gender</TableCell>
              <TableCell sx={{ color: "#fff", fontSize: "1.1rem" }}>Payment Status</TableCell>
              <TableCell sx={{ color: "#fff", fontSize: "1.1rem" }}>Paid</TableCell>
              <TableCell sx={{ color: "#fff", fontSize: "1.1rem" }}>Owing</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={6} sx={{ textAlign: "center", padding: "20px", fontSize: "1.1rem" }}>
                  Loading...
                </TableCell>
              </TableRow>
            ) : (
              filteredData.map((row) => {
                const isSelected = row.id === selectedRowId;
                return (
                  <TableRow
                    key={row.id}
                    hover
                    onClick={() => handleRowClick(row)}
                    selected={isSelected}
                    sx={{ cursor: "pointer", backgroundColor: isSelected ? "grey" : "inherit" }}
                  >
                    <TableCell sx={{ fontSize: "1.1rem" }}>{row.firstName}</TableCell>
                    <TableCell sx={{ fontSize: "1.1rem" }}>{row.lastName}</TableCell>
                    <TableCell sx={{ fontSize: "1.1rem" }}>{row.gender}</TableCell>
                    <TableCell sx={{ fontSize: "1rem" }}>
                      <div>
                        {row.status === "paid" ? (
                          <Status text='Paid' color='#16a34a' />
                        ) : row.status === "owing" ? (
                          <Status text='Owing' color='#fb923c' />
                        ) : row.status === "not paid" ? (
                          <Status text='Not paid' color='#e63946' />
                        ) : (
                          <div>Unknown status</div>
                        )}
                      </div>
                    </TableCell>
                    <TableCell sx={{ fontSize: "1rem" }}>{NigeriaNaira.format(row.paid)}</TableCell>
                    <TableCell sx={{ fontSize: "1rem" }}>{NigeriaNaira.format(row.owing)}</TableCell>
                  </TableRow>
                );
              })
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default DataTable;
