import React, { useEffect } from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Dash_board from './pages/dashboard';
import Primary1 from './pages/classes/primary/primary1';
import Primary2 from './pages/classes/primary/primary2';
import Primary3 from './pages/classes/primary/primary3';
import Primary4 from './pages/classes/primary/primary4';
import Primary5 from './pages/classes/primary/primary5';
import Profile from './pages/profile';
import SignIn from './pages/signIn';
import PrivateRoute from './component/privateRoute';
import AddmissionForm from './pages/addmissionForm';
import Settings from './pages/settings';
import SchoolFees from './pages/schoolFees';
import PlayGroup from './pages/classes/nursery/playGroup';
import PreNursery from './pages/classes/nursery/preNursery';
import Nursery1 from './pages/classes/nursery/nursery1';
import Nursery2 from './pages/classes/nursery/nursery2';
import Jss1 from './pages/classes/secondary/jss1';
import Jss2 from './pages/classes/secondary/jss2';
import Jss3 from './pages/classes/secondary/jss3';
import Sss1 from './pages/classes/secondary/sss1';
import Sss2 from './pages/classes/secondary/sss2';
import Sss3 from './pages/classes/secondary/sss3';
import Password from './pages/password';
import SearchedStudent from './pages/searchedStudent';

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
            <Route path='/playgroup' element={<PrivateRoute> <PlayGroup /> </PrivateRoute>} />
            <Route path='/prenursery' element={<PrivateRoute> <PreNursery /> </PrivateRoute>} />
            <Route path='/nursery1' element={<PrivateRoute> <Nursery1 /> </PrivateRoute>} />
            <Route path='/nursery2' element={<PrivateRoute> <Nursery2 /> </PrivateRoute>} />
            <Route path='/primary1' element={<PrivateRoute> <Primary1 /> </PrivateRoute>} />
            <Route path='/primary2' element={<PrivateRoute> <Primary2 /> </PrivateRoute>} />
            <Route path='/primary3' element={<PrivateRoute> <Primary3 /> </PrivateRoute>} />
            <Route path='/primary4' element={<PrivateRoute> <Primary4 /> </PrivateRoute>} />
            <Route path='/primary5' element={<PrivateRoute> <Primary5 /> </PrivateRoute>} />
            <Route path='/jss1' element={<PrivateRoute> <Jss1 /> </PrivateRoute>} />
            <Route path='/jss2' element={<PrivateRoute> <Jss2 /> </PrivateRoute>} />
            <Route path='/jss3' element={<PrivateRoute> <Jss3 /> </PrivateRoute>} />
            <Route path='/sss1' element={<PrivateRoute> <Sss1 /> </PrivateRoute>} />
            <Route path='/sss2' element={<PrivateRoute> <Sss2 /> </PrivateRoute>} />
            <Route path='/sss3' element={<PrivateRoute> <Sss3 /> </PrivateRoute>} />
            <Route path='/addmissionForm' element={<PrivateRoute> <AddmissionForm /> </PrivateRoute>} />
            <Route path='/:cls/profile/:id' element={<PrivateRoute> <Profile /> </PrivateRoute>} />
            <Route path='/settings' element={<PrivateRoute> <Settings /> </PrivateRoute>} />
            <Route path='/settings/schoolFees' element={<PrivateRoute> <SchoolFees /></PrivateRoute>} />
            <Route path='/settings/changePassword' element={<PrivateRoute> <Password /></PrivateRoute>} />
            <Route path='/searchResult' element={<PrivateRoute><SearchedStudent /></PrivateRoute>} />
          </Routes>
        </BrowserRouter>
      </>
  );
}

export default App;
