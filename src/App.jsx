import React, { Fragment } from 'react'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import NotFound from './pages/NotFound/NotFound';
import ListCats from './pages/ListCats/ListCats';
import CatById from './pages/CatById/CatById';
import AddCat from 'pages/AddCat/AddCat';
import Login from 'pages/Login/Login';
import PrivateRoute from 'services/PrivateRoute';
export default function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
          <Route path="/cats" element={<ListCats />}></Route>
          <Route path="/cats/:id" element={<CatById />}></Route>
          <Route path="/login" element={<Login />}></Route>

          <Route exact path='/cats/new' element={<PrivateRoute/>}>
                <Route exact path="/cats/new" element={<AddCat />} />
          </Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Fragment>
    </Router>
  )
}