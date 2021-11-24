import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserState from '../context/Users/UserState';
import { Nav } from 'react-bootstrap';
import Home from '../pages/Home';
import AllData from '../pages/AllData';
import Products from '../pages/AllData';
import CreateAccount from '../pages/CreateAccount';
import Login from '../pages/Login';
import Deposit from '../pages/Deposit';
import Withdraw from '../pages/Withdraw';
import Balance from '../pages/Balance';

const Menu = () => {
    return (
        <>
        <Nav>
            <Nav.Item>
                <Nav.Link href="/">BadBank</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/create-account">Create Account</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/login">Login</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/deposit">Deposit</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/withdraw">Withdraw</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/balance">Balance</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/all-data">All Data</Nav.Link>
            </Nav.Item>
        </Nav>
        <BrowserRouter>
            <UserState>
                <Routes>
                    <Route path='/' exact element={<Home/>} />
                    <Route path='/all-data' element={<AllData/>} />
                    <Route path='/products' element={<Products/>} />
                    <Route path='/create-account' element={<CreateAccount/>} />
                    <Route path='/login' element={<Login/>} />
                    <Route path='/deposit' element={<Deposit/>} />
                    <Route path='/withdraw' element={<Withdraw/>} />
                    <Route path='/Balance' element={<Balance/>} />
                </Routes>
            </UserState>
        </BrowserRouter>
        </>
  ); 
}
    

export default Menu;