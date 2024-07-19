import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import '../../assets/css/loading.css'

const Loading = () => {
  return (
    <div className="loading-overlay">
      <CircularProgress />
    </div>
  );
};

export default Loading;