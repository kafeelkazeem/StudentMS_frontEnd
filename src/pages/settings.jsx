import React, { useEffect, useState } from 'react'
import { Box, Toolbar } from '@mui/material'
import ResponsiveDrawer from '../component/Drawer'
import { red, white } from '../util/colors'
import {ReactComponent as Illustration1} from '../assets/svg/money-svgrepo-com.svg'
import {ReactComponent as Illustration2} from '../assets/svg/door-key-password-svgrepo-com.svg'
import { useNavigate } from 'react-router-dom'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Content = () =>{
  const contentData = [
    {
      title: 'School Fees',
      illustration: <Illustration1 />,
      route: 'schoolFees'
    },
    {
      title: 'Change Password',
      illustration: <Illustration2 />,
      route: 'changePassword'
    }
  ]
  const navigate = useNavigate()
  return(
    <div className='w-full h-full bg-inherit flex flex-col p-2 gap-4'>
      {
        contentData.map((data, k) =>(
          <div className='w-full h-full bg-inherit flex flex-col p-2'>
          <div style={{backgroundColor: white}} onClick={() => navigate(`/settings/${data.route}`)} className='w-full h-fit p-8 flex flex-row shadow-md justify-between rounded-lg cursor-pointer hover:bg-[rgba(0,0,0,0.2)]'>
            <div className='flex flex-row gap-4'>
              <div className='w-28 h-28'>
                {data.illustration}
              </div>
              <div className='flex justify-center items-center'>
                <p className='text-3xl font-bold '>{data.title}</p>
              </div>
            </div>
            <div className='flex justify-center items-center'>
              <ArrowForwardIosIcon color={red} className='text-5xl' />
            </div>
          </div>
        </div>
        ))
      }
    </div>
  )
}


const Settings = () => {
  return (
    <Box sx={{ display: 'flex', backgroundColor: white }}>
        <ResponsiveDrawer />
         <Box component="main" sx={{ flexGrow: 1, p: 3, backgroundColor: white }}>
            <Toolbar />
            <Content />
        </Box>
    </Box>
  )
}

export default Settings