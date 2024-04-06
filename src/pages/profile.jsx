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
import { cyan, green, blue, teal, blueGrey } from '@mui/material/colors';
import MyList from '../component/list';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PaymentIcon from '@mui/icons-material/Payment';


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
      sx={{ position: 'fixed', zIndex: 2 }}
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
      sx={{ backgroundColor: cyan[700],}}
      disableElevation
      startIcon={<EditIcon />}
    >
      Edit Profile
    </Button>
  );
};

const AddPayment = () => {
  const handleClick = () =>{

  }
  return(
    <Button
        id="demo-customized-button"
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<PaymentIcon />}
        sx={{backgroundColor: green[600]}}
      >
        Make Payment
      </Button>
  )
}

const PaymentHistory = () => {
  const handleClick = () =>{

  }
  return(
    <Button
        id="demo-customized-button"
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        sx={{backgroundColor: blueGrey[500]}}
      >
        Payment History
      </Button>
  )
}

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
  return (
    <Box sx={{ flexGrow: 1, mt: 8 }}>
    <Grid container spacing={7}>
      <Grid item lg={7}>
        <Paper sx={{ p: 3, backgroundColor: '#EDEFF6' }} elevation={1}>
          <MyList />
        </Paper>
      </Grid>
      <Grid item>
        <Paper sx={{ p: 3, backgroundColor: '#EDEFF6' }} elevation={1}>
          <List
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'inherit' }}
        subheader={<ListSubheader sx={{bgcolor: 'inherit'}}><Typography variant='h4'>Payment Status</Typography></ListSubheader>}>
          <ListItem>
            <ListItemText id="switch-list-label-wifi" primary={<Typography variant='h5' sx={{color: green[500]}}>Paid</Typography>} />
          </ListItem>
          <ListItem>
            <AddPayment />
          </ListItem>
          <ListItem></ListItem>
          <ListItem>
            <PaymentHistory />
          </ListItem>
        </List>
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
        <SecondGrid />
      </Box>
    </Box>
  );
};

export default Profile;
