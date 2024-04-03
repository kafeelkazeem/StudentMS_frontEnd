import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import { Typography, Divider } from '@mui/material';

export default function MyList() {
  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'inherit' }}
      subheader={<ListSubheader sx={{bgcolor: 'inherit'}}><Typography variant='h4'>Personal Information</Typography></ListSubheader>}
    >
      <Divider />
      <ListItem>
        <ListItemText id="switch-list-label-wifi" primary={<Typography fontWeight='bold' variant='body2'>Full Name:</Typography>} />
        <ListItemText id='val' primary={<Typography variant='body2'>Arya Stack</Typography>} />
      </ListItem>
      <Divider component='li' />
      <ListItem>
        <ListItemText id="switch-list-label-wifi" primary={<Typography fontWeight='bold' variant='body2'>Age:</Typography>} />
        <ListItemText id='val' primary={<Typography variant='body2'>14</Typography>} />
      </ListItem>
      <Divider component='li' />
      <ListItem>
        <ListItemText id="switch-list-label-wifi" primary={<Typography fontWeight='bold' variant='body2'>Gender:</Typography>} />
        <ListItemText id='val' primary={<Typography variant='body2'>Female</Typography>} />
      </ListItem>
      <Divider component='li' />
      <ListItem>
        <ListItemText id="switch-list-label-wifi" primary={<Typography fontWeight='bold' variant='body2'>Parent/Gurdian Name:</Typography>} />
        <ListItemText id='val' primary={<Typography variant='body2'>Robert Stack</Typography>} />
      </ListItem>
      <Divider component='li' />
      <ListItem>
        <ListItemText id="switch-list-label-wifi" primary={<Typography fontWeight='bold' variant='body2'>Phone Number:</Typography>} />
        <ListItemText id='val' primary={<Typography variant='body2'>070123456789</Typography>} />
      </ListItem>
      <Divider component='li' />
      <ListItem>
        <ListItemText id="switch-list-label-wifi" primary={<Typography fontWeight='bold' variant='body2'>Address:</Typography>} />
        <ListItemText id='val' primary={<Typography variant='body2'>Winterfell</Typography>} />
      </ListItem>
      <Divider component='li' />
      <ListItem>
        <ListItemText id="switch-list-label-wifi" primary={<Typography fontWeight='bold' variant='body2'>Date Enrolled:</Typography>} />
        <ListItemText id='val' primary={<Typography variant='body2'>12/3/2020</Typography>} />
      </ListItem>
    </List>
  );
}
