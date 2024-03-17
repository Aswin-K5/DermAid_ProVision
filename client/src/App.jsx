import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Scan from './components/Scan';
import Derm from './components/Derm';
import Navbar from './components/Navbar';
import './App.css'

const App = () => {
  return (
    <> 
    <BrowserRouter>
        <Routes>
            <Route path = '/' element = {<Home />} />
            <Route path = '/Scan' element = {<Scan />} />
            <Route path = '/About' element = {<About />} />
            <Route path = '/Derm' element = {<Derm />} />
        </Routes>
    </BrowserRouter>
    {/* <Home /> */}
    </>
  );
};

export default App;