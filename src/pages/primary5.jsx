import React from 'react'
import DataGridDemo from '../component/dataGrid'
import { Box, Toolbar } from '@mui/material'
import ResponsiveDrawer from '../component/Drawer'
import ResponsiveMenu from '../component/responsiveMenu'

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14, gender: 'Male', status: 'paid', paid: 7000, balance: 3000 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31, gender: 'Female', status: 'paid', paid: 0, balance: 14000 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31, gender: 'Male', status: 'paid', paid: 6000, balance: 7000 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11, gender: 'Female', status: 'paid', paid: 7000, balance: 3000 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null, gender: 'Female', status: 'paid', paid: 7000, balance: 3000 },
    { id: 6, lastName: 'Melisandre', firstName: 'Targaryen', age: 150, gender: 'Female', status: 'paid', paid: 7000, balance: 3000},
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44, gender: 'Male', status: 'paid', paid: 7000, balance: 3000 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36, gender: 'Male', status: 'paid', paid: 7000, balance: 3000 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65, gender: 'Male', status: 'paid', paid: 7000, balance: 3000 },
  ];

const Primary5 = () => {
  return (
    <Box sx={{ display: 'flex' }}>
        <ResponsiveDrawer />
         <Box
        component="main"
         sx={{ flexGrow: 1, p: 3 }}
      >
        <Toolbar />
        <ResponsiveMenu />
        <DataGridDemo rows = {rows} />
        </Box>
    </Box>
  )
}

export default Primary5