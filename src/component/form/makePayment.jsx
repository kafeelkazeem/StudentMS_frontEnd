import React, { useEffect, useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Stack, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import axios from 'axios';
import { url } from '../../util/url';

const MakePayment = ({ open, onClose, studentId }) => {
    const [payerName, setPayerName] = useState(null)
    const [phoneNumber, setPhoneNumber] = useState(null)
    const [date, setDate] = useState(null)
    const [amountPaid, setAmountPaid] = useState(null)
    
    const handleSubmit = () =>{
        axios.post(`${url}/makePayment`, {
            payerName: payerName,
            phoneNumber: phoneNumber,
            date: date,
            amountPaid: amountPaid,
            paidTo: studentId,
        })
        .then(res =>{
            onClose()
            alert('Paid')
        })
        .catch(err => console.log(err))
    }

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={{
        position: 'absolute',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
      }}>
        <Typography sx={{textAlign: 'center'}} variant='h4'>Make Payment</Typography>
        <FormControl  fullWidth variant="standard">
          <Stack mt={2} spacing={2}>
            <TextField
              id="payerName"
              name="payerName"
              label="Payer Name"
              value= {payerName}
              onChange={(e) => setPayerName(e.target.value)}
            />
            <TextField
              id="PhoneNumber"
              name="PhoneNumber"
              label="Phone Number"
              value= {phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <TextField
                id="date"
                name="date"
                label="Date"
                type="date"
                InputLabelProps={{ shrink: true }} // Shrink label on focus
                value= {date}
                onChange={(e) => setDate(e.target.value)}
            />
            <TextField
              id="Amount"
              name="Amount"
              label="Amount Paid"
              type='number'
              value= {amountPaid}
              onChange={(e) => setAmountPaid(e.target.value)}
            />
            <Button onClick={handleSubmit} variant='contained'>Make Payment</Button>
          </Stack>
        </FormControl>
      </Box>
    </Modal>
  );
};

export default MakePayment;
