import React, { useEffect, useState } from 'react'
import { Box, Toolbar } from '@mui/material'
import ResponsiveDrawer from '../component/Drawer'
import axios from 'axios'
import { url } from '../util/url'
import { red, white } from '../util/colors'
import {ReactComponent as Illustration1} from '../assets/svg/money-svgrepo-com.svg'
import { useNavigate } from 'react-router-dom'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Content = () =>{
  const navigate = useNavigate()
  const handleSettingsClick =  () =>{
    navigate('/settings/schoolFees')
  }
  return(
    <div className='w-full h-full bg-inherit flex flex-col p-2'>
      <div onClick={handleSettingsClick} className='w-full h-fit p-8 flex flex-row shadow-lg justify-between rounded-lg cursor-pointer bg-inherit hover:bg-[rgba(0,0,0,0.2)]'>
        <div className='flex flex-row gap-4'>
          <div className='w-28 h-28'>
            <Illustration1 />
          </div>
          <div className='flex justify-center items-center'>
            <p className='text-3xl font-bold '>School Fees</p>
          </div>
        </div>
        <div className='flex justify-center items-center'>
          <ArrowForwardIosIcon color={red} className='text-5xl' />
        </div>
      </div>
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