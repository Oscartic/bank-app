import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserProvider from './context/users/Provider';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Menu from './ui/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>ROUTING Hello world</h1>
        <Menu />
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
