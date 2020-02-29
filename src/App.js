import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Students from '../src/components/Student'
import Topbar from './components/Topbar';


const App = () => {
  return (

    <div>
      <Topbar />
      <div>
      <Students />
      </div>
    </div>

  );
}

export default App;
