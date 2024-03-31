import React from 'react';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const searchContainerStyle = {
  position: 'relative',
  border: '1px solid #ccc',
  borderRadius: '10px',
  backgroundColor: '#ffffff',
  '&:hover': {
    backgroundColor: '#ffffff',
  },
  marginLeft: 0,
  width: '100%',
};

const searchIconStyle = {
  padding: '10px',
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const inputRootStyle = {
  color: 'inherit',
};

const inputInputStyle = {
  padding: '10px 10px 10px 50px',
  transition: 'width 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
  width: '100%',
  color: 'inherit',
};

export default function SearchInput() {
  return (
    <div style={searchContainerStyle}>
      <div style={searchIconStyle}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder="Search…"
        style={inputInputStyle}
        inputProps={{ 'aria-label': 'search' }}
      />
    </div>
  );
}
