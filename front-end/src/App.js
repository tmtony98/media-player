import './App.css';

import React from 'react'
import Home from './Pages/Home';
import Landingpage from './Pages/Landingpage';
import WatchHistory from './Pages/WatchHistory';
import { Route, Routes } from 'react-router-dom';
import Header from "./Components/Header";
import Footer from "./Components/Footer"


function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Landingpage/>} />
        <Route path='/home' element={<Home/>}/>
        <Route path='/watchhistory' element={<WatchHistory/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}
export default App