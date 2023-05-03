import React from 'react';
import { Outlet } from 'react-router-dom';
import Toolbar from './components/Toolbar';

function App() {
  return (   
    <div className='App'>
      <Toolbar />
      <Outlet />
    </div>
  );
}


export default App;
