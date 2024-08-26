import React, { useEffect, useState } from 'react';
import { Box, Toolbar } from '@mui/material';
import ResponsiveDrawer from '../component/Drawer';
import { darkerBlue, red, white } from '../util/colors';
import { useNavigate } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Back from '../component/buttons/BackButton';
import Avatar from '../assets/images/avater.png'; 
import { Image } from 'react-bootstrap';
import { NigeriaNaira } from '../util/helper';

const Status = (props) =>{
  return(
    <div style={{backgroundColor: props.color}} className='w-20 h-8 p-1 flex justify-center items-center text-sm text-[100] text-white rounded-md shadow-sm'>
      {props.text}
    </div>
  )
}

const Content = () => {
  const navigate = useNavigate();
  const [contentData, setContentData] = useState([]);

  useEffect(() => {
    const content = localStorage.getItem('searchResult');
    if (content) {
      try {
        setContentData(JSON.parse(content));
      } catch (error) {
        console.error('Error parsing JSON from localStorage:', error);
      }
    }
  }, []); 

  // Additional useEffect to log contentData after it's updated
  useEffect(() => {
    console.log(contentData);
  }, [contentData]); // Run this effect whenever contentData changes

  return (
    <div className="w-full h-full bg-inherit flex flex-col p-2 gap-4">
      {contentData.map((data, k) => (
        <div key={k} className="w-full h-full bg-inherit flex flex-col p-2">
          <div
            style={{ backgroundColor: white }}
            onClick={() => navigate(`/${(data.cls).replace(/ /g, '')}/profile/${data._id}`)}
            className="w-full h-fit p-8 flex flex-row shadow-md justify-between rounded-lg cursor-pointer hover:bg-[rgba(0,0,0,0.2)]"
          >
            <div className="flex flex-row gap-6">
              <div className="w-36 h-36">
                <Image src={Avatar} roundedCircle />
              </div>
              <div className="flex flex-col justify-center gap-2">
                <p className="text-3xl font-bold">{`${data.firstName} ${data.lastName}`}</p>
                <p className='text-lg font-light text-gray-500'>{`Class: ${data.cls}`}</p>
                 <div className='flex flex-col w-full justify-between'> 
                    <p className='text-lg font-light text-gray-500'>{`Paid: ${NigeriaNaira.format(data.paid)}`}</p>
                    <p className='text-lg font-light text-gray-500'>{`Owing: ${NigeriaNaira.format(data.owing)}`}</p>
                 </div>
                 <div>
                  {data.status === "paid" ? (
                    <Status text='Paid' color='#16a34a' />
                    ) : data.status === "owing" ? (
                      <Status text='Owing' color='#fb923c' />
                    ) : data.status === "not paid" ? (
                      <Status text='Not paid' color='#e63946' />
                    ) : (
                      <div>Unknown status</div>
                    )}
                 </div>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <ArrowForwardIosIcon style={{ color: darkerBlue }} className="text-5xl" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const SearchedStudent = () => {
  return (
    <Box sx={{ display: 'flex', backgroundColor: white }}>
      <ResponsiveDrawer />
      <Box component="main" sx={{ flexGrow: 1, p: 3, backgroundColor: white }}>
        <Toolbar />
        <Back route="/dashboard" />
        <Content />
      </Box>
    </Box>
  );
};

export default SearchedStudent;
