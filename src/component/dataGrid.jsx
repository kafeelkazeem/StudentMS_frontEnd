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
    width: 110,
    editable: false,
    headerClassName: 'super-app-theme--header'
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    headerClassName: 'super-app-theme--header',
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function DataGridDemo() {
  return (
    <Box /*sx={{ height: 'auto', width: '100%' }}*/  sx={{
      height: 'auto',
      width: 'auto',
      '& .super-app-theme--header': {
        backgroundColor: blueGrey[500],
        color: 'white'
      },
    }}>
      <DataGrid
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