import React from 'react';
import logo from './logo.svg';
import './App.css';
import Students from '../src/components/Student'
import Topbar from './components/Topbar';


const App = () => {
  return(
<div className="container">

  <Topbar />
    <div>
      Hello Worlds
      <Students />
      </div>
      </div>
  );
}

export default App;
