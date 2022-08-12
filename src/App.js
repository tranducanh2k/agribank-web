import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import AccountBalance from './pages/account-balance/AccountBalance';
import Banking from './pages/banking/Banking';
import CardService from './pages/card-service/CardService';
import Help from './pages/help/Help';
import Homepage from './pages/homepage/Homepage';
import Login from './pages/login/Login';
import Location from './pages/map/Location';
import Notification from './pages/noti/Notification';
import Signup from './pages/signup/Signup';
import Transfer from './pages/transfer/Transfer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/login' />
          <Route exact path='/signup' />
          <Route path='*' element={<Header />} />
        </Routes>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/help' element={<Help />} />
          <Route path='/location' element={<Location />} />
          <Route path='/account-balance' element={<AccountBalance />} />
          <Route path='/card-service' element={<CardService />} />
          <Route path='/transfer' element={<Transfer />} />
          <Route path='/banking' element={<Banking />} />
          <Route path='/notification' element={<Notification />} />
        </Routes>
        <Routes>
          <Route exact path='/login' />
          <Route exact path='/signup' />
          <Route path='*' element={<Footer />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer autoClose={2000} />
    </div>
  );
}

export default App;
