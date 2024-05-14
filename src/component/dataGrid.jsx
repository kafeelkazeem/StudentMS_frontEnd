import * as React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { blueGrey, brown } from '@mui/material/colors';
import { Typography, useMediaQuery } from '@mui/material';

let idCounter = 1;

function generateId() {
  return idCounter++; // Increment the counter and return the current value as the ID
}

const columns = [
  { 
    field: 'id', 
    headerName: 'ID', 
    width: 90, 
    headerClassName: 'super-app-theme--header',
    // valueGetter: (params) => params.row.id || generateId() 
  },
  {
    field: 'firstName',
    headerName: 'First Name',
    width: 150,
    editable: false,
    headerClassName: 'super-app-theme--header',

  },
  {
    field: 'lastName',
    headerName: 'Last Name',
    width: 150,
    editable: false,
    headerClassName: 'super-app-theme--header'
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 150,
    editable: false,
    headerClassName: 'super-app-theme--header'
  },
  {
    field: 'gender',
    headerName: 'Gender',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 150,
    headerClassName: 'super-app-theme--header',
    // valueGetter: (params) =>
    //   `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  {
    field: 'status',
    headerName: 'Status',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 150,
    headerClassName: 'super-app-theme--header',
    // valueGetter: (params) =>
    //   `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  {
    field: 'paid',
    headerName: 'paid',
    type: 'number',
    width: 110,
    editable: false,
    headerClassName: 'super-app-theme--header'
  },
  {
    field: 'owing',
    headerName: 'owing',
    type: 'number',
    width: 160,
    editable: false,
    headerClassName: 'super-app-theme--header'
  },
];

export default function DataGridDemo(props) {
  const [selectedRow, setSelectedRow] = React.useState(null);
  const navigate = useNavigate();
  const location = useLocation()
  const { pathname, search, hash } = location;

  const handleSelectionModelChange = (selectionModel) => {
    // Assuming single selection mode
    if (selectionModel.length === 1) {
      const selectedRowIndex = selectionModel[0];
      const selectedRowData = props.rows.find(row => row.id === selectedRowIndex);
      if (selectedRowData) {
        const { id } = selectedRowData;
        navigate(`${pathname}/${id}`);
      }
    }
  };
  return (
    <Box /*sx={{ height: 'auto', width: '100%' }}*/  sx={{
      height: 'auto',
      width: 'auto',
      '& .super-app-theme--header': {
        backgroundColor: blueGrey[500],
        color: 'white',
      },
    }}> 
        <DataGrid sx={{mt: 3}}
        rows={props.rows}
        columns={columns}
        // initialState={{
        //   pagination: {
        //     paginationModel: {
        //       pageSize: 3,
        //     },
        //   },
        // }}
        pageSizeOptions={[5]}
        onRowSelectionModelChange={handleSelectionModelChange}
        //checkboxSelection
        //disableRowSelectionOnClick
      />

    </Box>
  );
}