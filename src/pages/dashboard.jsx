import React, {useEffect, useState} from 'react';
import { Toolbar, Box, Skeleton, FormControl, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import ResponsiveDrawer from '../component/Drawer';
import SearchInput from '../component/search';
import Chart from '../component/charts/barChart';
import Pie from '../component/charts/pieChart';
import axios from 'axios';
import { url } from '../util/url';
import '../assets/css/loading.css'
import Loading from '../component/loading/circleProgress';
import { darkBlue, darkerBlue, white } from '../util/colors';
import SearchForm from '../component/search';

const DashBoard = () => {
  const [totalStudent, setTotalStudent] = useState(300);
  const [totalStudentPaid, setTotalStudentPaid] = useState(100);
  const [totalStudentOwing, setTotalStudentOwing] = useState(130);
  const [totalStudentNotPaid, setTotalStudentNotPaid] = useState(70);
  const [nurseryBarChartData, setNurseryBarChartData] = useState([])
  const [primaryBarChartData, setPrimaryBarChartData] = useState([40, 70, 60, 70, 60]);
  const [secondaryBarChartData, setSecondaryBarChartData] = useState([])
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('primary')

  const nurseryClasses = ['Play-Group', 'Pre-Nursery', 'Nursery 1', 'Nursery 2'] 
  const primaryClasses = ['Primary 1', 'Primary 2', 'Primary 3', 'Primary 4', 'Primary 5']
  const secondaryClasses = ['jss1', 'jss2', 'jss3', 'sss1', 'sss2', 'sss3']

  const token = localStorage.getItem('token')

  useEffect(() => {
    axios.get(`${url}/getDashBoard`, {
      headers : {
        'Authorization': `${token}`,
      },
    })
      .then(res => {
        setTotalStudent(res.data.totalStudent);
        setTotalStudentPaid(res.data.totalStudentPaid);
        setTotalStudentOwing(res.data.totalStudentOwing);
        setTotalStudentNotPaid(res.data.totalStudentNotPaid);
        setNurseryBarChartData(res.data.nurseryBarChartData);
        setPrimaryBarChartData(res.data.primaryBarChartData);
        setSecondaryBarChartData(res.data.secondaryBarChartData);
        setLoading(false);
      })
      .catch(err => {
        alert(err)
        console.log(err);
      });
  }, []);

  const onSearch = async () =>{
    try {
      const students = axios.post(`${url}/searchStudent`)
    } catch (error) {
      alert(error)
      console.log(error)
    }
  }

  return (
    <div style={{backgroundColor: white}} className={`w-full h-full p-2 ${loading ? 'blur-background' : ''}`}>
      {loading && <Loading />}
      <div className='flex flex-row w-full justify-between'>
        <h1 style={{color: darkerBlue}} className='text-3xl font-bold text-left tracking-wide'>Dash Board</h1>
        <SearchForm onClick={onSearch} />
      </div>
      <div style={{backgroundColor: white}} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-full mt-3">
          <div className="bg-blue-500 p-4 md:max-w-screen-sm rounded shadow">
            <p className="text-white text-xl font-semibold">Total Student</p>
            <p className="text-white text-2xl font-bold lg:mt-12 mt-6 text-right">{totalStudent}</p>
          </div>
          <div className="bg-green-600 p-4 rounded shadow">
            <p className="text-white text-xl font-semibold">Students Paid</p>
            <p className="text-white text-2xl font-bold mt-12 text-right">{totalStudentPaid}</p>
          </div>
          <div className="bg-orange-400 p-4 rounded shadow">
            <p className="text-white text-xl font-semibold">Students Owing</p>
            <p className="text-white text-2xl font-bold mt-12 text-right">{totalStudentOwing}</p>
          </div>
          <div className="bg-red-500 p-4 rounded shadow">
            <p className="text-white text-xl font-semibold">Students Not Paid</p>
            <p className="text-white text-2xl font-bold mt-12 text-right">{totalStudentNotPaid}</p>
          </div>
      </div>
      <div style={{backgroundColor: white}} className='w-full flex flex-row lg:flex-col mt-3 justify-between'>
        <div style={{backgroundColor: white}} className='lg:basis-3/4 rounded p-1 border'>
          <div className='w-full flex justify-between'>
            <div className='p-2'>
              <p style={{color: darkerBlue}} className='text-center text-xl font-bold'>Number Of Student</p>
            </div>
            <div className='flex flex-row justify-around p-1'>
              <FormControl component="fieldset">
                <RadioGroup row aria-label="filter" name="filter" value={filter} onChange={(e) => setFilter(e.target.value)}>
                  <FormControlLabel value="nursery" control={<Radio sx={{ "&.Mui-checked": { color: darkBlue } }} />} label={<p className='text-base tracking-wider'>Nursery</p>} />
                  <FormControlLabel value="primary" control={<Radio sx={{ "&.Mui-checked": { color: darkBlue } }} />} label={<p className='text-base tracking-wider'>Primary</p>} />
                  <FormControlLabel value="secondary" control={<Radio sx={{ "&.Mui-checked": { color: darkBlue } }} />} label={<p className='text-base tracking-wider'>Secondary</p>} />
                </RadioGroup>
              </FormControl>
            </div>
          </div>
          <div className='-mt-10'>
            {filter === 'nursery' && <Chart data={nurseryBarChartData} classes={nurseryClasses} />}
            {filter === 'primary' && <Chart data={primaryBarChartData} classes={primaryClasses} />}
            {filter === 'secondary' && <Chart data={secondaryBarChartData} classes={secondaryClasses} />}
          </div>
        </div>
        <div style={{backgroundColor: white}} className='flex basis-1/6 justify-right items-center rounded border'>
          <Pie paid={totalStudentPaid} owing={totalStudentOwing} notPaid={totalStudentNotPaid} />
        </div>
      </div>
    </div>
  );
};

const Dash_board = () => {
  return (
    <Box sx={{ display: 'flex', backgroundColor: white }}>
      <ResponsiveDrawer />
      <Box component="main" sx={{ flexGrow: 1, p: 1, background: white }}>
        <Toolbar />
        <DashBoard />
      </Box>
    </Box>
  );
};

export default Dash_board;