import React, { useEffect, useState } from 'react'
import { Box, Toolbar } from '@mui/material'
import ResponsiveDrawer from '../component/Drawer'
import Table from '../component/tables'
import AddButton from '../component/buttons/AddButton'
import axios from 'axios'
import { url } from '../util/url'


const Primary3 = () => {

  const [Students, setStudents] = useState([])

  useEffect(() =>{
    axios.get(`${url}/getAllStudentPerClass`, {
      params : {
        cls: 'primary 3'
      }
    })
    .then(res =>{
      setStudents(res.data)
    })
    .catch(err => console.log(err))
  }, [])
  return (
    <Box sx={{ display: 'flex' }}>
        <ResponsiveDrawer />
         <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Toolbar />
            <div className='xl:m-5 m-2 w-full h-full p-5 rounded shadow'>
                <Table cls='PRIMARY 3' nodes={Students} />
            </div>
            <div className='fixed bottom-6 right-8'>
              <AddButton />
            </div>
        </Box>
    </Box>
  )
}

export default Primary3