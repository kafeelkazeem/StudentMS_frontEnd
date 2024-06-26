import React, { useEffect, useState } from 'react'
import { Box, Toolbar } from '@mui/material'
import ResponsiveDrawer from '../component/Drawer'
import Table from '../component/tables'


const Primary2 = () => {
  return (
    <Box sx={{ display: 'flex' }}>
        <ResponsiveDrawer />
         <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Toolbar />
            <div className='flex justify-center items-center xl:m-5 m-2 w-full height-full p-5 rounded shadow'>
                <Table />
            </div>
        </Box>
    </Box>
  )
}

export default Primary2