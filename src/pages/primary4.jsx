import React, { useEffect, useState } from 'react'
import DataGridDemo from '../component/dataGrid'
import { Box, Toolbar } from '@mui/material'
import ResponsiveDrawer from '../component/Drawer'
import ResponsiveMenu from '../component/responsiveMenu'
import axios from 'axios'
import { url } from '../util/url'

const Primary4 = () => {
  const [rows, setRows] = useState([])

  useEffect(() =>{
    getAll()
  }, [])

  const getAll = () =>{
    axios.get(`${url}/getAll`, {
      params : {
        class: 'primary 4'
      }
    })
    .then(res =>{
      setRows(res.data)
    })
    .catch(err =>{
      alert(err)
    })
  }

  const getPaid = () =>{
    axios.get(`${url}/getPaid`, {
      params : {
        class: 'primary 4'
      }
    })
    .then(res =>{
      setRows(res.data)
    })
    .catch(err =>{
      alert(err)
    })
  }

  const getOwing = () =>{
    axios.get(`${url}/getOwing`, {
      params : {
        class: 'primary 4'
      }
    })
    .then(res =>{
      setRows(res.data)
    })
    .catch(err =>{
      alert(err)
    })
  }

  const getNotPaid = () =>{
    axios.get(`${url}/getNotPaid`, {
      params : {
        class: 'primary 4'
      }
    })
    .then(res =>{
      setRows(res.data)
    })
    .catch(err =>{
      alert(err)
    })
  }
  return (
    <Box sx={{ display: 'flex' }}>
        <ResponsiveDrawer />
         <Box
        component="main"
         sx={{ flexGrow: 1, p: 3 }}
      >
        <Toolbar />
        <ResponsiveMenu getAll={getAll} getPaid={getPaid} getOwing={getOwing} getNotPaid={getNotPaid} />
        <DataGridDemo rows={rows} />
        </Box>
    </Box>
  )
}

export default Primary4