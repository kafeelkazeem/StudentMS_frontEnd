import React, { useState, useEffect } from 'react';
import ResponsiveDrawer from '../component/Drawer';
import { darkBlue, darkerBlue, lightBlue, white } from '../util/colors';
import Back from '../component/buttons/BackButton';
import { Box, Toolbar, TextField, Button, Typography, IconButton, InputAdornment } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import axios from 'axios';
import { url } from '../util/url';
import SuccessAlert3 from '../component/messageBox/success';

const Content = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const token = localStorage.getItem('token');

  const handlePasswordChange = async () => {
    setLoading(true); // Start loading
    try {
      if (newPassword !== confirmPassword) {
        setError("New passwords don't match!");
        setLoading(false); // Stop loading
        return;
      }
      await axios.post(
        `${url}/changePassword`,
        {
          currentPassword: currentPassword,
          newPassword: newPassword,
        },
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );
      setError('');
      setSuccess(true);
    } catch (error) {
      setError('An error occurred');
    } finally {
      setLoading(false); // Stop loading regardless of success or error
    }
  };

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        setSuccess(false);
      }, 5000); // 3 seconds
      return () => clearTimeout(timer);
    }
  }, [success]);

  const handleClickShowPassword = (field) => {
    setShowPassword((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  return (
    <>
      {/* Center the success message box horizontally */}
      <div className="w-full flex justify-center absolute -left-2 top-8">
        {success && <SuccessAlert3 title='You have successfully changed your password' />}
      </div>
      <div className="w-full h-fit mt-24 flex flex-col items-center">
        <Typography variant="h4" component="h1" gutterBottom>
          Change Password
        </Typography>
        <Box component="form" sx={{ width: '100%', maxWidth: 500 }}>
          <TextField
            label="Current Password"
            variant="outlined"
            type={showPassword.current ? 'text' : 'password'}
            fullWidth
            margin="normal"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => handleClickShowPassword('current')}
                    edge="end"
                  >
                    {showPassword.current ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            label="New Password"
            variant="outlined"
            type={showPassword.new ? 'text' : 'password'}
            fullWidth
            margin="normal"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => handleClickShowPassword('new')}
                    edge="end"
                  >
                    {showPassword.new ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            label="Confirm New Password"
            variant="outlined"
            type={showPassword.confirm ? 'text' : 'password'}
            fullWidth
            margin="normal"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => handleClickShowPassword('confirm')}
                    edge="end"
                  >
                    {showPassword.confirm ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          {error && <Typography color="error">{error}</Typography>}
          <Button
            variant="contained"
            fullWidth
            sx={{ mt: 2, backgroundColor: darkBlue, color: 'white', '&:hover': { backgroundColor: '#3b5b8c' } }}
            onClick={handlePasswordChange}
            disabled={loading} // Disable button when loading
          >
            {loading ? 'Changing...' : 'Change Password'}
          </Button>
        </Box>
      </div>
    </>
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
