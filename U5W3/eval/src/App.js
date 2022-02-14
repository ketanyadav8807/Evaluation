import React , {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { ProductInput } from './component/ProductInput';
import { Product } from './component/Product';

function App() {
  const [first, setFirst] = useState();
  return (
    <div className="App">
      <ProductInput />
      <Product first={first} setFirst={setFirst}/>
    </div>
  );
}

export default App;
