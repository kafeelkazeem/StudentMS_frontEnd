import React from 'react';
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

const ResponsiveMenu = () => {
  const isLargeScreen = useMediaQuery('(min-width:600px)');

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
                <Button><VisibilityIcon />View All</Button>
                <Button sx={{color: green[400]}}><PaidIcon />Paid</Button>
                <Button sx={{color: orange[400]}}><RemoveIcon />Owing</Button>
                <Button sx={{color: red[300]}}><MoneyOffIcon /> Not Paid</Button>
                <Button sx={{color: blueGrey[400]}}><AddIcon />Add Student</Button>
            </ButtonGroup>
            </Box>
          </>
        ) : (
          // Render menu icon for small screens
          <CustomizedMenus />
        )}
      </Toolbar>
  );
};

export default ResponsiveMenu;