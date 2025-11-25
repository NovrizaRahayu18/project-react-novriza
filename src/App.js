import './App.css';
import Home from './komponen/Home'
import Geogrid from './komponen/Geogrid';
import Geomembrane from './komponen/Geomembrane';
import Kontak from './komponen/Kontak'
import { Routes, Route } from 'react-router-dom';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/geogrid' element={<Geogrid />} />
          <Route path='/geogrid' element={<Geogrid />} />
          <Route path='/geomembrane' element={<Geomembrane />} />
          <Route path='/kontak-kami' element={<Kontak />} />
        </Routes>
    </Fragment>
  )
}

export default App;
