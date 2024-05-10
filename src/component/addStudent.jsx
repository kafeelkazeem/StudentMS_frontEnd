import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Typography } from '@mui/material';

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
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

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
            <TextField
            fullWidth
            label="Full Name"
            name="fullName"
            value={formData.age}
            onChange={handleChange}
            margin="dense"
            />
            <TextField
            fullWidth
            label="Age"
            name="age"
            value={formData.fullName}
            onChange={handleChange}
            margin="dense"
            />
            <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
            <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={formData.gender}
                onChange={handleChange}
                row
            >
                <FormControlLabel value="female" control={<Radio />}  label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
            {/* Add more TextField components for other form fields */}
            <Button variant="contained" onClick={handleSubmit}>Submit</Button>
      </Box>
    </Modal>
  );
};

export default AddStudentForm;
