import React, { useEffect, useState } from 'react'
import { Box, Toolbar } from '@mui/material'
import ResponsiveDrawer from '../../../component/Drawer'
import Table from '../../../component/tables'
import AddButton from '../../../component/buttons/AddButton'
import axios from 'axios'
import { url } from '../../../util/url'
import { white } from '../../../util/colors'


const PreNursery = () => {

  const [Students, setStudents] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() =>{
    axios.get(`${url}/getAllStudentPerClass`, {
      params : {
        cls: 'preNursery'
      }
    })
    .then(res =>{
      setStudents(res.data)
      setLoading(false)
    })
    .catch(err => console.log(err))
  }, [])
  console.log(Students)
  return (
    <Box sx={{ display: 'flex', backgroundColor: white }}>
        <ResponsiveDrawer />
         <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Toolbar />
            <div className='xl:m-5 m-2 w-full h-full p-3 rounded'>
                <Table cls='PRE-NURSERY' nodes={Students} loading={loading} />
            </div>
            <div className='fixed bottom-6 right-8'>
              <AddButton />
            </div>
        </Box>
    </Box>
  )
}

export default PreNursery