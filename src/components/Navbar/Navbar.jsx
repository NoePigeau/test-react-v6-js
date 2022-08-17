import React from 'react'
import './Navbar.scss'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='navbar'>
        <ul className='container'>
          <li><Link className='link head' to="/">Home</Link></li>
          <li><Link className='link head' to="/cats">List Cats</Link></li>
          <li><Link className='link head' to="/cats/new">Add Cat</Link></li>
          <li><Link className='link head' to="/login">Login</Link></li>
        </ul>
    </div>
  )
}


