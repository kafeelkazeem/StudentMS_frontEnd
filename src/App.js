import React from 'react';
import './App.css';
import ResponsiveDrawer from './component/Drawer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Dash_board from './pages/dashboard';
import Primary1 from './pages/primary1';
import Primary2 from './pages/primary2';
import Primary3 from './pages/primary3';
import Primary4 from './pages/primary4';
import Primary5 from './pages/primary5';
import Profile from './pages/profile';
function App() {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Dash_board />} />
            <Route path='/primary1' element={<Primary1 />} />
            <Route path='/primary2' element={<Primary2 />} />
            <Route path='/primary3' element={<Primary3 />} />
            <Route path='/primary4' element={<Primary4 />} />
            <Route path='/primary5' element={<Primary5 />} />
            <Route path='/:cls/:id' element={<Profile />} />
          </Routes>
        </BrowserRouter>
      </>
  );
}

export default App;
