import * as React from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import AddStudentForm from './addStudent';

export default function AddButton() {
  return (
    <>
      <Fab color="primary" size='large' aria-label="add">
        <AddIcon />
      </Fab>
    </>
  );
}
