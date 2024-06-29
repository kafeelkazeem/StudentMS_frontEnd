import React, { useEffect, useState } from 'react'
import { Box, Toolbar } from '@mui/material'
import ResponsiveDrawer from '../component/Drawer'
import Table from '../component/tables'
import AddButton from '../component/AddButton'


const Primary4 = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <ResponsiveDrawer />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          <div className='xl:m-5 m-2 w-full height-full p-5 rounded shadow'>
              <Table class='PRIMARY 5' />
          </div>
          <div className='fixed bottom-6 right-8'>
            <AddButton />
          </div>
      </Box>
    </Box>
  )
}

export default Primary4