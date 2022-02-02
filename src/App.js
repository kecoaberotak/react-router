import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Card from './components/Card';

// Ini pakai react-router-dom version 6, jadi Route harus didalam Routes
// di versi 6, atribut component diganti element
// value dari element syntax nya seperti ini {<nama.js/>}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          {/* untuk membuka halaman sesuai atau unik berdasarkan user */}
          <Route path='/card/:user' element={<Card/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

// install React Router
// yarn add react-router-dom
// npm install react-router-dom
