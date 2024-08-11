import React, { useEffect, useState } from 'react';
import { Modal, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Paper, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
import { url } from '../util/url';
import moment from 'moment';

const PaymentHistory = ({ open, onClose, id }) => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    if (id) {
      axios
        .get(`${url}/getPaymentHistory`, { params: { id } })
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
      <Box sx={{ width: '80%', margin: 'auto', marginTop: '5%', backgroundColor: 'white', padding: 2 }}>
        <IconButton
          onClick={onClose}
          sx={{ position: 'absolute', right: 16, top: 16 }}
        >
          <CloseIcon />
        </IconButton>
        <Typography id="payment-history-title" variant="h6" component="h2">
          Payment History
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Payer Name</TableCell>
                <TableCell>Phone Number</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Amount Paid</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {payments.map((payment, index) => (
                <TableRow key={index}>
                  <TableCell>{payment.payerName}</TableCell>
                  <TableCell>{payment.phoneNumber}</TableCell>
                  <TableCell>{moment(payment.date).format("MMMM Do YYYY")}</TableCell>
                  <TableCell>{payment.amountPaid}</TableCell>
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
