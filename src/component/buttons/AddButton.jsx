import * as React from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import AddStudentForm from '../form/addStudent';

export default function AddButton() {
  const [openAddStudentModal, setOpenAddStudentModal] = React.useState(false)


  const handleCloseAddStudentModal = () =>{
    setOpenAddStudentModal(false)
  }

  const handleOpenStudentModal = () =>{
    setOpenAddStudentModal(true)
  }

  return (
    <>
      <Fab color="primary" size='large' aria-label="add" onClick={handleOpenStudentModal}>
        <AddIcon />
      </Fab>
      <AddStudentForm open={openAddStudentModal} onClose={handleCloseAddStudentModal} />
    </>
  );
}
