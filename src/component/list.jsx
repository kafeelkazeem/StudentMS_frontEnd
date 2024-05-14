import React, {useEffect, useState} from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import { Typography, Divider } from '@mui/material';


export default function MyList({obj}) {

  const [data, setData] = useState([])

  console.log(obj)

  useEffect(() =>{
    setData([
      {
        item: 'Age',
        value: obj.age
      },
      {
        item: 'Gender',
        value: obj.gender
      },
      {
        item: 'Parent/Gurdian Name',
        value: obj.parentName
      },
      {
        item: 'Phone Number',
        value: obj.number
      },
      {
        item: 'Address',
        value: obj.address
      },
    ])
  }, [])

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'inherit' }}
      subheader={<ListSubheader sx={{bgcolor: 'inherit'}}><Typography variant='h4'>Personal Information</Typography></ListSubheader>}
    >
      <Divider />
      <ListItem>
        <ListItemText id="switch-list-label-wifi" primary={<Typography fontWeight='bold' variant='body2'>Full Name:</Typography>} />
        <ListItemText id='val' primary={<Typography variant='body2'>Arya Stark</Typography>} />
      </ListItem>
      {data.map((i, key) => (
        <>
        <Divider component='li' />
        <ListItem key={key}>
          <ListItemText id="switch-list-label-wifi" primary={<Typography fontWeight='bold' variant='body2'>{i.item}:</Typography>} />
          <ListItemText id='val' primary={<Typography variant='body2'>{i.value}</Typography>} />
        </ListItem>
        </>
      ))}
    </List>
  );
}
