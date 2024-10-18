import React from 'react'
import { Link } from 'react-router-dom'
import "../App.css"

function Header() {
  return (
    <div className='header'>
        <p>Header</p>
        <div>
            <Link to="/">Signup</Link>
            <Link to="/profile">Profile</Link>
        </div>
    </div>
  )
}

export default Header