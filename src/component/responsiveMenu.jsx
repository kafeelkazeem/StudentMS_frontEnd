import React, { useState } from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import { useMediaQuery, AppBar, Toolbar, Button, Typography } from '@mui/material';
import CustomizedMenus from './smallScreenFilter';
import VisibilityIcon from '@mui/icons-material/Visibility';
import PaidIcon from '@mui/icons-material/Paid';
import RemoveIcon from '@mui/icons-material/Remove';
import MoneyOffIcon from '@mui/icons-material/MoneyOff';
import AddIcon from '@mui/icons-material/Add';
import { green, orange, red, blueGrey } from '@mui/material/colors';
import AddStudentForm from './addStudent';
import axios from 'axios';
import { url } from '../util/url';

const ResponsiveMenu = ({getPaid, getAll, getOwing, getNotPaid}) => {
  const isLargeScreen = useMediaQuery('(min-width:600px)');
  const [viewAllStatus, setViewAllStatus] = useState(true);
  const [paidStatus, setPaidStatus] = useState(false);
  const [owingStatus, setOwingStatus] = useState(false);
  const [notPaidStatus, setNotPaidStatus] = useState(false);
  const [openAddStudentModal, setOpenAddStudentModal] = useState(false);

  const handleViewAll = () => {
    setViewAllStatus(true);
    setPaidStatus(false);
    setOwingStatus(false);
    setNotPaidStatus(false);
    getAll()
  };

  const handlePaid = () => {
    setViewAllStatus(false);
    setPaidStatus(true);
    setOwingStatus(false);
    setNotPaidStatus(false);
    getPaid()
  };

  const handleOwing = () => {
    setViewAllStatus(false);
    setPaidStatus(false);
    setOwingStatus(true);
    setNotPaidStatus(false);
    getOwing()
  };

  const handleNotPaid = () => {
    setViewAllStatus(false);
    setPaidStatus(false);
    setOwingStatus(false);
    setNotPaidStatus(true);
    getNotPaid()
  };

  const handleOpenAddStudentModal = () => {
    setOpenAddStudentModal(true);
  };

  const handleCloseAddStudentModal = () => {
    setOpenAddStudentModal(false);
  };

  const handleAddStudent = () =>{
    setOpenAddStudentModal(true)
    // axios.post(`${url}/addStudent`, {
    //   firstName : 'john',
    //   lastName : 'doe',
    //   age: 12,
    //   dob : '2010-10-10',
    //   cls : 'primary 3',
    //   section : 'primary',
    //   gender : 'male',
    //   parentName : 'doe',
    //   PhoneNumber : '1234',
    //   address : 'kano',
    //   status : 'not paid',
    //   paid : 1200,
    //   owing : 0
    //   }
    // )
    // .then(res =>{
    //   res.data.message && alert('created')
    // })
    // .catch(err =>{
    //   alert(err)
    // })
  } 

  return (
    <Toolbar>
      {isLargeScreen ? (
        // Render button group for large screens
        <>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              '& > *': {
                m: 1,
              },
            }}
          >
            <ButtonGroup variant="text" aria-label="Basic button group">
              <Button onClick={handleViewAll} variant={(viewAllStatus ? 'outlined' : 'text')}><VisibilityIcon />View All</Button>
              <Button onClick={handlePaid} variant={(paidStatus ? 'outlined' : 'text')} sx={{ color: green[400] }}><PaidIcon />Paid</Button>
              <Button onClick={handleOwing} variant={(owingStatus ? 'outlined' : 'text')} sx={{ color: orange[400] }}><RemoveIcon />Owing</Button>
              <Button onClick={handleNotPaid} variant={(notPaidStatus ? 'outlined' : 'text')} sx={{ color: red[300] }}><MoneyOffIcon /> Not Paid</Button>
              <Button onClick={handleAddStudent} sx={{ color: blueGrey[400] }}><AddIcon />Add Student</Button>
            </ButtonGroup>
          </Box>
        </>
      ) : (
        // Render menu icon for small screens
        <CustomizedMenus />
      )}

      {/* AddStudentForm modal */}
      <AddStudentForm open={openAddStudentModal} onClose={handleCloseAddStudentModal} />
    </Toolbar>
  );
};

export default ResponsiveMenu;
