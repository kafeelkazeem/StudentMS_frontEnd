import React, { useEffect, useState } from 'react';
import { Box, Toolbar, Button} from '@mui/material';
import ResponsiveDrawer from '../component/Drawer';
import { useParams } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import Avater from '../assets/images/avater.png'
import EditIcon from '@mui/icons-material/Edit';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PaymentsIcon from '@mui/icons-material/Payments';
import HistoryIcon from '@mui/icons-material/History';
import axios from 'axios';
import { url } from '../util/url';
import { calculateAge } from '../util/helper';


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

const ProfileContent = () => {
  const {id} = useParams()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [dob, setDob] = useState('')
  const [gender, setGender] = useState('')
  const [cls, setCls] = useState('')
  const [section, setSection] = useState('')
  const [parentName, setParentName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [address, setAddress] = useState('')

  useEffect(()=>{
    axios.get(`${url}/getSingleStudent`, {
      params : {
        id: id
      }}
    )
    .then(res =>{
      setFirstName(res.data.firstName)
      setLastName(res.data.lastName)
      setDob(res.data.dob)
      setGender(res.data.gender)
      setCls(res.data.cls)
      setSection(res.data.section)
      setParentName(res.data.parentName)
      setPhoneNumber(res.data.phoneNumber)
      setAddress(res.data.address)

    })
    .catch(err => console.log(err))
  }, [id])

  const profileData = [
    { description: 'First Name', value: firstName },
    { description: 'Last Name', value: lastName },
    { description: 'Gender', value: gender },
    { description: 'Age', value: calculateAge(dob) },
    { description: 'Date of Birth', value: dob },
    { description: 'Parent Name', value: parentName },
    { description: 'Parent Address', value: address },
    { description: 'Parent Contact', value: phoneNumber }
  ];
  return (
    <>
      <div>
        <div className='w-full h-60 flex items-center shadow'>
          <div className='w-full h-full flex items-center p-4'>
            <div>
              <img
                src={Avater}
                alt='Profile'
                className='lg:w-56 lg:h-56 w-16 h-16 rounded-full border-4 border-double'
              />
            </div>
            <div className='flex flex-col justify-between h-full ml-5 p-5'>
              <div className='text-4xl font-bold'>{`${firstName} ${lastName}`}</div>
              <button className='bg-cyan-600 w-full mt-5 text-white px-4 py-2 rounded hover:bg-cyan-800'>
                Edit Profile 
                <EditIcon />
              </button>
            </div>
          </div>
        </div>
        <div className='w-full h-52 flex flex-row p-2 justify-around mt-5 items-center'>
          <div className='basis-1/4 bg-green-700 h-full rounded shadow'>
            <div className='text-white text-5xl flex justify-end m-2'>
              <CheckCircleIcon fontSize='inherit' />
            </div>
            <p className='text-white text-center text-2xl my-auto mt-4 font-semibold tracking-wider'>PAID</p>
          </div>
          <div className='basis-1/4 bg-amber-900 h-full rounded shadow cursor-pointer'>
            <div className='text-white text-5xl flex justify-end m-2'>
              <PaymentsIcon fontSize='inherit' />
            </div>
            <p className='text-white text-center text-2xl my-auto mt-4 font-semibold tracking-wider'>MAKE PAYMENT</p>
          </div>
          <div className='basis-1/4 bg-gray-700 h-full rounded shadow cursor-pointer'>
           <div className='text-white text-5xl flex justify-end m-2'>
              <HistoryIcon fontSize='inherit' />
            </div>
            <p className='text-white text-center text-2xl my-auto mt-4 font-semibold tracking-wider'>PAYMENT HISTORY</p>
          </div>
        </div>
        <div className='w-full h-fit mt-5 p-2 shadow'>
          <h1 className='text-center font-bold text-2xl'>STUDENT INFORMATION</h1>
          <div className='w-11/12 p-4 mx-auto'>
          <ul className='mx-auto'>
            {profileData.map((item, index) => (
              <li
                key={index}
                className={`flex justify-between p-3 px-5 text-lg ${
                  index % 2 === 0 ? 'bg-gray-200' : 'bg-white'
                }`}
              >
                <span className='font-bold'>{item.description}</span>
                <span>{item.value}</span>
              </li>
            ))}
          </ul>
        </div>
        </div>
      </div>
    </>
  )
}


const Profile = () => {
  return (
    <Box sx={{ display: 'flex', overflowX: 'hidden' }}>
      <ResponsiveDrawer />
      <Box component="main" sx={{ flexGrow: 1, p: 3, maxWidth: '100%' }}>
        <Toolbar />
        <Back />
        <ProfileContent />
      </Box>
    </Box>
  );
};

export default Profile;
