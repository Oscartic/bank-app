import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserState from '../context/Users/UserState';
import { Nav, Navbar, Container } from 'react-bootstrap';
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
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">BadBank</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/create-account">Create Account</Nav.Link>
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link href="/deposit">Deposit</Nav.Link>
                    <Nav.Link href="/withdraw">Withdraw</Nav.Link>
                    <Nav.Link href="/balance">Balance</Nav.Link>
                    <Nav.Link href="/all-data">All Data</Nav.Link>
                </Nav>
                </Container>
            </Navbar>

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