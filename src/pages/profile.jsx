import React, { useEffect, useState } from 'react';
import { Box, Toolbar, Button} from '@mui/material';
import ResponsiveDrawer from '../component/Drawer';
import { useParams } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import Avater from '../assets/images/avater.png'
import EditIcon from '@mui/icons-material/Edit';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import PaymentIcon from '@mui/icons-material/Payment';
import { green } from '@mui/material/colors';


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
  const profileData = [
    { description: 'First Name', value: 'John' },
    { description: 'Last Name', value: 'Doe' },
    { description: 'Gender', value: 'Male' },
    { description: 'Age', value: '28' },
    { description: 'Date of Birth', value: '1996-01-15' },
    { description: 'Parent Name', value: 'Jane Doe' },
    { description: 'Parent Address', value: '123 Main St, Cityville' },
    { description: 'Parent Contact', value: '+1234567890' }
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
              <div className='text-4xl font-bold'>John Doe</div>
              <button className='bg-cyan-600 w-full mt-5 text-white px-4 py-2 rounded hover:bg-cyan-800'>
                Edit Profile 
                <EditIcon />
              </button>
            </div>
          </div>
        </div>
        <div className='w-full h-60 mt-5 p-2 shadow'>
          <h1 className='text-center font-bold text-2xl'>PAYMENTS</h1>
          <div className='w-full flex flex-col p-1 gap-3'>
            <div className='w-1/4 border-2 rounded flex justify-center items-center py-2'>
              <p className='text-2xl font-bold'>Payment Status: <span className='text-green-600'>Paid</span></p> 
            </div>
            <div className='w-1/4'>
              <button className='w-full text-white bg-green-600 text-2xl py-2 rounded hover:bg-green-700'>Record Payment <PaymentIcon /></button>
            </div>
            <div className='w-1/4'>
              <button className='w-full text-white bg-stone-500 text-2xl py-2 rounded hover:bg-stone-600'>Payment History<PaymentIcon /></button>
            </div>
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
