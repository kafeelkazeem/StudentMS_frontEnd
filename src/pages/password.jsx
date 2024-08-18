import React, { useState } from 'react';
import ResponsiveDrawer from '../component/Drawer';
import { white } from '../util/colors';
import Back from '../component/buttons/BackButton';
import { Box, Toolbar, TextField, Button, Typography } from '@mui/material';
import axios from 'axios';
import { url } from '../util/url';

const Content = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const token = localStorage.getItem('token')

  const handlePasswordChange = async () => {
    try {
        if (newPassword !== confirmPassword) {
            setError("New passwords don't match!");
            return;
          }
          await axios.post(`${url}/changePassword`, {
            currentPassword: currentPassword,
            newPassword: newPassword,
          },{
            headers: {
                Authorization: `${token}`,
            },
          }
        )
          setError('');
          alert('Password changed successfully!');
    } catch (error) {
        setError(error)
        alert(error)
    }
  };

  return (
    <div className="w-full h-fit mt-20 flex flex-col items-center">
      <Typography variant="h4" component="h1" gutterBottom>
        Change Password
      </Typography>
      <Box component="form" sx={{ width: '100%', maxWidth: 500 }}>
        <TextField
          label="Current Password"
          variant="outlined"
          type="password"
          fullWidth
          margin="normal"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
        />
        <TextField
          label="New Password"
          variant="outlined"
          type="password"
          fullWidth
          margin="normal"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <TextField
          label="Confirm New Password"
          variant="outlined"
          type="password"
          fullWidth
          margin="normal"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {error && <Typography color="error">{error}</Typography>}
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
          onClick={handlePasswordChange}
        >
          Change Password
        </Button>
      </Box>
    </div>
  );
};

const Password = () => {
  return (
    <Box sx={{ display: 'flex', overflowX: 'hidden', backgroundColor: white }}>
      <ResponsiveDrawer />
      <Box component="main" sx={{ flexGrow: 1, p: 3, maxWidth: '100%' }}>
        <Toolbar />
        <Back route={'/settings'} />
        <Content />
      </Box>
    </Box>
  );
};

export default Password;
