import React, { useEffect, useState } from 'react';
import { Box, Toolbar, Button, Skeleton } from '@mui/material';
import ResponsiveDrawer from '../component/Drawer';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import { white } from '../util/colors';

const Back = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(`/settings`);
  };
  return (
    <Button
      component="label"
      variant="contained"
      sx={{ position: 'fixed', zIndex: 2 }}
      startIcon={<ArrowBackIcon />}
      onClick={goBack}
    >
      Back
    </Button>
  );
};

const Content = () =>{
    return(
        <>
        
        </>
    )
}


const SchoolFees = () => {
  return (
    <Box sx={{ display: 'flex', overflowX: 'hidden', backgroundColor: white }}>
      <ResponsiveDrawer />
      <Box component="main" sx={{ flexGrow: 1, p: 3, maxWidth: '100%' }}>
        <Toolbar />
        <Back />
        <Content />
      </Box>
    </Box>
  );
};

export default SchoolFees;
