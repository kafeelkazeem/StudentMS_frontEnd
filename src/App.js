import React, { useEffect } from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Dash_board from './pages/dashboard';
import Primary1 from './pages/primary1';
import Primary2 from './pages/primary2';
import Primary3 from './pages/primary3';
import Primary4 from './pages/primary4';
import Primary5 from './pages/primary5';
import Profile from './pages/profile';
import SignIn from './pages/signIn';
import PrivateRoute from './component/privateRoute';
import AddmissionForm from './pages/addmissionForm';
import Settings from './pages/settings';
import SchoolFees from './pages/schoolFees';

function App() {
    useEffect(() => {
    // Function to clear token on tab/window close
      const handleBeforeUnload = () => {
        localStorage.removeItem('token');
      };

    // event listener for beforeunload
      window.addEventListener('beforeunload', handleBeforeUnload);

    // Cleanup function to remove the event listener
      return () => {
         window.removeEventListener('beforeunload', handleBeforeUnload);
      };
    }, []);
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<SignIn />} />
            <Route path='/dashboard' element={<PrivateRoute> <Dash_board /> </PrivateRoute>} />
            <Route path='/primary1' element={<PrivateRoute> <Primary1 /> </PrivateRoute>} />
            <Route path='/primary2' element={<PrivateRoute> <Primary2 /> </PrivateRoute>} />
            <Route path='/primary3' element={<PrivateRoute> <Primary3 /> </PrivateRoute>} />
            <Route path='/primary4' element={<PrivateRoute> <Primary4 /> </PrivateRoute>} />
            <Route path='/primary5' element={<PrivateRoute> <Primary5 /> </PrivateRoute>} />
            <Route path='/addmissionForm' element={<PrivateRoute> <AddmissionForm /> </PrivateRoute>} />
            <Route path='/:cls/profile/:id' element={<PrivateRoute> <Profile /> </PrivateRoute>} />
            <Route path='/settings' element={<PrivateRoute> <Settings /> </PrivateRoute>} />
            <Route path='/settings/schoolFees' element={<PrivateRoute> <SchoolFees /></PrivateRoute>} />
          </Routes>
        </BrowserRouter>
      </>
  );
}

export default App;
