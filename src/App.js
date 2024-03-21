import React from 'react';
import './App.css';
import ResponsiveDrawer from './component/Drawer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Dash_board from './pages/dashboard';
function App() {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Dash_board />} />
          </Routes>
        </BrowserRouter>
      </>
  );
}

export default App;
