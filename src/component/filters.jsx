import * as React from 'react';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Paper } from '@mui/material';
import { green, orange, red } from '@mui/material/colors';


const Item = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
}));

export default function Filters() {
    return (
      <Stack spacing={5} direction="row" sx={{margin: '0px auto'}}>
        <Item sx={{color: green[500], borderColor: green[500]}} size='large' variant="outlined">Paid</Item>
        <Item sx={{color: orange[500], borderColor: orange[500]}} size='large' variant="outlined">Balance</Item>
        <Item sx={{color: red[500], borderColor: red[500]}} size='large' variant="outlined">Not paid</Item>
      </Stack>
    );
  }