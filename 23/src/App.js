import './index.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect, useRef, useMemo } from 'react';
import { Header } from './Components/header';
import { Navigation } from './Components/navigation';

function App() {


  return (
    <div className='App'>
        <Header />
      <div className='app-content'>
        <Navigation/>
        <Routes>

        </Routes>
      </div>
    </div>
  );
}

export default App;
