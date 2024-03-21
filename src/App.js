import React from 'react';
import './App.css';
import ResponsiveDrawer from './component/Drawer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Dash_board from './pages/dashboard';
import Primary1 from './pages/primary1';
function App() {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Dash_board />} />
            <Route path='/primary1' element={<Primary1 />} />
          </Routes>
        </BrowserRouter>
      </>
  );
}

export default App;
