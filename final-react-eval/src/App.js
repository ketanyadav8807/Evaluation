import { useState } from 'react';
import './App.css';
import {Login} from "./components/Login"
import {Users} from "./components/Users"
import {Routes , Route} from "react-router-dom"
import { NotFoundPage } from './components/NotFoundPage';
import { useEffect } from 'react';
function App() {
  const [setName, setSetName] = useState("")
  useEffect(() => {
    fetch("http://localhost:3000/users")
    .then((res)=> res.json())
    .then((res)=> setSetName(res[0].name))
  }, [])
  

  const [login, setLogin] = useState(false);
  return (
    <div className="App">

      <div className="Navbar">
        <h1 className='h1'>{setName ? setName : "Navbar"}</h1>
        <div className='NavTwo'>
          <h1 className='InsideNavTwo h1'>Login</h1>
          <h1 className='h1'>Users</h1>
        </div>
      </div>

    <Routes>
      {login ? (<Route path='/*' element={<Users />} />): (<Route path='' element={ <Login setLogin={setLogin}/> }/>)}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
      
    </div>
  );
}

export default App;
