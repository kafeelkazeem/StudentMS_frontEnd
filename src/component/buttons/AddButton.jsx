import * as React from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import AddStudentForm from '../form/addStudent';
import { useNavigate } from 'react-router-dom';

export default function AddButton() {
  const navigate = useNavigate()
  const [openAddStudentModal, setOpenAddStudentModal] = React.useState(false)


  const handleCloseAddStudentModal = () =>{
    setOpenAddStudentModal(false)
  }

  const handleOpenStudentModal = () =>{
    // setOpenAddStudentModal(true)
    navigate('/addmissionForm')
  }

  return (
    <>
      <Fab color="primary" size='large' aria-label="add" onClick={handleOpenStudentModal}>
        <AddIcon />
      </Fab>
      {/* <AddStudentForm open={openAddStudentModal} onClose={handleCloseAddStudentModal} /> */}
    </>
  );
}
