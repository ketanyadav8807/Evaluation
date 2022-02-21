import logo from './logo.svg';
import './App.css';
import { Register } from './components/Register';
import { useState } from 'react';
import {Routes , Route, Outlet} from "react-router-dom"
import { Dashboard } from './dashboard/Dashboard';

function App() {
  const [isRegister, setIsRegister] = useState(false);
  return (
    <div className="App">
      <Register setIsRegister={setIsRegister} />
      <Routes>
      {isRegister ? (<Route path='/*' element={<Dashboard />} />): (<Route path='' element={ <Register/> }/>)}  
      </Routes>
    </div>
  );
}

export default App;
