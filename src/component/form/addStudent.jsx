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
import axios from 'axios';
import { url } from '../../util/url';

const AddStudentForm = ({ open, onClose }) => {

  const [firstName, setFirstName] = useState(null)
  const [lastName, setLastName] = useState(null)
  const [dob, setDob] = useState(null)
  const [section, setSection] = useState(null)
  const [cls, setClass] = useState(null)
  const [gender, setGender] = useState(null)
  const [parentName, setParentName] = useState(null)
  const [phoneNumber, setNumber] = useState(null)
  const [address, setAddress] = useState(null)
  const [status, setStatus] = useState(null)
  const [paid, setPaid] = useState(null)
  const [owing, setOwing] = useState(null)  

  const handleSubmit = () => {
    axios.post(`${url}/addStudent`, {
      firstName : firstName,
      lastName : lastName,
      dob : dob,
      cls : cls,
      section : section,
      gender : gender,
      parentName : parentName,
      phoneNumber : phoneNumber,
      address : address,
      status : status,
      paid : paid,
      owing : owing
      }
    )
    .then(res =>{
      res.data.message && alert('created')
      onClose();
    })
    .catch(err =>{
      alert(err)
    })
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
              value= {firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <TextField
              id="lastName"
              name="lastName"
              label="Last Name"
              value= {lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </Stack>
          <TextField
            id="dob"
            name="dob"
            label="Date of Birth"
            type="date"
            InputLabelProps={{ shrink: true }} // Shrink label on focus
            value= {dob}
            onChange={(e) => setDob(e.target.value)}
          />
          <Stack direction='row' spacing={3}>
            <FormControl fullWidth>
              <InputLabel id="section-label">Section</InputLabel>
              <Select
                labelId="gender-label"
                id="section"
                name="section"
                label="Section"
                value= {section}
                onChange={(e) => setSection(e.target.value)}
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
                value= {cls}
                onChange={(e) => setClass(e.target.value)}
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
              value= {gender}
              onChange={(e) => setGender(e.target.value)}
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
              value= {parentName}
              onChange={(e) => setParentName(e.target.value)}
            />
            <TextField
              id="PhoneNumber"
              name="PhoneNumber"
              label="Phone Number"
              value= {phoneNumber}
              onChange={(e) => setNumber(e.target.value)}
            />
          </Stack>
          <TextField
            id="address"
            name="address"
            label="Address"
            value= {address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <FormControl fullWidth>
              <InputLabel id="status">Status</InputLabel>
              <Select
                labelId="status"
                id="status"
                name="status"
                label="status"
                value= {status}
                onChange={(e) => setStatus(e.target.value)}
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
              value= {paid}
              onChange={(e) => setPaid(e.target.value)}
            />
            <TextField
              id="owing"
              name="owing"
              label="Owing Amount"
              type="number"
              value= {owing}
              onChange={(e) => setOwing(e.target.value)}
            />
          </Stack>
            <Button onClick={handleSubmit} variant='contained'>Add</Button>
          </Stack>
    </FormControl>
      </Box>
    </Modal>
  );
};

export default AddStudentForm;
