import React, {useState} from 'react';
import { styled } from '@mui/material/styles';
import { Grid, Paper, Typography } from '@mui/material';
import { Toolbar, Box } from '@mui/material';
import ResponsiveDrawer from '../component/Drawer';
import { red, purple, teal, orange, blueGrey, lightBlue, indigo } from '@mui/material/colors';
import SearchInput from '../component/search';
import { useEffect } from 'react';
import axios from 'axios';
import { url } from '../util/url';

const Root = styled('div')(({ theme }) => ({
  flexFlow: 1,
  padding: theme.spacing(2),
}))

 const Item = styled(Paper)(({ theme }) => ({
     padding: theme.spacing(4),
     textAlign: 'center',
     color: theme.palette.text.secondary,
     height: '200px', // Increase the height
  }))

const Dashboard = () => {
  const [totalStudents, setTotalStudents] = useState(null)
  const [paidStudents, setPaidStudents] = useState(null)
  const [notPaidStudents, setNotPaidStudents] = useState(null)
  const [owingStudents, setOwingStudents] = useState(null)

  useEffect(()=>{
    axios.get(`${url}/dashBoard`)
    .then(res =>{
      setTotalStudents(res.data.totalStudent)
      setPaidStudents(res.data.totalStudentPaid)
      setNotPaidStudents(res.data.totalStudentNotPaid)
      setOwingStudents(res.data.totalStudentOwing)
    })
  }, [])

  return (
    <Root>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={6} lg={6}> {/* Modify grid size for large screens */}
          <Item sx={{backgroundColor: purple[400], color: 'primary.contrastText' }}>
            <Typography variant="h5" sx={{textAlign: 'left'}}>Total Students</Typography>
            <Typography variant="h4" sx={{textAlign: 'right', paddingTop: '3rem'}}>{totalStudents}</Typography>
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}> {/* Modify grid size for large screens */}
          <Item sx={{backgroundColor: teal[400], color: 'primary.contrastText'}}>
            <Typography variant="h5" sx={{textAlign: 'left'}}>Students Paid</Typography>
            <Typography variant="h4" sx={{textAlign: 'right', paddingTop: '3rem'}}>{paidStudents}</Typography>
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}> {/* Modify grid size for large screens */}
          <Item sx={{backgroundColor: blueGrey[400], color: 'primary.contrastText'}}>
            <Typography variant="h5" sx={{textAlign: 'left'}}>Students Not Paid</Typography>
            <Typography variant="h4" sx={{textAlign: 'right', paddingTop: '3rem'}}>{notPaidStudents}</Typography>
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}> {/* Modify grid size for large screens */}
          <Item sx={{backgroundColor: indigo[400], color: 'primary.contrastText'}}>
            <Typography variant="h5" sx={{textAlign: 'left'}}>Students Owing</Typography>
            <Typography variant="h4" sx={{textAlign: 'right', paddingTop: '3rem'}}>{owingStudents}</Typography>
          </Item>
        </Grid>
      </Grid>
     </Root>
  );
};

const Dash_board = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <ResponsiveDrawer />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <SearchInput />
        <Dashboard />
      </Box>
    </Box>
  );
};

export default Dash_board;