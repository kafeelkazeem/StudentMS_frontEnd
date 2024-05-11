import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import { Stack, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const AddStudentForm = ({ open, onClose }) => {
  // State variables for form data
  const [formData, setFormData] = useState({
    fullName: '',
    dateOfBirth: '',
    age: '',
    gender: '',
    class: '',
    section: '',
    parentName: '',
    phoneNumber: '',
    address: '',
    status: '',
    paid: '',
    owing: ''
  });

  // Event handler to update form data
  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   setFormData(prevState => ({
  //     ...prevState,
  //     [name]: value
  //   }));
  // };

  // Event handler for form submission
  const handleSubmit = () => {
    // Perform any necessary actions with the form data
    console.log(formData);
    // Close the modal
    onClose();
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={{
        position: 'absolute',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
      }}>
        <Typography sx={{textAlign: 'center'}} variant='h4'>Add Student</Typography>
        <FormControl  fullWidth variant="standard">
          <Stack mt={2} spacing={2}>
          <Stack direction='row' spacing={3}>
            <TextField
              id="firstName"
              name="firstName"
              label="First Name"
            />
            <TextField
              id="lastName"
              name="lastName"
              label="Last Name"
            />
          </Stack>
          <TextField
            id="dob"
            name="dob"
            label="Date of Birth"
            type="date"
            InputLabelProps={{ shrink: true }} // Shrink label on focus
          />
          <Stack direction='row' spacing={3}>
            <FormControl fullWidth>
              <InputLabel id="section-label">Section</InputLabel>
              <Select
                labelId="gender-label"
                id="section"
                name="section"
                label="Section"
              >
                <MenuItem value="primary">Primary</MenuItem>
                <MenuItem value="secondary">Secondary</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="section-label">Class</InputLabel>
              <Select
                labelId="class"
                id="class"
                name="class"
                label="class"
              >
                <MenuItem value="primary 1">Primary 1</MenuItem>
                <MenuItem value="primary 2">Primary 2</MenuItem>
                <MenuItem value="primary 3">Primary 3</MenuItem>
                <MenuItem value="primary 4">Primary 4</MenuItem>
                <MenuItem value="primary 5">Primary 5</MenuItem>
              </Select>
            </FormControl>
          </Stack>
          <FormControl fullWidth>
            <InputLabel id="gender-label">Gender</InputLabel>
            <Select
              labelId="gender-label"
              id="gender"
              name="gender"
              label="Gender"
            >
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
            </Select>
          </FormControl>
          <Stack direction='row' spacing={3}>
            <TextField
              id="parentName"
              name="parentName"
              label="Parent Name"
            />
            <TextField
              id="PhoneNumber"
              name="PhoneNumber"
              label="Phone Number"
            />
          </Stack>
          <TextField
            id="address"
            name="address"
            label="Address"
          />
          <FormControl fullWidth>
              <InputLabel id="status">Status</InputLabel>
              <Select
                labelId="status"
                id="status"
                name="status"
                label="status"
              >
                <MenuItem value="paid">Paid</MenuItem>
                <MenuItem value="owing">Owing</MenuItem>
                <MenuItem value="not paid">Not Paid</MenuItem>
              </Select>
            </FormControl>
          <Stack direction='row' spacing={3}>
            <TextField
              id="paid"
              name="paid"
              label="Paid Amount"
              type="number"
            />
            <TextField
              id="owing"
              name="owing"
              label="Owing Amount"
              type="number"
            />
          </Stack>
            <Button variant='contained'>Add</Button>
          </Stack>
    </FormControl>
      </Box>
    </Modal>
  );
};

export default AddStudentForm;
