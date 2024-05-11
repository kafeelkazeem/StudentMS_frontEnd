import React, { useEffect, useState } from 'react'
import DataGridDemo from '../component/dataGrid'
import { Box, Toolbar } from '@mui/material'
import ResponsiveDrawer from '../component/Drawer'
import ResponsiveMenu from '../component/responsiveMenu'
import axios from 'axios'
import { url } from '../util/url'

// const rows = [
//     { id: 1, lastName: 'Sanchez', firstName: 'Rick', age: 14, gender: 'Male', status: 'paid', paid: 7000, balance: 3000 },
//     { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31, gender: 'Female', status: 'paid', paid: 0, balance: 14000 },
//     { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31, gender: 'Male', status: 'paid', paid: 6000, balance: 7000 },
//     { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11, gender: 'Female', status: 'paid', paid: 7000, balance: 3000 },
//     { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null, gender: 'Female', status: 'paid', paid: 7000, balance: 3000 },
//   ];

const Primary2 = () => {

  const [rows, setRows] = useState([])

  useEffect(() =>{
    getAll()
  }, [])

  const getAll = () =>{
    axios.get(`${url}/getAll`, {
      params : {
        class: 'primary 2'
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
        class: 'primary 2'
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
        class: 'primary 2'
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
        class: 'primary 2'
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

export default Primary2