import React, { useEffect, useState } from 'react'
import { Box, Toolbar } from '@mui/material'
import ResponsiveDrawer from './Drawer'
import { url } from '../util/url'
import DataTable from './tables'
import axios from 'axios'
import { darkerBlue, white } from '../util/colors'
import AddButton from './buttons/AddButton'

const Class = ({params, clsName}) => {
  
  const [Students, setStudents] = useState([])
  const [loading, setLoading] = useState(true)

  const token = localStorage.getItem('token')

  useEffect(() =>{
    axios.get(`${url}/getAllStudentPerClass`, {
      params : {
        cls: params
      },
      headers : {
        'Authorization': `${token}`,
      },
    })
    .then(res =>{
      setStudents(res.data)
      setLoading(false)
    })
    .catch(err => console.log(err))
  }, [])
  return (
    <Box sx={{ display: 'flex', backgroundColor: white }}>
        <ResponsiveDrawer />
         <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Toolbar />
            <div>
                <h1 style={{color: darkerBlue}} className='text-3xl font-bold text-left tracking-wide'>{clsName}</h1>
            </div>
            <div className='xl:m-1 m-2 w-full h-full p-3 rounded'>
                <DataTable nodes={Students} loading={loading} />
            </div>
            <div className='fixed bottom-6 right-8'>
              <AddButton />
            </div>
        </Box>
    </Box>
  )
}

export default Class