import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import { Typography, Divider } from '@mui/material';

const data = [
  {
    item: 'Date of Birth',
    value: '14/5/2010'
  },
  {
    item: 'Age',
    value: '14'
  },
  {
    item: 'Gender',
    value: 'Female'
  },
  {
    item: 'Parent/Gurdian Name',
    value: 'Robert Stark'
  },
  {
    item: 'Phone Number',
    value: '070123456789'
  },
  {
    item: 'Address',
    value: 'Winterfell'
  },
  {
    item: 'Date Enrolled',
    value: '13/7/2020'
  },
]

export default function MyList() {
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
