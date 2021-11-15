import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import UserProvider from './context/users/Provider';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>ROUTING Hello world</h1>
        <Link to='/' >Home</Link> --- 
        <Link to='/about'>About</Link> ---
        <Link to='/products'>Products</Link>
        <hr />
        <UserProvider>
          <Routes>
            <Route path='/' exact element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/products' element={<Products/>} />
          </Routes>
        </UserProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
