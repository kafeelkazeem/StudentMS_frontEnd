import React, {useEffect, useState} from 'react';
import { Toolbar, Box } from '@mui/material';
import ResponsiveDrawer from '../component/Drawer';
import SearchInput from '../component/search';
import Chart from '../component/barChart';
import Pie from '../component/pieChart';
import axios from 'axios';
import { url } from '../util/url';

const DashBoard = () => {

  const [totalStudent, setTotalStudent] = useState(null)
  const [totalStudentPaid, setTotalStudentPaid] = useState(null)
  const [totalStudentOwing, setTotalStudentOwing] = useState(null)
  const [totalStudentNotPaid, setTotalStudentNotPaid] = useState(null)
  const [primaryBarChart, setPrimaryBarChart] = useState([])

  useEffect(() =>{
    axios.get(`${url}/getDashBoard`)
    .then(res =>{
      setTotalStudent(res.data.totalStudent)
      setTotalStudentPaid(res.data.totalStudentPaid)
      setTotalStudentOwing(res.data.totalStudentOwing)
      setTotalStudentNotPaid(res.data.totalStudentNotPaid)
      setPrimaryBarChart(res.data.primaryBarChartData) 
    })
    .catch(err =>{
      console.log(err)
    })
  }, [])

  return (
    <div className="w-full h-full p-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-full">
        <div className="bg-blue-500 p-4 md:max-w-screen-sm rounded shadow">
          <p className="text-white text-xl font-semibold">Total Student</p>
          <p className="text-white text-2xl font-bold lg:mt-12 mt-6 text-right">{totalStudent}</p>
        </div>
        <div className="bg-green-600 p-4 rounded shadow">
          <p className="text-white text-xl font-semibold">Students Paid</p>
          <p className="text-white text-2xl font-bold mt-12 text-right">{totalStudentPaid}</p> 
        </div>
        <div className="bg-orange-400 p-4 rounded shadow ">
          <p className="text-white text-xl font-semibold">Students Owing</p>
          <p className="text-white text-2xl font-bold mt-12 text-right">{totalStudentOwing}</p> 
        </div>
        <div className="bg-red-500 p-4 rounded shadow">
          <p className="text-white text-xl font-semibold">Students Not Paid</p>
          <p className="text-white text-2xl font-bold mt-12 text-right">{totalStudentNotPaid}</p> 
        </div>
      </div>
      <div className='w-full flex flex-row lg:flex-col mt-3 justify-between'>
         <div className='lg:basis-3/4 bg-white shadow rounded p-3'>
            <h1 className='text-center text-2xl font-medium'>Number Of Student Per Class</h1>
            <Chart data={primaryBarChart} />
         </div>
         <div className='flex basis-1/6 justify-right items-center bg-white shadow rounded'>
            <Pie paid={totalStudentPaid} owing={totalStudentOwing} notPaid={totalStudentNotPaid} />
         </div>
      </div>
    </div>
  );
};

const Dash_board = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <ResponsiveDrawer />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <DashBoard />
      </Box>
    </Box>
  );
};

export default Dash_board;