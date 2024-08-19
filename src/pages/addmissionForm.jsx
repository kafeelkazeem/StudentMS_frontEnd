import React, { useState } from 'react';
import { Box, Divider, Toolbar } from '@mui/material';
import ResponsiveDrawer from '../component/Drawer';
import { darkBlue, white } from '../util/colors';
import Avatar from '../assets/images/avater.png';
import { TextField, FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material';
import axios from 'axios';
import { url } from '../util/url';

const AdmissionFormContent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [section, setSection] = useState("");
  const [cls, setClass] = useState();
  const [gender, setGender] = useState("");
  const [parentName, setParentName] = useState("");
  const [phoneNumber, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [paid, setPaid] = useState("");

  const token = localStorage.getItem('token')

  const handleSubmit = () => {
    axios
      .post(`${url}/addStudent`, {
        firstName,
        lastName,
        dob,
        cls,
        section,
        gender,
        parentName,
        phoneNumber,
        address,
        paid,
      }, {
        headers: {
          Authorization: `${token}`,
        },
      })
      .then((res) => {
        if (res.data.message) {
          alert('Student created successfully');
        }
      })
      .catch((err) => {
        console.log(err)
        alert(`Error: ${err.response?.data?.message || err.message}`);
      });
  };

  return (
    <div className="w-4/5 p-4 border mx-auto border-black">
      <h1
        style={{ color: darkBlue }}
        className="text-3xl text-center font-[800] tracking-wider"
      >
        ADMISSION FORM
      </h1>
      <div className="w-full flex justify-end mt-2">
        <div className="w-44 h-52 border border-black">
          <img src={Avatar} alt="Profile" className="w-full h-full" />
        </div>
      </div>
      <div className="w-full h-fit mt-5 p-2">
        <FormControl fullWidth variant="standard">
          <div className="flex w-full flex-row justify-between">
            <TextField
              className="basis-[45%]"
              variant="standard"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              label="First Name"
            />
            <TextField
              className="basis-[45%]"
              variant="standard"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              label="Last Name"
            />
          </div>
          <div className="flex w-full mt-4 flex-row justify-between">
            <TextField
              className="basis-[45%]"
              label="Date of Birth"
              type="date"
              variant="standard"
              InputLabelProps={{ shrink: true }}
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
            <FormControl className="basis-[45%]">
              <InputLabel id="gender-label">Gender</InputLabel>
              <Select
                labelId="gender-label"
                id="gender"
                name="gender"
                label="Gender"
                variant="standard"
                value={gender} 
                onChange={(e) => setGender(e.target.value)}
              >
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="flex w-full flex-row justify-between mt-4">
            <FormControl className="basis-[45%]">
              <InputLabel id="section-label">Section</InputLabel>
              <Select
                labelId="section-label"
                name="section"
                label="Section"
                variant="standard"
                value={section}
                onChange={(e) => setSection(e.target.value)}
              >
                <MenuItem value="nursery">Nursery</MenuItem>
                <MenuItem value="primary">Primary</MenuItem>
                <MenuItem value="juniorSecondary">Junior Secondary</MenuItem>
                <MenuItem value="seniorSecondary">Senior Secondary</MenuItem>
              </Select>
            </FormControl>
            <FormControl className="basis-[45%]">
              <InputLabel id="class-label">Class</InputLabel>
              <Select
                labelId="class-label"
                name="class"
                label="Class"
                variant="standard"
                value={cls}
                onChange={(e) => setClass(e.target.value)}
              >
                    <MenuItem value="playGroup">Play Group</MenuItem>
                    <MenuItem value="preNursery">Pre-Nursery</MenuItem>
                    <MenuItem value="nursery 1">Nursery 1</MenuItem>
                    <MenuItem value="nursery 2">Nursery 2</MenuItem>
                    <Divider/>
                    <MenuItem value="primary 1">Primary 1</MenuItem>
                    <MenuItem value="primary 2">Primary 2</MenuItem>
                    <MenuItem value="primary 3">Primary 3</MenuItem>
                    <MenuItem value="primary 4">Primary 4</MenuItem>
                    <MenuItem value="primary 5">Primary 5</MenuItem>
                    <Divider />
                    <MenuItem value="jss 1">JSS 1</MenuItem>
                    <MenuItem value="jss 2">JSS 2</MenuItem>
                    <MenuItem value="jss 3">JSS 3</MenuItem>
                    <Divider />
                    <MenuItem value="sss 1">SSS 1</MenuItem>
                    <MenuItem value="sss 2">SSS 2</MenuItem>
                    <MenuItem value="sss 3">SSS 3</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="flex w-full flex-row justify-between mt-4">
            <TextField
              className="basis-[45%]"
              variant="standard"
              label="Parent Name"
              value={parentName}
              onChange={(e) => setParentName(e.target.value)}
            />
            <TextField
              className="basis-[45%]"
              type="number"
              variant="standard"
              label="Phone Number"
              value={phoneNumber}
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>
          <div className="w-full mt-4">
            <TextField
              className="w-full"
              variant="standard"
              label="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="w-full mt-4">
            <TextField
              className="w-full"
              type="number"
              variant="standard"
              label="Amount Paid"
              value={paid}
              onChange={(e) => setPaid(e.target.value)}
            />
          </div>
          <div className="w-full mt-5 flex justify-center items-center">
            <Button
              variant="contained"
              className="w-2/5 mx-auto py-2"
              onClick={handleSubmit}
            >
              Enroll Student
            </Button>
          </div>
        </FormControl>
      </div>
    </div>
  );
};

const AdmissionForm = () => {
  return (
    <Box sx={{ display: 'flex', overflowX: 'hidden', backgroundColor: white }}>
      <ResponsiveDrawer />
      <Box component="main" sx={{ flexGrow: 1, p: 3, maxWidth: '100%' }}>
        <Toolbar />
        <AdmissionFormContent />
      </Box>
    </Box>
  );
};

export default AdmissionForm;
