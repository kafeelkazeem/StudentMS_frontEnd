import React, { useEffect, useState } from 'react';
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
  Skeleton,
} from '@mui/material';
import ResponsiveDrawer from '../component/Drawer';
import { white } from '../util/colors';
import { NigeriaNaira } from '../util/helper';
import EditIcon from '@mui/icons-material/Edit';
import axios from 'axios';
import { url } from '../util/url';
import Back from '../component/buttons/BackButton';

const Content = () => {
  const [fees, setFees] = useState({
    nursery: 0,
    primary: 0,
    juniorSecondary: 0,
    seniorSecondary: 0,
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const token = localStorage.getItem('token');

  const getFees = async () => {
    try {
      const feesResponse = await axios.get(`${url}/getSchoolFees`, {
        headers: {
          Authorization: `${token}`,
        },
      });
      setFees(feesResponse.data);
      setLoading(false);
    } catch (error) {
      alert('An error occurred');
      console.log(error);
    }
  };

  useEffect(() => {
    getFees();
  }, []);

  const [isEditing, setIsEditing] = useState({
    nursery: false,
    primary: false,
    juniorSecondary: false,
    seniorSecondary: false,
  });

  const handleEditClick = (section) => {
    setIsEditing({ ...isEditing, [section]: true });
  };

  const handleSaveClick = async (section) => {
    setSaving(true);
    try {
      await axios.post(
        `${url}/setSchoolFees`,
        {
          section: section,
          amount: fees[section],
        },
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );
      setSaving(false);
      setIsEditing({ ...isEditing, [section]: false });
    } catch (error) {
      console.log(error);
      alert('An error occurred');
      setSaving(false); // Reset saving state if there's an error
    }
  };

  const handleInputChange = (event, section) => {
    const newFees = { ...fees };
    newFees[section] = event.target.value;
    setFees(newFees);
  };

  return (
    <div className="w-full h-fit mt-20">
      <TableContainer component={Paper} sx={{ backgroundColor: white }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontSize: '24px' }}>Section</TableCell>
              <TableCell sx={{ fontSize: '24px' }}>School Fees</TableCell>
              <TableCell sx={{ fontSize: '24px' }}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.entries(fees).map(([section, fee]) => (
              <TableRow key={section}>
                <TableCell sx={{ fontSize: '16px' }}>
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </TableCell>
                <TableCell sx={{ fontSize: '16px' }}>
                  {isEditing[section] ? (
                    <TextField
                      type="number"
                      value={fee}
                      onChange={(e) => handleInputChange(e, section)}
                    />
                  ) : loading ? (
                    <Skeleton variant="text" width="20%" />
                  ) : (
                    `${NigeriaNaira.format(fee)}`
                  )}
                </TableCell>
                <TableCell>
                  {isEditing[section] ? (
                    <Button
                      variant="contained"
                      color="success"
                      onClick={() => handleSaveClick(section)}
                    >
                      {saving ? 'Saving...' : 'Save'}
                    </Button>
                  ) : (
                    <Button
                      variant="outlined"
                      color="primary"
                      disabled={loading}
                      onClick={() => handleEditClick(section)}
                    >
                      Edit
                      <EditIcon fontSize="12" />
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
        <Back route={'/settings'} />
        <Content />
      </Box>
    </Box>
  );
};

export default SchoolFees;
