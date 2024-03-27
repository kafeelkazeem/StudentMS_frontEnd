import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { blueGrey, brown } from '@mui/material/colors';

const columns = [
  { field: 'id', headerName: 'ID', width: 90, headerClassName: 'super-app-theme--header' },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: false,
    headerClassName: 'super-app-theme--header'
  },
  {
    field: 'lastName',
    headerName: 'Last name',
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
    field: 'paid',
    headerName: 'Paid',
    type: 'number',
    width: 110,
    editable: false,
    headerClassName: 'super-app-theme--header'
  },
  {
    field: 'balance',
    headerName: 'Balance',
    type: 'number',
    width: 110,
    editable: false,
    headerClassName: 'super-app-theme--header'
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14, gender: 'Male', paid: 7000, balance: 3000 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31, gender: 'Female', paid: 0, balance: 14000 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31, gender: 'Male', paid: 6000, balance: 7000 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11, gender: 'Female', paid: 7000, balance: 3000 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null, gender: 'Female', paid: 7000, balance: 3000 },
  { id: 6, lastName: 'Melisandre', firstName: 'Targaryen', age: 150, gender: 'Female', paid: 7000, balance: 3000},
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44, gender: 'Male', paid: 7000, balance: 3000 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36, gender: 'Male', paid: 7000, balance: 3000 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65, gender: 'Male', paid: 7000, balance: 3000 },
];

export default function DataGridDemo() {
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
        rows={rows}
        columns={columns}
        // initialState={{
        //   pagination: {
        //     paginationModel: {
        //       pageSize: 8,
        //     },
        //   },
        // }}
        pageSizeOptions={[5]}
        //checkboxSelection
        //disableRowSelectionOnClick
      />
    </Box>
  );
}