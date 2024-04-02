import React from 'react';
import { Box, Toolbar, Button, Paper, Stack, Typography } from '@mui/material';
import ResponsiveDrawer from '../component/Drawer';
import { useParams } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import EditIcon from '@mui/icons-material/Edit';
import MyImg from '../images/avater.png';
import Img from '../component/image';
import { cyan, teal } from '@mui/material/colors';

const Back = () => {
  const navigate = useNavigate();
  const { cls } = useParams();
  const goBack = () => {
    navigate(`/${cls}`);
  };
  return (
    <Button
      component="label"
      variant="contained"
      sx={{ position: 'fixed' }}
      startIcon={<ArrowBackIcon />}
      onClick={goBack}
    >
      Back
    </Button>
  );
};

const Edit = () => {
  return (
    <Button
      component="center"
      variant="contained"
      sx={{ backgroundColor: cyan[700] }}
      startIcon={<EditIcon />}
    >
      Edit Profile
    </Button>
  );
};

function FirstGrid() {
  const { name } = useParams();
  return (
    <Box sx={{ flexGrow: 1, mt: 8 }}>
      <Paper sx={{ p: 3, backgroundColor: '#EDEFF6' }} elevation={1}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <Img src={MyImg} />
          </Grid>
          <Grid item xs={12} md={'auto'}>
            <Stack spacing={10}>
              <Typography variant="h3">{name}</Typography>
              <Edit />
            </Stack>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}

function SecondGrid() {
  const { name } = useParams();
  return (
    <Box sx={{ flexGrow: 1, mt: 8 }}>
        <Grid container spacing={2}>
          <Grid item xs={9} md={3}>
            <Paper sx={{ p: 3, backgroundColor: '#EDEFF6' }} elevation={1}>
              <Typography variant='h3' sx={{textAlign: 'center'}}>Personal Information</Typography>
            </Paper>
          </Grid>
          <Grid item xs={3} md={'auto'}>
            <Paper sx={{ p: 3, backgroundColor: '#EDEFF6' }} elevation={1}>
              <Typography>Hello</Typography>
            </Paper>
          </Grid>
        </Grid>
    </Box>
  );
}

const Profile = () => {
  return (
    <Box sx={{ display: 'flex', overflowX: 'hidden' }}>
      <ResponsiveDrawer />
      <Box component="main" sx={{ flexGrow: 1, p: 3, maxWidth: '100%' }}>
        <Toolbar />
        <Back />
        <FirstGrid />
        {/* <SecondGrid /> */}
      </Box>
    </Box>
  );
};

export default Profile;
