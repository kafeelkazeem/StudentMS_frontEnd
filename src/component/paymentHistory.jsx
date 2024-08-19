import React, { useEffect, useState } from 'react';
import { Modal, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Paper, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
import { url } from '../util/url';
import moment from 'moment';
import { darkBlue, white } from '../util/colors';
import { NigeriaNaira } from '../util/helper';

const PaymentHistory = ({ open, onClose, id }) => {
  const [payments, setPayments] = useState([]);
  const token = localStorage.getItem('token')
  useEffect(() => {
    if (id) {
      axios
        .get(`${url}/getPaymentHistory`, { 
          params: { id },
          headers : {
            'Authorization': `${token}`,
          }, 
        })
        .then(res => setPayments(res.data))
        .catch(err => console.log(err));
    }
  }, [id]);

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="payment-history-title"
      aria-describedby="payment-history-description"
    >
      <Box sx={{ width: '80%', margin: 'auto', marginTop: '5%', backgroundColor: white, padding: 2 }}>
        <IconButton
          onClick={onClose}
          sx={{ position: 'absolute', right: 16, top: 16 }}
        >
          <CloseIcon />
        </IconButton>
        <h1 className='text-center text-3xl font-[600] tracking-wide mb-3'>Payment History</h1>
        <TableContainer component={Paper}>
          <Table>
            <TableHead sx={{backgroundColor: darkBlue}}>
              <TableRow>
                <TableCell sx={{color: white}}>Payer Name</TableCell>
                <TableCell sx={{color: white}}>Phone Number</TableCell>
                <TableCell sx={{color: white}}>Date</TableCell>
                <TableCell sx={{color: white}}>Amount Paid</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {payments.map((payment, index) => (
                <TableRow key={index}>
                  <TableCell>{payment.payerName}</TableCell>
                  <TableCell>{payment.phoneNumber}</TableCell>
                  <TableCell>{moment(payment.date).format("MMMM Do YYYY")}</TableCell>
                  <TableCell>{NigeriaNaira.format(payment.amountPaid)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Modal>
  );
};

export default PaymentHistory;
