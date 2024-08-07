import React, { useState } from 'react';
import {
  Box,
  Toolbar,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
} from '@mui/material';
import ResponsiveDrawer from '../component/Drawer';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import { white } from '../util/colors';
import { NigeriaNaira } from '../util/helper';
import EditIcon from '@mui/icons-material/Edit';

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

const Content = () => {
  const [fees, setFees] = useState({
    nursery: NigeriaNaira.format(5000),
    primary: NigeriaNaira.format(7000),
    juniorSecondary: NigeriaNaira.format(9000),
    seniorSecondary: NigeriaNaira.format(11000),
  });

  const [isEditing, setIsEditing] = useState({
    nursery: false,
    primary: false,
    juniorSecondary: false,
    seniorSecondary: false,
  });

  const handleEditClick = (section) => {
    setIsEditing({ ...isEditing, [section]: true });

  };

  const handleSaveClick = (section) => {
    setIsEditing({ ...isEditing, [section]: false });
  };

  const handleInputChange = (event, section) => {
    const newFees = { ...fees };
    newFees[section] = event.target.value;
    setFees(newFees);
  };

  return (
    <div className='w-full h-fit mt-20'>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{fontSize: '24px'}}>Section</TableCell>
              <TableCell sx={{fontSize: '24px'}}>School Fees</TableCell>
              <TableCell sx={{fontSize: '24px'}}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.entries(fees).map(([section, fee]) => (
              <TableRow key={section}>
                <TableCell sx={{fontSize: '16px'}}>{section.charAt(0).toUpperCase() + section.slice(1)}</TableCell>
                <TableCell sx={{fontSize: '16px'}}>
                  {isEditing[section] ? (
                    <TextField
                      type="number"
                      value={fee}
                      onChange={(e) => handleInputChange(e, section)}
                    />
                  ) : (
                    `${fee}`
                  )}
                </TableCell>
                <TableCell>
                  {isEditing[section] ? (
                    <Button
                      variant="contained"
                      color="success"
                      onClick={() => handleSaveClick(section)}
                    >
                      Save
                    </Button>
                  ) : (
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={() => handleEditClick(section)}
                    >
                      Edit
                      <EditIcon fontSize='12' />
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

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
