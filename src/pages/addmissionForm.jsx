import React, { useState } from 'react'
import { Box, Divider, Toolbar} from '@mui/material';
import ResponsiveDrawer from '../component/Drawer';
import { darkBlue, darkerBlue, white } from '../util/colors';
import Avater from '../assets/images/avater.png';
import { TextField, FormControl, InputLabel, Select, MenuItem, Button, Checkbox, FormControlLabel } from '@mui/material';
import { useParams } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { url } from '../util/url';

// const Back = () => {
//     const navigate = useNavigate();
//     const { cls } = useParams();
//     const goBack = () => {
//       navigate(`/${cls}`);
//     };
//     return (
//       <Button
//         component="label"
//         variant="contained"
//         sx={{ position: 'fixed', zIndex: 2 }}
//         startIcon={<ArrowBackIcon />}
//         onClick={goBack}
//       >
//         Back
//       </Button>
//     );
//   };

const AddmissionFormContent = () => {
  const [firstName, setFirstName] = useState(null)
  const [lastName, setLastName] = useState(null)
  const [dob, setDob] = useState(null)
  const [section, setSection] = useState(null)
  const [cls, setClass] = useState(null)
  const [gender, setGender] = useState(null)
  const [parentName, setParentName] = useState(null)
  const [phoneNumber, setNumber] = useState(null)
  const [address, setAddress] = useState(null)
  const [paid, setPaid] = useState(null)  

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
      status : 'paid',
      paid : paid,
      owing : 0
      }
    )
    .then(res =>{
      res.data.message && alert('created')
    })
    .catch(err =>{
      alert(err)
    })
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
            <img src={Avater} alt="Profile" className="w-full h-full" />
          </div>
        </div>
        <div className='w-full h-fit mt-5 p-2'>
          <FormControl  fullWidth variant="standard">
            <div className='flex w-full flex-row justify-between'>
              <TextField className='basis-[45%]' variant='standard' value={firstName} onChange={(e) => setFirstName(e.target.value)} label='First Name' />
              <TextField className='basis-[45%]' variant='standard' value={lastName} onChange={(e) => setLastName(e.target.value)} label='Last Name' />
            </div>
            <div className='flex w-full mt-4 flex-row justify-between'>
              <TextField className='basis-[45%]' label="Date of Birth" type="date" variant='standard' InputLabelProps={{ shrink: true }} value={dob} onChange={(e) => setDob(e.target.value)} />
              <FormControl className='basis-[45%]'>
                <InputLabel id="gender-label">Gender</InputLabel>
                <Select
                  labelId="gender-label"
                  id="gender"
                  name="gender"
                  label="Gender"
                  variant='standard'
                  value={gender} 
                  onChange={(e) => setGender(e.target.value)}
                >
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className='flex w-full flex-row justify-between mt-4'>
              <FormControl className='basis-[45%]'>
                  <InputLabel id="section-label">Section</InputLabel>
                  <Select
                    labelId="section-label"
                    name="section"
                    label="Section"
                    variant='standard'
                    value={section} 
                    onChange={(e) => setSection(e.target.value)}
                  >
                    <MenuItem value="nursery">Nursery</MenuItem>
                    <MenuItem value="primary">Primary</MenuItem>
                    <MenuItem value="seconday">Secondary</MenuItem>
                  </Select>
                </FormControl>
                <FormControl className='basis-[45%]'>
                  <InputLabel id="class-label">Class</InputLabel>
                  <Select
                    labelId="class-label"
                    name="class"
                    label="class"
                    variant='standard'
                    value={cls} 
                    onChange={(e) => setClass(e.target.value)}
                  >
                    <MenuItem value="playgroup">Play Group</MenuItem>
                    <MenuItem value="pre-nursery">Pre-Nursery</MenuItem>
                    <MenuItem value="nursery 1">Nursery 1</MenuItem>
                    <MenuItem value="nursery 2">Nursery 2</MenuItem>
                    <Divider />
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
            <div className='flex w-full flex-row justify-between mt-4'>
              <TextField className='basis-[45%]' variant='standard' label='Parent Name' value={parentName} onChange={(e) => setParentName(e.target.value)} />
              <TextField className='basis-[45%]' type='number' variant='standard' label='Phone Number' value={phoneNumber} onChange={(e) => setNumber(e.target.value)} />
            </div>
            <div className='w-full mt-4'>
              <TextField className='w-full' variant='standard' label='Address' value={address} onChange={(e) => setAddress(e.target.value)}/>
            </div>
            <div className='w-full mt-4'>
              <TextField className='w-full' type='number' variant='standard' label='Amount Paid' value={paid} onChange={(e) => setPaid(e.target.value)}/>
            </div>
            <div className='w-full mt-5 flex justify-center items-center'>
              <Button variant='contained' className='w-2/5 mx-auto py-2' onClick={handleSubmit}>Enroll Student</Button>
            </div>
          </FormControl>
        </div>
      </div>
    );
  };
  

const AddmissionForm = () => {
    return (
      <Box sx={{ display: 'flex', overflowX: 'hidden', backgroundColor: white }}>
        <ResponsiveDrawer />
        <Box component="main" sx={{ flexGrow: 1, p: 3, maxWidth: '100%' }}>
          <Toolbar />
          {/* <Back /> */}
          <AddmissionFormContent />
        </Box>
      </Box>
    );
  };
  
  export default AddmissionForm
